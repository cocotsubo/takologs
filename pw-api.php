<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '[]', true);
if (!is_array($data)) $data = $_POST;
$kind = (string)($data['kind'] ?? 'graphql');

function tako_http($url, $payload = null, $timeout = 25) {
  if (function_exists('curl_init')) {
    $ch = curl_init($url);
    $opts = [
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => $timeout,
      CURLOPT_USERAGENT => 'TakoLogs/21.0 (PsychonautWiki client)',
    ];
    if ($payload !== null) {
      $opts[CURLOPT_POST] = true;
      $opts[CURLOPT_HTTPHEADER] = ['Content-Type: application/json', 'Accept: application/json'];
      $opts[CURLOPT_POSTFIELDS] = $payload;
    }
    curl_setopt_array($ch, $opts);
    $body = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return [$body, $code];
  }
  $hdr = $payload !== null
    ? "Content-Type: application/json\r\nAccept: application/json\r\n"
    : "";
  $ctx = stream_context_create([
    'http' => [
      'method' => $payload !== null ? 'POST' : 'GET',
      'header' => $hdr,
      'content' => $payload ?? '',
      'timeout' => $timeout,
      'ignore_errors' => true,
    ],
  ]);
  $body = @file_get_contents($url, false, $ctx);
  $code = 502;
  if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
    $code = (int)$m[1];
  }
  return [$body, $code];
}

if ($kind === 'extract') {
  $title = trim((string)($data['title'] ?? ''));
  if ($title === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'missing']);
    exit;
  }
  $url = 'https://psychonautwiki.org/w/api.php?' . http_build_query([
    'action' => 'query',
    'prop' => 'extracts',
    'exintro' => '1',
    'explaintext' => '1',
    'redirects' => '1',
    'titles' => $title,
    'format' => 'json',
  ]);
  [$body, $code] = tako_http($url);
  if ($body === false) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'wiki']);
    exit;
  }
  $json = json_decode($body, true);
  $pages = $json['query']['pages'] ?? [];
  $page = is_array($pages) ? (array)reset($pages) : [];
  $extract = trim(preg_replace('/\s+/', ' ', (string)($page['extract'] ?? '')));
  echo json_encode(['ok' => true, 'extract' => $extract]);
  exit;
}

$query = (string)($data['query'] ?? '');
$variables = $data['variables'] ?? new stdClass();
if ($query === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'missing']);
  exit;
}
[$body, $code] = tako_http('https://api.psychonautwiki.org/', json_encode([
  'query' => $query,
  'variables' => $variables,
]));
if ($body === false) {
  http_response_code(502);
  echo json_encode(['error' => 'graphql']);
  exit;
}
http_response_code($code >= 200 && $code < 300 ? 200 : $code);
echo $body;

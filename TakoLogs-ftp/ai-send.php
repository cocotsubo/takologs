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
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['error' => 'bad json']);
  exit;
}
$builtin = getenv('XAI_API_KEY') ?: "xai-qKdSXme0klN7ZYAVUIAppcfBS6wNejIKTPTkw42ydoYZoiosSTImMqcbgJeA2kysjeo18r8itCqabcWk";
$key = trim((string)($data['apiKey'] ?? ''));
if ($key === '') $key = trim((string)$builtin);
$messages = $data['messages'] ?? [];
$asked = (string)($data['model'] ?? 'grok-3');
if ($key === '' || !is_array($messages) || count($messages) === 0) {
  http_response_code(400);
  echo json_encode(['error' => 'missing']);
  exit;
}
$hasImage = false;
foreach ($messages as $m) {
  $c = $m['content'] ?? '';
  if (is_array($c)) {
    foreach ($c as $part) {
      if (is_array($part) && (($part['type'] ?? '') === 'image_url')) {
        $hasImage = true;
        break;
      }
    }
  }
}
$models = [];
$preferred = $hasImage
  ? [$asked, 'grok-2-vision-1212', 'grok-4-0709', 'grok-4']
  : [$asked, 'grok-3', 'grok-2-1212', 'grok-3-mini', 'grok-4-0709', 'grok-4.5'];
foreach ($preferred as $m) {
  if ($m !== '' && !in_array($m, $models, true)) $models[] = $m;
}
$lastBody = '';
$lastCode = 502;
function tako_post($url, $payload, $key) {
  if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
      CURLOPT_POST => true,
      CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $key,
        'Content-Type: application/json',
      ],
      CURLOPT_POSTFIELDS => $payload,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT => 40,
      CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $body = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    return [$body, $code, $err];
  }
  $ctx = stream_context_create([
    'http' => [
      'method' => 'POST',
      'header' => "Authorization: Bearer $key\r\nContent-Type: application/json\r\n",
      'content' => $payload,
      'timeout' => 40,
      'ignore_errors' => true,
    ],
  ]);
  $body = @file_get_contents($url, false, $ctx);
  $code = 502;
  if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
    $code = (int)$m[1];
  }
  return [$body, $code, $body === false ? 'fopen' : ''];
}
foreach ($models as $model) {
  $payload = json_encode([
    'model' => $model,
    'temperature' => 0.7,
    'max_tokens' => 900,
    'messages' => $messages,
  ]);
  [$body, $code, $err] = tako_post('https://api.x.ai/v1/chat/completions', $payload, $key);
  if ($body === false) {
    $lastBody = json_encode(['error' => $err ?: 'curl']);
    $lastCode = 502;
    continue;
  }
  $lastBody = $body;
  $lastCode = $code;
  if ($code >= 200 && $code < 300) {
    echo $body;
    exit;
  }
}
http_response_code($lastCode >= 400 ? $lastCode : 502);
echo $lastBody !== '' ? $lastBody : json_encode(['error' => 'xai']);

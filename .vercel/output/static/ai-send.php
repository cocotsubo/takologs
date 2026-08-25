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
$models = [];
foreach ([$asked, 'grok-3', 'grok-2-1212', 'grok-3-mini', 'grok-4-0709', 'grok-4.5'] as $m) {
  if ($m !== '' && !in_array($m, $models, true)) $models[] = $m;
}
$lastBody = '';
$lastCode = 502;
foreach ($models as $model) {
  $payload = json_encode([
    'model' => $model,
    'temperature' => 0.7,
    'max_tokens' => 900,
    'messages' => $messages,
  ]);
  $ch = curl_init('https://api.x.ai/v1/chat/completions');
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
      'Authorization: Bearer ' . $key,
      'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 40,
  ]);
  $body = curl_exec($ch);
  $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $err = curl_error($ch);
  curl_close($ch);
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

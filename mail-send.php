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
  $data = $_POST;
}
$key = trim((string)(getenv('RESEND_API_KEY') ?: ''));
$from = trim((string)($data['from'] ?? 'TakoLogs <noreply@mail.takohelp.com>'));
$to = trim((string)($data['to'] ?? ''));
$subject = (string)($data['subject'] ?? '');
$html = (string)($data['html'] ?? '');
if ($key === '' || $to === '' || $html === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'missing']);
  exit;
}
$payload = json_encode([
  'from' => $from,
  'to' => [$to],
  'subject' => $subject,
  'html' => $html,
]);
$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $key,
    'Content-Type: application/json',
  ],
  CURLOPT_POSTFIELDS => $payload,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 20,
  CURLOPT_USERAGENT => 'TakoLogs/1.0',
]);
$body = curl_exec($ch);
$code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);
if ($body === false) {
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => $err ?: 'curl']);
  exit;
}
http_response_code($code >= 200 && $code < 300 ? 200 : $code);
echo $body;

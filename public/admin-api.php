<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$dir = __DIR__ . '/data';
if (!is_dir($dir)) @mkdir($dir, 0755, true);
$usersFile = $dir . '/users.json';
$visitsFile = $dir . '/visits.json';
$configFile = $dir . '/config.json';

function jread($file) {
  if (!is_file($file)) return [];
  $raw = file_get_contents($file);
  $d = json_decode($raw ?: '[]', true);
  return is_array($d) ? $d : [];
}
function jwrite($file, $data) {
  file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
}
function cfg() {
  global $configFile;
  $c = jread($configFile);
  return is_array($c) ? $c : [];
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '[]', true);
if (!is_array($data)) $data = $_POST;
$action = (string)($data['action'] ?? '');

if ($action === 'track') {
  $visits = jread($visitsFile);
  $visits[] = [
    't' => time() * 1000,
    'path' => substr((string)($data['path'] ?? '/'), 0, 200),
    'ref' => substr((string)($data['ref'] ?? ''), 0, 300),
    'vid' => substr((string)($data['vid'] ?? ''), 0, 80),
    'ua' => substr((string)($data['ua'] ?? ''), 0, 180),
  ];
  if (count($visits) > 20000) $visits = array_slice($visits, -15000);
  jwrite($visitsFile, $visits);
  echo json_encode(['ok' => true]);
  exit;
}

if ($action === 'signup') {
  $email = strtolower(trim((string)($data['email'] ?? '')));
  if (!str_contains($email, '@')) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
  }
  $users = jread($usersFile);
  $found = false;
  foreach ($users as &$u) {
    if (($u['email'] ?? '') === $email) {
      $u['name'] = (string)($data['name'] ?? $u['name'] ?? '');
      $u['newsletter'] = (bool)($data['newsletter'] ?? $u['newsletter'] ?? false);
      $u['lastLogin'] = (int)($data['lastLogin'] ?? $u['lastLogin'] ?? 0);
      $found = true;
      break;
    }
  }
  unset($u);
  if (!$found) {
    $users[] = [
      'id' => (string)($data['id'] ?? $email),
      'email' => $email,
      'name' => (string)($data['name'] ?? explode('@', $email)[0]),
      'newsletter' => (bool)($data['newsletter'] ?? false),
      'createdAt' => (int)($data['createdAt'] ?? (time() * 1000)),
      'lastLogin' => (int)($data['lastLogin'] ?? 0),
      'notes' => (string)($data['notes'] ?? ''),
      'banned' => (bool)($data['banned'] ?? false),
    ];
  }
  jwrite($usersFile, $users);
  echo json_encode(['ok' => true]);
  exit;
}

if ($action === 'setup') {
  $c = cfg();
  if (empty($c['hash']) && !empty($data['hash'])) {
    $c['hash'] = (string)$data['hash'];
    jwrite($configFile, $c);
  }
  echo json_encode(['ok' => true]);
  exit;
}

if ($action === 'save_seo' || $action === 'save_site') {
  $c = cfg();
  $key = $action === 'save_seo' ? 'seo' : 'site';
  $c[$key] = $data;
  jwrite($configFile, $c);
  echo json_encode(['ok' => true]);
  exit;
}

if ($action === 'users') {
  echo json_encode(['ok' => true, 'users' => jread($usersFile)]);
  exit;
}

if ($action === 'stats') {
  echo json_encode(['ok' => true, 'visits' => array_slice(jread($visitsFile), -4000)]);
  exit;
}

echo json_encode(['ok' => false, 'error' => 'unknown']);

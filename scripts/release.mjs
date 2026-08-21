#!/usr/bin/env node
/**
 * Bump TakoLogs (+0.1), changelog, zip FTP, branche, pull request, release GitHub.
 *
 *   node scripts/release.mjs --title "Liquid Glass" --notes "Flou des cartes" --notes "Navbar"
 *   node scripts/release.mjs --publish-current
 *   node scripts/release.mjs --bump-only --title "Fix" --notes "…"
 *
 * Env : GH_REPO (défaut cocotsubo/takologs), GH_TOKEN / gh auth.
 */
import { execFileSync, execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = process.env.GH_REPO || "cocotsubo/takologs";

function argList(name) {
  const out = [];
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === `--${name}` && process.argv[i + 1]) out.push(process.argv[++i]);
  }
  return out;
}
function flag(name) {
  return process.argv.includes(`--${name}`);
}
function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

export function parseVersion(v) {
  const m = String(v).trim().match(/^(\d+)\.(\d+)$/);
  if (!m) throw new Error(`Version invalide : ${v}`);
  return { major: Number(m[1]), minor: Number(m[2]) };
}

/** +0.1 → 20.6 → 20.7 ; 20.9 → 21.0 */
export function bumpVersion(v, step = 0.1) {
  const { major, minor } = parseVersion(v);
  const tenths = Math.round(step * 10);
  const next = minor + tenths;
  if (next >= 10) return `${major + Math.floor(next / 10)}.${next % 10}`;
  return `${major}.${next}`;
}

function readAppVersion() {
  const src = readFileSync(join(root, "src/lib/version.ts"), "utf8");
  const m = src.match(/APP_VERSION\s*=\s*"([^"]+)"/);
  if (!m) throw new Error("APP_VERSION introuvable");
  return m[1];
}

function ym(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function sh(cmd, opts = {}) {
  return execSync(cmd, { cwd: root, encoding: "utf8", stdio: opts.quiet ? "pipe" : "inherit", ...opts });
}
function gh(args) {
  return execFileSync("gh", args, { cwd: root, encoding: "utf8" }).trim();
}
function hasGh() {
  try {
    execFileSync("gh", ["auth", "status"], { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function writeVersion(v) {
  writeFileSync(join(root, "src/lib/version.ts"), `export const APP_VERSION = "${v}";\n`);
  writeFileSync(join(root, "VERSION"), `${v}\n`);
}

function insertChangelog({ v, date, title, items }) {
  const file = join(root, "src/lib/changelog.ts");
  let src = readFileSync(file, "utf8");
  if (src.includes(`v: "${v}"`)) return;
  const block = `  {
    v: ${JSON.stringify(v)},
    date: ${JSON.stringify(date)},
    title: ${JSON.stringify(title)},
    items: [
${items.map((i) => `      ${JSON.stringify(i)},`).join("\n")}
    ],
  },
`;
  const needle = "\n];\n";
  const idx = src.lastIndexOf(needle);
  if (idx < 0) throw new Error("changelog.ts : ]; introuvable");
  src = src.slice(0, idx) + "\n" + block + "];\n";
  writeFileSync(file, src);
}

function changelogMdEntry(ver) {
  const items = ver.items.map((i) => `- ${i}`).join("\n");
  return `### v${ver.v} — ${ver.title} (${ver.date})\n\n${items}\n`;
}

function prependChangelogMd(ver) {
  const file = join(root, "CHANGELOG.md");
  const entry = changelogMdEntry(ver);
  if (!existsSync(file)) {
    writeFileSync(file, `# Changelog TakoLogs\n\n${entry}\n`);
    return;
  }
  const cur = readFileSync(file, "utf8");
  if (cur.includes(`### v${ver.v} `) || cur.includes(`## v${ver.v} `)) return;
  const lines = cur.split("\n");
  const i = lines.findIndex((l) => l.startsWith("## ") || l.startsWith("### "));
  if (i >= 0) {
    lines.splice(i, 0, entry);
    writeFileSync(file, lines.join("\n"));
  } else {
    writeFileSync(file, cur.trimEnd() + "\n\n" + entry + "\n");
  }
}

function releaseNotesFile(ver, prNumber) {
  const dir = join(root, "releases");
  mkdirSync(dir, { recursive: true });
  const zip = `https://github.com/${REPO}/archive/refs/heads/release/v${ver.v}.zip`;
  const tag = `https://github.com/${REPO}/releases/tag/v${ver.v}`;
  const pr = prNumber ? `https://github.com/${REPO}/pull/${prNumber}` : "";
  const md = `# TakoLogs v${ver.v} — ${ver.title} (${ver.date})

${pr ? `Pull request : ${pr}\n` : ""}
## Correctifs et nouveautés

${ver.items.map((i) => `- ${i}`).join("\n")}

## Télécharger cette version

- **Code source (zip de la branche)** : ${zip}
- **Release GitHub** : ${tag}
- **Zip FTP** : pièce jointe \`TakoLogs.zip\` (décompresser, déposer sur le serveur)

Branche : \`release/v${ver.v}\`
`;
  const path = join(dir, `v${ver.v}.md`);
  writeFileSync(path, md);
  return path;
}

function packFtpZip() {
  const outDir = join(root, "TakoLogs-ftp");
  console.log("→ build FTP");
  sh("npx vite build --config vite.ftp.config.ts");
  const zipPath = join(root, "public", "TakoLogs.zip");
  mkdirSync(join(root, "public"), { recursive: true });
  const py = `
import zipfile
from pathlib import Path
root = Path(${JSON.stringify(outDir)})
out = Path(${JSON.stringify(zipPath)})
skip = {"TakoLogs.zip"}
with zipfile.ZipFile(out, "w", zipfile.ZIP_STORED) as z:
    for p in root.rglob("*"):
        if not p.is_file() or p.name in skip:
            continue
        z.write(p, Path("takologs") / p.relative_to(root))
print(out, out.stat().st_size)
`;
  execFileSync("python3", ["-c", py], { cwd: root, stdio: "inherit" });
  return zipPath;
}

function gitConfigured() {
  try {
    sh("git rev-parse --is-inside-work-tree", { quiet: true });
    return true;
  } catch {
    return false;
  }
}

function ensureGitUser() {
  try {
    sh("git config user.email", { quiet: true });
  } catch {
    sh('git config user.name "Cocotsubo"');
    sh('git config user.email "205740840+cocotsubo@users.noreply.github.com"');
  }
}

function publishGit(ver, zipPath) {
  if (!gitConfigured()) {
    console.warn("Pas de dépôt git — skip PR / release");
    return;
  }
  if (!hasGh()) {
    console.warn("gh non connecté — skip PR / release (fichiers locaux OK)");
    return;
  }
  ensureGitUser();
  const branch = `release/v${ver.v}`;
  const notesPath = releaseNotesFile(ver);
  try {
    sh("git checkout main", { quiet: true });
    sh("git pull origin main", { quiet: true });
  } catch {
    /* already on a branch */
  }
  sh(`git checkout -B ${branch}`);
  const toAdd = [
    "src/lib/version.ts",
    "src/lib/changelog.ts",
    "VERSION",
    "CHANGELOG.md",
    "README.md",
    "VERSIONS.md",
    "package.json",
    "scripts/release.mjs",
    ".github/workflows/release.yml",
    "releases",
  ].filter((f) => existsSync(join(root, f)));
  sh(`git add ${toAdd.join(" ")}`);
  const dirty = sh("git status --porcelain", { quiet: true, stdio: "pipe" }).trim();
  if (dirty) {
    sh(`git commit -m ${JSON.stringify(`release: v${ver.v} — ${ver.title}`)}`);
  }
  sh(`git push -u origin ${branch}`);

  let prUrl = "";
  let prNumber = "";
  try {
    const existing = gh([
      "pr",
      "list",
      "--repo",
      REPO,
      "--head",
      branch,
      "--json",
      "url,number",
    ]);
    const arr = JSON.parse(existing || "[]");
    if (arr[0]) {
      prUrl = arr[0].url;
      prNumber = String(arr[0].number);
    }
  } catch {
    /* none */
  }
  if (!prUrl) {
    const body = `Version **v${ver.v}** — ${ver.title} (${ver.date}).

### Correctifs
${ver.items.map((i) => `- ${i}`).join("\n")}

### Télécharger
- Zip de cette branche : https://github.com/${REPO}/archive/refs/heads/${branch}.zip
- Release : https://github.com/${REPO}/releases/tag/v${ver.v}
- FTP : \`TakoLogs.zip\` sur la release

Pour installer : décompresser, déposer le contenu sur le FTP (\`public_html\`).
`;
    prUrl = gh([
      "pr",
      "create",
      "--repo",
      REPO,
      "--base",
      "main",
      "--head",
      branch,
      "--title",
      `v${ver.v} — ${ver.title}`,
      "--body",
      body,
      "--label",
      "version",
    ]);
    prNumber = prUrl.trim().split("/").pop() || "";
  }
  console.log("PR", prUrl);

  releaseNotesFile(ver, prNumber);

  let releaseExists = false;
  try {
    gh(["release", "view", `v${ver.v}`, "--repo", REPO]);
    releaseExists = true;
  } catch {
    releaseExists = false;
  }
  const notesFile = join(root, "releases", `v${ver.v}.md`);
  if (!releaseExists) {
    const args = [
      "release",
      "create",
      `v${ver.v}`,
      "--repo",
      REPO,
      "--target",
      branch,
      "--title",
      `v${ver.v} — ${ver.title}`,
      "--notes-file",
      notesFile,
    ];
    if (zipPath && existsSync(zipPath)) args.push(zipPath);
    gh(args);
    console.log("Release", `https://github.com/${REPO}/releases/tag/v${ver.v}`);
  } else if (zipPath && existsSync(zipPath)) {
    try {
      gh(["release", "upload", `v${ver.v}`, zipPath, "--repo", REPO, "--clobber"]);
    } catch {
      /* already */
    }
    console.log("Release déjà là, zip mis à jour");
  }
  return { prUrl, branch };
}

function updateReadmeVersion(v) {
  const file = join(root, "README.md");
  if (!existsSync(file)) return;
  let t = readFileSync(file, "utf8");
  t = t.replace(/version \*\*\d+\.\d+\*\*/, `version **${v}**`);
  writeFileSync(file, t);
}

function appendVersionsMd(ver, prNumber) {
  const file = join(root, "VERSIONS.md");
  if (!existsSync(file)) return;
  let t = readFileSync(file, "utf8");
  if (t.includes(`**v${ver.v}**`)) return;
  const zip = `https://github.com/${REPO}/archive/refs/heads/release/v${ver.v}.zip`;
  const rel = `https://github.com/${REPO}/releases/tag/v${ver.v}`;
  const pr = prNumber
    ? `[#${prNumber}](https://github.com/${REPO}/pull/${prNumber})`
    : `\`release/v${ver.v}\``;
  const row = `| **v${ver.v}** | ${ver.title} | ${ver.date} | ${pr} | [branche](${zip}) · [release](${rel}) |`;
  const marker = "| Version | Titre |";
  const idx = t.indexOf(marker);
  if (idx < 0) return;
  const nl = t.indexOf("\n", t.indexOf("\n", idx) + 1);
  t = t.slice(0, nl + 1) + row + "\n" + t.slice(nl + 1);
  writeFileSync(file, t);
}

function main() {
  const dry = flag("dry-run");
  const bumpOnly = flag("bump-only");
  const publishCurrent = flag("publish-current");
  const noBuild = flag("no-build");
  const noGit = flag("no-git");
  const title = arg("title", publishCurrent ? "" : "");
  const notes = argList("notes");
  const notesBlock = arg("notes-file")
    ? readFileSync(arg("notes-file"), "utf8")
    : "";
  const items = [
    ...notes,
    ...notesBlock
      .split("\n")
      .map((l) => l.replace(/^\s*[-*]\s*/, "").trim())
      .filter(Boolean),
  ];

  const current = readAppVersion();
  const next = publishCurrent ? current : bumpVersion(current, Number(arg("bump", "0.1")));
  if (!publishCurrent && !title) {
    console.error("Usage : node scripts/release.mjs --title \"…\" --notes \"…\" [--notes \"…\"]");
    process.exit(1);
  }
  const ver = {
    v: next,
    date: ym(),
    title: title || `Version ${next}`,
    items: items.length ? items : [`Version ${next}.`],
  };

  console.log(publishCurrent ? `Publier v${next}` : `${current} → v${next} — ${ver.title}`);
  if (dry) {
    console.log(JSON.stringify(ver, null, 2));
    return;
  }

  if (!publishCurrent) {
    writeVersion(next);
    insertChangelog(ver);
    prependChangelogMd(ver);
    updateReadmeVersion(next);
  } else {
    insertChangelog(ver);
    prependChangelogMd(ver);
    writeVersion(next);
    updateReadmeVersion(next);
  }

  if (bumpOnly) {
    console.log("Fichiers de version mis à jour (pas de git / zip).");
    return;
  }

  let zipPath = join(root, "public", "TakoLogs.zip");
  if (!noBuild) {
    try {
      zipPath = packFtpZip();
    } catch (e) {
      console.warn("Build FTP échoué, zip existant conservé :", e.message || e);
      if (!existsSync(zipPath)) zipPath = "";
    }
  } else if (!existsSync(zipPath)) {
    zipPath = "";
  }

  if (!noGit) publishGit(ver, zipPath);
  console.log("OK v" + next);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isMain) main();

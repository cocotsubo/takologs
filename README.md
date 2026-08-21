# TakoLogs

**Savoir, réduction des risques & journal d’expériences.**

Application web / PWA pour suivre sa consommation, consulter des fiches de substances, détecter les mélanges dangereux, et être accompagné par **TakoAI**.

[takohelp.com](https://takohelp.com) · version **20.6** · [cocotsubo/takologs](https://github.com/cocotsubo/takologs)

<p align="center">
  <img src="screenshots/ftp-home-fixed.png" alt="Accueil TakoLogs" width="820" />
</p>

<p align="center">
  <img src="screenshots/ftp-substances.png" alt="Substances" width="400" />
  &nbsp;
  <img src="screenshots/ftp-lsd.png" alt="Fiche LSD" width="400" />
</p>

---

## Fonctions

| | |
|---|---|
| **Journal** | Expériences, ingestions, échelle de Shulgin, timeline / courbes, fréquence cardiaque, médias, musique (YouTube, Spotify, Apple Music) |
| **Substances** | ~328 fiches : doses, durées, neurotransmetteurs, structure moléculaire, statut légal, rapports Erowid / Psychoactif |
| **Alertes labo** | Retours de tests (Druglab et autres) |
| **TakoAI** | Assistant dans la barre de recherche : questions + actions (ajouter une dose, changer le thème, ouvrir une page…) |
| **Réduction des risques** | Interactions, notifications (pic, hydratation, mélanges, trip-sitter), import PsychonautWiki Journal (`.json`) |
| **Partage** | Stories (Instagram, Snap, Messages…) et PDF d’expérience / de fiche |
| **Thèmes** | Couleur au choix, clair / sombre / auto, monochrome, Liquid Glass |
| **i18n** | Français / anglais (détection région) |
| **PWA** | Écran d’accueil iOS / Android, notifications |

---

## Avertissement

TakoLogs est un outil de **réduction des risques**, pas un conseil médical.

Les données (doses, durées, interactions) sont **indicatives** et peuvent être inexactes. Elles s’appuient notamment sur [PsychonautWiki](https://psychonautwiki.org) (CC-BY-SA).

En cas d’urgence : **15 / 112** (France) ou les secours locaux.

---

## Stack

- React 19 + TypeScript + Vite
- TanStack Router
- Tailwind CSS v4
- PWA (service worker, manifest)
- Journal local (navigateur) — déploiement FTP **sans serveur Node**

---

## Déploiement FTP

1. Télécharge le zip depuis **Téléchargements** sur [takohelp.com](https://takohelp.com), ou utilise le dossier `takologs/` / `TakoLogs-ftp/`.
2. Décompresse l’archive.
3. Envoie **tout le contenu** du dossier (`index.html`, `assets/`, favicon, etc.) dans `public_html` (ou `www`).
4. Ouvre ton nom de domaine.

Le journal reste dans le navigateur de l’utilisateur. Si le site est dans un sous-dossier (`votresite.fr/takologs/`), envoie les fichiers dans ce sous-dossier.

---

## Développement

```bash
npm install
npm run dev
```

Build statique FTP :

```bash
npx vite build --config vite.ftp.config.ts
```

---

## Licence

Projet personnel — [cocotsubo](https://github.com/cocotsubo).

Données substances inspirées de [PsychonautWiki](https://psychonautwiki.org) (CC-BY-SA).

# TakoLogs

**Savoir, réduction des risques & journal d'expériences.**

Application web / PWA pour suivre sa consommation, consulter des fiches de substances (PsychonautWiki), détecter les mélanges dangereux, et être accompagné par **TakoAI**.

🌐 Site : [takohelp.com](https://takohelp.com)

---

## Fonctions

- **Journal** — expériences, ingestions, échelle de Shulgin, timeline / courbes, fréquence cardiaque, médias, musique
- **Substances** — ~328 fiches (doses, durées, neurotransmetteurs, structure moléculaire, statut légal)
- **Alertes labo** — retours de tests (Druglab et autres)
- **TakoAI** — assistant dans la barre de recherche (questions + actions : ajouter une dose, changer le thème…)
- **Réduction des risques** — interactions, notifications (pic, hydratation, mélanges), import PsychonautWiki Journal (`.json`)
- **Thèmes** — couleur au choix, clair / sombre / auto, mode monochrome, Liquid Glass
- **i18n** — français / anglais (détection région)
- **PWA** — écran d'accueil iOS / Android, notifications

Version actuelle : **v20.6**

---

## Avertissement

TakoLogs est un outil de **réduction des risques**, pas un conseil médical. Les données (doses, durées, interactions) sont indicatives et peuvent être inexactes. En cas d'urgence : **15 / 112** (France) ou les secours locaux.

---

## Stack

- React + TypeScript + Vite
- TanStack Router
- Tailwind CSS v4
- PWA (service worker, manifest)
- Journal local (navigateur) — déploiement FTP sans serveur Node

---

## Déploiement FTP

1. Télécharge le zip depuis **Téléchargements** sur le site, ou utilise le dossier `takologs/` / `TakoLogs-ftp/`.
2. Décompresse.
3. Envoie **tout le contenu** (`index.html`, `assets/`, favicon, etc.) dans `public_html` (ou `www`).
4. Ouvre ton nom de domaine.

Le journal reste dans le navigateur de l'utilisateur.

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

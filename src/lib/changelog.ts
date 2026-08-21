export type Change = { v: string; date: string; title: string; items: string[] };

export const CHANGELOG: Change[] = [
  {
    v: "1.0",
    date: "2024-09",
    title: "Naissance",
    items: [
      "Encyclopédie des substances avec dosages et durées.",
      "Fiches claires, recherche par nom.",
    ],
  },
  {
    v: "2.0",
    date: "2024-10",
    title: "Classes",
    items: [
      "Filtres par classe psychoactive.",
      "Alias et familles chimiques.",
    ],
  },
  {
    v: "3.0",
    date: "2024-11",
    title: "Comparer",
    items: [
      "Page Comparer pour superposer deux courbes.",
      "Index des effets.",
    ],
  },
  {
    v: "4.0",
    date: "2024-12",
    title: "Corps & risques",
    items: [
      "Page Neurotransmetteurs.",
      "Échelle de dommages relatifs.",
    ],
  },
  {
    v: "5.0",
    date: "2025-01",
    title: "Journal",
    items: [
      "Logs privés : expériences, ingestions, notes.",
      "Ajout d’une substance à une session.",
    ],
  },
  {
    v: "6.0",
    date: "2025-02",
    title: "Compte",
    items: [
      "Connexion / inscription.",
      "Journal lié au compte.",
    ],
  },
  {
    v: "7.0",
    date: "2025-03",
    title: "Doses",
    items: [
      "Classes de dose (seuil → lourd).",
      "Voies d’administration.",
    ],
  },
  {
    v: "8.0",
    date: "2025-04",
    title: "Interactions",
    items: [
      "Alertes de combinaisons dangereuses.",
      "Réduction des risques.",
    ],
  },
  {
    v: "9.0",
    date: "2025-06",
    title: "Thème",
    items: [
      "Mode clair / sombre.",
      "Sélecteur de couleur d’accent.",
    ],
  },
  {
    v: "10.0",
    date: "2025-08",
    title: "Langues",
    items: [
      "Français / anglais.",
      "Détection auto hors France.",
    ],
  },
  {
    v: "11.0",
    date: "2025-11",
    title: "Mobile",
    items: [
      "Dock Liquid Glass.",
      "Correctifs de zoom iOS.",
    ],
  },
  {
    v: "12.0",
    date: "2026-02",
    title: "Statistiques",
    items: [
      "Calendrier, heatmap, classements.",
      "Bouton + ajoute à l’expérience du jour.",
    ],
  },
  {
    v: "13.0",
    date: "2026-05",
    title: "Personnalisation",
    items: [
      "Emojis de substances.",
      "Recherche Spotlight.",
    ],
  },
  {
    v: "14.0",
    date: "2026-07",
    title: "Communauté",
    items: [
      "Expériences Erowid / Psychoactif.",
      "Alertes labo (Druglab, SINTES…).",
    ],
  },
  {
    v: "14.1",
    date: "2026-07",
    title: "Import",
    items: [
      "Import du journal PsychonautWiki Journal (.json).",
      "Export CSV / JSON.",
    ],
  },
  {
    v: "14.2",
    date: "2026-08",
    title: "Structure & notifs",
    items: [
      "Structure moléculaire transparente.",
      "Notifications de montée / pic / descente.",
    ],
  },
  {
    v: "14.3",
    date: "2026-08",
    title: "Profil",
    items: [
      "Photo, mot de passe, mentions légales.",
      "Échelle de Shulgin sur la courbe.",
    ],
  },
  {
    v: "14.4",
    date: "2026-08",
    title: "Assistant",
    items: [
      "Recherche intelligente (questions + actions).",
      "Couleurs et emojis par substance partout.",
      "Historique des versions, import PW sur l’accueil.",
    ],
  },
  {
    v: "14.5",
    date: "2026-08",
    title: "TakoAI",
    items: [
      "Chatbot intégré à la barre de recherche.",
      "Ajouts multiples au journal, stats et thème.",
    ],
  },
  {
    v: "14.6",
    date: "2026-08",
    title: "Journal intelligent",
    items: [
      "Expérience nommée depuis TakoAI.",
      "Accès aux logs, navigation et couleurs du site.",
    ],
  },
  {
    v: "14.7",
    date: "2026-08",
    title: "Fond continu",
    items: [
      "Plus de coupure de couleur au milieu de l’écran.",
      "Arrière-plan unifié sur mobile et bureau.",
    ],
  },
  {
    v: "14.8",
    date: "2026-08",
    title: "Molécules animées",
    items: [
      "Motif moléculaire en fondu, teinté à l’accent.",
      "Animation relancée au scroll, sur tout le site.",
    ],
  },
  {
    v: "14.9",
    date: "2026-08",
    title: "Vraies structures",
    items: [
      "MDMA, LSD, caféine, THC… avec atomes C, N, O.",
      "Déplacement plus lent, emboîtement des graphes.",
    ],
  },
  {
    v: "15.0",
    date: "2026-08",
    title: "Compte sécurisé",
    items: [
      "Captcha visuel à l’inscription (anti-bots).",
      "Réinitialisation du mot de passe par e-mail (lien à valider).",
      "Mail au design TakoLogs (Josefin, Avenir, palette d’origine).",
      "Changement de mot de passe confirmé par e-mail depuis le profil.",
    ],
  },
  {
    v: "15.1",
    date: "2026-08",
    title: "Resend",
    items: [
      "Clé API Resend et expéditeur configurables dans Profil.",
      "Test d’envoi et resets livrés dans la vraie boîte mail.",
    ],
  },
  {
    v: "15.2",
    date: "2026-08",
    title: "Resend cliquable",
    items: [
      "Boutons e-mail du profil cliquables (plus recouverts par le +).",
      "La clé s’enregistre toute seule en tapant.",
    ],
  },
  {
    v: "15.3",
    date: "2026-08",
    title: "Mail sable",
    items: [
      "E-mail de reset : logo TakoLogs, Josefin / Avenir, palette sable (plus d’orange).",
    ],
  },
  {
    v: "15.4",
    date: "2026-08",
    title: "Domaine mail",
    items: ["Expéditeur noreply@mail.takohelp.com (domaine Resend vérifié)."],
  },
  {
    v: "15.5",
    date: "2026-08",
    title: "Bienvenue",
    items: [
      "Case newsletter à l’inscription.",
      "E-mail de bienvenue sable (logo, Josefin, Avenir) avec TakoAI mis en avant.",
    ],
  },
  {
    v: "15.6",
    date: "2026-08",
    title: "Mail illustré",
    items: ["Le mail de bienvenue détaille chaque fonction avec des captures du site."],
  },
  {
    v: "15.7",
    date: "2026-08",
    title: "Cookies & newsletter",
    items: [
      "Carte newsletter sur l’accueil, popup cookies + politique.",
      "TakoAI n’ajoute plus une prise hors demande d’ajout.",
      "Nom personnalisé d’une substance (en plus de couleur et emoji).",
    ],
  },
  {
    v: "15.8",
    date: "2026-08",
    title: "Cookies centrés",
    items: ["Popup cookies centré sur mobile et desktop."],
  },
  {
    v: "15.9",
    date: "2026-08",
    title: "Newsletter",
    items: [
      "Champ e-mail de la carte newsletter opaque (plus de chevauchement).",
      "Envoi Resend + aperçu du mail de bienvenue.",
    ],
  },
  {
    v: "16.0",
    date: "2026-08",
    title: "Mail test",
    items: [
      "Bouton « envoyer un e-mail test » en haut de Profil, cliquable.",
    ],
  },
  {
    v: "16.1",
    date: "2026-08",
    title: "Comptes & Resend",
    items: [
      "Anciens comptes : e-mail insensible à la casse, anciens hashs reconnus.",
      "Envoi mail via mail-send.php (contourne le blocage CORS Resend sur FTP).",
    ],
  },
  {
    v: "16.2",
    date: "2026-08",
    title: "TakoAI hors-ligne",
    items: [
      "Sur takohelp.com, TakoAI répond sans Grok : fiches, stats, thème, pages, aide.",
    ],
  },
  {
    v: "16.3",
    date: "2026-08",
    title: "TakoAI aide",
    items: ["« Que sais-tu faire » affiche les capacités, plus le message substance inconnue."],
  },
  {
    v: "16.4",
    date: "2026-08",
    title: "TakoAI ouvert",
    items: [
      "TakoAI répond à n’importe quelle question via Grok (sandbox) ou clé xAI + ai-send.php (FTP).",
    ],
  },
  {
    v: "16.5",
    date: "2026-08",
    title: "TakoAI inclus",
    items: ["Clé xAI intégrée côté serveur : plus besoin de la coller dans Profil."],
  },
  {
    v: "16.6",
    date: "2026-08",
    title: "Noms perso",
    items: ["Le nom personnalisé d’une substance s’affiche partout, y compris dans les logs."],
  },
  {
    v: "16.7",
    date: "2026-08",
    title: "TakoAI ciblé",
    items: [
      "Plus de changement de thème / fiche MET hors sujet (« je saigne du nez », « met le site en bleu »).",
    ],
  },
  {
    v: "16.8",
    date: "2026-08",
    title: "Perf",
    items: [
      "Firefox : plus d’écran blanc (animations réduites + canvas molécules).",
      "Chargement allégé.",
    ],
  },
  {
    v: "16.9",
    date: "2026-08",
    title: "Icône iOS",
    items: [
      "Favicon et icône d’accueil iPhone = logo actuel, fond transparent (Liquid Glass).",
    ],
  },
  {
    v: "17.0",
    date: "2026-08",
    title: "Dynamic Island",
    items: [
      "Barre du haut décalée sous le Dynamic Island / l’heure iOS (mode app écran d’accueil).",
    ],
  },
  {
    v: "17.1",
    date: "2026-08",
    title: "Clavier iOS",
    items: [
      "Ajout de substance au-dessus du clavier, plus sous le header.",
    ],
  },
  {
    v: "17.2",
    date: "2026-08",
    title: "Halo recherche",
    items: [
      "Plus de fondu sur la barre de menus.",
      "Halo lumineux tournant (couleur du thème) autour de la recherche TakoAI.",
    ],
  },
  {
    v: "17.3",
    date: "2026-08",
    title: "Session iOS & import",
    items: [
      "Halo : trait lumineux qui parcourt le contour de la barre de recherche.",
      "Connexion persistante en app iOS (IndexedDB + cookie + service worker).",
      "Import PsychonautWiki : dates et heures d’origine conservées.",
    ],
  },
  {
    v: "17.4",
    date: "2026-08",
    title: "Accueil",
    items: [
      "Carte newsletter alignée dans la grille (plus de trou sur bureau).",
      "Motif moléculaire en fond, plus visible.",
    ],
  },
  {
    v: "17.5",
    date: "2026-08",
    title: "Notifications iOS",
    items: [
      "Notifs via service worker (iPhone écran d’accueil).",
      "Test immédiat à l’activation ; rattrapage des phases au réveil de l’app.",
    ],
  },
  {
    v: "17.6",
    date: "2026-08",
    title: "Notifs & profil",
    items: [
      "Bouton de notification de test dans Profil.",
      "Photo de profil plus visible.",
      "Heure du pic / montée / descente dans la notif.",
      "Alertes hydratation / trip-sitter à 3, 6 et 9 prises.",
    ],
  },
  {
    v: "17.7",
    date: "2026-08",
    title: "Musique & catégories",
    items: [
      "Musique YouTube / Spotify / Apple Music dans chaque expérience.",
      "Recherche TakoAI sur Substances.",
      "Catégories colorées avec emojis.",
    ],
  },
  {
    v: "17.8",
    date: "2026-08",
    title: "Stories",
    items: [
      "Partage story (Instagram, Snap, Messages, Telegram) : cumul des substances + timeline aux couleurs du thème.",
    ],
  },
  {
    v: "17.9",
    date: "2026-08",
    title: "Stories, PDF, TakoAI",
    items: [
      "Favicon sable / logo blanc plus gras.",
      "Fenêtre d’expérience centrée.",
      "Lecteur Apple Music aux couleurs du site.",
      "Story : interactions, logo, takohelp.com.",
      "PDF substance + expérience. Cartes teintées par la couleur de l’emoji.",
      "TakoAI : « que sais-tu faire » + Grok-3 via PHP.",
    ],
  },
  {
    v: "18.0",
    date: "2026-08",
    title: "Liquid Glass",
    items: [
      "Flou Liquid Glass sur toutes les cartes, ingestions, navbar et barre du bas.",
      "Reflet spéculaire iOS, blur restauré sur mobile.",
    ],
  },
  {
    v: "18.1",
    date: "2026-08",
    title: "Verre translucide",
    items: [
      "Liquid Glass vraiment flou : légère opacité claire / sombre, le fond et les molécules se voient derrière.",
    ],
  },
  {
    v: "18.2",
    date: "2026-08",
    title: "Cartes translucides",
    items: [
      "Logs, substances et ingestions : verre semi-transparent, flou du fond visible.",
    ],
  },
  {
    v: "18.3",
    date: "2026-08",
    title: "Flou du fond",
    items: [
      "Les molécules passent derrière les cartes : le Liquid Glass floute vraiment le motif du site.",
    ],
  },
  {
    v: "18.4",
    date: "2026-08",
    title: "Vrai flou",
    items: [
      "Cartes translucides : blur léger pour voir les molécules derrière (logs, accueil, Apple Music).",
      "Accueil : lecteur de l’expérience en cours, sous les substances, avant le graphique.",
    ],
  },
  {
    v: "18.5",
    date: "2026-08",
    title: "Identité",
    items: [
      "TakoLogs (Josefin, Logs teinté) visible dans la barre de menus.",
      "Carte Mises à jour : version courante affichée.",
    ],
  },
  {
    v: "18.6",
    date: "2026-08",
    title: "Clair, mails, EN, Play",
    items: [
      "Mode clair : popups et cartes en beige, plus de verre sombre.",
      "Navbar / dock : vrai flou Liquid Glass sur toutes les pages.",
      "Mails de bienvenue et de reset via Resend (clé intégrée + User-Agent).",
      "Traduction anglaise complète, y compris noms et fiches substances.",
      "Courbe : la hauteur suit le dosage (40 mg < 80 mg).",
      "Play lance la musique dans l’app (extrait iTunes / embed), sans ouvrir Apple Music.",
      "Téléchargements : zip du site, stories, et fichiers déposés vraiment téléchargeables.",
    ],
  },
  {
    v: "18.7",
    date: "2026-08",
    title: "Courbes & anglais",
    items: [
      "La courbe dose (40 mg < 80 mg) est la même à l’accueil, dans les logs, les fiches et les stories.",
      "Anglais : neurotransmetteurs, interactions, dommages, RdR, effets, comparateur.",
    ],
  },
  {
    v: "18.8",
    date: "2026-08",
    title: "Alertes & stories",
    items: [
      "Champ TakoAI lisible en mode clair.",
      "Cloche notifications + badge. Hydratation, 3 h d’oubli, mélanges, alertes labo, 12 prises.",
      "Pop-ups fentanyl / mélange / dose lourde.",
      "Stories : textes centrés plus grands, mélanges en rouge lisible.",
    ],
  },
  {
    v: "18.9",
    date: "2026-08",
    title: "Recherche claire & alertes",
    items: [
      "Palette TakoAI opaque crème en mode clair (plus de verre gris).",
      "Notifications : hydratation, 3 h d’oubli, mélange, labo, 12 prises, volant, repos, trip-sitter, redose.",
      "Stories : mix en bannière rouge centrée, infos plus grandes au milieu.",
    ],
  },
  {
    v: "19.0",
    date: "2026-08",
    title: "Courbes & zip",
    items: [
      "Panneau notifications hors de la barre (ne l’agrandit plus).",
      "Survol / clic sur une courbe : substance, couleur et dose.",
      "Zip du site dans Téléchargements, plus dans Profil.",
    ],
  },
  {
    v: "19.1",
    date: "2026-08",
    title: "Panneaux flottants",
    items: [
      "Notifications, couleurs et menu Plus s’ouvrent hors de la barre — elle ne s’agrandit plus.",
      "Survol / clic sur une courbe : nom de la substance dans sa couleur, sur le tracé.",
      "Zip du site uniquement dans Téléchargements.",
    ],
  },
  {
    v: "19.2",
    date: "2026-08",
    title: "Thème & pouls",
    items: [
      "Couleur du site et mode clair / auto / sombre dans un seul bouton de la barre.",
      "Fréquence cardiaque dans chaque expérience, tracée sur la courbe.",
    ],
  },
  {
    v: "19.3",
    date: "2026-08",
    title: "Pouls & apparence",
    items: [
      "Couleur du thème dans le bouton clair / auto / sombre (un seul bouton).",
      "Fréquence cardiaque : ajout dans l’expérience, points sur la courbe, alerte si pouls trop haut ou trop bas.",
      "Fenêtre des notifications centrée à l’écran.",
    ],
  },
  {
    v: "19.5",
    date: "2026-08",
    title: "Courbes, fiches & verre",
    items: [
      "Courbe : plus de coupure en haut quand la dose dépasse le seuil — les prises se calent dans le graphique.",
      "Agrandir : +/− zoome vraiment la timeline, curseur pour déplacer la fenêtre visible.",
      "Fiches substances enrichies (PsychonautWiki, FR/EN), stories et PDF plus complets.",
      "Barre du haut et dock : vrai Liquid Glass, y compris sur Substances. Compteur sans {total} cassé.",
      "Stories d’expérience : plus d’air entre les cartes.",
    ],
  },
  {
    v: "19.4",
    date: "2026-08",
    title: "Photo, zoom & emojis",
    items: [
      "TakoAI : photo d’une prise pour estimer approximativement la dose en mg.",
      "Expérience : graphique en grand, zoom et glisser pour voir montée, pic et descente.",
      "Profil : le sélecteur d’emoji par substance s’ouvre correctement, avec tout le jeu d’emojis.",
    ],
  },
  {
    v: "19.6",
    date: "2026-08",
    title: "Verre liquide",
    items: [
      "Cartes (substances, logs, accueil) : vrai flou Liquid Glass, le motif moléculaire transparaît.",
      "Barre du haut, dock et modales : même verre translucide, plus d’opacité plate.",
    ],
  },
  {
    v: "19.7",
    date: "2026-08",
    title: "Liquid Glass Safari",
    items: [
      "Cartes beaucoup plus transparentes : les molécules se voient à travers, en flou.",
      "Safari : overflow-x clip + verre plus léger pour que le backdrop-filter fonctionne.",
    ],
  },
  {
    v: "19.8",
    date: "2026-08",
    title: "Fiches PW, IV & verre",
    items: [
      "Cartes plus transparentes, flou plus léger : les molécules se voient à travers.",
      "Fiches substances : effets subjectifs, pharmacologie, chimie, histoire, toxicité, statut légal (PsychonautWiki, FR/EN) — aussi dans le PDF et la story.",
      "Story d’expérience : prises dans l’ordre chrono, couleurs par substance, fond du site, ⚠️ en haut à droite.",
      "Thème Noir & blanc. Timeline + musique repliables. Tolérance : barre de progression. Voie IV importée et visible dans les stats.",
    ],
  },
  {
    v: "19.9",
    date: "2026-08",
    title: "Finder & transitions",
    items: [
      "Téléchargements : explorateur type Mac — dossiers, tri, compression zip, suppression, sélection à la souris.",
      "Cartes : animation au survol. Navigation : slide de la droite vers la gauche.",
      "Courbes d’expérience plus épaisses, plus lisibles.",
    ],
  },
  {
    v: "20.0",
    date: "2026-08",
    title: "Monochrome vrai & stories",
    items: [
      "Thème noir & blanc : plus de rouge. PDF et stories en noir/blanc (jour) ou blanc/noir (nuit).",
      "Sombre : boutons lisibles (plus de blanc sur blanc). Molécules blanches sur noir / noires sur blanc.",
      "Stories substances : texte et tableau des doses réellement alignés.",
    ],
  },
  {
    v: "20.1",
    date: "2026-08",
    title: "Fluide, verre, molécules",
    items: [
      "Barres du haut et du bas : verre plus opaque + flou, y compris sur Substances.",
      "Plus de crash PWA « importing a module script failed » en naviguant vers Substances / Logs.",
      "Transitions de pages instantanées (slide), sans rechargement.",
      "Molécules estompées pour que le texte reste lisible, surtout en noir & blanc.",
    ],
  },
  {
    v: "20.2",
    date: "2026-08",
    title: "Déroulement & verre",
    items: [
      "Timeline : animation de déroulement / enroulement du bandeau.",
      "Cartes : flou Liquid Glass rétabli, les molécules transparaissent à nouveau.",
    ],
  },
  {
    v: "20.3",
    date: "2026-08",
    title: "Vrai flou",
    items: [
      "Cartes : backdrop-filter enfin actif (plus de calque qui bloquait le flou).",
      "Les molécules se voient à travers, floues, pas en dur sous un calque transparent.",
    ],
  },
  {
    v: "20.4",
    date: "2026-08",
    title: "Verre teinté",
    items: [
      "Cartes substances : plus de fond opaque. Teinte légère + flou, les molécules se voient à travers.",
    ],
  },
  {
    v: "20.5",
    date: "2026-08",
    title: "Cartes vraiment transparentes",
    items: [
      "Les cartes n’ont plus de fond plein : teinte à 16 % + flou, les molécules se voient à travers.",
    ],
  },
  {
    v: "20.6",
    date: "2026-08",
    title: "Molécules en SVG",
    items: [
      "Les molécules sont en SVG (plus un canvas) : Safari les floute enfin à travers les cartes.",
    ],
  },
];

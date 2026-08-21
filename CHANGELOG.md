# Changelog TakoLogs

De la plus récente à la plus ancienne.

## v20.6 — Molécules en SVG (2026-08)

- Les molécules sont en SVG (plus un canvas) : Safari les floute enfin à travers les cartes.

## v20.5 — Cartes vraiment transparentes (2026-08)

- Les cartes n’ont plus de fond plein : teinte à 16 % + flou, les molécules se voient à travers.

## v20.4 — Verre teinté (2026-08)

- Cartes substances : plus de fond opaque. Teinte légère + flou, les molécules se voient à travers.

## v20.3 — Vrai flou (2026-08)

- Cartes : backdrop-filter enfin actif (plus de calque qui bloquait le flou).
- Les molécules se voient à travers, floues, pas en dur sous un calque transparent.

## v20.2 — Déroulement & verre (2026-08)

- Timeline : animation de déroulement / enroulement du bandeau.
- Cartes : flou Liquid Glass rétabli, les molécules transparaissent à nouveau.

## v20.1 — Fluide, verre, molécules (2026-08)

- Barres du haut et du bas : verre plus opaque + flou, y compris sur Substances.
- Plus de crash PWA « importing a module script failed » en naviguant vers Substances / Logs.
- Transitions de pages instantanées (slide), sans rechargement.
- Molécules estompées pour que le texte reste lisible, surtout en noir & blanc.

## v20.0 — Monochrome vrai & stories (2026-08)

- Thème noir & blanc : plus de rouge. PDF et stories en noir/blanc (jour) ou blanc/noir (nuit).
- Sombre : boutons lisibles (plus de blanc sur blanc). Molécules blanches sur noir / noires sur blanc.
- Stories substances : texte et tableau des doses réellement alignés.

## v19.9 — Finder & transitions (2026-08)

- Téléchargements : explorateur type Mac — dossiers, tri, compression zip, suppression, sélection à la souris.
- Cartes : animation au survol. Navigation : slide de la droite vers la gauche.
- Courbes d’expérience plus épaisses, plus lisibles.

## v19.8 — Fiches PW, IV & verre (2026-08)

- Cartes plus transparentes, flou plus léger : les molécules se voient à travers.
- Fiches substances : effets subjectifs, pharmacologie, chimie, histoire, toxicité, statut légal (PsychonautWiki, FR/EN) — aussi dans le PDF et la story.
- Story d’expérience : prises dans l’ordre chrono, couleurs par substance, fond du site, ⚠️ en haut à droite.
- Thème Noir & blanc. Timeline + musique repliables. Tolérance : barre de progression. Voie IV importée et visible dans les stats.

## v19.7 — Liquid Glass Safari (2026-08)

- Cartes beaucoup plus transparentes : les molécules se voient à travers, en flou.
- Safari : overflow-x clip + verre plus léger pour que le backdrop-filter fonctionne.

## v19.6 — Verre liquide (2026-08)

- Cartes (substances, logs, accueil) : vrai flou Liquid Glass, le motif moléculaire transparaît.
- Barre du haut, dock et modales : même verre translucide, plus d’opacité plate.

## v19.4 — Photo, zoom & emojis (2026-08)

- TakoAI : photo d’une prise pour estimer approximativement la dose en mg.
- Expérience : graphique en grand, zoom et glisser pour voir montée, pic et descente.
- Profil : le sélecteur d’emoji par substance s’ouvre correctement, avec tout le jeu d’emojis.

## v19.5 — Courbes, fiches & verre (2026-08)

- Courbe : plus de coupure en haut quand la dose dépasse le seuil — les prises se calent dans le graphique.
- Agrandir : +/− zoome vraiment la timeline, curseur pour déplacer la fenêtre visible.
- Fiches substances enrichies (PsychonautWiki, FR/EN), stories et PDF plus complets.
- Barre du haut et dock : vrai Liquid Glass, y compris sur Substances. Compteur sans {total} cassé.
- Stories d’expérience : plus d’air entre les cartes.

## v19.3 — Pouls & apparence (2026-08)

- Couleur du thème dans le bouton clair / auto / sombre (un seul bouton).
- Fréquence cardiaque : ajout dans l’expérience, points sur la courbe, alerte si pouls trop haut ou trop bas.
- Fenêtre des notifications centrée à l’écran.

## v19.2 — Thème & pouls (2026-08)

- Couleur du site et mode clair / auto / sombre dans un seul bouton de la barre.
- Fréquence cardiaque dans chaque expérience, tracée sur la courbe.

## v19.1 — Panneaux flottants (2026-08)

- Notifications, couleurs et menu Plus s’ouvrent hors de la barre — elle ne s’agrandit plus.
- Survol / clic sur une courbe : nom de la substance dans sa couleur, sur le tracé.
- Zip du site uniquement dans Téléchargements.

## v19.0 — Courbes & zip (2026-08)

- Panneau notifications hors de la barre (ne l’agrandit plus).
- Survol / clic sur une courbe : substance, couleur et dose.
- Zip du site dans Téléchargements, plus dans Profil.

## v18.9 — Recherche claire & alertes (2026-08)

- Palette TakoAI opaque crème en mode clair (plus de verre gris).
- Notifications : hydratation, 3 h d’oubli, mélange, labo, 12 prises, volant, repos, trip-sitter, redose.
- Stories : mix en bannière rouge centrée, infos plus grandes au milieu.

## v18.8 — Alertes & stories (2026-08)

- Champ TakoAI lisible en mode clair.
- Cloche notifications + badge. Hydratation, 3 h d’oubli, mélanges, alertes labo, 12 prises.
- Pop-ups fentanyl / mélange / dose lourde.
- Stories : textes centrés plus grands, mélanges en rouge lisible.

## v18.7 — Courbes & anglais (2026-08)

- La courbe dose (40 mg < 80 mg) est la même à l’accueil, dans les logs, les fiches et les stories.
- Anglais : neurotransmetteurs, interactions, dommages, RdR, effets, comparateur.

## v18.6 — Clair, mails, EN, Play (2026-08)

- Mode clair : popups et cartes en beige, plus de verre sombre.
- Navbar / dock : vrai flou Liquid Glass sur toutes les pages.
- Mails de bienvenue et de reset via Resend (clé intégrée + User-Agent).
- Traduction anglaise complète, y compris noms et fiches substances.
- Courbe : la hauteur suit le dosage (40 mg < 80 mg).
- Play lance la musique dans l’app (extrait iTunes / embed), sans ouvrir Apple Music.
- Téléchargements : zip du site, stories, et fichiers déposés vraiment téléchargeables.

## v18.5 — Identité (2026-08)

- TakoLogs (Josefin, Logs teinté) visible dans la barre de menus.
- Carte Mises à jour : version courante affichée.

## v18.4 — Vrai flou (2026-08)

- Cartes translucides : blur léger pour voir les molécules derrière (logs, accueil, Apple Music).
- Accueil : lecteur de l’expérience en cours, sous les substances, avant le graphique.

## v18.3 — Flou du fond (2026-08)

- Les molécules passent derrière les cartes : le Liquid Glass floute vraiment le motif du site.

## v18.2 — Cartes translucides (2026-08)

- Logs, substances et ingestions : verre semi-transparent, flou du fond visible.

## v18.1 — Verre translucide (2026-08)

- Liquid Glass vraiment flou : légère opacité claire / sombre, le fond et les molécules se voient derrière.

## v18.0 — Liquid Glass (2026-08)

- Flou Liquid Glass sur toutes les cartes, ingestions, navbar et barre du bas.
- Reflet spéculaire iOS, blur restauré sur mobile.

## v17.9 — Stories, PDF, TakoAI (2026-08)

- Favicon sable / logo blanc plus gras.
- Fenêtre d’expérience centrée.
- Lecteur Apple Music aux couleurs du site.
- Story : interactions, logo, takohelp.com.
- PDF substance + expérience. Cartes teintées par la couleur de l’emoji.
- TakoAI : « que sais-tu faire » + Grok-3 via PHP.

## v17.8 — Stories (2026-08)

- Partage story (Instagram, Snap, Messages, Telegram) : cumul des substances + timeline aux couleurs du thème.

## v17.7 — Musique & catégories (2026-08)

- Musique YouTube / Spotify / Apple Music dans chaque expérience.
- Recherche TakoAI sur Substances.
- Catégories colorées avec emojis.

## v17.6 — Notifs & profil (2026-08)

- Bouton de notification de test dans Profil.
- Photo de profil plus visible.
- Heure du pic / montée / descente dans la notif.
- Alertes hydratation / trip-sitter à 3, 6 et 9 prises.

## v17.5 — Notifications iOS (2026-08)

- Notifs via service worker (iPhone écran d’accueil).
- Test immédiat à l’activation ; rattrapage des phases au réveil de l’app.

## v17.4 — Accueil (2026-08)

- Carte newsletter alignée dans la grille (plus de trou sur bureau).
- Motif moléculaire en fond, plus visible.

## v17.3 — Session iOS & import (2026-08)

- Halo : trait lumineux qui parcourt le contour de la barre de recherche.
- Connexion persistante en app iOS (IndexedDB + cookie + service worker).
- Import PsychonautWiki : dates et heures d’origine conservées.

## v17.2 — Halo recherche (2026-08)

- Plus de fondu sur la barre de menus.
- Halo lumineux tournant (couleur du thème) autour de la recherche TakoAI.

## v17.1 — Clavier iOS (2026-08)

- Ajout de substance au-dessus du clavier, plus sous le header.

## v17.0 — Dynamic Island (2026-08)

- Barre du haut décalée sous le Dynamic Island / l’heure iOS (mode app écran d’accueil).

## v16.9 — Icône iOS (2026-08)

- Favicon et icône d’accueil iPhone = logo actuel, fond transparent (Liquid Glass).

## v16.8 — Perf (2026-08)

- Firefox : plus d’écran blanc (animations réduites + canvas molécules).
- Chargement allégé.

## v16.7 — TakoAI ciblé (2026-08)

- Plus de changement de thème / fiche MET hors sujet (« je saigne du nez », « met le site en bleu »).

## v16.6 — Noms perso (2026-08)

- Le nom personnalisé d’une substance s’affiche partout, y compris dans les logs.

## v16.5 — TakoAI inclus (2026-08)

- Clé xAI intégrée côté serveur : plus besoin de la coller dans Profil.

## v16.4 — TakoAI ouvert (2026-08)

- TakoAI répond à n’importe quelle question via Grok (sandbox) ou clé xAI + ai-send.php (FTP).

## v16.3 — TakoAI aide (2026-08)

- « Que sais-tu faire » affiche les capacités, plus le message substance inconnue.

## v16.2 — TakoAI hors-ligne (2026-08)

- Sur takohelp.com, TakoAI répond sans Grok : fiches, stats, thème, pages, aide.

## v16.1 — Comptes & Resend (2026-08)

- Anciens comptes : e-mail insensible à la casse, anciens hashs reconnus.
- Envoi mail via mail-send.php (contourne le blocage CORS Resend sur FTP).

## v16.0 — Mail test (2026-08)

- Bouton « envoyer un e-mail test » en haut de Profil, cliquable.

## v15.9 — Newsletter (2026-08)

- Champ e-mail de la carte newsletter opaque (plus de chevauchement).
- Envoi Resend + aperçu du mail de bienvenue.

## v15.8 — Cookies centrés (2026-08)

- Popup cookies centré sur mobile et desktop.

## v15.7 — Cookies & newsletter (2026-08)

- Carte newsletter sur l’accueil, popup cookies + politique.
- TakoAI n’ajoute plus une prise hors demande d’ajout.
- Nom personnalisé d’une substance (en plus de couleur et emoji).

## v15.6 — Mail illustré (2026-08)

- Le mail de bienvenue détaille chaque fonction avec des captures du site.

## v15.5 — Bienvenue (2026-08)

- Case newsletter à l’inscription.
- E-mail de bienvenue sable (logo, Josefin, Avenir) avec TakoAI mis en avant.

## v15.4 — Domaine mail (2026-08)

- Expéditeur noreply@mail.takohelp.com (domaine Resend vérifié).

## v15.3 — Mail sable (2026-08)

- E-mail de reset : logo TakoLogs, Josefin / Avenir, palette sable (plus d’orange).

## v15.2 — Resend cliquable (2026-08)

- Boutons e-mail du profil cliquables (plus recouverts par le +).
- La clé s’enregistre toute seule en tapant.

## v15.1 — Resend (2026-08)

- Clé API Resend et expéditeur configurables dans Profil.
- Test d’envoi et resets livrés dans la vraie boîte mail.

## v15.0 — Compte sécurisé (2026-08)

- Captcha visuel à l’inscription (anti-bots).
- Réinitialisation du mot de passe par e-mail (lien à valider).
- Mail au design TakoLogs (Josefin, Avenir, palette d’origine).
- Changement de mot de passe confirmé par e-mail depuis le profil.

## v14.9 — Vraies structures (2026-08)

- MDMA, LSD, caféine, THC… avec atomes C, N, O.
- Déplacement plus lent, emboîtement des graphes.

## v14.8 — Molécules animées (2026-08)

- Motif moléculaire en fondu, teinté à l’accent.
- Animation relancée au scroll, sur tout le site.

## v14.7 — Fond continu (2026-08)

- Plus de coupure de couleur au milieu de l’écran.
- Arrière-plan unifié sur mobile et bureau.

## v14.6 — Journal intelligent (2026-08)

- Expérience nommée depuis TakoAI.
- Accès aux logs, navigation et couleurs du site.

## v14.5 — TakoAI (2026-08)

- Chatbot intégré à la barre de recherche.
- Ajouts multiples au journal, stats et thème.

## v14.4 — Assistant (2026-08)

- Recherche intelligente (questions + actions).
- Couleurs et emojis par substance partout.
- Historique des versions, import PW sur l’accueil.

## v14.3 — Profil (2026-08)

- Photo, mot de passe, mentions légales.
- Échelle de Shulgin sur la courbe.

## v14.2 — Structure & notifs (2026-08)

- Structure moléculaire transparente.
- Notifications de montée / pic / descente.

## v14.1 — Import (2026-07)

- Import du journal PsychonautWiki Journal (.json).
- Export CSV / JSON.

## v14.0 — Communauté (2026-07)

- Expériences Erowid / Psychoactif.
- Alertes labo (Druglab, SINTES…).

## v13.0 — Personnalisation (2026-05)

- Emojis de substances.
- Recherche Spotlight.

## v12.0 — Statistiques (2026-02)

- Calendrier, heatmap, classements.
- Bouton + ajoute à l’expérience du jour.

## v11.0 — Mobile (2025-11)

- Dock Liquid Glass.
- Correctifs de zoom iOS.

## v10.0 — Langues (2025-08)

- Français / anglais.
- Détection auto hors France.

## v9.0 — Thème (2025-06)

- Mode clair / sombre.
- Sélecteur de couleur d’accent.

## v8.0 — Interactions (2025-04)

- Alertes de combinaisons dangereuses.
- Réduction des risques.

## v7.0 — Doses (2025-03)

- Classes de dose (seuil → lourd).
- Voies d’administration.

## v6.0 — Compte (2025-02)

- Connexion / inscription.
- Journal lié au compte.

## v5.0 — Journal (2025-01)

- Logs privés : expériences, ingestions, notes.
- Ajout d’une substance à une session.

## v4.0 — Corps & risques (2024-12)

- Page Neurotransmetteurs.
- Échelle de dommages relatifs.

## v3.0 — Comparer (2024-11)

- Page Comparer pour superposer deux courbes.
- Index des effets.

## v2.0 — Classes (2024-10)

- Filtres par classe psychoactive.
- Alias et familles chimiques.

## v1.0 — Naissance (2024-09)

- Encyclopédie des substances avec dosages et durées.
- Fiches claires, recherche par nom.

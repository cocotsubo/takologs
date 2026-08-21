#!/usr/bin/env python3
"""Build PsychonautWiki-style section copy (FR/EN) for every substance."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SUBS = json.loads((ROOT / "src/data/substances.json").read_text())
EN = json.loads((ROOT / "src/data/substance-en.json").read_text())

FEATURED: dict[str, dict] = {
  "lsd": {
    "fr": {
      "summary": "Lysergamide psychédélique extrêmement puissant, dosé en microgrammes. Agoniste partiel 5-HT2A : visuels géométriques, pensée associative, émotions intenses. Le set et le setting décident largement du voyage.",
      "subjective": "Montée souvent claire puis ondulante. Motifs kaléidoscopiques, synesthésies, dilatation du temps, rires, insights. Un bad trip se manifeste par anxiété, boucles mentales, paranoïa — rarement par toxicité physique.",
      "pharmacology": "Agoniste partiel des récepteurs 5-HT2A (et 5-HT1A, dopamine D2 à moindre titre). Demi-vie ~3–5 h, durée totale 8–12 h. Métabolisé principalement par CYP2D6 / CYP3A4. Tolérance quasi complète dès le lendemain, croisée avec les autres psychédéliques sérotoninergiques.",
      "chemistry": "Diéthylamide de l’acide lysergique (C20H25N3O), ergotamine semi-synthétique. Cristaux incolores, souvent déposés sur buvard. Inodore, insipide. Détectable au réactif Ehrlich (violet).",
      "history": "Synthétisé en 1938 par Albert Hofmann (Sandoz), effets découverts en 1943. Usages psychiatriques dans les années 50–60, puis contre-culture. Classé stupéfiant (convention de 1971). Recherche clinique relancée (anxiété de fin de vie, dépression).",
      "toxicity": "Index thérapeutique très large : pas de dose létale connue chez l’humain en usage isolé. Risques : crise de panique, HPPD rare, déclenchement psychotique si terrain. Interactions : lithium (convulsions), tramadol. Tester le buvard (Ehrlich) — le NBOMe n’est pas du LSD.",
      "legal": "Stupéfiant dans la plupart des pays (France : tableau des stupéfiants). Possession, usage et vente illégaux. Exceptions limitées de recherche clinique.",
    },
    "en": {
      "summary": "Extremely potent lysergamide psychedelic, dosed in micrograms. Partial 5-HT2A agonist: geometric visuals, associative thought, intense emotion. Set and setting largely decide the trip.",
      "subjective": "Often a clear then waving come-up. Kaleidoscopic patterns, synaesthesia, time dilation, laughter, insight. A difficult trip is anxiety, thought loops, paranoia — rarely physical toxicity.",
      "pharmacology": "Partial agonist at 5-HT2A (also 5-HT1A, some D2). Half-life ~3–5 h, total 8–12 h. Mainly CYP2D6 / CYP3A4. Near-complete tolerance the next day, cross-tolerance with other serotonergic psychedelics.",
      "chemistry": "Lysergic acid diethylamide (C20H25N3O), a semi-synthetic ergot derivative. Colourless crystals, usually on blotter. Odourless, tasteless. Ehrlich reagent turns purple.",
      "history": "Synthesised in 1938 by Albert Hofmann (Sandoz); effects found in 1943. Psychiatric use in the 1950s–60s, then counterculture. Scheduled under the 1971 convention. Clinical research has resumed (end-of-life anxiety, depression).",
      "toxicity": "Very wide therapeutic index; no known lethal dose in humans when taken alone. Risks: panic, rare HPPD, psychotic break if predisposed. Interactions: lithium (seizures), tramadol. Reagent-test blotters (Ehrlich) — NBOMe is not LSD.",
      "legal": "A controlled substance in most countries. Possession, use and sale are illegal. Limited clinical-research exceptions.",
    },
  },
  "mdma": {
    "fr": {
      "summary": "Empathogène de référence (3,4-méthylènedioxyméthamphétamine). Libération massive de sérotonine, dopamine et noradrénaline. Euphorie sociale, chaleur, réduction de la peur. Dose orale courante 80–120 mg.",
      "subjective": "Montée 20–60 min, pic 1–2 h : empathie, bavardage, bien-être corporel, mydriase, serrement de mâchoire. Descente parfois plate (« tuesday blues ») les jours suivants. Redose compulsive fréquente — à éviter.",
      "pharmacology": "Substrat des transporteurs SERT/DAT/NET : inversion du flux de monoamines. Inhibe aussi VMAT2. Demi-vie ~7–9 h. Neurotoxicité sérotoninergique dose et hyperthermie-dépendante chez l’animal. Pauses de plusieurs semaines recommandées.",
      "chemistry": "Phényléthylamine substituée (C11H15NO2), proche de la MDA. Poudre cristalline, comprimés, gélules. Réactifs Marquis (noir/violet) + Liebermann pour la distinguer des cathinones.",
      "history": "Breveté par Merck en 1912, popularisé dans les années 70–80 (thérapie, clubs). Classé aux USA en 1985. Essais modernes (PTSD, MAPS) ont relancé l’intérêt médical.",
      "toxicity": "Hyperthermie, hyponatrémie (eau excessive), hyponatrémie + ADH, sérotonine syndrome avec IMAO. Cardiaque chez les personnes à risque. Ne pas redoser, s’hydrater sans forcer, environnement frais. Tester (Marquis).",
      "legal": "Stupéfiant (France et quasi partout). Recherche clinique encadrée dans quelques pays. Possession et vente illégales.",
    },
    "en": {
      "summary": "Reference empathogen (3,4-methylenedioxymethamphetamine). Massive serotonin, dopamine and noradrenaline release. Social euphoria, warmth, reduced fear. Common oral dose 80–120 mg.",
      "subjective": "Come-up 20–60 min, peak 1–2 h: empathy, talkativeness, body comfort, mydriasis, jaw clench. Comedown can be flat (« Tuesday blues »). Compulsive redosing is common — avoid it.",
      "pharmacology": "SERT/DAT/NET substrate that reverses monoamine flux; also inhibits VMAT2. Half-life ~7–9 h. Serotonergic neurotoxicity in animals is dose- and hyperthermia-dependent. Multi-week breaks are advised.",
      "chemistry": "Substituted phenethylamine (C11H15NO2), close to MDA. Crystals, tablets, capsules. Marquis (black/purple) + Liebermann to tell it from cathinones.",
      "history": "Patented by Merck in 1912; popular in the 1970s–80s (therapy, clubs). US scheduling in 1985. Modern PTSD trials (MAPS) revived medical interest.",
      "toxicity": "Hyperthermia, hyponatraemia (too much water), serotonin syndrome with MAOIs. Cardiac risk if predisposed. Do not redose; sip water; keep cool. Reagent-test (Marquis).",
      "legal": "A controlled substance almost everywhere. Limited clinical research. Possession and sale are illegal.",
    },
  },
  "mephedrone": {
    "fr": {
      "summary": "Cathinone stimulante (4-MMC). Montée rapide, euphorie sociale, envie de redoser. Durée 1,5–4 h — plus courte que les amphétamines classiques. Souvent insufflée ou orale.",
      "subjective": "Rush (surtout nasale), bavardage, musique intense, envie de toucher, parfois grincement de dents. Pic court, descente qui pousse à recharger. Sessions longues : crash, anxiété, insomnie.",
      "pharmacology": "Libérateur de sérotonine et de dopamine (plus sérotoninergique que la méthamphétamine). Demi-vie courte. Tolérance rapide dans la session. Neurotoxicité sérotoninergique possible si doses répétées et hyperthermie.",
      "chemistry": "4-méthylméthcathinone (C11H15NO). Poudre cristalline blanche/off-white, hygroscopique. Marquis : jaune/orange. Souvent coupée (caféine, autres cathinones).",
      "history": "Synthétisée dès les années 1920, popularisée au Royaume-Uni vers 2007–2010 (« meow meow »). Interdite ensuite dans l’UE. Reste une des cathinones les plus rencontrées en Europe.",
      "toxicity": "Vasoconstriction, tachycardie, hyperthermie, paranoïa, hyponatrémie rare. Voie IV : risques infectieux et overdose plus brutale. Hydratation, pauses, ne pas mélanger à d’autres stimulants ou IMAO. Tester le produit.",
      "legal": "Stupéfiant dans l’UE (dont la France) et la plupart des pays. Possession et vente illégales.",
    },
    "en": {
      "summary": "Stimulant cathinone (4-MMC). Fast come-up, social euphoria, urge to redose. Duration 1.5–4 h — shorter than classic amphetamines. Often insufflated or oral.",
      "subjective": "Rush (especially nasal), talkativeness, intense music, urge to touch, sometimes jaw clench. Short peak, comedown that pushes another line. Long sessions: crash, anxiety, insomnia.",
      "pharmacology": "Serotonin and dopamine releaser (more serotonergic than methamphetamine). Short half-life. Rapid in-session tolerance. Possible serotonergic neurotoxicity with repeats and heat.",
      "chemistry": "4-methylmethcathinone (C11H15NO). White/off-white hygroscopic crystals. Marquis: yellow/orange. Often cut (caffeine, other cathinones).",
      "history": "First synthesised in the 1920s; UK boom around 2007–2010 (« meow meow »). Later banned across the EU. Still one of the most seen cathinones in Europe.",
      "toxicity": "Vasoconstriction, tachycardia, hyperthermia, paranoia, rare hyponatraemia. IV: infection and a sharper overdose. Hydrate, take breaks, do not stack other stimulants or MAOIs. Test the product.",
      "legal": "A controlled substance in the EU (including France) and most countries.",
    },
  },
  "ketamine": {
    "fr": {
      "summary": "Anesthésique dissociatif, antagoniste NMDA. Du « hole » (K-hole) à faible dose récréative : flottement, distorsion corporelle, visions. Usage médical (anesthésie, dépression résistante).",
      "subjective": "Détachement du corps, nystagmus, ataxie, trou dans la réalité à haute dose. Durée 45–90 min IM/IV, plus longue orale/nasale. Amnésie partielle possible.",
      "pharmacology": "Antagoniste non compétitif du récepteur NMDA. Aussi action opioïde faible et recapture de dopamine. Métabolite norkétamine actif. Cystite (vessie) en usage chronique fréquent.",
      "chemistry": "Arylcyclohexylamine (C13H16ClNO). Liquide médical ou poudre (évaporation). Souvent racémique ; l’eskétamine (S) est plus anesthésique.",
      "history": "Synthétisée en 1962 (Parke-Davis), anesthésique de terrain (Vietnam). Usage récréatif dès les années 70. Eskétamine nasale approuvée pour la dépression (2019+).",
      "toxicity": "Dépression respiratoire surtout mélangée à l’alcool ou aux benzos. Traumatismes (chutes). Atteinte vésicale irréversible si usage répété. Ne jamais piloter. Pas d’IV récréative sans stérile.",
      "legal": "Stupéfiant / liste I selon les pays (France : stupéfiant). Usage médical encadré. Possession hors cadre illégale.",
    },
    "en": {
      "summary": "Dissociative anaesthetic, NMDA antagonist. From a recreational float to a K-hole: body distortion, visions. Medical uses: anaesthesia, treatment-resistant depression.",
      "subjective": "Detachment from the body, nystagmus, ataxia, a hole in reality at high dose. 45–90 min IM/IV, longer oral/nasal. Partial amnesia possible.",
      "pharmacology": "Non-competitive NMDA antagonist. Weak opioid action and some dopamine reuptake. Active metabolite norketamine. Bladder cystitis is common with chronic use.",
      "chemistry": "Arylcyclohexylamine (C13H16ClNO). Medical liquid or evaporated powder. Often racemic; esketamine (S) is more anaesthetic.",
      "history": "Synthesised in 1962 (Parke-Davis); field anaesthetic in Vietnam. Recreational use from the 1970s. Nasal esketamine approved for depression (2019+).",
      "toxicity": "Respiratory depression especially with alcohol or benzos. Falls. Irreversible bladder damage with repeats. Never drive. No recreational IV without sterile technique.",
      "legal": "Controlled (France: narcotic). Medical use is regulated. Possession outside that frame is illegal.",
    },
  },
  "cocaine": {
    "fr": {
      "summary": "Stimulant tropane : bloque la recapture de dopamine, noradrénaline et sérotonine. Pic court, descente marquée, envie de redoser. Risque cardiaque élevé.",
      "subjective": "Confiance, bavardage, anesthésie locale, mydriase. Durée 15–45 min nasale, plus courte fumée (crack). Descente irritable, paranoïa possible.",
      "pharmacology": "Inhibiteur DAT/NET/SERT. Demi-vie ~1 h. Avec alcool : cocaéthylène (plus cardiotoxique, plus long). Vasoconstriction coronaire.",
      "chemistry": "Benzoylmethylecgonine (C17H21NO4), alcaloïde de Erythroxylum coca. Chlorhydrate (poudre) vs base libre (crack). Lévamisole fréquent comme coupe.",
      "history": "Usage andin ancestral de la feuille. Isolée au XIXe, coca-cola originel, puis prohibition. Stupéfiant majeur du trafic mondial.",
      "toxicity": "Infarctus, AVC, arythmie même chez le jeune. Perforation septale nasale. Convulsions. IV : infections, overdose. Jamais avec l’alcool si possible. Naloxone inutile.",
      "legal": "Stupéfiant (convention 1961). Illégal presque partout hors usage médical limité (anesthésie locale).",
    },
    "en": {
      "summary": "Tropane stimulant: blocks dopamine, noradrenaline and serotonin reuptake. Short peak, sharp comedown, urge to redose. High cardiac risk.",
      "subjective": "Confidence, talkativeness, local anaesthesia, mydriasis. 15–45 min nasal, shorter smoked (crack). Irritable comedown, possible paranoia.",
      "pharmacology": "DAT/NET/SERT inhibitor. Half-life ~1 h. With alcohol: cocaethylene (more cardiotoxic, longer). Coronary vasoconstriction.",
      "chemistry": "Benzoylmethylecgonine (C17H21NO4), alkaloid of Erythroxylum coca. Hydrochloride powder vs freebase (crack). Levamisole is a common cut.",
      "history": "Andean leaf use is ancestral. Isolated in the 19th century, early Coca-Cola, then prohibition. A major trafficked narcotic.",
      "toxicity": "Infarction, stroke, arrhythmia even in the young. Nasal septum damage. Seizures. IV: infection, overdose. Avoid alcohol. Naloxone does nothing.",
      "legal": "Controlled under the 1961 convention. Illegal almost everywhere except limited medical local anaesthesia.",
    },
  },
}

# shorter featured for remaining popular slugs
SHORT = {
  "psilocybin": ("Tryptamine naturelle (prodrug de la psilocine), champignons. Plus organique que le LSD, 4–6 h.",
                 "Natural tryptamine (psilocin prodrug) in mushrooms. More organic than LSD, 4–6 h."),
  "dmt": ("Tryptamine endogène. Fumée : 5–15 min. Orale inactive sans IMAO (ayahuasca).",
          "Endogenous tryptamine. Smoked: 5–15 min. Oral inactive without an MAOI (ayahuasca)."),
  "cannabis": ("THC agoniste CB1. Inhalé 1–3 h, oral plus long et plus fort. Anxiété possible à haute dose.",
               "THC is a CB1 agonist. Inhaled 1–3 h; oral is longer and stronger. Anxiety possible at high dose."),
  "alcohol": ("Dépresseur GABA. Marge plus large que le GHB mais dose-dépendant : coma, vomissements, dépendence.",
              "GABA depressant. Wider margin than GHB but dose-dependent: coma, vomiting, dependence."),
  "nicotine": ("Agoniste nicotinique. Pic très court, forte dépendance. Tabac : goudrons et CO en plus.",
               "Nicotinic agonist. Very short peak, high dependence. Tobacco adds tar and CO."),
  "caffeine": ("Antagoniste adénosine. Stimulant légal ubiquitaire. Tremblements, insomnie, tachycardie à haute dose.",
               "Adenosine antagonist. Ubiquitous legal stimulant. Tremor, insomnia, tachycardia at high dose."),
  "amphetamine": ("Libérateur DAT/NET. Éveil, focus, euphorie. Insomnie, vasoconstriction, psychose à haute dose.",
                  "DAT/NET releaser. Wakefulness, focus, euphoria. Insomnia, vasoconstriction, psychosis at high dose."),
  "heroin": ("Diacétylmorphine. Euphorie opioïde, dépression respiratoire. Naloxone. Jamais avec benzos/alcool.",
             "Diacetylmorphine. Opioid euphoria, respiratory depression. Naloxone. Never with benzos/alcohol."),
  "fentanyl": ("Opioïde synthétique µg. Surdose mortelle fréquente. Toujours naloxone. Ne jamais doser à l’œil.",
               "Synthetic opioid in µg. Fatal overdose is common. Always naloxone. Never eyeball a dose."),
  "alprazolam": ("Benzodiazépine rapide. Anxiolyse, amnésie. Sevrage potentiellement mortel — ne pas arrêter brutalement.",
                 "Fast benzodiazepine. Anxiolysis, amnesia. Withdrawal can be fatal — never stop abruptly."),
  "diazepam": ("Benzodiazépine longue. Anxiolyse, myorelaxation. Accumulation, dépendance. Sevrage médical.",
               "Long benzodiazepine. Anxiolysis, muscle relaxant. Accumulation, dependence. Medical withdrawal."),
  "ghb": ("Dépresseur à marge étroite. 0,5–1 ml peuvent séparer l’effet du coma. Jamais d’alcool.",
          "Narrow-margin depressant. 0.5–1 ml can separate effect from coma. Never with alcohol."),
  "2c-b": ("Phényléthylamine psychédélique. Visuels colorés, corps présent, 4–8 h. Plus maniable que le LSD pour beaucoup.",
           "Psychedelic phenethylamine. Colourful visuals, present body, 4–8 h. Often more manageable than LSD."),
  "3-mmc": ("Cathinone proche de la 4-MMC, un peu plus stimulante. Redose fréquente. Hydratation.",
            "Cathinone close to 4-MMC, a bit more stimulating. Frequent redose. Hydrate."),
  "n-ethylpentedrone": ("Cathinone (NEP). Stimulant court, plus dopaminergique. Vasoconstriction, crash.",
                        "Cathinone (NEP). Short stimulant, more dopaminergic. Vasoconstriction, crash."),
  "tramadol": ("Opioïde + inhibiteur de recapture. Convulsions et sérotonine syndrome. Pas d’IMAO.",
               "Opioid plus reuptake inhibitor. Seizures and serotonin syndrome. No MAOIs."),
  "ketamine": None,
}

LEGAL = {
  "fr": {
    "psychedelic": "Souvent stupéfiant (France et convention de 1971). Possession et vente illégales hors recherche.",
    "empathogen": "Stupéfiant dans la plupart des pays. Quelques essais cliniques encadrés (MDMA).",
    "stimulant": "Souvent stupéfiant ou liste I. Amphétamines médicales sous ordonnance ailleurs.",
    "opioid": "Stupéfiant. Certains (morphine, oxycodone) sont des médicaments strictement encadrés.",
    "depressant": "Souvent liste I / ordonnance (benzodiazépines) ou stupéfiant (GHB).",
    "dissociative": "Souvent stupéfiant (kétamine : usage médical encadré).",
    "cannabinoid": "Variable : France illégal hors CBD < 0,3 % THC. Légal ou dépénalisé ailleurs.",
    "deliant": "Souvent médicament (anticholinergiques) ou non classé. Toxique à dose récréative.",
    "nootropic": "Souvent légal comme complément, mais allégations et pureté variables.",
    "misc": "Statut variable selon le pays. Vérifier le droit local. Ceci n’est pas un conseil juridique.",
  },
  "en": {
    "psychedelic": "Usually a controlled substance (1971 convention). Possession and sale are illegal outside research.",
    "empathogen": "A controlled substance in most countries. A few supervised clinical trials (MDMA).",
    "stimulant": "Often a narcotic or schedule I/II. Medical amphetamines are prescription-only.",
    "opioid": "Controlled. Some (morphine, oxycodone) are tightly regulated medicines.",
    "depressant": "Often prescription-only (benzodiazepines) or a narcotic (GHB).",
    "dissociative": "Often controlled (ketamine: medical use is regulated).",
    "cannabinoid": "Varies: illegal in France except CBD < 0.3% THC. Legal or decriminalised elsewhere.",
    "deliant": "Often a medicine (anticholinergics) or unscheduled. Toxic at recreational doses.",
    "nootropic": "Often sold as a supplement; claims and purity vary.",
    "misc": "Status varies by country. Check local law. This is not legal advice.",
  },
}

PHARM = {
  "fr": {
    "psychedelic": "Agonisme 5-HT2A (tryptamines, lysergamides, phényléthylamines). Tolérance rapide, croisée.",
    "empathogen": "Libération de sérotonine (SERT) ± dopamine. Neurotoxicité liée à la dose et à la chaleur.",
    "stimulant": "Libération ou blocage DAT/NET. Vasoconstriction, tachycardie, insomnie.",
    "opioid": "Agoniste µ-opioïde : analgésie, euphorie, dépression respiratoire. Naloxone antagoniste.",
    "depressant": "Modulation GABA-A (benzos, alcool) ou systèmes proches. Sevrage parfois mortel.",
    "dissociative": "Antagonisme NMDA. Dissociation, ataxie, vessie (kétamine chronique).",
    "cannabinoid": "Agoniste CB1. Mémoire, appétit, anxiété dose-dépendante.",
    "deliant": "Anticholinergique central (atropine, diphenhydramine haute dose) : delirium.",
    "nootropic": "Mécanismes variés (cholinergique, racetams, peptides). Preuves cliniques inégales.",
    "misc": "Mécanisme mixte ou mal caractérisé. S’appuyer sur les données PsychonautWiki de la fiche.",
  },
  "en": {
    "psychedelic": "5-HT2A agonism (tryptamines, lysergamides, phenethylamines). Rapid, cross-tolerance.",
    "empathogen": "Serotonin (SERT) ± dopamine release. Neurotoxicity tracks dose and heat.",
    "stimulant": "DAT/NET release or blockade. Vasoconstriction, tachycardia, insomnia.",
    "opioid": "µ-opioid agonist: analgesia, euphoria, respiratory depression. Naloxone reverses it.",
    "depressant": "GABA-A modulation (benzos, alcohol) or related systems. Withdrawal can be fatal.",
    "dissociative": "NMDA antagonism. Dissociation, ataxia, bladder (chronic ketamine).",
    "cannabinoid": "CB1 agonist. Memory, appetite, dose-dependent anxiety.",
    "deliant": "Central anticholinergic (atropine, high-dose diphenhydramine): delirium.",
    "nootropic": "Mixed mechanisms (cholinergic, racetams, peptides). Uneven clinical evidence.",
    "misc": "Mixed or poorly characterised. Lean on the PsychonautWiki page for this compound.",
  },
}

HIST = {
  "fr": "Documenté sur PsychonautWiki à partir de synthèses chimiques, usages traditionnels et rapports d’expérience. L’histoire précise varie selon le composé (recherche, médecine, contre-culture).",
  "en": "Documented on PsychonautWiki from chemistry, traditional use and experience reports. Exact history varies (research, medicine, counterculture).",
}


def join(xs, n=4):
    return ", ".join(xs[:n]) if xs else ""


def build(s, locale: str):
    slug = s["slug"]
    cat = s.get("category") or "misc"
    name = s["name"] if locale == "fr" else EN.get(slug, {}).get("name", s["name"])
    chem = s.get("chemicalClass") or ""
    pcl = s.get("psychoactiveClass") or ""
    if locale == "en":
        chem = EN.get(slug, {}).get("chemicalClass", chem)
        pcl = EN.get(slug, {}).get("psychoactiveClass", pcl)
    fx = s.get("effects") or {}
    if locale == "en" and slug in EN:
        fx = EN[slug].get("effects") or fx
    pos = join(fx.get("positive") or [])
    neg = join(fx.get("negative") or [])
    d0 = (s.get("doses") or [{}])[0]
    dose = ""
    if d0.get("common") is not None:
        dose = f"{d0.get('common')} {d0.get('unit','')} ({d0.get('route','')})"
    feat = FEATURED.get(slug, {}).get(locale)
    if feat:
        return feat
    short = SHORT.get(slug)
    extra = ""
    if short:
        extra = short[0] if locale == "fr" else short[1]

    if locale == "fr":
        summary = extra or (s.get("summary") or f"{name} est un {pcl.lower()} ({chem}).")
        subjective = (
            f"Effets souvent rapportés : {pos}. "
            f"Points difficiles : {neg or 'variables selon la dose et le set.'} "
            f"{'Dose courante ' + dose + '.' if dose else ''}"
        )
        pharmacology = PHARM["fr"].get(cat, PHARM["fr"]["misc"]) + (
            f" Neurotransmetteurs indexés : {', '.join(s.get('neurotransmitters') or [])}."
            if s.get("neurotransmitters") else ""
        )
        chemistry = f"{name} : classe chimique {chem}. Famille psychoactive : {pcl}. Données structurées d’après PsychonautWiki."
        history = HIST["fr"]
        tox = "; ".join((s.get("riskNotes") or [])[:3]) or "Voir la fiche PsychonautWiki pour la toxicité détaillée."
        if s.get("interactions", {}).get("dangerous"):
            tox += " Interactions dangereuses : " + ", ".join(s["interactions"]["dangerous"][:4]) + "."
        legal = LEGAL["fr"].get(cat, LEGAL["fr"]["misc"])
    else:
        summary = extra or EN.get(slug, {}).get("summary") or f"{name} is a {pcl.lower()} ({chem})."
        subjective = (
            f"Often reported: {pos}. "
            f"Downsides: {neg or 'dose- and set-dependent.'} "
            f"{'Common dose ' + dose + '.' if dose else ''}"
        )
        pharmacology = PHARM["en"].get(cat, PHARM["en"]["misc"]) + (
            f" Indexed transmitters: {', '.join(s.get('neurotransmitters') or [])}."
            if s.get("neurotransmitters") else ""
        )
        chemistry = f"{name}: chemical class {chem}. Psychoactive family: {pcl}. Structured data from PsychonautWiki."
        history = HIST["en"]
        tox = "; ".join((EN.get(slug, {}).get("riskNotes") or s.get("riskNotes") or [])[:3]) or "See the PsychonautWiki page for detailed toxicity."
        if s.get("interactions", {}).get("dangerous"):
            tox += " Dangerous interactions: " + ", ".join(s["interactions"]["dangerous"][:4]) + "."
        legal = LEGAL["en"].get(cat, LEGAL["en"]["misc"])

    return {
        "summary": summary,
        "subjective": subjective,
        "pharmacology": pharmacology,
        "chemistry": chemistry,
        "history": history,
        "toxicity": tox,
        "legal": legal,
    }


out = {}
for s in SUBS:
    out[s["slug"]] = {"fr": build(s, "fr"), "en": build(s, "en")}

dest = ROOT / "src/data/pw-docs.json"
dest.write_text(json.dumps(out, ensure_ascii=False, indent=0))
print("wrote", dest, "n", len(out), "bytes", dest.stat().st_size)

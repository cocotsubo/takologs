#!/usr/bin/env python3
"""Build src/data/substance-en.json from French substance copy."""
import json
import unicodedata
from pathlib import Path

ROOT = Path("/workspace/src/data")
subs = json.loads((ROOT / "substances.json").read_text())

NAMES = {
    "psilocybin": "Psilocybin (Mushrooms)",
    "psilocybin-mushrooms": "Psilocybin mushrooms",
    "ketamine": "Ketamine",
    "nitrous": "Nitrous oxide",
    "alcohol": "Alcohol",
    "diazepam": "Diazepam",
    "caffeine": "Caffeine",
    "cocaine": "Cocaine",
    "amphetamine": "Amphetamine",
    "methamphetamine": "Methamphetamine",
    "heroin": "Heroin",
    "methylphenidate": "Methylphenidate",
}

CLASS = {
    "Psychédélique sérotoninergique": "Serotonergic psychedelic",
    "Dépresseur du SNC": "CNS depressant",
    "Stimulant": "Stimulant",
    "Cannabinoïde": "Cannabinoid",
    "Dissociatif (antagoniste NMDA)": "Dissociative (NMDA antagonist)",
    "Divers": "Misc",
    "Cognitif / Nootropique": "Cognitive / Nootropic",
    "Empathogène / stimulant": "Empathogen / stimulant",
    "Délirant": "Deliriant",
    "Dépresseur / anxiolytique": "Depressant / anxiolytic",
    "Psychédélique / empathogène": "Psychedelic / empathogen",
    "Dissociatif court": "Short-acting dissociative",
    "Stimulant léger": "Mild stimulant",
    "Stimulant puissant": "Powerful stimulant",
    "Opioïde": "Opioid",
    "Opioïde / sérotoninergique": "Opioid / serotonergic",
    "Dissociatif": "Dissociative",
    "Opioïde / stimulant (dose-dépendant)": "Opioid / stimulant (dose-dependent)",
    "Psychédélique atypique (kappa-opioïde)": "Atypical psychedelic (kappa-opioid)",
    "Empathogène / psychédélique": "Empathogen / psychedelic",
    "Éveillant (wakefulness)": "Wakefulness promoter",
    "Vasodilatateur": "Vasodilator",
}

SUM = {
    "Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.":
        "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
    "Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.":
        "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
    "Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.":
        "CNS stimulant increasing alertness, energy and dopamine.",
    "Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.":
        "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
    "Substance psychoactive diverse, aux effets encore peu documentés.":
        "Miscellaneous psychoactive substance; effects still poorly documented.",
    "Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.":
        "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
    "Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.":
        "Nootropic aimed at cognitive function: memory, focus, alertness.",
    "Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.":
        "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
    "Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.":
        "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
}

NOTES = {
    "Set & setting déterminants.": "Set and setting are decisive.",
    "Testez vos produits.": "Test your products.",
    "Contre-indiqué en cas d'antécédents psychotiques.": "Contraindicated with a history of psychosis.",
    "Espacez les prises pour limiter la neurotoxicité.": "Space doses to limit neurotoxicity.",
    "Ne jamais mélanger avec alcool ou opioïdes.": "Never mix with alcohol or opioids.",
    "Sevrage potentiellement dangereux : ne pas arrêter brutalement.": "Withdrawal can be dangerous: do not stop abruptly.",
    "Hydratez-vous et mangez.": "Stay hydrated and eat.",
    "Surveillez le rythme cardiaque.": "Watch your heart rate.",
    "Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.":
        "Can trigger or worsen psychosis in vulnerable people.",
    "Édibles : effets retardés, ne pas recharger trop vite.": "Edibles: delayed effects — do not redose too soon.",
    "Assis/allongé : risque de chute.": "Sit or lie down: fall risk.",
    "Information limitée : consultez des sources spécialisées.": "Limited data: check specialised sources.",
    "Ne jamais mélanger avec dépresseurs.": "Never mix with depressants.",
    "Effets à long terme mal documentés.": "Long-term effects are poorly documented.",
    "Évitez tard le jour (insomnie).": "Avoid late in the day (insomnia).",
    "Testez toujours (danger PMA/PMMA).": "Always test (PMA/PMMA risk).",
    "Présence d’une personne sobre indispensable.": "A sober sitter is essential.",
    "Espacez d’au moins 6-8 semaines.": "Leave at least 6–8 weeks between doses.",
    "Buvez ~500 ml d’eau/heure si vous dansez.": "Drink ~500 ml of water per hour if dancing.",
    "Effets souvent désagréables voire dangereux.": "Effects are often unpleasant or even dangerous.",
    "Testez toujours le buvard avec un kit réactif (Ehrlich).": "Always reagent-test blotters (Ehrlich).",
    "Environnement (set & setting) déterminant.": "Set and setting are decisive.",
    "Potentiel de dépendance et neurotoxicité élevés.": "High dependence and neurotoxicity potential.",
    "Tenir hors de portée des enfants (liquides).": "Keep liquids out of children’s reach.",
    "Dosez à la seringue/pipette graduée, JAMAIS « au verre ».": "Dose with a syringe/pipette — NEVER “by the glass”.",
    "Identification d’espèce cruciale : risque de confusion mortelle.": "Species ID is critical: deadly mix-ups exist.",
    "Danger fentanyl : testez, réduisez la dose après toute pause.": "Fentanyl risk: test, and lower the dose after any break.",
    "Risque de convulsions au-delà des doses thérapeutiques.": "Seizure risk above therapeutic doses.",
    "Ne jamais associer aux sérotoninergiques.": "Never combine with serotonergic drugs.",
    "Usage quotidien : dépendance possible.": "Daily use: dependence possible.",
    "Espacez pour laisser récupérer la dopamine.": "Space doses so dopamine can recover.",
    "Évitez tard le soir.": "Avoid late at night.",
    "Sevrage potentiellement convulsif : jamais d’arrêt brutal.": "Withdrawal can cause seizures: never stop abruptly.",
    "Prendre tôt pour préserver le sommeil.": "Take early to protect sleep.",
    "Nausées de montée fréquentes.": "Come-up nausea is common.",
    "Vasoconstriction : prudence en cas de problème circulatoire.": "Vasoconstriction: caution with circulation issues.",
    "Risque sérotoninergique avec les antidépresseurs.": "Serotonin risk with antidepressants.",
    "Position latérale de sécurité en cas de vomissement.": "Recovery position if vomiting.",
    "Nausées quasi systématiques.": "Nausea is almost systematic.",
    "Conserver à l’abri de la lumière et de l’humidité.": "Store away from light and moisture.",
    "Sevrage dangereux : ne pas arrêter brutalement un usage régulier.": "Dangerous withdrawal: do not stop regular use abruptly.",
    "Ne pas insuffler/injecter les comprimés (cires, danger).": "Do not snort/inject tablets (binders, danger).",
}

EFF = {
    "Anxiété": "Anxiety",
    "Euphorie": "Euphoria",
    "Pupilles dilatées": "Dilated pupils",
    "Distorsion du temps": "Time distortion",
    "Confusion": "Confusion",
    "Détente": "Relaxation",
    "Tachycardie": "Tachycardia",
    "Introspection": "Introspection",
    "Pensée créative": "Creative thinking",
    "Bad trip possible": "Possible bad trip",
    "Sédation": "Sedation",
    "Visuels": "Visuals",
    "Amnésie": "Amnesia",
    "Insomnie": "Insomnia",
    "Concentration": "Focus",
    "Somnolence": "Drowsiness",
    "Éveil": "Wakefulness",
    "Anxiolyse": "Anxiolysis",
    "Relaxation musculaire": "Muscle relaxation",
    "Dépression respiratoire (en mélange)": "Respiratory depression (in mixes)",
    "Dépendance": "Dependence",
    "Énergie": "Energy",
    "Perte d’appétit": "Appetite loss",
    "Perte d'appétit": "Appetite loss",
    "Confiance": "Confidence",
    "Descente": "Come-down",
    "Effets variables": "Variable effects",
    "Rires": "Laughter",
    "Bouche sèche": "Dry mouth",
    "Paranoïa": "Paranoia",
    "Appétit": "Appetite",
    "Yeux rouges": "Red eyes",
    "Nausées": "Nausea",
    "Dissociation": "Dissociation",
    "Rêverie": "Daydreaming",
    "Ataxie": "Ataxia",
    "Désorientation": "Disorientation",
    "Effets secondaires possibles": "Possible side effects",
    "Distorsions": "Distortions",
    "Maux de tête": "Headache",
    "Mémoire": "Memory",
    "Visuels géométriques": "Geometric visuals",
    "Connexion émotionnelle": "Emotional connection",
    "Paranoïa possible": "Possible paranoia",
    "Sociabilité": "Sociability",
    "Clarté": "Clarity",
    "Toxicité": "Toxicity",
    "Neurotoxicité": "Neurotoxicity",
    "Sécheresse des muqueuses": "Dry mucous membranes",
    "Sensualité": "Sensuality",
    "Montée brutale": "Sharp come-up",
    "Rêverie intense (rarement agréable)": "Intense reverie (rarely pleasant)",
    "Émerveillement": "Awe",
    "Craving sévère": "Severe craving",
    "Ataxie (perte d’équilibre)": "Ataxia (loss of balance)",
    "Énergie intense": "Intense energy",
    "Syndrome sérotoninergique (en mélange)": "Serotonin syndrome (in mixes)",
    "Visuels colorés": "Colourful visuals",
    "Diurèse": "Diuresis",
    "Anesthésie locale": "Local anaesthesia",
    "Perte de contact avec la réalité": "Loss of contact with reality",
    "Musique amplifiée": "Music enhancement",
    "Élocution altérée": "Slurred speech",
    "Coma éthylique": "Alcohol poisoning",
    "Visuels légers": "Mild visuals",
    "Clarté mentale": "Mental clarity",
    "Perte de repères": "Loss of bearings",
    "Dépendance forte": "Strong dependence",
}

# extra unique summaries (the 1-count ones)
SUM.update({
    "Psychédélique classique extrêmement puissant actif au microgramme. Produit des altérations visuelles, une pensée associative et des états émotionnels intenses.":
        "Classic psychedelic, extremely potent at microgram doses. Visual alterations, associative thinking and intense emotions.",
    "Psychédélique naturel présent dans plus de 200 espèces de champignons. Effets chaleureux, organiques et introspectifs.":
        "Natural psychedelic found in 200+ mushroom species. Warm, organic, introspective effects.",
    "Psychédélique d’une intensité extrême et de très courte durée lorsqu’il est fumé. Visions immersives et sentiment de contact avec d’autres réalités.":
        "Extremely intense, very short-acting when smoked. Immersive visions and a sense of contact with other realities.",
    "Psychédélique classique issu de cactus, réputé pour ses effets chaleureux et corporels de longue durée.":
        "Classic cactus psychedelic, known for warm, bodily, long-lasting effects.",
    "Psychédélique doux et coloré à la frontière de l’empathogène, apprécié pour sa maniabilité.":
        "Gentle, colourful psychedelic on the empathogen border, valued for being manageable.",
    "Empathogène de référence provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.":
        "Reference empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
    "Anesthésique dissociatif produisant un détachement du corps, des distorsions sensorielles et, à forte dose, le « K-hole ».":
        "Dissociative anaesthetic producing body detachment, sensory distortions and, at high doses, the “K-hole”.",
    "Gaz dissociatif à effet très bref : vertige euphorique, distorsions sonores et fou rire.":
        "Very short-acting dissociative gas: euphoric dizziness, sound distortions and laughter.",
    "Plante psychoactive dont le THC procure détente, euphorie, altération sensorielle et appétit accru.":
        "Plant whose THC brings relaxation, euphoria, sensory change and increased appetite.",
    "Dépresseur légal du système nerveux : désinhibition, euphorie puis sédation et perte de coordination.":
        "Legal CNS depressant: disinhibition, euphoria, then sedation and loss of coordination.",
    "Dépresseur euphorisant à marge de sécurité très étroite : quelques dixièmes de ml séparent l’effet du coma.":
        "Euphoric depressant with a very narrow safety margin: tenths of a ml separate the effect from coma.",
    "Benzodiazépine anxiolytique et sédative de longue durée, à fort potentiel de dépendance.":
        "Long-acting anxiolytic sedative benzodiazepine with high dependence potential.",
    "Stimulant le plus consommé au monde : vigilance accrue et fatigue repoussée par blocage de l’adénosine.":
        "The world’s most used stimulant: more alertness, delayed fatigue via adenosine blockade.",
    "Stimulant à demi-vie courte et pouvoir addictif très élevé, agoniste des récepteurs nicotiniques.":
        "Short half-life, highly addictive stimulant; nicotinic receptor agonist.",
    "Stimulant puissant et court : euphorie, confiance et énergie, suivies d’une descente marquée.":
        "Short, powerful stimulant: euphoria, confidence and energy, then a marked come-down.",
    "Stimulant de durée moyenne : énergie, éveil et suppression de l’appétit, suivi d’une descente fatigante.":
        "Medium-duration stimulant: energy, wakefulness and appetite suppression, then a tiring come-down.",
    "Analogue synthétique proche de la psilocybine, aux effets chaleureux et visuels comparables.":
        "Synthetic analogue close to psilocybin, with similar warm visual effects.",
    "Alcaloïde psychédélique naturel des graines de liseron, plus corporel et sédatif que le LSD.":
        "Natural psychedelic alkaloid from morning-glory seeds, more bodily and sedating than LSD.",
    "Stimulant utilisé pour le TDAH : concentration et éveil par recapture bloquée de dopamine/noradrénaline.":
        "ADHD stimulant: focus and wakefulness via dopamine/noradrenaline reuptake blockade.",
    "Cousin de la MDMA, plus psychédélique, plus long et plus neurotoxique.":
        "MDMA cousin: more psychedelic, longer, more neurotoxic.",
    "Vasodilatateur inhalé à effet très bref : bouffée de chaleur, vertige et relâchement musculaire.":
        "Very short inhaled vasodilator: flush, dizziness and muscle relaxation.",
    "Benzodiazépine puissante à action rapide, fortement anxiolytique et très addictive.":
        "Powerful fast-acting benzodiazepine, strongly anxiolytic and highly addictive.",
    "Stimulant très puissant et durable à fort potentiel addictif et neurotoxique.":
        "Very powerful, long-lasting stimulant with high addictive and neurotoxic potential.",
    "Promoteur d’éveil doux favorisant la vigilance sans l’euphorie marquée des stimulants classiques.":
        "Gentle wakefulness promoter: alertness without the marked euphoria of classic stimulants.",
    "Antalgique opioïde atypique agissant aussi sur la sérotonine, d’où un risque convulsif et sérotoninergique.":
        "Atypical opioid analgesic that also acts on serotonin — seizure and serotonin-syndrome risk.",
    "Plante au psychédélisme atypique et déroutant, très bref lorsqu’elle est fumée.":
        "Plant with atypical, disorienting psychedelia; very brief when smoked.",
    "Plante d’Asie du Sud-Est : stimulante à faible dose, opioïde et sédative à dose élevée.":
        "Southeast-Asian plant: stimulating at low dose, opioid and sedating at high dose.",
    "Opioïde puissant procurant une euphorie chaude et une analgésie, avec un risque majeur de surdose respiratoire.":
        "Powerful opioid: warm euphoria and analgesia, with a major respiratory-overdose risk.",
    "Antitussif dissociatif produisant, à forte dose, des « plateaux » d’intensité croissante.":
        "Dissociative cough suppressant that, at high doses, produces rising “plateaus”.",
})


def deaccent(s: str) -> str:
    return unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode()


def tr_note(s: str) -> str:
    if s in NOTES:
        return NOTES[s]
    return NOTES.get(s.replace("'", "’"), s)


def tr_eff(s: str) -> str:
    if s in EFF:
        return EFF[s]
    return EFF.get(s.replace("'", "’"), s)


out = {}
missing_sum = set()
missing_eff = set()
missing_note = set()
for s in subs:
    slug = s["slug"]
    name = NAMES.get(slug) or s["name"]
    if any(c in name for c in "éèêàùçôîïÉ"):
        name = deaccent(name)
    summary = SUM.get(s.get("summary", ""), "")
    if not summary:
        missing_sum.add(s.get("summary", ""))
        summary = s.get("summary", "")
    fx = s.get("effects") or {}
    pe, ne, ng = [], [], []
    for k, bucket in (("positive", pe), ("neutral", ne), ("negative", ng)):
        for x in fx.get(k, []):
            t = tr_eff(x)
            if t == x and any(c in x for c in "éèàùçÉê"):
                missing_eff.add(x)
            bucket.append(t)
    notes = []
    for n in s.get("riskNotes", []):
        t = tr_note(n)
        if t == n and any(c in n for c in "éèàùçÉê"):
            missing_note.add(n)
        notes.append(t)
    out[slug] = {
        "name": name,
        "psychoactiveClass": CLASS.get(s.get("psychoactiveClass", ""), s.get("psychoactiveClass", "")),
        "chemicalClass": s.get("chemicalClass", ""),
        "summary": summary,
        "effects": {"positive": pe, "neutral": ne, "negative": ng},
        "riskNotes": notes,
        "aliases": s.get("aliases", []),
    }

(ROOT / "substance-en.json").write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print("wrote", len(out))
print("missing summaries", len(missing_sum))
for x in list(missing_sum)[:15]:
    print(" SUM", x[:140])
print("missing effects", len(missing_eff))
for x in list(missing_eff)[:20]:
    print(" EFF", x)
print("missing notes", len(missing_note))
for x in list(missing_note)[:20]:
    print(" NOTE", x)
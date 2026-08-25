//#region node_modules/.nitro/vite/services/ssr/assets/chat-parse-Cfiiw-J0.js
function normName(s) {
	return s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var substances_default = /*#__PURE__*/ JSON.parse("[{\"slug\":\"lsd\",\"name\":\"LSD\",\"aliases\":[\"Acide\",\"Lucy\",\"LSD-25\",\"Buvard\",\"Trip\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Lysergamide\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique classique extrêmement puissant actif au microgramme. Produit des altérations visuelles, une pensée associative et des états émotionnels intenses.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":15,\"common\":75,\"strong\":150,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[180,300],\"totalMin\":[480,720],\"afterMin\":[360,720]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels géométriques\",\"Pensée créative\",\"Connexion émotionnelle\",\"Rires\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\",\"Introspection\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Paranoïa possible\",\"Insomnie\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"Lithium\",\"Tramadol\",\"ISRS (syndrome sérotoninergique rare)\"],\"caution\":[\"Cannabis\",\"Stimulants\"]},\"harm\":{\"physical\":12,\"dependence\":8,\"social\":15},\"riskNotes\":[\"Testez toujours le buvard avec un kit réactif (Ehrlich).\",\"Environnement (set & setting) déterminant.\",\"Contre-indiqué en cas d’antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"psilocybin\",\"name\":\"Psilocybine (Champignons)\",\"aliases\":[\"Champignons magiques\",\"Shrooms\",\"Champis\",\"Psilo\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique naturel présent dans plus de 200 espèces de champignons. Effets chaleureux, organiques et introspectifs.\",\"doses\":[{\"route\":\"Orale (séché)\",\"threshold\":0.25,\"light\":1,\"common\":2.5,\"strong\":4,\"heavy\":5,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,360],\"afterMin\":[120,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels ondulants\",\"Fou rire\",\"Sentiment d’unité\",\"Introspection\"],\"neutral\":[\"Bâillements\",\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Nausées\",\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"Tramadol\",\"IMAO (potentialisation forte)\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":8,\"dependence\":5,\"social\":12},\"riskNotes\":[\"Identification d’espèce cruciale : risque de confusion mortelle.\",\"Commencez bas, la puissance varie fortement.\"],\"color\":\"#b1573a\",\"emoji\":\"🍄\"},{\"slug\":\"dmt\",\"name\":\"DMT\",\"aliases\":[\"N,N-DMT\",\"Dimitri\",\"La molécule de l’esprit\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique d’une intensité extrême et de très courte durée lorsqu’il est fumé. Visions immersives et sentiment de contact avec d’autres réalités.\",\"doses\":[{\"route\":\"Vaporisée\",\"threshold\":2,\"light\":10,\"common\":20,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[0,1],\"peakMin\":[2,8],\"totalMin\":[10,20]},\"effects\":{\"positive\":[\"Visions immersives\",\"Euphorie\",\"Émerveillement\",\"Géométrie complexe\"],\"neutral\":[\"Perte de repères\",\"Distorsion temporelle extrême\"],\"negative\":[\"Peur intense\",\"Confusion\",\"Montée brutale\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO (sauf ayahuasca encadrée)\",\"ISRS\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":10,\"dependence\":4,\"social\":10},\"riskNotes\":[\"Toujours assis ou allongé.\",\"Présence d’une personne sobre recommandée.\"],\"color\":\"#c95f8e\",\"emoji\":\"👁️\"},{\"slug\":\"mescaline\",\"name\":\"Mescaline\",\"aliases\":[\"Peyotl\",\"San Pedro\",\"Cactus\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique classique issu de cactus, réputé pour ses effets chaleureux et corporels de longue durée.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":50,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[45,90],\"peakMin\":[240,360],\"totalMin\":[600,720],\"afterMin\":[120,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Couleurs vives\",\"Chaleur émotionnelle\",\"Créativité\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Nausées\",\"Anxiété\",\"Tachycardie\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":10,\"dependence\":4,\"social\":10},\"riskNotes\":[\"Nausées de montée fréquentes.\",\"Longue durée : prévoyez la journée entière.\"],\"color\":\"#c9a15a\",\"emoji\":\"🌵\"},{\"slug\":\"2c-b\",\"name\":\"2C-B\",\"aliases\":[\"Nexus\",\"Bromo\",\"Tusi (souvent frelaté)\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique / empathogène\",\"summary\":\"Psychédélique doux et coloré à la frontière de l’empathogène, apprécié pour sa maniabilité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":25,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,180],\"totalMin\":[240,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels colorés\",\"Stimulation\",\"Sensualité\"],\"neutral\":[\"Pupilles dilatées\",\"Distorsion du temps\"],\"negative\":[\"Nausées\",\"Anxiété\",\"Frissons\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"IMAO\"],\"caution\":[\"Stimulants\",\"Cannabis\"]},\"harm\":{\"physical\":12,\"dependence\":8,\"social\":14},\"riskNotes\":[\"« Tusi »/« tucibi » rose contient rarement du vrai 2C-B : testez.\",\"Dosage au mg près (balance précise).\"],\"color\":\"#c95f8e\",\"emoji\":\"🎨\"},{\"slug\":\"mdma\",\"name\":\"MDMA\",\"aliases\":[\"Ecstasy\",\"Molly\",\"XTC\",\"Taz\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène de référence provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":20,\"common\":80,\"strong\":120,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360],\"afterMin\":[720,2880]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Énergie\",\"Sociabilité\"],\"neutral\":[\"Bruxisme (mâchoires)\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Déshydratation / hyponatrémie\",\"Descente dépressive\",\"Bruxisme\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\",\"Autres stimulants\"],\"caution\":[\"Alcool\",\"Cannabis\"]},\"harm\":{\"physical\":30,\"dependence\":20,\"social\":25},\"riskNotes\":[\"Règle de la sérotonine : espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez, sans excès (risque hyponatrémie).\",\"Testez toujours (danger PMA/PMMA).\",\"Complémentez éventuellement (magnésium) contre le bruxisme.\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"ketamine\",\"name\":\"Kétamine\",\"aliases\":[\"Ké\",\"K\",\"Special K\",\"Kéta\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Anesthésique dissociatif produisant un détachement du corps, des distorsions sensorielles et, à forte dose, le « K-hole ».\",\"doses\":[{\"route\":\"Insufflée\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":75,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[5,15],\"peakMin\":[20,40],\"totalMin\":[45,90],\"afterMin\":[60,120]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Analgésie\",\"Rêverie\"],\"neutral\":[\"Distorsions visuelles\",\"Ataxie (perte d’équilibre)\"],\"negative\":[\"Nausées\",\"K-hole\",\"Confusion\",\"Atteinte vésicale (usage chronique)\"]},\"neurotransmitters\":[\"glutamate\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":30,\"social\":22},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes (dépression respiratoire).\",\"Assis/allongé : risque de chute.\",\"Usage régulier : cystite kétaminique, ménagez la fréquence.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"nitrous\",\"name\":\"Protoxyde d’azote\",\"aliases\":[\"Proto\",\"N2O\",\"Gaz hilarant\",\"Ballon\"],\"category\":\"dissociative\",\"chemicalClass\":\"Gaz inorganique\",\"psychoactiveClass\":\"Dissociatif court\",\"summary\":\"Gaz dissociatif à effet très bref : vertige euphorique, distorsions sonores et fou rire.\",\"doses\":[{\"route\":\"Inhalée\",\"threshold\":1,\"light\":1,\"common\":2,\"strong\":4,\"heavy\":6,\"unit\":\"cartouche\"}],\"duration\":{\"onsetMin\":[0,1],\"peakMin\":[0,1],\"totalMin\":[1,5]},\"effects\":{\"positive\":[\"Euphorie\",\"Fou rire\",\"Distorsions sonores\",\"Légèreté\"],\"neutral\":[\"Vertige\",\"Picotements\"],\"negative\":[\"Perte de connaissance\",\"Chute\",\"Carence B12 (usage répété)\"]},\"neurotransmitters\":[\"glutamate\",\"opioid\"],\"interactions\":{\"dangerous\":[\"Debout (risque de chute/syncope)\"],\"caution\":[\"Dépresseurs\"]},\"harm\":{\"physical\":18,\"dependence\":15,\"social\":8},\"riskNotes\":[\"Toujours assis. Jamais avec un masque scellé (asphyxie).\",\"Ne pas inhaler directement la cartouche glacée (brûlure).\",\"Supplémentez en vitamine B12 si usage répété.\"],\"color\":\"#6f86c9\",\"emoji\":\"💨\"},{\"slug\":\"cannabis\",\"name\":\"Cannabis\",\"aliases\":[\"Weed\",\"Herbe\",\"Beuh\",\"Shit\",\"THC\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Phytocannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Plante psychoactive dont le THC procure détente, euphorie, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Fumée/Vaporisée\",\"threshold\":0.03,\"light\":0.05,\"common\":0.15,\"strong\":0.3,\"heavy\":0.5,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[0,10],\"peakMin\":[30,90],\"totalMin\":[120,240],\"afterMin\":[120,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Rires\",\"Appétit\",\"Musique amplifiée\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\",\"Malaise vagal (« blanc »)\"]},\"neurotransmitters\":[\"cannabinoid\",\"dopamine\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool (malaise)\"]},\"harm\":{\"physical\":15,\"dependence\":22,\"social\":20},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"alcohol\",\"name\":\"Alcool\",\"aliases\":[\"Éthanol\",\"Bière\",\"Vin\",\"Spiritueux\"],\"category\":\"depressant\",\"chemicalClass\":\"Alcool (éthanol)\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur légal du système nerveux : désinhibition, euphorie puis sédation et perte de coordination.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2,\"common\":4,\"strong\":6,\"heavy\":10,\"unit\":\"verre\"}],\"duration\":{\"onsetMin\":[5,30],\"peakMin\":[30,90],\"totalMin\":[120,360],\"afterMin\":[360,720]},\"effects\":{\"positive\":[\"Désinhibition\",\"Euphorie\",\"Sociabilité\",\"Détente\"],\"neutral\":[\"Élocution altérée\",\"Chaleur\"],\"negative\":[\"Nausées / vomissements\",\"Perte de coordination\",\"Trous de mémoire\",\"Coma éthylique\"]},\"neurotransmitters\":[\"gaba\",\"glutamate\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"Benzodiazépines\",\"Opioïdes\",\"GHB\",\"Kétamine\"],\"caution\":[\"Stimulants (masque l’ivresse)\"]},\"harm\":{\"physical\":55,\"dependence\":55,\"social\":72},\"riskNotes\":[\"Ne jamais combiner avec d’autres dépresseurs (arrêt respiratoire).\",\"Position latérale de sécurité en cas de vomissement.\",\"Hydratez-vous et mangez.\"],\"color\":\"#5b8a72\",\"emoji\":\"🍷\"},{\"slug\":\"ghb\",\"name\":\"GHB / GBL\",\"aliases\":[\"G\",\"Liquid ecstasy\",\"GBL\"],\"category\":\"depressant\",\"chemicalClass\":\"Acide gras / lactone\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur euphorisant à marge de sécurité très étroite : quelques dixièmes de ml séparent l’effet du coma.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":2.5,\"heavy\":4,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[10,30],\"peakMin\":[30,60],\"totalMin\":[90,180]},\"effects\":{\"positive\":[\"Euphorie\",\"Désinhibition\",\"Sensualité\",\"Détente\"],\"neutral\":[\"Somnolence\",\"Vertige\"],\"negative\":[\"Perte de connaissance (G-hole)\",\"Vomissements\",\"Coma\",\"Arrêt respiratoire\"]},\"neurotransmitters\":[\"gaba\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Benzodiazépines\",\"Opioïdes\",\"Kétamine\"],\"caution\":[]},\"harm\":{\"physical\":45,\"dependence\":45,\"social\":40},\"riskNotes\":[\"Dosez à la seringue/pipette graduée, JAMAIS « au verre ».\",\"Respectez au moins 2-3 h entre deux prises.\",\"Jamais avec de l’alcool : combinaison potentiellement mortelle.\"],\"color\":\"#5b8a72\",\"emoji\":\"🧴\"},{\"slug\":\"diazepam\",\"name\":\"Diazépam\",\"aliases\":[\"Valium\",\"Benzo\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine\",\"psychoactiveClass\":\"Dépresseur / anxiolytique\",\"summary\":\"Benzodiazépine anxiolytique et sédative de longue durée, à fort potentiel de dépendance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":15,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[240,720],\"afterMin\":[720,2880]},\"effects\":{\"positive\":[\"Anxiolyse\",\"Détente\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Désinhibition\",\"Dépendance rapide\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":60,\"social\":35},\"riskNotes\":[\"Ne jamais associer aux opioïdes ou à l’alcool.\",\"Sevrage dangereux : ne pas arrêter brutalement un usage régulier.\"],\"color\":\"#5b8a72\",\"emoji\":\"💊\"},{\"slug\":\"caffeine\",\"name\":\"Caféine\",\"aliases\":[\"Café\",\"Thé\",\"Guarana\"],\"category\":\"stimulant\",\"chemicalClass\":\"Xanthine\",\"psychoactiveClass\":\"Stimulant léger\",\"summary\":\"Stimulant le plus consommé au monde : vigilance accrue et fatigue repoussée par blocage de l’adénosine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":50,\"strong\":150,\"heavy\":500,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[10,30],\"peakMin\":[45,90],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Vigilance\",\"Énergie\",\"Concentration\"],\"neutral\":[\"Diurèse\",\"Accélération cardiaque\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tremblements\",\"Palpitations\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Autres stimulants\"]},\"harm\":{\"physical\":8,\"dependence\":20,\"social\":4},\"riskNotes\":[\"Au-delà de ~400 mg/jour : anxiété et palpitations.\",\"Évitez tard le soir.\"],\"color\":\"#c99a2e\",\"emoji\":\"☕\"},{\"slug\":\"nicotine\",\"name\":\"Nicotine\",\"aliases\":[\"Tabac\",\"Cigarette\",\"Vape\"],\"category\":\"stimulant\",\"chemicalClass\":\"Alcaloïde\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant à demi-vie courte et pouvoir addictif très élevé, agoniste des récepteurs nicotiniques.\",\"doses\":[{\"route\":\"Inhalée\",\"threshold\":0.2,\"light\":0.5,\"common\":2,\"strong\":4,\"heavy\":6,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[0,5],\"peakMin\":[5,10],\"totalMin\":[30,60]},\"effects\":{\"positive\":[\"Éveil\",\"Détente paradoxale\",\"Concentration\"],\"neutral\":[\"Accélération cardiaque\"],\"negative\":[\"Nausées (débutant)\",\"Dépendance forte\",\"Vertiges\"]},\"neurotransmitters\":[\"acetylcholine\",\"dopamine\"],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":20,\"dependence\":75,\"social\":15},\"riskNotes\":[\"Potentiel de dépendance parmi les plus élevés.\",\"Tenir hors de portée des enfants (liquides).\"],\"color\":\"#c99a2e\",\"emoji\":\"🚬\"},{\"slug\":\"cocaine\",\"name\":\"Cocaïne\",\"aliases\":[\"Coke\",\"Coca\",\"Neige\",\"C\"],\"category\":\"stimulant\",\"chemicalClass\":\"Alcaloïde tropane\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant puissant et court : euphorie, confiance et énergie, suivies d’une descente marquée.\",\"doses\":[{\"route\":\"Insufflée\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":60,\"heavy\":90,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[1,10],\"peakMin\":[15,30],\"totalMin\":[30,90],\"afterMin\":[60,240]},\"effects\":{\"positive\":[\"Euphorie\",\"Confiance\",\"Énergie\",\"Sociabilité\"],\"neutral\":[\"Pupilles dilatées\",\"Anesthésie locale\"],\"negative\":[\"Craving intense\",\"Anxiété\",\"Tachycardie\",\"Risque cardiaque\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\",\"serotonin\"],\"interactions\":{\"dangerous\":[\"Alcool (cocaéthylène, toxique)\",\"Opioïdes (speedball)\",\"IMAO\"],\"caution\":[\"Autres stimulants\"]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":55},\"riskNotes\":[\"Cocaïne + alcool forme le cocaéthylène, cardiotoxique.\",\"Ne partagez pas les pailles (hépatites).\",\"Attention aux surdoses en cas de forte pureté.\"],\"color\":\"#c99a2e\",\"emoji\":\"❄️\"},{\"slug\":\"amphetamine\",\"name\":\"Amphétamine\",\"aliases\":[\"Speed\",\"Amph\",\"Sulfate\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant de durée moyenne : énergie, éveil et suppression de l’appétit, suivi d’une descente fatigante.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2.5,\"light\":5,\"common\":10,\"strong\":25,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[240,480],\"afterMin\":[360,720]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Perte d’appétit\",\"Pupilles dilatées\",\"Bruxisme\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Descente dépressive\",\"Tachycardie\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":35},\"riskNotes\":[\"Hydratez-vous et mangez malgré la coupe-faim.\",\"Espacez pour laisser récupérer la dopamine.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"methamphetamine\",\"name\":\"Méthamphétamine\",\"aliases\":[\"Crystal\",\"Meth\",\"Tina\",\"Ice\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Stimulant puissant\",\"summary\":\"Stimulant très puissant et durable à fort potentiel addictif et neurotoxique.\",\"doses\":[{\"route\":\"Orale/Insufflée\",\"threshold\":5,\"light\":5,\"common\":10,\"strong\":30,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[10,60],\"peakMin\":[180,360],\"totalMin\":[480,720],\"afterMin\":[720,1440]},\"effects\":{\"positive\":[\"Euphorie\",\"Énergie intense\",\"Confiance\",\"Libido\"],\"neutral\":[\"Perte d’appétit\",\"Insomnie\",\"Bruxisme\"],\"negative\":[\"Craving sévère\",\"Paranoïa\",\"Psychose\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[]},\"harm\":{\"physical\":55,\"dependence\":70,\"social\":60},\"riskNotes\":[\"Potentiel de dépendance et neurotoxicité élevés.\",\"Repos, hydratation et alimentation essentiels.\"],\"color\":\"#b1573a\",\"emoji\":\"💎\"},{\"slug\":\"heroin\",\"name\":\"Héroïne\",\"aliases\":[\"Diacétylmorphine\",\"H\",\"Rabla\",\"Brown\"],\"category\":\"opioid\",\"chemicalClass\":\"Opioïde semi-synthétique\",\"psychoactiveClass\":\"Opioïde\",\"summary\":\"Opioïde puissant procurant une euphorie chaude et une analgésie, avec un risque majeur de surdose respiratoire.\",\"doses\":[{\"route\":\"Insufflée\",\"threshold\":5,\"light\":7.5,\"common\":20,\"strong\":35,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[1,10],\"peakMin\":[30,60],\"totalMin\":[180,300]},\"effects\":{\"positive\":[\"Euphorie\",\"Chaleur\",\"Analgésie\",\"Détente profonde\"],\"neutral\":[\"Myosis (pupilles en pointe)\",\"Somnolence\"],\"negative\":[\"Dépression respiratoire\",\"Constipation\",\"Dépendance forte\",\"Surdose\"]},\"neurotransmitters\":[\"opioid\",\"dopamine\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Benzodiazépines\",\"GHB\",\"Autres opioïdes\"],\"caution\":[]},\"harm\":{\"physical\":65,\"dependence\":85,\"social\":70},\"riskNotes\":[\"Ayez de la naloxone à portée de main.\",\"Ne consommez jamais seul.\",\"Danger fentanyl : testez, réduisez la dose après toute pause.\"],\"color\":\"#8a6239\",\"emoji\":\"💉\"},{\"slug\":\"tramadol\",\"name\":\"Tramadol\",\"aliases\":[\"Tramal\",\"Topalgic\"],\"category\":\"opioid\",\"chemicalClass\":\"Opioïde synthétique\",\"psychoactiveClass\":\"Opioïde / sérotoninergique\",\"summary\":\"Antalgique opioïde atypique agissant aussi sur la sérotonine, d’où un risque convulsif et sérotoninergique.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":25,\"common\":100,\"strong\":250,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Analgésie\",\"Euphorie légère\",\"Détente\"],\"neutral\":[\"Somnolence\",\"Nausées\"],\"negative\":[\"Convulsions (dose élevée)\",\"Syndrome sérotoninergique\",\"Dépendance\"]},\"neurotransmitters\":[\"opioid\",\"serotonin\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"ISRS\",\"IMAO\",\"MDMA\",\"Psychédéliques\",\"Alcool\",\"Benzodiazépines\"],\"caution\":[]},\"harm\":{\"physical\":45,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Risque de convulsions au-delà des doses thérapeutiques.\",\"Ne jamais associer aux sérotoninergiques.\"],\"color\":\"#b1573a\",\"emoji\":\"💊\"},{\"slug\":\"dxm\",\"name\":\"DXM\",\"aliases\":[\"Dextrométhorphane\",\"Robo\",\"Sirop\"],\"category\":\"dissociative\",\"chemicalClass\":\"Morphinane\",\"psychoactiveClass\":\"Dissociatif\",\"summary\":\"Antitussif dissociatif produisant, à forte dose, des « plateaux » d’intensité croissante.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":150,\"common\":300,\"strong\":450,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,90],\"peakMin\":[120,240],\"totalMin\":[360,540]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Distorsions musicales\"],\"neutral\":[\"Ataxie\",\"Nausées\"],\"negative\":[\"Confusion\",\"Hyperthermie\",\"Syndrome sérotoninergique (en mélange)\"]},\"neurotransmitters\":[\"glutamate\",\"serotonin\"],\"interactions\":{\"dangerous\":[\"ISRS\",\"IMAO\",\"MDMA\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":25,\"dependence\":20,\"social\":15},\"riskNotes\":[\"Évitez les sirops contenant paracétamol/antihistaminiques (toxiques à ces doses).\",\"Risque sérotoninergique avec les antidépresseurs.\"],\"color\":\"#6f86c9\",\"emoji\":\"🧪\"},{\"slug\":\"alprazolam\",\"name\":\"Alprazolam\",\"aliases\":[\"Xanax\",\"Xan\",\"Barrette\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine\",\"psychoactiveClass\":\"Dépresseur / anxiolytique\",\"summary\":\"Benzodiazépine puissante à action rapide, fortement anxiolytique et très addictive.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":0.25,\"common\":0.5,\"strong\":1.5,\"heavy\":2,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,120],\"totalMin\":[240,360],\"afterMin\":[360,720]},\"effects\":{\"positive\":[\"Anxiolyse\",\"Détente\"],\"neutral\":[\"Sédation\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Désinhibition\",\"Dépendance rapide\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":42,\"dependence\":65,\"social\":38},\"riskNotes\":[\"Sevrage potentiellement convulsif : jamais d’arrêt brutal.\",\"Comprimés de rue souvent surdosés/frelatés.\"],\"color\":\"#5b8a72\",\"emoji\":\"💊\"},{\"slug\":\"kratom\",\"name\":\"Kratom\",\"aliases\":[\"Mitragyna\",\"Ketum\"],\"category\":\"opioid\",\"chemicalClass\":\"Alcaloïde indolique\",\"psychoactiveClass\":\"Opioïde / stimulant (dose-dépendant)\",\"summary\":\"Plante d’Asie du Sud-Est : stimulante à faible dose, opioïde et sédative à dose élevée.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2,\"common\":3,\"strong\":5,\"heavy\":8,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,150],\"totalMin\":[180,300]},\"effects\":{\"positive\":[\"Énergie (faible dose)\",\"Analgésie\",\"Détente (dose élevée)\"],\"neutral\":[\"Nausées\",\"Constipation\"],\"negative\":[\"Dépendance\",\"Vertiges\",\"Sédation\"]},\"neurotransmitters\":[\"opioid\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"Autres opioïdes\",\"Dépresseurs\",\"IMAO\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":35,\"social\":15},\"riskNotes\":[\"Usage quotidien : dépendance possible.\",\"Prudence en association avec d’autres dépresseurs.\"],\"color\":\"#8a6239\",\"emoji\":\"🍃\"},{\"slug\":\"salvia\",\"name\":\"Salvia divinorum\",\"aliases\":[\"Sauge des devins\",\"Salvia\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Diterpène (Salvinorine A)\",\"psychoactiveClass\":\"Psychédélique atypique (kappa-opioïde)\",\"summary\":\"Plante au psychédélisme atypique et déroutant, très bref lorsqu’elle est fumée.\",\"doses\":[{\"route\":\"Vaporisée\",\"threshold\":200,\"light\":500,\"common\":750,\"strong\":1000,\"heavy\":1500,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[0,1],\"peakMin\":[1,5],\"totalMin\":[10,20]},\"effects\":{\"positive\":[\"Rires\",\"Perceptions inhabituelles\"],\"neutral\":[\"Sensation de mouvement\",\"Réalités alternatives\"],\"negative\":[\"Peur\",\"Désorientation\",\"Perte de contact avec la réalité\"]},\"neurotransmitters\":[\"opioid\"],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":10,\"dependence\":3,\"social\":8},\"riskNotes\":[\"Présence d’une personne sobre indispensable.\",\"Assis/allongé, loin de tout danger.\"],\"color\":\"#c9704f\",\"emoji\":\"🌺\"},{\"slug\":\"4-aco-dmt\",\"name\":\"4-AcO-DMT\",\"aliases\":[\"Psilacétine\",\"O-Acétylpsilocine\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Analogue synthétique proche de la psilocybine, aux effets chaleureux et visuels comparables.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":7.5,\"common\":15,\"strong\":25,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Introspection\",\"Fou rire\"],\"neutral\":[\"Pupilles dilatées\",\"Distorsion du temps\"],\"negative\":[\"Nausées\",\"Anxiété\",\"Confusion\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Balance de précision (mg) indispensable.\",\"Conserver à l’abri de la lumière et de l’humidité.\"],\"color\":\"#c95f8e\",\"emoji\":\"🍄\"},{\"slug\":\"mda\",\"name\":\"MDA\",\"aliases\":[\"Sass\",\"Sally\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / psychédélique\",\"summary\":\"Cousin de la MDMA, plus psychédélique, plus long et plus neurotoxique.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":60,\"strong\":100,\"heavy\":145,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[300,420],\"afterMin\":[720,2880]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Visuels légers\",\"Énergie\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente marquée\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":32,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Plus neurotoxique que la MDMA : dosez prudemment et espacez.\",\"Gérez la température corporelle.\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"modafinil\",\"name\":\"Modafinil\",\"aliases\":[\"Modiodal\",\"Provigil\"],\"category\":\"stimulant\",\"chemicalClass\":\"Benzhydryl\",\"psychoactiveClass\":\"Éveillant (wakefulness)\",\"summary\":\"Promoteur d’éveil doux favorisant la vigilance sans l’euphorie marquée des stimulants classiques.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[600,900]},\"effects\":{\"positive\":[\"Vigilance\",\"Concentration\",\"Endurance mentale\"],\"neutral\":[\"Perte d’appétit\",\"Bouche sèche\"],\"negative\":[\"Insomnie\",\"Maux de tête\",\"Anxiété\",\"Éruptions cutanées (rare, grave)\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Autres stimulants\",\"Contraceptifs (efficacité réduite)\"]},\"harm\":{\"physical\":12,\"dependence\":15,\"social\":6},\"riskNotes\":[\"Prendre tôt pour préserver le sommeil.\",\"Arrêter immédiatement en cas d’éruption cutanée.\"],\"color\":\"#c99a2e\",\"emoji\":\"🧠\"},{\"slug\":\"poppers\",\"name\":\"Poppers\",\"aliases\":[\"Nitrites d’alkyle\",\"Rush\"],\"category\":\"depressant\",\"chemicalClass\":\"Nitrite d’alkyle\",\"psychoactiveClass\":\"Vasodilatateur\",\"summary\":\"Vasodilatateur inhalé à effet très bref : bouffée de chaleur, vertige et relâchement musculaire.\",\"doses\":[{\"route\":\"Inhalée\",\"threshold\":1,\"light\":1,\"common\":1,\"strong\":2,\"heavy\":3,\"unit\":\"inhalation\"}],\"duration\":{\"onsetMin\":[0,1],\"peakMin\":[0,1],\"totalMin\":[1,3]},\"effects\":{\"positive\":[\"Bouffée euphorique\",\"Relâchement musculaire\",\"Sensualité\"],\"neutral\":[\"Chaleur au visage\",\"Accélération cardiaque\"],\"negative\":[\"Maux de tête\",\"Chute de tension\",\"Malaise\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[\"Sildénafil/Viagra (chute de tension mortelle)\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":5,\"social\":5},\"riskNotes\":[\"Jamais avec des médicaments de l’érection (Viagra/Cialis).\",\"Ne pas avaler (toxique).\"],\"color\":\"#5b8a72\",\"emoji\":\"🍾\"},{\"slug\":\"methylphenidate\",\"name\":\"Méthylphénidate\",\"aliases\":[\"Ritaline\",\"Concerta\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine (pipéridine)\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant utilisé pour le TDAH : concentration et éveil par recapture bloquée de dopamine/noradrénaline.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,360]},\"effects\":{\"positive\":[\"Concentration\",\"Énergie\",\"Motivation\"],\"neutral\":[\"Perte d’appétit\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[]},\"harm\":{\"physical\":22,\"dependence\":30,\"social\":20},\"riskNotes\":[\"Ne pas insuffler/injecter les comprimés (cires, danger).\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"lsa\",\"name\":\"LSA\",\"aliases\":[\"Graines de liseron\",\"Hawaiian baby woodrose\",\"Ergine\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Lysergamide\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Alcaloïde psychédélique naturel des graines de liseron, plus corporel et sédatif que le LSD.\",\"doses\":[{\"route\":\"Orale (graines)\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":250,\"heavy\":400,\"unit\":\"graines\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,300],\"totalMin\":[360,600]},\"effects\":{\"positive\":[\"Euphorie\",\"Rêverie\",\"Visuels légers\",\"Introspection\"],\"neutral\":[\"Sédation\",\"Lourdeur corporelle\"],\"negative\":[\"Nausées importantes\",\"Vasoconstriction\",\"Anxiété\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Vasoconstricteurs\"],\"caution\":[\"Cannabis\"]},\"harm\":{\"physical\":15,\"dependence\":5,\"social\":8},\"riskNotes\":[\"Nausées quasi systématiques.\",\"Vasoconstriction : prudence en cas de problème circulatoire.\"],\"color\":\"#c9704f\",\"emoji\":\"🌱\"},{\"slug\":\"psilocybin-mushrooms\",\"name\":\"Psilocybin mushrooms\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2.5,\"light\":2.5,\"common\":10,\"strong\":25,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"ayahuasca\",\"name\":\"Ayahuasca\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1b-lsd\",\"name\":\"1B-LSD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":25,\"common\":75,\"strong\":150,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1cp-al-lad\",\"name\":\"1cP-AL-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":225,\"heavy\":350,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1cp-lsd\",\"name\":\"1cP-LSD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":25,\"common\":75,\"strong\":150,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1cp-mipla\",\"name\":\"1cP-MiPLA\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":200,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1p-eth-lad\",\"name\":\"1P-ETH-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":30,\"common\":60,\"strong\":100,\"heavy\":200,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1p-lsd\",\"name\":\"1P-LSD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":25,\"common\":75,\"strong\":150,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"1v-lsd\",\"name\":\"1V-LSD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":25,\"common\":75,\"strong\":150,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"al-lad\",\"name\":\"AL-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":225,\"heavy\":350,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"ald-52\",\"name\":\"ALD-52\",\"aliases\":[\"1A-LSD\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":30,\"common\":100,\"strong\":175,\"heavy\":325,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"eth-lad\",\"name\":\"ETH-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":30,\"common\":60,\"strong\":150,\"heavy\":225,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"lae-32\",\"name\":\"LAE-32\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":500,\"strong\":50,\"heavy\":80,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"lsm-775\",\"name\":\"LSM-775\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":250,\"light\":500,\"common\":750,\"strong\":1250,\"heavy\":1500,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"lsz\",\"name\":\"LSZ\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":300,\"heavy\":400,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"mipla\",\"name\":\"MiPLA\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":200,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"pargy-lad\",\"name\":\"PARGY-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":125,\"common\":275,\"strong\":500,\"heavy\":700,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"pro-lad\",\"name\":\"PRO-LAD\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":350,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"amt\",\"name\":\"aMT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"det\",\"name\":\"DET\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":40,\"strong\":70,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"dipt\",\"name\":\"DiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":15,\"common\":30,\"strong\":75,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"dpt\",\"name\":\"DPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":75,\"common\":150,\"strong\":250,\"heavy\":350,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"ept\",\"name\":\"EPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":20,\"common\":40,\"strong\":80,\"heavy\":110,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"met\",\"name\":\"MET\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":40,\"light\":60,\"common\":120,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"mipt\",\"name\":\"MiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":10,\"strong\":25,\"heavy\":75,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"mpt\",\"name\":\"MPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"tryptamine\",\"name\":\"Tryptamine\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-aco-det\",\"name\":\"4-AcO-DET\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":20,\"heavy\":35,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-aco-dipt\",\"name\":\"4-AcO-DiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":5,\"common\":15,\"strong\":30,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-aco-met\",\"name\":\"4-AcO-MET\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-aco-mipt\",\"name\":\"4-AcO-MiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":20,\"heavy\":35,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-det\",\"name\":\"4-HO-DET\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":30,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-dipt\",\"name\":\"4-HO-DiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":3,\"common\":10,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-dpt\",\"name\":\"4-HO-DPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":60,\"strong\":90,\"heavy\":130,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-ept\",\"name\":\"4-HO-EPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":15,\"common\":30,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-met\",\"name\":\"4-HO-MET\",\"aliases\":[\"Metocin\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":15,\"strong\":25,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-mipt\",\"name\":\"4-HO-MiPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":25,\"heavy\":35,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"4-ho-mpt\",\"name\":\"4-HO-MPT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-6-mdo-dmt\",\"name\":\"5,6-MDO-DMT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-meo-dalt\",\"name\":\"5-MeO-DALT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":4,\"light\":5,\"common\":12,\"strong\":25,\"heavy\":35,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-meo-dipt\",\"name\":\"5-MeO-DiPT\",\"aliases\":[\"Foxy\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":3,\"common\":10,\"strong\":15,\"heavy\":20,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-meo-dmt\",\"name\":\"5-MeO-DMT\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":5,\"common\":8,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-meo-mipt\",\"name\":\"5-MeO-MiPT\",\"aliases\":[\"Moxy\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":3,\"common\":7,\"strong\":15,\"heavy\":20,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"baeocystin\",\"name\":\"Baeocystin\",\"aliases\":[\"4-PO-NMT\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"bufotenin\",\"name\":\"Bufotenin\",\"aliases\":[\"5-HO-DMT\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":20,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"ibogaine\",\"name\":\"Ibogaine\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":50,\"heavy\":80,\"unit\":\"mg/kg of body weight\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"psilocin\",\"name\":\"Psilocin\",\"aliases\":[\"4-HO-DMT\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":25,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"3c-e\",\"name\":\"3C-E\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":30,\"common\":40,\"strong\":60,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"3c-p\",\"name\":\"3C-P\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"allylescaline\",\"name\":\"Allylescaline\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":20,\"common\":30,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"escaline\",\"name\":\"Escaline\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":30,\"common\":50,\"strong\":100,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"methallylescaline\",\"name\":\"Methallylescaline\",\"aliases\":[\"MAL\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":15,\"common\":25,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"proscaline\",\"name\":\"Proscaline\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":15,\"common\":30,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-c\",\"name\":\"2C-C\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":15,\"common\":30,\"strong\":50,\"heavy\":90,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-d\",\"name\":\"2C-D\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-e\",\"name\":\"2C-E\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-h\",\"name\":\"2C-H\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-i\",\"name\":\"2C-I\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-p\",\"name\":\"2C-P\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2,\"common\":6,\"strong\":10,\"heavy\":16,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-t\",\"name\":\"2C-T\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":60,\"strong\":100,\"heavy\":125,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-t-2\",\"name\":\"2C-T-2\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-t-7\",\"name\":\"2C-T-7\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":10,\"common\":15,\"strong\":25,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-t-21\",\"name\":\"2C-T-21\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":10,\"strong\":12,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2c-b-fly\",\"name\":\"2C-B-FLY\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":18,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"k-2c-b\",\"name\":\"βk-2C-B\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":60,\"common\":80,\"strong\":100,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"2-5-dma\",\"name\":\"2,5-DMA\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":40,\"strong\":80,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"dob\",\"name\":\"DOB\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.2,\"light\":0.2,\"common\":0.75,\"strong\":1.75,\"heavy\":3,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"doc\",\"name\":\"DOC\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":1,\"common\":2,\"strong\":4,\"heavy\":6,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"doi\",\"name\":\"DOI\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":2,\"heavy\":3,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"dom\",\"name\":\"DOM\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":1,\"common\":3,\"strong\":5,\"heavy\":10,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"tma-2\",\"name\":\"TMA-2\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"bromo-dragonfly\",\"name\":\"Bromo-DragonFLY\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":75,\"light\":100,\"common\":300,\"strong\":500,\"heavy\":750,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25b-nboh\",\"name\":\"25B-NBOH\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25b-nbome\",\"name\":\"25B-NBOMe\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":300,\"strong\":500,\"heavy\":700,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25c-nboh\",\"name\":\"25C-NBOH\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":100,\"light\":250,\"common\":500,\"strong\":750,\"heavy\":1000,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25c-nbome\",\"name\":\"25C-NBOMe\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":300,\"strong\":700,\"heavy\":1000,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25d-nbome\",\"name\":\"25D-NBOMe\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":300,\"light\":300,\"common\":800,\"strong\":1000,\"heavy\":1200,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25e-nboh\",\"name\":\"25E-NBOH\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":200,\"common\":600,\"strong\":1000,\"heavy\":1200,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25i-nboh\",\"name\":\"25I-NBOH\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":200,\"common\":500,\"strong\":900,\"heavy\":1400,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25i-nbome\",\"name\":\"25I-NBOMe\",\"aliases\":[\"2C-I-NBOMe\"],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":200,\"common\":500,\"strong\":700,\"heavy\":1000,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"25n-nbome\",\"name\":\"25N-NBOMe\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":100,\"light\":100,\"common\":300,\"strong\":800,\"heavy\":1300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"tma-6\",\"name\":\"TMA-6\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":35,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"5-meo-dibf\",\"name\":\"5-MeO-DiBF\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":80,\"strong\":110,\"heavy\":140,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"efavirenz\",\"name\":\"Efavirenz\",\"aliases\":[],\"category\":\"psychedelic\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":600,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"mirtazapine\",\"name\":\"Mirtazapine\",\"aliases\":[\"Remeron\"],\"category\":\"depressant\",\"chemicalClass\":\"Tryptamine / Lysergamide / Phénéthylamine\",\"psychoactiveClass\":\"Psychédélique sérotoninergique\",\"summary\":\"Psychédélique agissant sur les récepteurs sérotoninergiques 5-HT2A. Altère la perception, la pensée et les émotions.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3.5,\"light\":70,\"common\":130,\"strong\":190,\"heavy\":250,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[120,240],\"totalMin\":[300,480]},\"effects\":{\"positive\":[\"Euphorie\",\"Visuels\",\"Pensée créative\",\"Introspection\"],\"neutral\":[\"Distorsion du temps\",\"Pupilles dilatées\"],\"negative\":[\"Anxiété\",\"Confusion\",\"Bad trip possible\"]},\"neurotransmitters\":[\"serotonin\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Tramadol\"],\"caution\":[\"ISRS\",\"Cannabis\"]},\"harm\":{\"physical\":10,\"dependence\":5,\"social\":10},\"riskNotes\":[\"Set & setting déterminants.\",\"Testez vos produits.\",\"Contre-indiqué en cas d'antécédents psychotiques.\"],\"color\":\"#c9704f\",\"emoji\":\"🌀\"},{\"slug\":\"blue-lotus\",\"name\":\"Blue Lotus\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"changa\",\"name\":\"Changa\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"iboga\",\"name\":\"Iboga\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"peyote\",\"name\":\"Peyote\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"san-pedro\",\"name\":\"San Pedro\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"syrian-rue\",\"name\":\"Syrian rue\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"yopo\",\"name\":\"Yopo\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"nicotiana\",\"name\":\"Nicotiana\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"harmaline\",\"name\":\"Harmaline\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"harmine\",\"name\":\"Harmine\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"tetrahydroharmine\",\"name\":\"Tetrahydroharmine\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"2-fluorodeschloroketamine\",\"name\":\"2-Fluorodeschloroketamine\",\"aliases\":[\"2-FDCK\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":70,\"heavy\":140,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"2-oxo-pce\",\"name\":\"2'-Oxo-PCE\",\"aliases\":[\"O-PCE\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"2-oxo-pcm\",\"name\":\"2'-Oxo-PCM\",\"aliases\":[\"Deschloroketamine, DCK\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-cl-pcp\",\"name\":\"3-Cl-PCP\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-ho-pce\",\"name\":\"3-HO-PCE\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-ho-pcp\",\"name\":\"3-HO-PCP\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2,\"common\":4,\"strong\":6,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-meo-pce\",\"name\":\"3-MeO-PCE\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":4,\"common\":8,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-meo-pcmo\",\"name\":\"3-MeO-PCMo\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":300,\"heavy\":400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"3-meo-pcp\",\"name\":\"3-MeO-PCP\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":4,\"common\":8,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"4-meo-pcp\",\"name\":\"4-MeO-PCP\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":75,\"common\":100,\"strong\":170,\"heavy\":250,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"eticyclidine\",\"name\":\"Eticyclidine\",\"aliases\":[\"PCE\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"hydroxetamine\",\"name\":\"Hydroxetamine\",\"aliases\":[\"HXE\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":30,\"common\":60,\"strong\":100,\"heavy\":130,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"methoxetamine\",\"name\":\"Methoxetamine\",\"aliases\":[\"MXE\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":45,\"heavy\":70,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"phencyclidine\",\"name\":\"Phencyclidine\",\"aliases\":[\"PCP\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"dextromethorphan\",\"name\":\"Dextromethorphan\",\"aliases\":[\"DXM\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":75,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":700,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"diphenidine\",\"name\":\"Diphenidine\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":40,\"common\":65,\"strong\":100,\"heavy\":130,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"ephenidine\",\"name\":\"Ephenidine\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":30,\"common\":70,\"strong\":100,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"memantine\",\"name\":\"Memantine\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":30,\"common\":70,\"strong\":110,\"heavy\":170,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"nitrous-oxide\",\"name\":\"Nitrous oxide\",\"aliases\":[\"N2O\"],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"xenon\",\"name\":\"Xenon\",\"aliases\":[],\"category\":\"dissociative\",\"chemicalClass\":\"Arylcyclohexylamine / Morphinane\",\"psychoactiveClass\":\"Dissociatif (antagoniste NMDA)\",\"summary\":\"Dissociatif antagoniste des récepteurs NMDA produisant un détachement du corps et des distorsions sensorielles.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[20,60],\"peakMin\":[90,180],\"totalMin\":[240,420]},\"effects\":{\"positive\":[\"Euphorie\",\"Dissociation\",\"Rêverie\",\"Distorsions\"],\"neutral\":[\"Ataxie\",\"Désorientation\"],\"negative\":[\"Nausées\",\"Confusion\",\"Sédation\"]},\"neurotransmitters\":[\"glutamate\"],\"interactions\":{\"dangerous\":[\"Dépresseurs (alcool, opioïdes, benzo)\"],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":25,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Ne jamais mélanger avec dépresseurs.\",\"Assis/allongé : risque de chute.\",\"Espacez les prises pour limiter la neurotoxicité.\"],\"color\":\"#6f86c9\",\"emoji\":\"🔌\"},{\"slug\":\"atropine\",\"name\":\"Atropine\",\"aliases\":[],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"hyoscyamine\",\"name\":\"Hyoscyamine\",\"aliases\":[],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"scopolamine\",\"name\":\"Scopolamine\",\"aliases\":[\"Hyoscine\"],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"diphenhydramine\",\"name\":\"Diphenhydramine\",\"aliases\":[\"Benadryl, DPH\"],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":700,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"promethazine\",\"name\":\"Promethazine\",\"aliases\":[],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":12.5,\"common\":25,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"benzydamine\",\"name\":\"Benzydamine\",\"aliases\":[],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":150,\"light\":300,\"common\":500,\"strong\":1000,\"heavy\":2000,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"myristicin\",\"name\":\"Myristicin\",\"aliases\":[\"Nutmeg\"],\"category\":\"deliriant\",\"chemicalClass\":\"Anticholinergique\",\"psychoactiveClass\":\"Délirant\",\"summary\":\"Délirant anticholinergique produisant un état de confusion avec hallucinations indissociables de la réalité.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":50,\"common\":200,\"strong\":500,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,120],\"peakMin\":[180,360],\"totalMin\":[480,720]},\"effects\":{\"positive\":[\"Rêverie intense (rarement agréable)\"],\"neutral\":[\"Sécheresse des muqueuses\",\"Tachycardie\",\"Mydriase\"],\"negative\":[\"Hallucinations effrayantes\",\"Confusion\",\"Délire\",\"Amnésie\",\"Toxicité\"]},\"neurotransmitters\":[\"acetylcholine\"],\"interactions\":{\"dangerous\":[\"Autres anticholinergiques\",\"Dépresseurs\"],\"caution\":[]},\"harm\":{\"physical\":50,\"dependence\":10,\"social\":40},\"riskNotes\":[\"Effets souvent désagréables voire dangereux.\",\"Toxicité organique réelle : évitez l’usage régulier.\",\"Présence d’une personne sobre indispensable.\"],\"color\":\"#8a6239\",\"emoji\":\"👽\"},{\"slug\":\"cbd\",\"name\":\"CBD\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"cbda\",\"name\":\"CBDA\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"cbdh\",\"name\":\"CBDH\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"cbdp\",\"name\":\"CBDP\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"delta-8-thc\",\"name\":\"delta-8-THC\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thc\",\"name\":\"THC\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"delta-10-thc\",\"name\":\"delta-10-THC\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"delta-11-thc\",\"name\":\"delta-11-THC\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thcb\",\"name\":\"THCB\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thch\",\"name\":\"THCH\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thcp\",\"name\":\"THCP\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"hhc\",\"name\":\"HHC\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thc-o-acetate\",\"name\":\"THC-O-acetate\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"5f-akb48\",\"name\":\"5F-AKB48\",\"aliases\":[\"5F-APINACA\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":2,\"heavy\":4,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"5f-pb-22\",\"name\":\"5F-PB-22\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":1,\"common\":3,\"strong\":5,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"ab-fubinaca\",\"name\":\"AB-FUBINACA\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":1,\"common\":2,\"strong\":3,\"heavy\":5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"apica\",\"name\":\"APICA\",\"aliases\":[\"2NE1\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1.5,\"strong\":2,\"heavy\":4,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"jwh-018\",\"name\":\"JWH-018\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":1,\"common\":2,\"strong\":3,\"heavy\":5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"jwh-073\",\"name\":\"JWH-073\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"sts-135\",\"name\":\"STS-135\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1.5,\"strong\":2,\"heavy\":4,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thj-018\",\"name\":\"THJ-018\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":1,\"common\":2,\"strong\":3,\"heavy\":5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"thj-2201\",\"name\":\"THJ-2201\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":2,\"heavy\":5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"salvinorin-a\",\"name\":\"Salvinorin A\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"salvinorin-b-methoxymethyl-ether\",\"name\":\"Salvinorin B methoxymethyl ether\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"5-hydroxytryptophan\",\"name\":\"5-Hydroxytryptophan\",\"aliases\":[\"5-HTP\"],\"category\":\"nootropic\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":300,\"heavy\":500,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"acetylcholine\",\"name\":\"Acetylcholine\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"galantamine\",\"name\":\"Galantamine\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":4,\"common\":8,\"strong\":16,\"heavy\":24,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"melatonin\",\"name\":\"Melatonin\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.25,\"light\":0.5,\"common\":1,\"strong\":3,\"heavy\":6,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"dxm-dph\",\"name\":\"DXM & DPH\",\"aliases\":[\"Counterflipping\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"chloroform\",\"name\":\"Chloroform\",\"aliases\":[],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"diethyl-ether\",\"name\":\"Diethyl ether\",\"aliases\":[\"Ether\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"alkyl-nitrites\",\"name\":\"Alkyl nitrites\",\"aliases\":[\"Poppers\"],\"category\":\"cannabinoid\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"progesterone\",\"name\":\"Progesterone\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Cannabinoïde\",\"psychoactiveClass\":\"Cannabinoïde\",\"summary\":\"Cannabinoïde agissant sur les récepteurs CB1 : détente, altération sensorielle et appétit accru.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,120],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Détente\",\"Euphorie\",\"Appétit\",\"Rires\"],\"neutral\":[\"Yeux rouges\",\"Bouche sèche\",\"Distorsion du temps\"],\"negative\":[\"Anxiété\",\"Paranoïa\",\"Tachycardie\"]},\"neurotransmitters\":[\"cannabinoid\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Psychédéliques (amplification)\",\"Alcool\"]},\"harm\":{\"physical\":15,\"dependence\":25,\"social\":18},\"riskNotes\":[\"Peut déclencher/aggraver des troubles psychotiques chez les personnes vulnérables.\",\"Édibles : effets retardés, ne pas recharger trop vite.\"],\"color\":\"#7fa15a\",\"emoji\":\"🌿\"},{\"slug\":\"2-methyl-2-butanol\",\"name\":\"2-Methyl-2-butanol\",\"aliases\":[\"2M2B\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":1,\"common\":5,\"strong\":10,\"heavy\":15,\"unit\":\"mL\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"bromazepam\",\"name\":\"Bromazepam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1.5,\"light\":1.5,\"common\":3,\"strong\":6,\"heavy\":12,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"clonazepam\",\"name\":\"Clonazepam\",\"aliases\":[\"Klonopin\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":0.25,\"common\":0.5,\"strong\":1,\"heavy\":2,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"clonazolam\",\"name\":\"Clonazolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":75,\"common\":125,\"strong\":300,\"heavy\":500,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"diclazepam\",\"name\":\"Diclazepam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":3,\"heavy\":4,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"flualprazolam\",\"name\":\"Flualprazolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.05,\"light\":0.1,\"common\":0.3,\"strong\":0.5,\"heavy\":1,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"flubromazepam\",\"name\":\"Flubromazepam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":3,\"common\":5,\"strong\":8,\"heavy\":12,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"flubromazolam\",\"name\":\"Flubromazolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":250,\"heavy\":400,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"flunitrazepam\",\"name\":\"Flunitrazepam\",\"aliases\":[\"Rohypnol\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.2,\"light\":0.5,\"common\":1,\"strong\":3,\"heavy\":4,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"flunitrazolam\",\"name\":\"Flunitrazolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":0.1,\"common\":0.2,\"strong\":0.3,\"heavy\":0.5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"lorazepam\",\"name\":\"Lorazepam\",\"aliases\":[\"Ativan\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":0.25,\"common\":0.5,\"strong\":1.5,\"heavy\":2,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"lormetazepam\",\"name\":\"Lormetazepam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"midazolam\",\"name\":\"Midazolam\",\"aliases\":[\"Dormicum\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":5,\"strong\":15,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"nifoxipam\",\"name\":\"Nifoxipam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":0.25,\"common\":0.5,\"strong\":1,\"heavy\":2,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"pyrazolam\",\"name\":\"Pyrazolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":0.75,\"strong\":1.5,\"heavy\":3,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"temazepam\",\"name\":\"Temazepam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":30,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"deschloroetizolam\",\"name\":\"Deschloroetizolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2,\"common\":4,\"strong\":6,\"heavy\":12,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"etizolam\",\"name\":\"Etizolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.2,\"light\":0.5,\"common\":1,\"strong\":2,\"heavy\":5,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"metizolam\",\"name\":\"Metizolam\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":1,\"common\":2,\"strong\":4,\"heavy\":6,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"pentobarbital\",\"name\":\"Pentobarbital\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"phenobarbital\",\"name\":\"Phenobarbital\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"secobarbital\",\"name\":\"Secobarbital\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":25,\"common\":50,\"strong\":150,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"gaboxadol\",\"name\":\"Gaboxadol\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":15,\"strong\":30,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"ibotenic-acid\",\"name\":\"Ibotenic acid\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"muscimol\",\"name\":\"Muscimol\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"zolpidem\",\"name\":\"Zolpidem\",\"aliases\":[\"Ambien\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"zopiclone\",\"name\":\"Zopiclone\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":3.5,\"common\":5,\"strong\":7.5,\"heavy\":15,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"1-4-butanediol\",\"name\":\"1,4-Butanediol\",\"aliases\":[\"1,4-B\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":0.5,\"common\":1,\"strong\":2.5,\"heavy\":4,\"unit\":\"mL\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"baclofen\",\"name\":\"Baclofen\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"carisoprodol\",\"name\":\"Carisoprodol\",\"aliases\":[\"Soma\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":325,\"strong\":500,\"heavy\":750,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"f-phenibut\",\"name\":\"F-Phenibut\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"gaba\",\"name\":\"GABA\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"gbl\",\"name\":\"GBL\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.3,\"light\":0.3,\"common\":0.9,\"strong\":1.5,\"heavy\":3,\"unit\":\"mL\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"kava\",\"name\":\"Kava\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"methaqualone\",\"name\":\"Methaqualone\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":75,\"light\":150,\"common\":300,\"strong\":500,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"nitromethaqualone\",\"name\":\"Nitromethaqualone\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"phenibut\",\"name\":\"Phenibut\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.25,\"light\":0.5,\"common\":1,\"strong\":2,\"heavy\":3.5,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"gabapentin\",\"name\":\"Gabapentin\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":200,\"light\":200,\"common\":900,\"strong\":1500,\"heavy\":2400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"pregabalin\",\"name\":\"Pregabalin\",\"aliases\":[\"Lyrica\"],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":50,\"common\":225,\"strong\":600,\"heavy\":900,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"acetylfentanyl\",\"name\":\"Acetylfentanyl\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":20,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"buprenorphine\",\"name\":\"Buprenorphine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.3,\"light\":1,\"common\":2,\"strong\":4,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"codeine\",\"name\":\"Codeine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"desomorphine\",\"name\":\"Desomorphine\",\"aliases\":[\"Krokodil\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":15,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"dextropropoxyphene\",\"name\":\"Dextropropoxyphene\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":30,\"common\":65,\"strong\":100,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"diacetylmorphine\",\"name\":\"Diacetylmorphine\",\"aliases\":[\"Heroin\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":7.5,\"common\":20,\"strong\":35,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"dihydrocodeine\",\"name\":\"Dihydrocodeine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"ethylmorphine\",\"name\":\"Ethylmorphine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":50,\"strong\":100,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"fentanyl\",\"name\":\"Fentanyl\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":75,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"hydrocodone\",\"name\":\"Hydrocodone\",\"aliases\":[\"Vicodin\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":5,\"common\":10,\"strong\":25,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"hydromorphone\",\"name\":\"Hydromorphone\",\"aliases\":[\"Dilaudid\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.5,\"light\":1,\"common\":2,\"strong\":4,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"methadone\",\"name\":\"Methadone\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":15,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"morphine\",\"name\":\"Morphine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":15,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"o-desmethyltramadol\",\"name\":\"O-Desmethyltramadol\",\"aliases\":[\"O-DSMT\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":25,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"oxycodone\",\"name\":\"Oxycodone\",\"aliases\":[\"OxyContin\"],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":2.5,\"common\":10,\"strong\":25,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"oxymorphone\",\"name\":\"Oxymorphone\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2.5,\"light\":5,\"common\":10,\"strong\":20,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"pethidine\",\"name\":\"Pethidine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"sufentanil\",\"name\":\"Sufentanil\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.1,\"light\":1,\"common\":5,\"strong\":10,\"heavy\":25,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"tapentadol\",\"name\":\"Tapentadol\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":12.5,\"light\":25,\"common\":50,\"strong\":75,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"tianeptine\",\"name\":\"Tianeptine\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":6,\"common\":12,\"strong\":35,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"u-47700\",\"name\":\"U-47700\",\"aliases\":[],\"category\":\"opioid\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":4,\"common\":6,\"strong\":8,\"heavy\":10,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"clonidine\",\"name\":\"Clonidine\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":75,\"strong\":100,\"heavy\":300,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"tizanidine\",\"name\":\"Tizanidine\",\"aliases\":[],\"category\":\"depressant\",\"chemicalClass\":\"Benzodiazépine / Alcool / GABAergique\",\"psychoactiveClass\":\"Dépresseur du SNC\",\"summary\":\"Dépresseur du système nerveux central produisant sédation, anxiolyse et relaxation via le GABA.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":2,\"common\":4,\"strong\":6,\"heavy\":8,\"unit\":\"µg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[60,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Détente\",\"Anxiolyse\",\"Sédation\"],\"neutral\":[\"Somnolence\",\"Relaxation musculaire\"],\"negative\":[\"Amnésie\",\"Dépendance\",\"Dépression respiratoire (en mélange)\"]},\"neurotransmitters\":[\"gaba\"],\"interactions\":{\"dangerous\":[\"Alcool\",\"Opioïdes\",\"GHB\"],\"caution\":[]},\"harm\":{\"physical\":40,\"dependence\":55,\"social\":35},\"riskNotes\":[\"Ne jamais mélanger avec alcool ou opioïdes.\",\"Sevrage potentiellement dangereux : ne pas arrêter brutalement.\"],\"color\":\"#5b8a72\",\"emoji\":\"🌙\"},{\"slug\":\"2-fa\",\"name\":\"2-FA\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":15,\"common\":30,\"strong\":50,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"2-fea\",\"name\":\"2-FEA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":20,\"common\":30,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"2-fma\",\"name\":\"2-FMA\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":15,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-fa\",\"name\":\"3-FA\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":30,\"strong\":50,\"heavy\":70,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-fea\",\"name\":\"3-FEA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":20,\"common\":35,\"strong\":70,\"heavy\":90,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-fma\",\"name\":\"3-FMA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":35,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"4-fa\",\"name\":\"4-FA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":40,\"light\":40,\"common\":100,\"strong\":130,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"4-fma\",\"name\":\"4-FMA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":25,\"common\":50,\"strong\":100,\"heavy\":125,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"ephedrine\",\"name\":\"Ephedrine\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"fenethylline\",\"name\":\"Fenethylline\",\"aliases\":[\"Captagon\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":40,\"strong\":100,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"lisdexamfetamine\",\"name\":\"Lisdexamfetamine\",\"aliases\":[\"Vyvanse\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":30,\"strong\":60,\"heavy\":90,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-fpm\",\"name\":\"3-FPM\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":30,\"strong\":60,\"heavy\":90,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-4-ctmp\",\"name\":\"3,4-CTMP\",\"aliases\":[\"3,4-DCMP\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":2,\"common\":4,\"strong\":6,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"4f-eph\",\"name\":\"4F-EPH\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":30,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"4f-mph\",\"name\":\"4F-MPH\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":20,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"ethylphenidate\",\"name\":\"Ethylphenidate\",\"aliases\":[\"EPH\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":40,\"strong\":80,\"heavy\":120,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"isopropylphenidate\",\"name\":\"Isopropylphenidate\",\"aliases\":[\"IPH / IPPH\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":15,\"strong\":25,\"heavy\":45,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"methylnaphthidate\",\"name\":\"Methylnaphthidate\",\"aliases\":[\"HDMP-28\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":4,\"light\":10,\"common\":15,\"strong\":30,\"heavy\":50,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"3-mmc\",\"name\":\"3-MMC\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":150,\"strong\":250,\"heavy\":350,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"butylone\",\"name\":\"Butylone\",\"aliases\":[\"βk-MBDB\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":80,\"strong\":125,\"heavy\":225,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"cathinone\",\"name\":\"Cathinone\",\"aliases\":[\"Khat\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"ephylone\",\"name\":\"Ephylone\",\"aliases\":[\"N-Ethylpentylone\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":20,\"strong\":40,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"ethcathinone\",\"name\":\"Ethcathinone\",\"aliases\":[\"ETH-CAT\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":60,\"light\":100,\"common\":150,\"strong\":225,\"heavy\":325,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"ethylone\",\"name\":\"Ethylone\",\"aliases\":[\"βk-MDEA\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":75,\"light\":75,\"common\":150,\"strong\":225,\"heavy\":325,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"hexedrone\",\"name\":\"Hexedrone\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":30,\"light\":50,\"common\":70,\"strong\":100,\"heavy\":125,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"mephedrone\",\"name\":\"Mephedrone\",\"aliases\":[\"4-MMC\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"methcathinone\",\"name\":\"Methcathinone\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"methylone\",\"name\":\"Methylone\",\"aliases\":[\"βk-MDMA\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":75,\"light\":75,\"common\":150,\"strong\":225,\"heavy\":325,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"mexedrone\",\"name\":\"Mexedrone\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":150,\"strong\":250,\"heavy\":350,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"n-ethylhexedrone\",\"name\":\"N-Ethylhexedrone\",\"aliases\":[\"HEX-EN\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":24,\"strong\":30,\"heavy\":40,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"n-ethylpentedrone\",\"name\":\"N-Ethylpentedrone\",\"aliases\":[\"NEP\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":25,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"pentedrone\",\"name\":\"Pentedrone\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":5,\"common\":10,\"strong\":15,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"php\",\"name\":\"α-PHP\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"pvp\",\"name\":\"α-PVP\",\"aliases\":[\"Flakka\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"mdpv\",\"name\":\"MDPV\",\"aliases\":[\"Monkey Dust\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":2,\"light\":4,\"common\":8,\"strong\":14,\"heavy\":25,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"mcpp\",\"name\":\"mCPP\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":20,\"common\":50,\"strong\":120,\"heavy\":150,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"rti-111\",\"name\":\"RTI-111\",\"aliases\":[\"Dichloropane\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":3,\"light\":10,\"common\":20,\"strong\":40,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"cyclazodone\",\"name\":\"Cyclazodone\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":5,\"common\":15,\"strong\":25,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"8-chlorotheophylline\",\"name\":\"8-Chlorotheophylline\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"theacrine\",\"name\":\"Theacrine\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"2-ai\",\"name\":\"2-AI\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"bromantane\",\"name\":\"Bromantane\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":10,\"common\":50,\"strong\":100,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"desoxypipradrol\",\"name\":\"Desoxypipradrol\",\"aliases\":[\"2-DPMP\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.25,\"light\":1,\"common\":2,\"strong\":6,\"heavy\":8,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"methiopropamine\",\"name\":\"Methiopropamine\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":30,\"strong\":50,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"nm-2-ai\",\"name\":\"NM-2-AI\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"phenethylamine\",\"name\":\"Phenethylamine\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":10,\"common\":30,\"strong\":50,\"heavy\":80,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"prolintane\",\"name\":\"Prolintane\",\"aliases\":[],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":5,\"light\":15,\"common\":25,\"strong\":45,\"heavy\":60,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"propylhexedrine\",\"name\":\"Propylhexedrine\",\"aliases\":[\"Benzedrex\"],\"category\":\"stimulant\",\"chemicalClass\":\"Phénéthylamine / Cathinone / Xanthine\",\"psychoactiveClass\":\"Stimulant\",\"summary\":\"Stimulant du système nerveux central augmentant la vigilance, l'énergie et la dopamine.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":30,\"common\":60,\"strong\":120,\"heavy\":180,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,45],\"peakMin\":[90,180],\"totalMin\":[240,480]},\"effects\":{\"positive\":[\"Énergie\",\"Éveil\",\"Confiance\",\"Concentration\"],\"neutral\":[\"Pupilles dilatées\",\"Perte d’appétit\"],\"negative\":[\"Anxiété\",\"Insomnie\",\"Tachycardie\",\"Descente\"]},\"neurotransmitters\":[\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"Autres stimulants\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":40,\"social\":30},\"riskNotes\":[\"Hydratez-vous et mangez.\",\"Espacez les prises pour limiter la neurotoxicité.\",\"Surveillez le rythme cardiaque.\"],\"color\":\"#c99a2e\",\"emoji\":\"⚡\"},{\"slug\":\"mdai\",\"name\":\"MDAI\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":40,\"light\":40,\"common\":100,\"strong\":175,\"heavy\":300,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"mdea\",\"name\":\"MDEA\",\"aliases\":[\"MDE\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":40,\"light\":70,\"common\":120,\"strong\":180,\"heavy\":225,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"5-apb\",\"name\":\"5-APB\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":60,\"strong\":80,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"5-mapb\",\"name\":\"5-MAPB\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":40,\"common\":60,\"strong\":80,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"6-apb\",\"name\":\"6-APB\",\"aliases\":[\"Benzofury\"],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":15,\"light\":30,\"common\":60,\"strong\":90,\"heavy\":120,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"6-apdb\",\"name\":\"6-APDB\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":30,\"common\":70,\"strong\":100,\"heavy\":130,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"pma\",\"name\":\"PMA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":10,\"light\":20,\"common\":40,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"pmma\",\"name\":\"PMMA\",\"aliases\":[],\"category\":\"empathogen\",\"chemicalClass\":\"Phénéthylamine substituée\",\"psychoactiveClass\":\"Empathogène / stimulant\",\"summary\":\"Empathogène provoquant une forte libération de sérotonine : euphorie, chaleur sociale et empathie.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":20,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[90,180],\"totalMin\":[180,360]},\"effects\":{\"positive\":[\"Euphorie\",\"Empathie\",\"Chaleur émotionnelle\",\"Sociabilité\"],\"neutral\":[\"Bruxisme\",\"Pupilles dilatées\"],\"negative\":[\"Hyperthermie\",\"Descente dépressive\",\"Neurotoxicité\"]},\"neurotransmitters\":[\"serotonin\",\"dopamine\",\"norepinephrine\"],\"interactions\":{\"dangerous\":[\"IMAO\",\"ISRS\",\"Tramadol\"],\"caution\":[\"Alcool\"]},\"harm\":{\"physical\":30,\"dependence\":22,\"social\":25},\"riskNotes\":[\"Espacez d’au moins 6-8 semaines.\",\"Buvez ~500 ml d’eau/heure si vous dansez.\",\"Testez toujours (danger PMA/PMMA).\"],\"color\":\"#c95f8e\",\"emoji\":\"💗\"},{\"slug\":\"adrafinil\",\"name\":\"Adrafinil\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":100,\"light\":150,\"common\":250,\"strong\":400,\"heavy\":600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"n-methylbisfluoromodafinil\",\"name\":\"N-Methylbisfluoromodafinil\",\"aliases\":[\"Modafiendz\"],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":25,\"light\":50,\"common\":100,\"strong\":150,\"heavy\":200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"5-htp\",\"name\":\"5-HTP\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"choline\",\"name\":\"Choline\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"creatine\",\"name\":\"Creatine\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.25,\"light\":1,\"common\":5,\"strong\":10,\"heavy\":20,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"l-tyrosine\",\"name\":\"L-Tyrosine\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"s-adenosyl-methionine\",\"name\":\"S-Adenosyl methionine\",\"aliases\":[\"SAMe\"],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":200,\"light\":400,\"common\":800,\"strong\":1200,\"heavy\":1600,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"aniracetam\",\"name\":\"Aniracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":350,\"light\":500,\"common\":1200,\"strong\":1800,\"heavy\":2400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"coluracetam\",\"name\":\"Coluracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":3,\"common\":5,\"strong\":10,\"heavy\":20,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"oxiracetam\",\"name\":\"Oxiracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":250,\"light\":500,\"common\":1200,\"strong\":1800,\"heavy\":2400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"phenylpiracetam\",\"name\":\"Phenylpiracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":50,\"common\":100,\"strong\":200,\"heavy\":400,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"piracetam\",\"name\":\"Piracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":0.25,\"light\":0.5,\"common\":2,\"strong\":3,\"heavy\":5,\"unit\":\"g\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"pramiracetam\",\"name\":\"Pramiracetam\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":100,\"light\":250,\"common\":500,\"strong\":800,\"heavy\":1200,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"l-theanine\",\"name\":\"L-Theanine\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"n-acetylcysteine\",\"name\":\"N-Acetylcysteine\",\"aliases\":[\"NAC\"],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":100,\"light\":400,\"common\":600,\"strong\":1000,\"heavy\":1500,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"noopept\",\"name\":\"Noopept\",\"aliases\":[],\"category\":\"nootropic\",\"chemicalClass\":\"Nootropique\",\"psychoactiveClass\":\"Cognitif / Nootropique\",\"summary\":\"Substance nootropique visant à améliorer les fonctions cognitives : mémoire, concentration, vigilance.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":50,\"light\":100,\"common\":200,\"strong\":400,\"heavy\":800,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[30,60],\"peakMin\":[120,240],\"totalMin\":[360,720]},\"effects\":{\"positive\":[\"Concentration\",\"Mémoire\",\"Clarté mentale\"],\"neutral\":[\"Éveil\"],\"negative\":[\"Maux de tête\",\"Insomnie\",\"Anxiété\"]},\"neurotransmitters\":[\"acetylcholine\",\"glutamate\"],\"interactions\":{\"dangerous\":[],\"caution\":[\"Stimulants\"]},\"harm\":{\"physical\":5,\"dependence\":8,\"social\":3},\"riskNotes\":[\"Effets à long terme mal documentés.\",\"Évitez tard le jour (insomnie).\"],\"color\":\"#5b8ab8\",\"emoji\":\"🧩\"},{\"slug\":\"aminobutyric-acid\",\"name\":\"γ-Aminobutyric acid\",\"aliases\":[\"GABA\"],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"l-glutamate\",\"name\":\"L-Glutamate\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"dopamine\",\"name\":\"Dopamine\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"epinephrine\",\"name\":\"Epinephrine\",\"aliases\":[\"Adrenaline\"],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"histamine\",\"name\":\"Histamine\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"norepinephrine\",\"name\":\"Norepinephrine\",\"aliases\":[\"Noradrenaline\"],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"serotonin\",\"name\":\"Serotonin\",\"aliases\":[\"5-HT\"],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"phenethylamines\",\"name\":\"Phenethylamines\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"},{\"slug\":\"semax\",\"name\":\"Semax\",\"aliases\":[],\"category\":\"misc\",\"chemicalClass\":\"Divers\",\"psychoactiveClass\":\"Divers\",\"summary\":\"Substance psychoactive diverse, aux effets encore peu documentés.\",\"doses\":[{\"route\":\"Orale\",\"threshold\":1,\"light\":5,\"common\":20,\"strong\":50,\"heavy\":100,\"unit\":\"mg\"}],\"duration\":{\"onsetMin\":[15,60],\"peakMin\":[60,180],\"totalMin\":[180,420]},\"effects\":{\"positive\":[\"Effets variables\"],\"neutral\":[\"Effets variables\"],\"negative\":[\"Effets secondaires possibles\"]},\"neurotransmitters\":[],\"interactions\":{\"dangerous\":[],\"caution\":[]},\"harm\":{\"physical\":15,\"dependence\":10,\"social\":10},\"riskNotes\":[\"Information limitée : consultez des sources spécialisées.\"],\"color\":\"#a87c45\",\"emoji\":\"🔬\"}]");
var categories_default = {
	psychedelic: {
		"label": "Psychédélique",
		"color": "#c45a9a",
		"tint": "rgba(196,90,154,0.18)",
		"emoji": "🌀"
	},
	stimulant: {
		"label": "Stimulant",
		"color": "#d4a017",
		"tint": "rgba(212,160,23,0.18)",
		"emoji": "⚡"
	},
	depressant: {
		"label": "Dépresseur",
		"color": "#4a8f7a",
		"tint": "rgba(74,143,122,0.18)",
		"emoji": "🌙"
	},
	dissociative: {
		"label": "Dissociatif",
		"color": "#5b74d4",
		"tint": "rgba(91,116,212,0.2)",
		"emoji": "🧊"
	},
	opioid: {
		"label": "Opioïde",
		"color": "#c45c3a",
		"tint": "rgba(196,92,58,0.18)",
		"emoji": "💊"
	},
	cannabinoid: {
		"label": "Cannabinoïde",
		"color": "#5d9a3a",
		"tint": "rgba(93,154,58,0.2)",
		"emoji": "🌿"
	},
	empathogen: {
		"label": "Empathogène",
		"color": "#e0568c",
		"tint": "rgba(224,86,140,0.2)",
		"emoji": "💗"
	},
	deliriant: {
		"label": "Délirant",
		"color": "#8a5a2a",
		"tint": "rgba(138,90,42,0.2)",
		"emoji": "👽"
	},
	nootropic: {
		"label": "Nootropique",
		"color": "#3d8ec9",
		"tint": "rgba(61,142,201,0.18)",
		"emoji": "🧠"
	},
	misc: {
		"label": "Divers",
		"color": "#9a7a4a",
		"tint": "rgba(154,122,74,0.18)",
		"emoji": "🔬"
	}
};
var neurotransmitters_default = {
	serotonin: {
		"label": "Sérotonine (5-HT)",
		"color": "#c9704f",
		"role": "Humeur, perception, empathie"
	},
	dopamine: {
		"label": "Dopamine",
		"color": "#c99a2e",
		"role": "Motivation, récompense, énergie"
	},
	norepinephrine: {
		"label": "Noradrénaline",
		"color": "#b1573a",
		"role": "Éveil, vigilance, rythme cardiaque"
	},
	gaba: {
		"label": "GABA",
		"color": "#5b8a72",
		"role": "Calme, sédation, anxiolyse"
	},
	glutamate: {
		"label": "Glutamate (NMDA)",
		"color": "#6f86c9",
		"role": "Apprentissage, dissociation"
	},
	opioid: {
		"label": "Récepteurs opioïdes",
		"color": "#8a6239",
		"role": "Analgésie, euphorie, respiration"
	},
	cannabinoid: {
		"label": "Récepteurs CB1",
		"color": "#7fa15a",
		"role": "Appétit, détente, mémoire"
	},
	acetylcholine: {
		"label": "Acétylcholine",
		"color": "#c95f8e",
		"role": "Mémoire, muscles, délire"
	}
};
var substance_en_default = {
	lsd: {
		"name": "LSD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Lysergamide",
		"summary": "Classic psychedelic, extremely potent at microgram doses. Visual alterations, associative thinking and intense emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Geometric visuals",
				"Creative thinking",
				"Emotional connection",
				"Laughter"
			],
			"neutral": [
				"Time distortion",
				"Dilated pupils",
				"Introspection"
			],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible paranoia",
				"Insomnia"
			]
		},
		"riskNotes": [
			"Always reagent-test blotters (Ehrlich).",
			"Set and setting are decisive.",
			"Contre-indiqué en cas d’antécédents psychotiques."
		],
		"aliases": [
			"Acide",
			"Lucy",
			"LSD-25",
			"Buvard",
			"Trip"
		]
	},
	psilocybin: {
		"name": "Psilocybin (Mushrooms)",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine",
		"summary": "Natural psychedelic found in 200+ mushroom species. Warm, organic, introspective effects.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuels ondulants",
				"Fou rire",
				"Sentiment d’unité",
				"Introspection"
			],
			"neutral": [
				"Bâillements",
				"Time distortion",
				"Dilated pupils"
			],
			"negative": [
				"Nausea",
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": ["Species ID is critical: deadly mix-ups exist.", "Commencez bas, la puissance varie fortement."],
		"aliases": [
			"Champignons magiques",
			"Shrooms",
			"Champis",
			"Psilo"
		]
	},
	dmt: {
		"name": "DMT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine",
		"summary": "Extremely intense, very short-acting when smoked. Immersive visions and a sense of contact with other realities.",
		"effects": {
			"positive": [
				"Visions immersives",
				"Euphoria",
				"Awe",
				"Géométrie complexe"
			],
			"neutral": ["Loss of bearings", "Distorsion temporelle extrême"],
			"negative": [
				"Peur intense",
				"Confusion",
				"Sharp come-up"
			]
		},
		"riskNotes": ["Toujours assis ou allongé.", "Présence d’une personne sobre recommandée."],
		"aliases": [
			"N,N-DMT",
			"Dimitri",
			"La molécule de l’esprit"
		]
	},
	mescaline: {
		"name": "Mescaline",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Phénéthylamine",
		"summary": "Classic cactus psychedelic, known for warm, bodily, long-lasting effects.",
		"effects": {
			"positive": [
				"Euphoria",
				"Couleurs vives",
				"Chaleur émotionnelle",
				"Créativité"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Nausea",
				"Anxiety",
				"Tachycardia"
			]
		},
		"riskNotes": ["Come-up nausea is common.", "Longue durée : prévoyez la journée entière."],
		"aliases": [
			"Peyotl",
			"San Pedro",
			"Cactus"
		]
	},
	"2c-b": {
		"name": "2C-B",
		"psychoactiveClass": "Psychedelic / empathogen",
		"chemicalClass": "Phénéthylamine",
		"summary": "Gentle, colourful psychedelic on the empathogen border, valued for being manageable.",
		"effects": {
			"positive": [
				"Euphoria",
				"Colourful visuals",
				"Stimulation",
				"Sensuality"
			],
			"neutral": ["Dilated pupils", "Time distortion"],
			"negative": [
				"Nausea",
				"Anxiety",
				"Frissons"
			]
		},
		"riskNotes": ["« Tusi »/« tucibi » rose contient rarement du vrai 2C-B : testez.", "Dosage au mg près (balance précise)."],
		"aliases": [
			"Nexus",
			"Bromo",
			"Tusi (souvent frelaté)"
		]
	},
	mdma: {
		"name": "MDMA",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Reference empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Energy",
				"Sociability"
			],
			"neutral": ["Bruxisme (mâchoires)", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Déshydratation / hyponatrémie",
				"Descente dépressive",
				"Bruxisme"
			]
		},
		"riskNotes": [
			"Règle de la sérotonine : espacez d’au moins 6-8 semaines.",
			"Buvez ~500 ml d’eau/heure si vous dansez, sans excès (risque hyponatrémie).",
			"Always test (PMA/PMMA risk).",
			"Complémentez éventuellement (magnésium) contre le bruxisme."
		],
		"aliases": [
			"Ecstasy",
			"Molly",
			"XTC",
			"Taz"
		]
	},
	ketamine: {
		"name": "Ketamine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine",
		"summary": "Dissociative anaesthetic producing body detachment, sensory distortions and, at high doses, the “K-hole”.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Analgésie",
				"Daydreaming"
			],
			"neutral": ["Distorsions visuelles", "Ataxia (loss of balance)"],
			"negative": [
				"Nausea",
				"K-hole",
				"Confusion",
				"Atteinte vésicale (usage chronique)"
			]
		},
		"riskNotes": [
			"Ne jamais mélanger avec alcool ou opioïdes (dépression respiratoire).",
			"Sit or lie down: fall risk.",
			"Usage régulier : cystite kétaminique, ménagez la fréquence."
		],
		"aliases": [
			"Ké",
			"K",
			"Special K",
			"Kéta"
		]
	},
	nitrous: {
		"name": "Nitrous oxide",
		"psychoactiveClass": "Short-acting dissociative",
		"chemicalClass": "Gaz inorganique",
		"summary": "Very short-acting dissociative gas: euphoric dizziness, sound distortions and laughter.",
		"effects": {
			"positive": [
				"Euphoria",
				"Fou rire",
				"Distorsions sonores",
				"Légèreté"
			],
			"neutral": ["Vertige", "Picotements"],
			"negative": [
				"Perte de connaissance",
				"Chute",
				"Carence B12 (usage répété)"
			]
		},
		"riskNotes": [
			"Toujours assis. Jamais avec un masque scellé (asphyxie).",
			"Ne pas inhaler directement la cartouche glacée (brûlure).",
			"Supplémentez en vitamine B12 si usage répété."
		],
		"aliases": [
			"Proto",
			"N2O",
			"Gaz hilarant",
			"Ballon"
		]
	},
	cannabis: {
		"name": "Cannabis",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Phytocannabinoïde",
		"summary": "Plant whose THC brings relaxation, euphoria, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Laughter",
				"Appetite",
				"Music enhancement"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia",
				"Malaise vagal (« blanc »)"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": [
			"Weed",
			"Herbe",
			"Beuh",
			"Shit",
			"THC"
		]
	},
	alcohol: {
		"name": "Alcohol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Alcool (éthanol)",
		"summary": "Legal CNS depressant: disinhibition, euphoria, then sedation and loss of coordination.",
		"effects": {
			"positive": [
				"Désinhibition",
				"Euphoria",
				"Sociability",
				"Relaxation"
			],
			"neutral": ["Slurred speech", "Chaleur"],
			"negative": [
				"Nausées / vomissements",
				"Perte de coordination",
				"Trous de mémoire",
				"Alcohol poisoning"
			]
		},
		"riskNotes": [
			"Ne jamais combiner avec d’autres dépresseurs (arrêt respiratoire).",
			"Recovery position if vomiting.",
			"Stay hydrated and eat."
		],
		"aliases": [
			"Éthanol",
			"Bière",
			"Vin",
			"Spiritueux"
		]
	},
	ghb: {
		"name": "GHB / GBL",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Acide gras / lactone",
		"summary": "Euphoric depressant with a very narrow safety margin: tenths of a ml separate the effect from coma.",
		"effects": {
			"positive": [
				"Euphoria",
				"Désinhibition",
				"Sensuality",
				"Relaxation"
			],
			"neutral": ["Drowsiness", "Vertige"],
			"negative": [
				"Perte de connaissance (G-hole)",
				"Vomissements",
				"Coma",
				"Arrêt respiratoire"
			]
		},
		"riskNotes": [
			"Dose with a syringe/pipette — NEVER “by the glass”.",
			"Respectez au moins 2-3 h entre deux prises.",
			"Jamais avec de l’alcool : combinaison potentiellement mortelle."
		],
		"aliases": [
			"G",
			"Liquid ecstasy",
			"GBL"
		]
	},
	diazepam: {
		"name": "Diazepam",
		"psychoactiveClass": "Depressant / anxiolytic",
		"chemicalClass": "Benzodiazépine",
		"summary": "Long-acting anxiolytic sedative benzodiazepine with high dependence potential.",
		"effects": {
			"positive": [
				"Anxiolysis",
				"Relaxation",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Désinhibition",
				"Dépendance rapide",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Ne jamais associer aux opioïdes ou à l’alcool.", "Dangerous withdrawal: do not stop regular use abruptly."],
		"aliases": ["Valium", "Benzo"]
	},
	caffeine: {
		"name": "Caffeine",
		"psychoactiveClass": "Mild stimulant",
		"chemicalClass": "Xanthine",
		"summary": "The world’s most used stimulant: more alertness, delayed fatigue via adenosine blockade.",
		"effects": {
			"positive": [
				"Vigilance",
				"Energy",
				"Focus"
			],
			"neutral": ["Diuresis", "Accélération cardiaque"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tremblements",
				"Palpitations"
			]
		},
		"riskNotes": ["Au-delà de ~400 mg/jour : anxiété et palpitations.", "Avoid late at night."],
		"aliases": [
			"Café",
			"Thé",
			"Guarana"
		]
	},
	nicotine: {
		"name": "Nicotine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Alcaloïde",
		"summary": "Short half-life, highly addictive stimulant; nicotinic receptor agonist.",
		"effects": {
			"positive": [
				"Wakefulness",
				"Détente paradoxale",
				"Focus"
			],
			"neutral": ["Accélération cardiaque"],
			"negative": [
				"Nausées (débutant)",
				"Strong dependence",
				"Vertiges"
			]
		},
		"riskNotes": ["Potentiel de dépendance parmi les plus élevés.", "Keep liquids out of children’s reach."],
		"aliases": [
			"Tabac",
			"Cigarette",
			"Vape"
		]
	},
	cocaine: {
		"name": "Cocaine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Alcaloïde tropane",
		"summary": "Short, powerful stimulant: euphoria, confidence and energy, then a marked come-down.",
		"effects": {
			"positive": [
				"Euphoria",
				"Confidence",
				"Energy",
				"Sociability"
			],
			"neutral": ["Dilated pupils", "Local anaesthesia"],
			"negative": [
				"Craving intense",
				"Anxiety",
				"Tachycardia",
				"Risque cardiaque"
			]
		},
		"riskNotes": [
			"Cocaïne + alcool forme le cocaéthylène, cardiotoxique.",
			"Ne partagez pas les pailles (hépatites).",
			"Attention aux surdoses en cas de forte pureté."
		],
		"aliases": [
			"Coke",
			"Coca",
			"Neige",
			"C"
		]
	},
	amphetamine: {
		"name": "Amphetamine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Medium-duration stimulant: energy, wakefulness and appetite suppression, then a tiring come-down.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": [
				"Appetite loss",
				"Dilated pupils",
				"Bruxisme"
			],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Descente dépressive",
				"Tachycardia"
			]
		},
		"riskNotes": ["Hydratez-vous et mangez malgré la coupe-faim.", "Space doses so dopamine can recover."],
		"aliases": [
			"Speed",
			"Amph",
			"Sulfate"
		]
	},
	methamphetamine: {
		"name": "Methamphetamine",
		"psychoactiveClass": "Powerful stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Very powerful, long-lasting stimulant with high addictive and neurotoxic potential.",
		"effects": {
			"positive": [
				"Euphoria",
				"Intense energy",
				"Confidence",
				"Libido"
			],
			"neutral": [
				"Appetite loss",
				"Insomnia",
				"Bruxisme"
			],
			"negative": [
				"Severe craving",
				"Paranoia",
				"Psychose",
				"Neurotoxicity"
			]
		},
		"riskNotes": ["High dependence and neurotoxicity potential.", "Repos, hydratation et alimentation essentiels."],
		"aliases": [
			"Crystal",
			"Meth",
			"Tina",
			"Ice"
		]
	},
	heroin: {
		"name": "Heroin",
		"psychoactiveClass": "Opioid",
		"chemicalClass": "Opioïde semi-synthétique",
		"summary": "Powerful opioid: warm euphoria and analgesia, with a major respiratory-overdose risk.",
		"effects": {
			"positive": [
				"Euphoria",
				"Chaleur",
				"Analgésie",
				"Détente profonde"
			],
			"neutral": ["Myosis (pupilles en pointe)", "Drowsiness"],
			"negative": [
				"Dépression respiratoire",
				"Constipation",
				"Strong dependence",
				"Surdose"
			]
		},
		"riskNotes": [
			"Ayez de la naloxone à portée de main.",
			"Ne consommez jamais seul.",
			"Fentanyl risk: test, and lower the dose after any break."
		],
		"aliases": [
			"Diacétylmorphine",
			"H",
			"Rabla",
			"Brown"
		]
	},
	tramadol: {
		"name": "Tramadol",
		"psychoactiveClass": "Opioid / serotonergic",
		"chemicalClass": "Opioïde synthétique",
		"summary": "Atypical opioid analgesic that also acts on serotonin — seizure and serotonin-syndrome risk.",
		"effects": {
			"positive": [
				"Analgésie",
				"Euphorie légère",
				"Relaxation"
			],
			"neutral": ["Drowsiness", "Nausea"],
			"negative": [
				"Convulsions (dose élevée)",
				"Syndrome sérotoninergique",
				"Dependence"
			]
		},
		"riskNotes": ["Seizure risk above therapeutic doses.", "Never combine with serotonergic drugs."],
		"aliases": ["Tramal", "Topalgic"]
	},
	dxm: {
		"name": "DXM",
		"psychoactiveClass": "Dissociative",
		"chemicalClass": "Morphinane",
		"summary": "Dissociative cough suppressant that, at high doses, produces rising “plateaus”.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Distorsions musicales"
			],
			"neutral": ["Ataxia", "Nausea"],
			"negative": [
				"Confusion",
				"Hyperthermie",
				"Serotonin syndrome (in mixes)"
			]
		},
		"riskNotes": ["Évitez les sirops contenant paracétamol/antihistaminiques (toxiques à ces doses).", "Serotonin risk with antidepressants."],
		"aliases": [
			"Dextrométhorphane",
			"Robo",
			"Sirop"
		]
	},
	alprazolam: {
		"name": "Alprazolam",
		"psychoactiveClass": "Depressant / anxiolytic",
		"chemicalClass": "Benzodiazépine",
		"summary": "Powerful fast-acting benzodiazepine, strongly anxiolytic and highly addictive.",
		"effects": {
			"positive": ["Anxiolysis", "Relaxation"],
			"neutral": ["Sedation", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Désinhibition",
				"Dépendance rapide",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Withdrawal can cause seizures: never stop abruptly.", "Comprimés de rue souvent surdosés/frelatés."],
		"aliases": [
			"Xanax",
			"Xan",
			"Barrette"
		]
	},
	kratom: {
		"name": "Kratom",
		"psychoactiveClass": "Opioid / stimulant (dose-dependent)",
		"chemicalClass": "Alcaloïde indolique",
		"summary": "Southeast-Asian plant: stimulating at low dose, opioid and sedating at high dose.",
		"effects": {
			"positive": [
				"Énergie (faible dose)",
				"Analgésie",
				"Détente (dose élevée)"
			],
			"neutral": ["Nausea", "Constipation"],
			"negative": [
				"Dependence",
				"Vertiges",
				"Sedation"
			]
		},
		"riskNotes": ["Daily use: dependence possible.", "Prudence en association avec d’autres dépresseurs."],
		"aliases": ["Mitragyna", "Ketum"]
	},
	salvia: {
		"name": "Salvia divinorum",
		"psychoactiveClass": "Atypical psychedelic (kappa-opioid)",
		"chemicalClass": "Diterpène (Salvinorine A)",
		"summary": "Plant with atypical, disorienting psychedelia; very brief when smoked.",
		"effects": {
			"positive": ["Laughter", "Perceptions inhabituelles"],
			"neutral": ["Sensation de mouvement", "Réalités alternatives"],
			"negative": [
				"Peur",
				"Disorientation",
				"Loss of contact with reality"
			]
		},
		"riskNotes": ["A sober sitter is essential.", "Assis/allongé, loin de tout danger."],
		"aliases": ["Sauge des devins", "Salvia"]
	},
	"4-aco-dmt": {
		"name": "4-AcO-DMT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine",
		"summary": "Synthetic analogue close to psilocybin, with similar warm visual effects.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Introspection",
				"Fou rire"
			],
			"neutral": ["Dilated pupils", "Time distortion"],
			"negative": [
				"Nausea",
				"Anxiety",
				"Confusion"
			]
		},
		"riskNotes": ["Balance de précision (mg) indispensable.", "Store away from light and moisture."],
		"aliases": ["Psilacétine", "O-Acétylpsilocine"]
	},
	mda: {
		"name": "MDA",
		"psychoactiveClass": "Empathogen / psychedelic",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "MDMA cousin: more psychedelic, longer, more neurotoxic.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Mild visuals",
				"Energy"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente marquée",
				"Neurotoxicity"
			]
		},
		"riskNotes": ["Plus neurotoxique que la MDMA : dosez prudemment et espacez.", "Gérez la température corporelle."],
		"aliases": ["Sass", "Sally"]
	},
	modafinil: {
		"name": "Modafinil",
		"psychoactiveClass": "Wakefulness promoter",
		"chemicalClass": "Benzhydryl",
		"summary": "Gentle wakefulness promoter: alertness without the marked euphoria of classic stimulants.",
		"effects": {
			"positive": [
				"Vigilance",
				"Focus",
				"Endurance mentale"
			],
			"neutral": ["Appetite loss", "Dry mouth"],
			"negative": [
				"Insomnia",
				"Headache",
				"Anxiety",
				"Éruptions cutanées (rare, grave)"
			]
		},
		"riskNotes": ["Take early to protect sleep.", "Arrêter immédiatement en cas d’éruption cutanée."],
		"aliases": ["Modiodal", "Provigil"]
	},
	poppers: {
		"name": "Poppers",
		"psychoactiveClass": "Vasodilator",
		"chemicalClass": "Nitrite d’alkyle",
		"summary": "Very short inhaled vasodilator: flush, dizziness and muscle relaxation.",
		"effects": {
			"positive": [
				"Bouffée euphorique",
				"Relâchement musculaire",
				"Sensuality"
			],
			"neutral": ["Chaleur au visage", "Accélération cardiaque"],
			"negative": [
				"Headache",
				"Chute de tension",
				"Malaise"
			]
		},
		"riskNotes": ["Jamais avec des médicaments de l’érection (Viagra/Cialis).", "Ne pas avaler (toxique)."],
		"aliases": ["Nitrites d’alkyle", "Rush"]
	},
	methylphenidate: {
		"name": "Methylphenidate",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine (pipéridine)",
		"summary": "ADHD stimulant: focus and wakefulness via dopamine/noradrenaline reuptake blockade.",
		"effects": {
			"positive": [
				"Focus",
				"Energy",
				"Motivation"
			],
			"neutral": ["Appetite loss", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": ["Do not snort/inject tablets (binders, danger).", "Watch your heart rate."],
		"aliases": ["Ritaline", "Concerta"]
	},
	lsa: {
		"name": "LSA",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Lysergamide",
		"summary": "Natural psychedelic alkaloid from morning-glory seeds, more bodily and sedating than LSD.",
		"effects": {
			"positive": [
				"Euphoria",
				"Daydreaming",
				"Mild visuals",
				"Introspection"
			],
			"neutral": ["Sedation", "Lourdeur corporelle"],
			"negative": [
				"Nausées importantes",
				"Vasoconstriction",
				"Anxiety"
			]
		},
		"riskNotes": ["Nausea is almost systematic.", "Vasoconstriction: caution with circulation issues."],
		"aliases": [
			"Graines de liseron",
			"Hawaiian baby woodrose",
			"Ergine"
		]
	},
	"psilocybin-mushrooms": {
		"name": "Psilocybin mushrooms",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	ayahuasca: {
		"name": "Ayahuasca",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1b-lsd": {
		"name": "1B-LSD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1cp-al-lad": {
		"name": "1cP-AL-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1cp-lsd": {
		"name": "1cP-LSD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1cp-mipla": {
		"name": "1cP-MiPLA",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1p-eth-lad": {
		"name": "1P-ETH-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1p-lsd": {
		"name": "1P-LSD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"1v-lsd": {
		"name": "1V-LSD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"al-lad": {
		"name": "AL-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"ald-52": {
		"name": "ALD-52",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["1A-LSD"]
	},
	"eth-lad": {
		"name": "ETH-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"lae-32": {
		"name": "LAE-32",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"lsm-775": {
		"name": "LSM-775",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	lsz: {
		"name": "LSZ",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	mipla: {
		"name": "MiPLA",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"pargy-lad": {
		"name": "PARGY-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"pro-lad": {
		"name": "PRO-LAD",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	amt: {
		"name": "aMT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	det: {
		"name": "DET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	dipt: {
		"name": "DiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	dpt: {
		"name": "DPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	ept: {
		"name": "EPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	met: {
		"name": "MET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	mipt: {
		"name": "MiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	mpt: {
		"name": "MPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	tryptamine: {
		"name": "Tryptamine",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-aco-det": {
		"name": "4-AcO-DET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-aco-dipt": {
		"name": "4-AcO-DiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-aco-met": {
		"name": "4-AcO-MET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-aco-mipt": {
		"name": "4-AcO-MiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-det": {
		"name": "4-HO-DET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-dipt": {
		"name": "4-HO-DiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-dpt": {
		"name": "4-HO-DPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-ept": {
		"name": "4-HO-EPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-met": {
		"name": "4-HO-MET",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["Metocin"]
	},
	"4-ho-mipt": {
		"name": "4-HO-MiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"4-ho-mpt": {
		"name": "4-HO-MPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"5-6-mdo-dmt": {
		"name": "5,6-MDO-DMT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"5-meo-dalt": {
		"name": "5-MeO-DALT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"5-meo-dipt": {
		"name": "5-MeO-DiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["Foxy"]
	},
	"5-meo-dmt": {
		"name": "5-MeO-DMT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"5-meo-mipt": {
		"name": "5-MeO-MiPT",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["Moxy"]
	},
	baeocystin: {
		"name": "Baeocystin",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["4-PO-NMT"]
	},
	bufotenin: {
		"name": "Bufotenin",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["5-HO-DMT"]
	},
	ibogaine: {
		"name": "Ibogaine",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	psilocin: {
		"name": "Psilocin",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["4-HO-DMT"]
	},
	"3c-e": {
		"name": "3C-E",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"3c-p": {
		"name": "3C-P",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	allylescaline: {
		"name": "Allylescaline",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	escaline: {
		"name": "Escaline",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	methallylescaline: {
		"name": "Methallylescaline",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["MAL"]
	},
	proscaline: {
		"name": "Proscaline",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-c": {
		"name": "2C-C",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-d": {
		"name": "2C-D",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-e": {
		"name": "2C-E",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-h": {
		"name": "2C-H",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-i": {
		"name": "2C-I",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-p": {
		"name": "2C-P",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-t": {
		"name": "2C-T",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-t-2": {
		"name": "2C-T-2",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-t-7": {
		"name": "2C-T-7",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-t-21": {
		"name": "2C-T-21",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2c-b-fly": {
		"name": "2C-B-FLY",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"k-2c-b": {
		"name": "βk-2C-B",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"2-5-dma": {
		"name": "2,5-DMA",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	dob: {
		"name": "DOB",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	doc: {
		"name": "DOC",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	doi: {
		"name": "DOI",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	dom: {
		"name": "DOM",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"tma-2": {
		"name": "TMA-2",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"bromo-dragonfly": {
		"name": "Bromo-DragonFLY",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25b-nboh": {
		"name": "25B-NBOH",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25b-nbome": {
		"name": "25B-NBOMe",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25c-nboh": {
		"name": "25C-NBOH",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25c-nbome": {
		"name": "25C-NBOMe",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25d-nbome": {
		"name": "25D-NBOMe",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25e-nboh": {
		"name": "25E-NBOH",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25i-nboh": {
		"name": "25I-NBOH",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"25i-nbome": {
		"name": "25I-NBOMe",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["2C-I-NBOMe"]
	},
	"25n-nbome": {
		"name": "25N-NBOMe",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"tma-6": {
		"name": "TMA-6",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	"5-meo-dibf": {
		"name": "5-MeO-DiBF",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	efavirenz: {
		"name": "Efavirenz",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": []
	},
	mirtazapine: {
		"name": "Mirtazapine",
		"psychoactiveClass": "Serotonergic psychedelic",
		"chemicalClass": "Tryptamine / Lysergamide / Phénéthylamine",
		"summary": "Psychedelic acting on 5-HT2A serotonin receptors. Alters perception, thinking and emotions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Visuals",
				"Creative thinking",
				"Introspection"
			],
			"neutral": ["Time distortion", "Dilated pupils"],
			"negative": [
				"Anxiety",
				"Confusion",
				"Possible bad trip"
			]
		},
		"riskNotes": [
			"Set and setting are decisive.",
			"Test your products.",
			"Contraindicated with a history of psychosis."
		],
		"aliases": ["Remeron"]
	},
	"blue-lotus": {
		"name": "Blue Lotus",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	changa: {
		"name": "Changa",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	iboga: {
		"name": "Iboga",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	peyote: {
		"name": "Peyote",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	"san-pedro": {
		"name": "San Pedro",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	"syrian-rue": {
		"name": "Syrian rue",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	yopo: {
		"name": "Yopo",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	nicotiana: {
		"name": "Nicotiana",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	harmaline: {
		"name": "Harmaline",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	harmine: {
		"name": "Harmine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	tetrahydroharmine: {
		"name": "Tetrahydroharmine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	"2-fluorodeschloroketamine": {
		"name": "2-Fluorodeschloroketamine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["2-FDCK"]
	},
	"2-oxo-pce": {
		"name": "2'-Oxo-PCE",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["O-PCE"]
	},
	"2-oxo-pcm": {
		"name": "2'-Oxo-PCM",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["Deschloroketamine, DCK"]
	},
	"3-cl-pcp": {
		"name": "3-Cl-PCP",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"3-ho-pce": {
		"name": "3-HO-PCE",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"3-ho-pcp": {
		"name": "3-HO-PCP",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"3-meo-pce": {
		"name": "3-MeO-PCE",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"3-meo-pcmo": {
		"name": "3-MeO-PCMo",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"3-meo-pcp": {
		"name": "3-MeO-PCP",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"4-meo-pcp": {
		"name": "4-MeO-PCP",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	eticyclidine: {
		"name": "Eticyclidine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["PCE"]
	},
	hydroxetamine: {
		"name": "Hydroxetamine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["HXE"]
	},
	methoxetamine: {
		"name": "Methoxetamine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["MXE"]
	},
	phencyclidine: {
		"name": "Phencyclidine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["PCP"]
	},
	dextromethorphan: {
		"name": "Dextromethorphan",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["DXM"]
	},
	diphenidine: {
		"name": "Diphenidine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	ephenidine: {
		"name": "Ephenidine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	memantine: {
		"name": "Memantine",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	"nitrous-oxide": {
		"name": "Nitrous oxide",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": ["N2O"]
	},
	xenon: {
		"name": "Xenon",
		"psychoactiveClass": "Dissociative (NMDA antagonist)",
		"chemicalClass": "Arylcyclohexylamine / Morphinane",
		"summary": "Dissociative NMDA-receptor antagonist producing body detachment and sensory distortions.",
		"effects": {
			"positive": [
				"Euphoria",
				"Dissociation",
				"Daydreaming",
				"Distortions"
			],
			"neutral": ["Ataxia", "Disorientation"],
			"negative": [
				"Nausea",
				"Confusion",
				"Sedation"
			]
		},
		"riskNotes": [
			"Never mix with depressants.",
			"Sit or lie down: fall risk.",
			"Space doses to limit neurotoxicity."
		],
		"aliases": []
	},
	atropine: {
		"name": "Atropine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": []
	},
	hyoscyamine: {
		"name": "Hyoscyamine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": []
	},
	scopolamine: {
		"name": "Scopolamine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": ["Hyoscine"]
	},
	diphenhydramine: {
		"name": "Diphenhydramine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": ["Benadryl, DPH"]
	},
	promethazine: {
		"name": "Promethazine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": []
	},
	benzydamine: {
		"name": "Benzydamine",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": []
	},
	myristicin: {
		"name": "Myristicin",
		"psychoactiveClass": "Deliriant",
		"chemicalClass": "Anticholinergique",
		"summary": "Anticholinergic deliriant producing confusion with hallucinations indistinguishable from reality.",
		"effects": {
			"positive": ["Intense reverie (rarely pleasant)"],
			"neutral": [
				"Dry mucous membranes",
				"Tachycardia",
				"Mydriase"
			],
			"negative": [
				"Hallucinations effrayantes",
				"Confusion",
				"Délire",
				"Amnesia",
				"Toxicity"
			]
		},
		"riskNotes": [
			"Effects are often unpleasant or even dangerous.",
			"Toxicité organique réelle : évitez l’usage régulier.",
			"A sober sitter is essential."
		],
		"aliases": ["Nutmeg"]
	},
	cbd: {
		"name": "CBD",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	cbda: {
		"name": "CBDA",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	cbdh: {
		"name": "CBDH",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	cbdp: {
		"name": "CBDP",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"delta-8-thc": {
		"name": "delta-8-THC",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	thc: {
		"name": "THC",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"delta-10-thc": {
		"name": "delta-10-THC",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"delta-11-thc": {
		"name": "delta-11-THC",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	thcb: {
		"name": "THCB",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	thch: {
		"name": "THCH",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	thcp: {
		"name": "THCP",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	hhc: {
		"name": "HHC",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"thc-o-acetate": {
		"name": "THC-O-acetate",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"5f-akb48": {
		"name": "5F-AKB48",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["5F-APINACA"]
	},
	"5f-pb-22": {
		"name": "5F-PB-22",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"ab-fubinaca": {
		"name": "AB-FUBINACA",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	apica: {
		"name": "APICA",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["2NE1"]
	},
	"jwh-018": {
		"name": "JWH-018",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"jwh-073": {
		"name": "JWH-073",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"sts-135": {
		"name": "STS-135",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"thj-018": {
		"name": "THJ-018",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"thj-2201": {
		"name": "THJ-2201",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"salvinorin-a": {
		"name": "Salvinorin A",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"salvinorin-b-methoxymethyl-ether": {
		"name": "Salvinorin B methoxymethyl ether",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"5-hydroxytryptophan": {
		"name": "5-Hydroxytryptophan",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["5-HTP"]
	},
	acetylcholine: {
		"name": "Acetylcholine",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	galantamine: {
		"name": "Galantamine",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	melatonin: {
		"name": "Melatonin",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"dxm-dph": {
		"name": "DXM & DPH",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["Counterflipping"]
	},
	chloroform: {
		"name": "Chloroform",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"diethyl-ether": {
		"name": "Diethyl ether",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["Ether"]
	},
	"alkyl-nitrites": {
		"name": "Alkyl nitrites",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": ["Poppers"]
	},
	progesterone: {
		"name": "Progesterone",
		"psychoactiveClass": "Cannabinoid",
		"chemicalClass": "Cannabinoïde",
		"summary": "Cannabinoid acting on CB1 receptors: relaxation, sensory change and increased appetite.",
		"effects": {
			"positive": [
				"Relaxation",
				"Euphoria",
				"Appetite",
				"Laughter"
			],
			"neutral": [
				"Red eyes",
				"Dry mouth",
				"Time distortion"
			],
			"negative": [
				"Anxiety",
				"Paranoia",
				"Tachycardia"
			]
		},
		"riskNotes": ["Can trigger or worsen psychosis in vulnerable people.", "Edibles: delayed effects — do not redose too soon."],
		"aliases": []
	},
	"2-methyl-2-butanol": {
		"name": "2-Methyl-2-butanol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["2M2B"]
	},
	bromazepam: {
		"name": "Bromazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	clonazepam: {
		"name": "Clonazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Klonopin"]
	},
	clonazolam: {
		"name": "Clonazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	diclazepam: {
		"name": "Diclazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	flualprazolam: {
		"name": "Flualprazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	flubromazepam: {
		"name": "Flubromazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	flubromazolam: {
		"name": "Flubromazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	flunitrazepam: {
		"name": "Flunitrazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Rohypnol"]
	},
	flunitrazolam: {
		"name": "Flunitrazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	lorazepam: {
		"name": "Lorazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Ativan"]
	},
	lormetazepam: {
		"name": "Lormetazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	midazolam: {
		"name": "Midazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Dormicum"]
	},
	nifoxipam: {
		"name": "Nifoxipam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	pyrazolam: {
		"name": "Pyrazolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	temazepam: {
		"name": "Temazepam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	deschloroetizolam: {
		"name": "Deschloroetizolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	etizolam: {
		"name": "Etizolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	metizolam: {
		"name": "Metizolam",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	pentobarbital: {
		"name": "Pentobarbital",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	phenobarbital: {
		"name": "Phenobarbital",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	secobarbital: {
		"name": "Secobarbital",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	gaboxadol: {
		"name": "Gaboxadol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	"ibotenic-acid": {
		"name": "Ibotenic acid",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	muscimol: {
		"name": "Muscimol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	zolpidem: {
		"name": "Zolpidem",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Ambien"]
	},
	zopiclone: {
		"name": "Zopiclone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	"1-4-butanediol": {
		"name": "1,4-Butanediol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["1,4-B"]
	},
	baclofen: {
		"name": "Baclofen",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	carisoprodol: {
		"name": "Carisoprodol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Soma"]
	},
	"f-phenibut": {
		"name": "F-Phenibut",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	gaba: {
		"name": "GABA",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	gbl: {
		"name": "GBL",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	kava: {
		"name": "Kava",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	methaqualone: {
		"name": "Methaqualone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	nitromethaqualone: {
		"name": "Nitromethaqualone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	phenibut: {
		"name": "Phenibut",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	gabapentin: {
		"name": "Gabapentin",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	pregabalin: {
		"name": "Pregabalin",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Lyrica"]
	},
	acetylfentanyl: {
		"name": "Acetylfentanyl",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	buprenorphine: {
		"name": "Buprenorphine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	codeine: {
		"name": "Codeine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	desomorphine: {
		"name": "Desomorphine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Krokodil"]
	},
	dextropropoxyphene: {
		"name": "Dextropropoxyphene",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	diacetylmorphine: {
		"name": "Diacetylmorphine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Heroin"]
	},
	dihydrocodeine: {
		"name": "Dihydrocodeine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	ethylmorphine: {
		"name": "Ethylmorphine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	fentanyl: {
		"name": "Fentanyl",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	hydrocodone: {
		"name": "Hydrocodone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Vicodin"]
	},
	hydromorphone: {
		"name": "Hydromorphone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["Dilaudid"]
	},
	methadone: {
		"name": "Methadone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	morphine: {
		"name": "Morphine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	"o-desmethyltramadol": {
		"name": "O-Desmethyltramadol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["O-DSMT"]
	},
	oxycodone: {
		"name": "Oxycodone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": ["OxyContin"]
	},
	oxymorphone: {
		"name": "Oxymorphone",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	pethidine: {
		"name": "Pethidine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	sufentanil: {
		"name": "Sufentanil",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	tapentadol: {
		"name": "Tapentadol",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	tianeptine: {
		"name": "Tianeptine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	"u-47700": {
		"name": "U-47700",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	clonidine: {
		"name": "Clonidine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	tizanidine: {
		"name": "Tizanidine",
		"psychoactiveClass": "CNS depressant",
		"chemicalClass": "Benzodiazépine / Alcool / GABAergique",
		"summary": "CNS depressant producing sedation, anxiolysis and relaxation via GABA.",
		"effects": {
			"positive": [
				"Relaxation",
				"Anxiolysis",
				"Sedation"
			],
			"neutral": ["Drowsiness", "Muscle relaxation"],
			"negative": [
				"Amnesia",
				"Dependence",
				"Respiratory depression (in mixes)"
			]
		},
		"riskNotes": ["Never mix with alcohol or opioids.", "Withdrawal can be dangerous: do not stop abruptly."],
		"aliases": []
	},
	"2-fa": {
		"name": "2-FA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"2-fea": {
		"name": "2-FEA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"2-fma": {
		"name": "2-FMA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"3-fa": {
		"name": "3-FA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"3-fea": {
		"name": "3-FEA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"3-fma": {
		"name": "3-FMA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"4-fa": {
		"name": "4-FA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"4-fma": {
		"name": "4-FMA",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	ephedrine: {
		"name": "Ephedrine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	fenethylline: {
		"name": "Fenethylline",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Captagon"]
	},
	lisdexamfetamine: {
		"name": "Lisdexamfetamine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Vyvanse"]
	},
	"3-fpm": {
		"name": "3-FPM",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"3-4-ctmp": {
		"name": "3,4-CTMP",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["3,4-DCMP"]
	},
	"4f-eph": {
		"name": "4F-EPH",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"4f-mph": {
		"name": "4F-MPH",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	ethylphenidate: {
		"name": "Ethylphenidate",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["EPH"]
	},
	isopropylphenidate: {
		"name": "Isopropylphenidate",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["IPH / IPPH"]
	},
	methylnaphthidate: {
		"name": "Methylnaphthidate",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["HDMP-28"]
	},
	"3-mmc": {
		"name": "3-MMC",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	butylone: {
		"name": "Butylone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["βk-MBDB"]
	},
	cathinone: {
		"name": "Cathinone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Khat"]
	},
	ephylone: {
		"name": "Ephylone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["N-Ethylpentylone"]
	},
	ethcathinone: {
		"name": "Ethcathinone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["ETH-CAT"]
	},
	ethylone: {
		"name": "Ethylone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["βk-MDEA"]
	},
	hexedrone: {
		"name": "Hexedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	mephedrone: {
		"name": "Mephedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["4-MMC"]
	},
	methcathinone: {
		"name": "Methcathinone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	methylone: {
		"name": "Methylone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["βk-MDMA"]
	},
	mexedrone: {
		"name": "Mexedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"n-ethylhexedrone": {
		"name": "N-Ethylhexedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["HEX-EN"]
	},
	"n-ethylpentedrone": {
		"name": "N-Ethylpentedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["NEP"]
	},
	pentedrone: {
		"name": "Pentedrone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	php: {
		"name": "α-PHP",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	pvp: {
		"name": "α-PVP",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Flakka"]
	},
	mdpv: {
		"name": "MDPV",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Monkey Dust"]
	},
	mcpp: {
		"name": "mCPP",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"rti-111": {
		"name": "RTI-111",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Dichloropane"]
	},
	cyclazodone: {
		"name": "Cyclazodone",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"8-chlorotheophylline": {
		"name": "8-Chlorotheophylline",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	theacrine: {
		"name": "Theacrine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"2-ai": {
		"name": "2-AI",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	bromantane: {
		"name": "Bromantane",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	desoxypipradrol: {
		"name": "Desoxypipradrol",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["2-DPMP"]
	},
	methiopropamine: {
		"name": "Methiopropamine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	"nm-2-ai": {
		"name": "NM-2-AI",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	phenethylamine: {
		"name": "Phenethylamine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	prolintane: {
		"name": "Prolintane",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": []
	},
	propylhexedrine: {
		"name": "Propylhexedrine",
		"psychoactiveClass": "Stimulant",
		"chemicalClass": "Phénéthylamine / Cathinone / Xanthine",
		"summary": "CNS stimulant increasing alertness, energy and dopamine.",
		"effects": {
			"positive": [
				"Energy",
				"Wakefulness",
				"Confidence",
				"Focus"
			],
			"neutral": ["Dilated pupils", "Appetite loss"],
			"negative": [
				"Anxiety",
				"Insomnia",
				"Tachycardia",
				"Come-down"
			]
		},
		"riskNotes": [
			"Stay hydrated and eat.",
			"Space doses to limit neurotoxicity.",
			"Watch your heart rate."
		],
		"aliases": ["Benzedrex"]
	},
	mdai: {
		"name": "MDAI",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	mdea: {
		"name": "MDEA",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": ["MDE"]
	},
	"5-apb": {
		"name": "5-APB",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	"5-mapb": {
		"name": "5-MAPB",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	"6-apb": {
		"name": "6-APB",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": ["Benzofury"]
	},
	"6-apdb": {
		"name": "6-APDB",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	pma: {
		"name": "PMA",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	pmma: {
		"name": "PMMA",
		"psychoactiveClass": "Empathogen / stimulant",
		"chemicalClass": "Phénéthylamine substituée",
		"summary": "Empathogen causing a strong serotonin release: euphoria, social warmth and empathy.",
		"effects": {
			"positive": [
				"Euphoria",
				"Empathie",
				"Chaleur émotionnelle",
				"Sociability"
			],
			"neutral": ["Bruxisme", "Dilated pupils"],
			"negative": [
				"Hyperthermie",
				"Descente dépressive",
				"Neurotoxicity"
			]
		},
		"riskNotes": [
			"Leave at least 6–8 weeks between doses.",
			"Drink ~500 ml of water per hour if dancing.",
			"Always test (PMA/PMMA risk)."
		],
		"aliases": []
	},
	adrafinil: {
		"name": "Adrafinil",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"n-methylbisfluoromodafinil": {
		"name": "N-Methylbisfluoromodafinil",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": ["Modafiendz"]
	},
	"5-htp": {
		"name": "5-HTP",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	choline: {
		"name": "Choline",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	creatine: {
		"name": "Creatine",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"l-tyrosine": {
		"name": "L-Tyrosine",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"s-adenosyl-methionine": {
		"name": "S-Adenosyl methionine",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": ["SAMe"]
	},
	aniracetam: {
		"name": "Aniracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	coluracetam: {
		"name": "Coluracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	oxiracetam: {
		"name": "Oxiracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	phenylpiracetam: {
		"name": "Phenylpiracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	piracetam: {
		"name": "Piracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	pramiracetam: {
		"name": "Pramiracetam",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"l-theanine": {
		"name": "L-Theanine",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"n-acetylcysteine": {
		"name": "N-Acetylcysteine",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": ["NAC"]
	},
	noopept: {
		"name": "Noopept",
		"psychoactiveClass": "Cognitive / Nootropic",
		"chemicalClass": "Nootropique",
		"summary": "Nootropic aimed at cognitive function: memory, focus, alertness.",
		"effects": {
			"positive": [
				"Focus",
				"Memory",
				"Mental clarity"
			],
			"neutral": ["Wakefulness"],
			"negative": [
				"Headache",
				"Insomnia",
				"Anxiety"
			]
		},
		"riskNotes": ["Long-term effects are poorly documented.", "Avoid late in the day (insomnia)."],
		"aliases": []
	},
	"aminobutyric-acid": {
		"name": "γ-Aminobutyric acid",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": ["GABA"]
	},
	"l-glutamate": {
		"name": "L-Glutamate",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	dopamine: {
		"name": "Dopamine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	epinephrine: {
		"name": "Epinephrine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": ["Adrenaline"]
	},
	histamine: {
		"name": "Histamine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	norepinephrine: {
		"name": "Norepinephrine",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": ["Noradrenaline"]
	},
	serotonin: {
		"name": "Serotonin",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": ["5-HT"]
	},
	phenethylamines: {
		"name": "Phenethylamines",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	},
	semax: {
		"name": "Semax",
		"psychoactiveClass": "Misc",
		"chemicalClass": "Divers",
		"summary": "Miscellaneous psychoactive substance; effects still poorly documented.",
		"effects": {
			"positive": ["Variable effects"],
			"neutral": ["Variable effects"],
			"negative": ["Possible side effects"]
		},
		"riskNotes": ["Limited data: check specialised sources."],
		"aliases": []
	}
};
var DURATION_FIX = {
	mephedrone: {
		onsetMin: [10, 20],
		peakMin: [30, 90],
		totalMin: [90, 240]
	},
	"3-mmc": {
		onsetMin: [10, 25],
		peakMin: [40, 90],
		totalMin: [120, 240]
	},
	"n-ethylpentedrone": {
		onsetMin: [5, 15],
		peakMin: [15, 40],
		totalMin: [60, 150]
	},
	hexen: {
		onsetMin: [5, 15],
		peakMin: [15, 40],
		totalMin: [45, 120]
	},
	"a-pvp": {
		onsetMin: [2, 10],
		peakMin: [10, 30],
		totalMin: [30, 90]
	},
	"a-php": {
		onsetMin: [5, 15],
		peakMin: [20, 45],
		totalMin: [60, 180]
	},
	nicotine: {
		onsetMin: [0, 2],
		peakMin: [2, 8],
		totalMin: [20, 45]
	}
};
var substances = substances_default.map((s) => {
	const fix = DURATION_FIX[s.slug];
	return fix ? {
		...s,
		duration: fix
	} : s;
});
var categories = categories_default;
var neurotransmitters = neurotransmitters_default;
var CATEGORY_ORDER = [
	"psychedelic",
	"empathogen",
	"stimulant",
	"cannabinoid",
	"dissociative",
	"depressant",
	"opioid",
	"deliriant",
	"nootropic",
	"misc"
];
function getSubstance(slug) {
	return substances.find((s) => s.slug === slug);
}
var EN_NAMES = substance_en_default;
function findSubstanceByName(name) {
	const e = normName(name);
	if (!e) return void 0;
	return substances.find((s) => {
		const en = EN_NAMES[s.slug];
		return normName(s.name) === e || s.aliases.some((a) => normName(a) === e) || en?.name && normName(en.name) === e || (en?.aliases ?? []).some((a) => normName(a) === e);
	});
}
function matchScore(s, q) {
	const e = q.trim().toLowerCase();
	if (!e) return 0;
	const en = EN_NAMES[s.slug];
	const aliases = [...s.aliases.map((a) => a.toLowerCase()), ...(en?.aliases ?? []).map((a) => a.toLowerCase())];
	const name = s.name.toLowerCase();
	const enName = (en?.name ?? "").toLowerCase();
	if (name === e || enName === e) return 0;
	if (name.startsWith(e) || enName && enName.startsWith(e)) return 1;
	if (aliases.some((a) => a === e)) return 2;
	if (name.includes(e) || enName && enName.includes(e)) return 3;
	if (aliases.some((a) => a.startsWith(e))) return 4;
	if (aliases.some((a) => a.includes(e))) return 5;
	if ([
		s.chemicalClass,
		s.psychoactiveClass,
		categories[s.category]?.label
	].join(" ").toLowerCase().includes(e)) return 6;
	return -1;
}
function searchSubstances(q) {
	const e = q.trim().toLowerCase();
	if (!e) return substances;
	return substances.map((s) => ({
		s,
		score: matchScore(s, e)
	})).filter((x) => x.score !== -1).sort((a, b) => a.score - b.score).map((x) => x.s);
}
function harmTotal(s) {
	return Math.round((s.harm.physical + s.harm.dependence + s.harm.social) / 3);
}
function formatMins(t) {
	if (t < 60) return `${Math.round(t)} min`;
	const h = Math.floor(t / 60);
	const m = Math.round(t % 60);
	return m === 0 ? `${h} h` : `${h} h ${m}`;
}
function avgPair(pair) {
	return (pair[0] + pair[1]) / 2;
}
function durationCurve(s) {
	const onset = avgPair(s.duration.onsetMin);
	const peakStart = avgPair(s.duration.peakMin);
	return {
		onset,
		peakStart,
		peakEnd: Math.min(Math.max(peakStart + 1, avgPair([s.duration.peakMin[1], s.duration.totalMin[0]])), avgPair(s.duration.totalMin)),
		total: avgPair(s.duration.totalMin)
	};
}
function ease(n) {
	return n * n * (3 - 2 * n);
}
function intensityAt(c, t) {
	if (t <= 0 || t >= c.total) return 0;
	if (t < c.onset) return .06 * (t / Math.max(c.onset, 1));
	if (t < c.peakStart) return .06 + .94 * ease((t - c.onset) / Math.max(c.peakStart - c.onset, 1));
	if (t <= c.peakEnd) return 1;
	const a = (t - c.peakEnd) / Math.max(c.total - c.peakEnd, 1);
	return Math.max(0, 1 - ease(a));
}
function curvePath(c, w, h, steps = 48, amp = 1) {
	const padY = 4;
	const a = Math.min(1.2, Math.max(.15, amp));
	const pts = [];
	for (let i = 0; i <= steps; i++) {
		const t = i / steps * c.total;
		const x = i / steps * w;
		const y = h - padY - intensityAt(c, t) * a * (h - 8);
		pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
	}
	return pts.join(" ");
}
function offsetCurvePath(c, offsetMin, span, w, h, steps = 60, amp = 1) {
	const padY = 4;
	const a = Math.min(1.2, Math.max(.15, amp));
	const pts = [];
	for (let i = 0; i <= steps; i++) {
		const t = i / steps * c.total;
		const x = (offsetMin + t) / span * w;
		const y = h - padY - intensityAt(c, t) * a * (h - 8);
		pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
	}
	return pts.join(" ");
}
function offsetCurveFill(c, offsetMin, span, w, h, steps = 60, amp = 1) {
	const d = offsetCurvePath(c, offsetMin, span, w, h, steps, amp);
	const x0 = offsetMin / span * w;
	return `${d} L ${((offsetMin + c.total) / span * w).toFixed(1)},${h} L ${x0.toFixed(1)},${h} Z`;
}
var DOSE_KEYS = [
	"threshold",
	"light",
	"common",
	"strong",
	"heavy"
];
function categoryEmoji(id) {
	const raw = categories[id]?.emoji ?? "";
	if (/^U[0-9a-fA-F]{4,6}$/.test(raw)) return String.fromCodePoint(parseInt(raw.slice(1), 16));
	return raw || "•";
}
function categoryTint(id) {
	return categories[id]?.tint ?? "rgba(168,124,69,0.16)";
}
function looksLikeAdd(q) {
	return /\b(ajoute[r]?|add|log|prend(?:re)?|took|note|ing[eè]re)\b/i.test(q);
}
function looksLikeToolDump(text) {
	const t = text.toLowerCase();
	return /add_to_journal|lookup_substance|set_theme/.test(t) || /```(?:html|json|xml|tool)/i.test(text) || /"name"\s*:\s*"add_to_journal"/.test(text);
}
function routeOf(raw) {
	const r = (raw ?? "").toLowerCase();
	if (/oral|orale|po/.test(r)) return "Orale";
	if (/nasal|sniff|intranas/.test(r)) return "Intranasale";
	if (/fum|smoke|vape/.test(r)) return "Fumée";
	if (/iv|intravein/.test(r)) return "IV";
	if (/im\b|intra.?musc/.test(r)) return "IM";
	if (/subling/.test(r)) return "Sublinguale";
	if (/rect/.test(r)) return "Rectale";
	return raw?.trim() || "Orale";
}
function resolveDoseName(raw) {
	const name = raw.replace(/^(de|d['’]|of|du|de la|des)\s+/i, "").replace(/[,;]+$/g, "").replace(/\s+(et|and)$/i, "").trim();
	if (!name || name.length < 2) return void 0;
	const s = findSubstanceByName(name) ?? (name.length >= 3 ? searchSubstances(name)[0] : void 0);
	if (!s) return void 0;
	if (name.length < 4 && !s.name.toLowerCase().startsWith(name.toLowerCase()) && !s.aliases.some((a) => a.toLowerCase().startsWith(name.toLowerCase()))) return;
	return {
		substanceName: s.name,
		dose: null,
		unit: s.doses[0]?.unit || "mg",
		route: s.doses[0]?.route || "Orale"
	};
}
function toDose(substance, dose, unit, route) {
	const base = resolveDoseName(substance);
	if (!base) return void 0;
	const n = typeof dose === "number" ? dose : dose != null && String(dose).trim() ? Number(String(dose).replace(",", ".")) : null;
	return {
		...base,
		dose: n != null && Number.isFinite(n) ? n : null,
		unit: unit || base.unit,
		route: routeOf(route || base.route)
	};
}
function extractTitle(q) {
	const m = q.match(/(?:dans |in )?(?:une |an )?(?:exp[eé]rience|experience|session|log)\s+(?:appel[ée]e|nomm[ée]e|named|called|titre|title)\s+[«"']?(.+?)[»"']?\s*$/i);
	if (m) return {
		title: m[1].trim().replace(/[«»"']+/g, ""),
		rest: q.slice(0, m.index).trim().replace(/[,;:\s]+$/, "")
	};
	const m2 = q.match(/titre\s*[:=]\s*[«"']?(.+?)[»"']?\s*$/i);
	if (m2) return {
		title: m2[1].trim(),
		rest: q.slice(0, m2.index).trim()
	};
	return { rest: q };
}
function parseAddItems(q) {
	const { title, rest } = extractTitle(q);
	const hits = [...rest.matchAll(/(\d+(?:[.,]\d+)?)\s*(µg|ug|mcg|mg|g|ml)\b/gi)];
	if (hits.length === 0) {
		if (!looksLikeAdd(q)) return {
			items: [],
			title
		};
		const only = resolveDoseName(rest.replace(/^(ajoute[r]?|add|log)\s+/i, ""));
		return {
			items: only ? [only] : [],
			title
		};
	}
	const items = [];
	for (let i = 0; i < hits.length; i++) {
		const m = hits[i];
		const start = (m.index ?? 0) + m[0].length;
		const end = i + 1 < hits.length ? hits[i + 1].index ?? rest.length : rest.length;
		let name = rest.slice(start, end);
		name = name.replace(/^(?:\s*(?:de|d['’]|of|du|de la)\s+)/i, "");
		name = name.replace(/[\s,;]+(?:et|and)?\s*$/i, "").trim();
		const d = toDose(name, m[1].replace(",", "."), m[2]);
		if (d) items.push(d);
	}
	return {
		items,
		title
	};
}
var COLOR_WORDS = [
	{
		re: /\b(sable|beige|sand|or|gold)\b/i,
		hue: 36
	},
	{
		re: /\b(terracotta|orange|cuivre)\b/i,
		hue: 18
	},
	{
		re: /\b(rose|pink|poudr\w*)\b/i,
		hue: 350
	},
	{
		re: /\b(mauve|violet|purple|lilas)\b/i,
		hue: 280
	},
	{
		re: /\b(indigo|bleu[- ]nuit)\b/i,
		hue: 235
	},
	{
		re: /\b(lagon|cyan|bleu|bleue|blue)\b/i,
		hue: 200
	},
	{
		re: /\b(sauge|vert|verte|green)\b/i,
		hue: 150
	},
	{
		re: /\b(olive)\b/i,
		hue: 80
	},
	{
		re: /\b(rouge|red)\b/i,
		hue: 8
	},
	{
		re: /\b(mono|gris|grise|n&b|noir et blanc|monochrome)\b/i,
		hue: -1
	}
];
function looksLikeTheme(q) {
	const low = q.toLowerCase();
	if (/\b(couleur|color|th[eè]me|theme|accent|monochrome)\b/i.test(low) || /\b(mets?|mettre|passe|change|put|make|switch)\b.{0,24}\b(site|th[eè]me|theme|couleur|color|bleu|blue|rouge|vert|rose|violet|sombre|clair|dark|light)\b/i.test(low) || /\ben\s+(bleu|bleue|blue|rouge|vert|rose|violet|mauve|orange|sable|noir|blanc|gris)\b/i.test(low) || /\b(mode\s+)?(sombre|nuit|dark|clair|jour|light)\b.{0,12}\b(mode|th[eè]me|theme|site)?/i.test(low) && /\b(mode|th[eè]me|theme|site|passe|mets|mettre)\b/i.test(low)) return true;
	return false;
}
function looksLikeNav(q) {
	return /\b(ouvre|open|va sur|go to|affiche|montre|navig(?:ue)?)\b/i.test(q);
}
function parseTheme(q) {
	if (!looksLikeTheme(q)) return void 0;
	const low = q.toLowerCase();
	let theme;
	if (/\b(sombre|dark|nuit)\b/.test(low)) theme = "dark";
	else if (/\b(clair|light|jour)\b/.test(low)) theme = "light";
	else if (/\bauto\b/.test(low)) theme = "auto";
	let hue;
	const num = q.match(/\b(?:hue|degr[eé]s?|deg|°)\s*[:=]?\s*(\d{1,3})\b/i) || q.match(/\b(\d{1,3})\s*(?:°|deg|degr[eé]s?|hue)\b/i);
	if (num && Number(num[1]) <= 360) hue = Number(num[1]);
	for (const c of COLOR_WORDS) if (c.re.test(q)) {
		hue = c.hue;
		break;
	}
	if (hue == null && !theme) return void 0;
	return {
		kind: "theme",
		hue,
		theme
	};
}
function parseNavigate(q) {
	if (!looksLikeNav(q)) return void 0;
	const low = q.toLowerCase();
	for (const [re, path] of [
		[/log|journal/, "/logs"],
		[/profil|profile/, "/profile"],
		[/substance/, "/substances"],
		[/alerte/, "/alerts"],
		[/neuro/, "/neuro"],
		[/compar/, "/compare"],
		[/effet/, "/effects"],
		[/dommage|harm/, "/harm-scale"],
		[/r[eé]duction/, "/reduction"],
		[/exp[eé]rience/, "/experiences"],
		[/accueil|home/, "/"],
		[/tako|chat/, "/chat"]
	]) if (re.test(low)) return {
		kind: "navigate",
		path
	};
}
function looksLikeStats(q) {
	return /\b(stat|statistique|résumé|resume|classement|combien de fois|heatmap|tolérance|tolerance|journal|mes logs|my stats)\b/i.test(q);
}
function jsonBlobs(s) {
	const out = [];
	let depth = 0;
	let start = -1;
	for (let i = 0; i < s.length; i++) {
		const ch = s[i];
		if (ch === "{") {
			if (depth === 0) start = i;
			depth += 1;
		} else if (ch === "}") {
			depth -= 1;
			if (depth === 0 && start >= 0) {
				out.push(s.slice(start, i + 1));
				start = -1;
			}
		}
	}
	return out;
}
function dosesFromUnknown(o) {
	const rawItems = o.items ?? o.ingestions ?? o.doses;
	if (Array.isArray(rawItems)) return rawItems.map((it) => {
		const x = it;
		return toDose(String(x.substance ?? x.substanceName ?? x.name ?? ""), x.dose, String(x.unit ?? ""), String(x.route ?? ""));
	}).filter((x) => !!x);
	const one = toDose(String(o.substance ?? o.substanceName ?? ""), o.dose, String(o.unit ?? ""), String(o.route ?? ""));
	return one ? [one] : [];
}
function extractChatAction(raw) {
	if (!raw.trim()) return void 0;
	const stripped = raw.replace(/```(?:html|json|xml|tool|javascript|ts)?/gi, "").replace(/```/g, "").trim();
	for (const blob of jsonBlobs(stripped)) try {
		const o = JSON.parse(blob);
		let args = o;
		if (typeof o.arguments === "string") try {
			args = JSON.parse(o.arguments);
		} catch {
			args = o;
		}
		else if (o.arguments && typeof o.arguments === "object") args = o.arguments;
		const name = String(o.name ?? o.tool ?? o.function ?? args.name ?? "");
		if (name === "set_theme") return {
			kind: "theme",
			hue: typeof args.hue === "number" ? args.hue : void 0,
			theme: args.theme
		};
		if (name === "open_page") return {
			kind: "navigate",
			path: String(args.path ?? o.path ?? "")
		};
		if (name === "add_to_journal") {
			const items = dosesFromUnknown(args);
			if (items.length) {
				const first = items[0];
				return {
					kind: "add",
					items,
					title: args.title ? String(args.title) : void 0,
					substanceName: first.substanceName,
					dose: first.dose,
					unit: first.unit,
					route: first.route
				};
			}
		}
	} catch {}
	const parsed = parseAddItems(stripped);
	if (parsed.items.length && looksLikeAdd(stripped)) {
		const first = parsed.items[0];
		return {
			kind: "add",
			items: parsed.items,
			title: parsed.title,
			substanceName: first.substanceName,
			dose: first.dose,
			unit: first.unit,
			route: first.route
		};
	}
	return parseTheme(stripped) ?? parseNavigate(stripped);
}
function interpretMessage(q) {
	const theme = parseTheme(q);
	if (theme) return theme;
	const nav = parseNavigate(q);
	if (nav) return nav;
	if (looksLikeStats(q) && !looksLikeAdd(q)) return { kind: "stats" };
	const parsed = parseAddItems(q);
	if (parsed.items.length && (looksLikeAdd(q) || parsed.items.length > 1 || parsed.title)) {
		const first = parsed.items[0];
		return {
			kind: "add",
			items: parsed.items,
			title: parsed.title,
			substanceName: first.substanceName,
			dose: first.dose,
			unit: first.unit,
			route: first.route
		};
	}
}
function humanizeChatText(raw, locale, action) {
	const cleaned = raw.replace(/```(?:html|json|xml|tool|javascript|ts)?/gi, "").replace(/```/g, "").trim();
	if (action?.kind === "add" && (looksLikeToolDump(raw) || looksLikeToolDump(cleaned))) {
		const list = (action.items?.length ? action.items : action.substanceName ? [{
			substanceName: action.substanceName,
			dose: action.dose ?? null,
			unit: action.unit ?? "mg",
			route: action.route ?? "Orale"
		}] : []).map((i) => `${i.dose ?? ""} ${i.unit} ${i.substanceName}`.trim()).join(", ");
		return locale === "fr" ? `C’est noté — ${list}${action.title ? ` dans « ${action.title} »` : ""}.` : `Got it — ${list}${action.title ? ` in “${action.title}”` : ""}.`;
	}
	if (looksLikeToolDump(cleaned) && !action) return locale === "fr" ? "Je n’ai pas pu appliquer cette action. Reformule." : "I couldn’t apply that action. Try again.";
	return cleaned.replace(/\*\*/g, "").trim();
}
//#endregion
export { searchSubstances as C, offsetCurvePath as S, substances as T, looksLikeNav as _, categoryTint as a, normName as b, extractChatAction as c, getSubstance as d, harmTotal as f, looksLikeAdd as g, interpretMessage as h, categoryEmoji as i, findSubstanceByName as l, intensityAt as m, DOSE_KEYS as n, curvePath as o, humanizeChatText as p, categories as r, durationCurve as s, CATEGORY_ORDER as t, formatMins as u, looksLikeTheme as v, substance_en_default as w, offsetCurveFill as x, neurotransmitters as y };

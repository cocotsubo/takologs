function fold(q: string) {
  return q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-'’]/g, " ")
    .replace(/[?!.,;:]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isHelpIntent(q: string) {
  const low = fold(q);
  if (!low) return false;
  if (/^(salut|hello|hi|hey|bonjour|coucou|yo)\b/.test(low)) return true;
  if (/\b(takoai|tako ai)\b/.test(low) && /(aide|help|qui|quoi|faire|peux|sais)/.test(low)) return true;
  if (
    /^(aide|help|takoai|tako ai)\b/.test(low) ||
    /que (sais|peux) tu/.test(low) ||
    /sais tu (faire|faire quoi|quoi)/.test(low) ||
    /tu (sais|peux) (faire|quoi)/.test(low) ||
    /(sais tu|peux tu|what can you|how can you) (faire|do|help)/.test(low) ||
    /tes? (fonctions?|capacites?|commandes?)/.test(low) ||
    /c est quoi (tako|takoai|cette app)/.test(low) ||
    /who are you|what are you/.test(low)
  ) {
    return true;
  }
  return false;
}

export function helpText(locale: "fr" | "en") {
  return locale === "en"
    ? "I’m TakoAI. I can:\n• Log a dose — “add 100 mg of MDMA”\n• Photograph a dose to estimate mg (camera button)\n• Explain a substance — doses, duration, interactions\n• Show your journal stats\n• Change the site color / theme\n• Open Logs, Alerts, Profile…\nTry: “how long does LSD last” or “my stats”."
    : "Je suis TakoAI. Je peux :\n• Logger une prise — « ajoute 100 mg de MDMA »\n• Photographier une prise pour estimer les mg (bouton appareil)\n• Expliquer une substance — doses, durée, interactions\n• Afficher tes stats de journal\n• Changer la couleur / le thème du site\n• Ouvrir Logs, Alertes, Profil…\nEssaie : « durée du LSD » ou « mes stats ».";
}

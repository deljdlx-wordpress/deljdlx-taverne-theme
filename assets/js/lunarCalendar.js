class LunarCalendar
{
  phases = [
    "Nouvelle Lune",
    "Premier croissant",
    "Premier Quartier",
    "Gibbeuse croissante",
    "Pleine Lune",
    "Gibbeuse décroissante",
    "Dernier Quartier",
    "Dernier croissant"
  ];

  emojis = [
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘"
  ];

  __construct() {

  }

  getPhaseIndex(date) {
    // Convertir la date en UTC pour simplifier les calculs
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Les mois en JavaScript commencent à 0
    var day = date.getUTCDate();

    // Si le mois est janvier ou février, on ajuste l'année et le mois
    if (month < 3) {
        year--;
        month += 12;
    }

    // Formule pour calculer le nombre de jours depuis une date de référence
    var c = Math.floor(365.25 * year);
    var e = Math.floor(30.6 * (month + 1));
    var jd = c + e + day - 694039.09; // Date julienne (JDN) ajustée à une date de référence
    jd /= 29.53058867; // Durée d'un cycle lunaire (29.53 jours environ)

    // Extraire la partie fractionnaire du résultat
    var phase = jd - Math.floor(jd);

    // Convertir la phase en un chiffre entre 0 et 8, représentant les 8 phases principales
    var phaseIndex = Math.floor(phase * 8 + 0.5) % 8;

    return phaseIndex;
  }

  getPhase(date) {
    let index = this.getPhaseIndex(date);
    return this.phases[index];
  }

  getEmoji(date) {
    let index = this.getPhaseIndex(date);
    return this.emojis[index];
  }
}

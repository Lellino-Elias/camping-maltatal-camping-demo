import type { CampsiteConfig } from "../types";

/**
 * Terrassencamping & Hotel Maltatal — Malta, Maltatal, Kärnten.
 * Alle Texte/Fakten belegt aus camping-maltatal.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Maltatal-Fotos in /public/campsites/camping-maltatal/.
 * EHRLICH: KEIN See am Platz — der Platz liegt auf 800 m im Maltatal (Berge, Maltafluss,
 * Kölnbreinsperre ~5 km zum Wandern), nie als "am See" geframt → `see` ausgelassen.
 * Preise = reale, veröffentlichte 2026-Stellplatzpreise (ab-Werte Vorsaison, 2 Erwachsene,
 * exkl. Ortstaxe € 2,40). Hotel-/Mobilheim-Nächtigungspreise sind auf der Quelle nicht
 * beziffert → in den Unterkunfts-Karten kein priceFrom. Auszeichnungen wörtlich belegt
 * (ADAC, ACSI, ANWB, ECC, DCC) — ACSI- & ADAC-Badges als Bild, Rest als Text.
 */
const IMG = "/campsites/camping-maltatal";

export const campsite: CampsiteConfig = {
  name: "Terrassencamping Maltatal",
  shortName: "Maltatal",
  slug: "camping-maltatal",
  ort: "Malta",
  region: "Kärnten",
  brandKind: "Terrassencamping & Hotel",
  regionLong: "Maltatal · Nationalpark Hohe Tauern · Kärnten · Österreich",

  claim: "Terrassencamping auf 800 m – eingebettet in die Bergwelt des Maltatals",
  claimEmphasis: "Bergwelt des Maltatals",
  intro:
    "Familienbetrieb seit über 50 Jahren: rund 220 terrassierte Stellplätze, Mobile Homes und ein kleines Hotel auf 800 m Seehöhe – zwischen Nationalpark Hohe Tauern und Biosphärenpark Nockberge.",

  logo: { src: `${IMG}/logo_maltatal.png`, alt: "Terrassencamping & Hotel Maltatal Logo" },

  statement: {
    text: "Mit Herz und Natur – seit über 50 Jahren ein echter Familienbetrieb der Familie Pirker.",
    emphasis: "Mit Herz und Natur",
  },

  pillars: [
    { title: "Terrassenlage auf 800 m", text: "Eingebettet in die Bergwelt Kärntens – im Norden geschützt durch den Alpenhauptkamm, im Süden begünstigt vom milden Klima.", image: { src: `${IMG}/pillar_terrassenlage.webp`, alt: "Camper entspannen vor dem Wohnwagen mit Blick auf die Berge des Maltatals" } },
    { title: "Familienbetrieb Pirker", text: "Seit über 50 Jahren mit Herz geführt – heute von Andreas Pirker, der den Platz seit 1999 weiterentwickelt.", image: { src: `${IMG}/pillar_familie_pirker.webp`, alt: "Familie Pirker in Kärntner Tracht" } },
    { title: "Freibad & Familienspaß", text: "Solarbeheiztes Freibad, Streichelzoo mit Ponys, Spielplatz und Restaurant – alles direkt am Platz.", image: { src: `${IMG}/pillar_freibad_gelaende.webp`, alt: "Sonniges Campingelände mit Freibad und Bergpanorama" } },
  ],

  usps: [
    "Familienbetrieb seit über 50 Jahren",
    "800 m Seehöhe im Maltatal",
    "Solarbeheiztes Freibad (25 × 12,5 m)",
    "Restaurant & Pizzeria am Platz",
    "Streichelzoo, Ponys & Spielplatz",
    "FREE WIFI am gesamten Areal",
  ],

  trust: {
    heading: "Worauf du dich am Maltatal verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Pirker, mehrfach ausgezeichnet von ADAC, ANWB, ACSI und ECC – mit gepflegten Sanitäranlagen, solarbeheiztem Freibad und einem familiären Freizeitprogramm direkt am Platz.",
  },

  // Wörtlich belegt auf ueber-uns: „mehrfach von ADAC, ANWB, ACSI und ECC ausgezeichnet …
  // stolzer DCC-Europapreisträger". ACSI- & ADAC-Badge als eigenes Bild (vision-verifiziert).
  awards: [
    { label: "ACSI Award 2025 · Best Campsite Restaurant Austria", image: { src: `${IMG}/award_acsi_2025.png`, alt: "ACSI Award 2025 – Best Campsite Restaurant Austria, Gewinner Terrassencamping Maltatal" } },
    { label: "ADAC Tipp 2026 · 4,5 Sterne", image: { src: `${IMG}/award_adac_2026.png`, alt: "ADAC Tipp 2026 mit 4,5 Sternen" } },
    { label: "ANWB ausgezeichnet" },
    { label: "ECC ausgezeichnet" },
    { label: "DCC-Europapreisträger" },
  ],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero_freibad_maltatal.webp`, alt: "Solarbeheiztes Freibad des Terrassencamping Maltatal mit den Bergen des Maltatals im Hintergrund" },
  },

  camping: {
    heading: "Terrassencamping Maltatal",
    intro:
      "Rund 220 großzügige Stellplätze (80–110 m²), terrassenförmig angelegt auf 4 ha und alle mit Stromanschluss – die meisten zusätzlich mit direktem Zu- und Abwasseranschluss, umgeben von schattenspendenden Bäumen und gepflegten Hecken.",
    features: [
      { title: "Kategorie 1 – Komfort", text: "Stellplätze in Terrassen- oder Randlage mit Zu- und Abwasser sowie Stromanschluss – für jede Art von Campingausrüstung.", image: { src: `${IMG}/camping_kategorie1.webp`, alt: "Komfort-Stellplatz der Kategorie 1 zwischen Bäumen und Hecken" } },
      { title: "Kategorie 2 & 3", text: "Plätze in paradiesischer Terrassen- und Randlage mit Stromanschluss – ideal für Zelte und Faltwägen.", image: { src: `${IMG}/camping_kategorie2.webp`, alt: "Stellplatz mit Wohnwagen und Vorzelt entlang der Zufahrt der Kategorie 2" } },
      { title: "220 terrassierte Plätze", text: "Auf 4 ha verteilt, von schattenspendenden Bäumen und Hecken umgeben – das schafft Privatsphäre und ein natürliches Ambiente.", image: { src: `${IMG}/camping_stellplatz.webp`, alt: "Wohnwagen mit Vorzelt auf grünem Stellplatz, umgeben von Bäumen" } },
      { title: "Zwei moderne Sanitärgebäude", text: "Die geräumige Panorama-Oase bietet Duschen, WCs, Waschmaschinen, Trockner, Infrarotkabine sowie Baby- und barrierefreie Waschkabinen.", image: { src: `${IMG}/camping_sanitaer.webp`, alt: "Modernes, helles Sanitärgebäude mit roten Fliesen und Holzdecke" } },
      { title: "Solarbeheiztes Freibad", text: "Ein solarbeheiztes Schwimmbad (25 × 12,5 m) mit Babybecken – Abkühlung mit Bergblick direkt am Platz.", image: { src: `${IMG}/camping_freibad.webp`, alt: "Solarbeheiztes Freibad mit Edelstahlrand vor grüner Wiese und blauem Himmel" } },
      { title: "Restaurant & Pizzeria", text: "Traditionelle Hausmannskost und hausgemachte Pizza aus dem Holzofen – ausgezeichnet als ACSI „Best Campsite Restaurant Austria 2025“.", image: { src: `${IMG}/camping_restaurant.webp`, alt: "Kärntner Spezialitäten auf dem Tisch im Freien am Campingplatz" } },
    ],
  },

  mobilheime: {
    heading: "Mobile Homes & Hotelzimmer",
    intro:
      "Lieber feste Wände als Zelt? Voll ausgestattete „Häuschen im Grünen“ mit überdachter Veranda und gemütliche Familiensuiten im kleinen Hotel direkt am Campingplatz.",
    items: [
      { name: "Mobile Home", kind: "Häuschen im Grünen · bis 5 Personen", text: "Sechs selbständige Häuschen mit je 32 m², überdachter Veranda, Wohnraum mit Küche, zwei Schlafzimmern, Bad, WC, Kühlschrank und Sat-TV. Zu-/Abwasser- und Stromanschluss vorhanden – Bettwäsche bitte selbst mitbringen.", image: { src: `${IMG}/mobilehome_aussen.webp`, alt: "Mobile Homes mit überdachter Veranda und Bergblick" }, features: ["bis 5 Personen", "32 m²", "überdachte Veranda"] },
      { name: "Juniorsuite im Hotel", kind: "Familiensuite · mit Frühstück", text: "Acht geräumige, lichtdurchflutete Juniorsuiten mit Balkon, ein bis zwei zusätzlichen (Kinder-)Schlafzimmern, Flachbild-TV, Minikühlschrank, Safe, Duschbad und WLAN – inkl. Frühstück und Freibad-Nutzung.", image: { src: `${IMG}/juniorsuite_zimmer.webp`, alt: "Geräumige Juniorsuite mit Doppelbett, Sitzecke und Balkonfenster" }, features: ["8 Suiten mit Balkon", "Frühstück inklusive", "direkt am Campingplatz"] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Langeweile ist hier ein Fremdwort: Streichelzoo mit Ponys, Traktorkutschenfahrten, ein solarbeheiztes Freibad mit Babybecken, Spielplatz und Dreirollerbahn – hier dürfen Kinder Kinder sein.",
    features: [
      { title: "Streichelzoo & Ponys", text: "Streicheltiere und Ponys am Platz, dazu Ponyreiten an der Leine und Tierfütterungen in der Hauptsaison.", image: { src: `${IMG}/familie_ponys.webp`, alt: "Mitarbeiter füttert ein Pony am Gehege des Streichelzoos" } },
      { title: "Traktorkutschenfahrten", text: "Mehrmals pro Woche nimmt Chef Andreas die Familien persönlich mit auf eine fröhliche Traktorkutschenfahrt rund um den Platz.", image: { src: `${IMG}/familie_traktorkutsche.webp`, alt: "Roter Traktor zieht eine bunte Kutsche für Kinder über den Campingplatz" } },
      { title: "Freibad mit Babybecken", text: "Das solarbeheizte Freibad hat ein eigenes Babybecken – Wasserspaß auch für die Kleinsten.", image: { src: `${IMG}/familie_babybecken.webp`, alt: "Rote Wasserspeier-Figur am Babybecken des Freibads" } },
    ],
  },

  aktivitaeten: {
    heading: "Erlebnis Maltatal",
    intro:
      "Das Maltatal ist ein Eldorado für Wanderer, Bergsteiger und Naturliebhaber – über 300 km markierte Wege, Wasserfälle, eine gewaltige Talsperre und jede Menge Familienabenteuer rund um den Platz.",
    items: [
      { title: "Wandern & Bergsteigen", text: "Gemütliches Familienwandern am Maltaberg oder hochalpines Bergsteigen auf den Dreitausendern – über 300 km markierte Wanderwege.", image: { src: `${IMG}/aktiv_wandern_stausee.webp`, alt: "Bergziege auf einer Alm über dem Stausee im Maltatal" } },
      { title: "Künstlerstädtchen Gmünd", text: "Nur rund 6 km entfernt lädt die mittelalterliche Kulturstadt Gmünd zum Bummeln ein – mit Pfarrkirche, alter Burg, Porsche-Museum und vielen Galerien und Künstlerateliers.", image: { src: `${IMG}/aktiv_gmuend.webp`, alt: "Blick über die Künstlerstadt Gmünd mit Pfarrkirche, Burgruine und den Bergen Kärntens" } },
      { title: "Kölnbreinsperre & Hochalmstraße", text: "Über die Malta-Hochalmstraße zur Kölnbreinsperre – mit 200 m die höchste Talsperre Österreichs, samt Mauerführung und Airwalk-Glasboden.", image: { src: `${IMG}/aktiv_koelnbreinsperre.webp`, alt: "Wanderin mit Blick auf die Kölnbreinsperre und die Hohen Tauern" } },
      { title: "Canyoning im Maltatal", text: "Mit professionellen Schluchtenführern durch die eindrucksvolle Wasserwelt des Maltatals – Abenteuer pur.", image: { src: `${IMG}/aktiv_canyoning.webp`, alt: "Canyoning-Gruppe rutscht durch eine Schlucht im Maltatal" } },
      { title: "Radfahren am Maltafluss", text: "Der rund 18 km lange Familienradweg R9 führt von Gmünd über Malta entlang des Maltaflusses bis zur Mautstelle der Hochalmstraße.", image: { src: `${IMG}/aktiv_radweg_maltafluss.webp`, alt: "Familie macht Rast mit den Rädern am Ufer des Maltaflusses" } },
      { title: "Eselpark Maltatal", text: "Nur 2,7 km entfernt: der Esel- und Tierpark mit vielen Tieren zum Staunen – ein Erlebnis für die ganze Familie.", image: { src: `${IMG}/aktiv_eselpark.webp`, alt: "Junge Frau streichelt Esel im Eselpark Maltatal" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Adresse", text: "Malta 6, 9854 Malta, Kärnten – im Bergsteigerdorf Malta, mitten im Maltatal auf 800 m Seehöhe." },
      { title: "Lage & Umgebung", text: "Rund 6 km vom Künstlerstädtchen Gmünd, am Beginn der Malta-Hochalmstraße zur Kölnbreinsperre und am Eingang zum Nationalpark Hohe Tauern." },
      { title: "An- & Abreise", text: "Camping: Anreise 12.30–20.30 Uhr, Abreise 07.00–11.00 Uhr. Zimmer & Mobile Homes ab 14.00 Uhr, Abreise bis 10.30 Uhr." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Wiesencamping, Kärntner Kulinarik, familienfreundliche Sanitäranlagen und Traktorkutschenfahrten – ein paar Eindrücke vom Terrassencamping Maltatal.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/galerie_wiesencamping.webp`, alt: "Wiesencamping mit Wohnwagen und Zelten am Terrassencamping Maltatal" },
      { src: `${IMG}/galerie_kulinarik.webp`, alt: "Frisch zubereitetes Fischgericht aus dem Restaurant am Campingplatz" },
      { src: `${IMG}/galerie_babybereich.webp`, alt: "Babywaschkabine mit Wickelplatz im Sanitärgebäude" },
      { src: `${IMG}/galerie_traktorkutsche.webp`, alt: "Traktor mit Kutsche auf dem Weg über den Campingplatz" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Kategorie und Personen – Familie Pirker meldet sich mit deiner persönlichen Verfügbarkeit. Anfragen gerne per E-Mail an info@maltacamp.at.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preis für 2 Erwachsene/Nacht (Vorsaison) · inkl. Stellplatz, Personen, Strom & Umweltpauschale · exkl. Ortstaxe (€ 2,40 p. P. ab 18 J./Tag) · je nach Saison",
    highlight: {
      title: "Freie Platzwahl",
      text: "Derzeit freie Platzwahl – Anreise bis 20 Uhr möglich, keine Reservierung notwendig.",
    },
    categories: [
      // Reale, veröffentlichte 2026-Stellplatzpreise (untere Spanne, 2 Erwachsene, exkl. Ortstaxe).
      { id: "kat1", label: "Kategorie 1", perNight: 36.7 },
      { id: "kat2", label: "Kategorie 2", perNight: 35.3 },
      { id: "kat3", label: "Kategorie 3", perNight: 35.3 },
    ],
  },

  kontakt: {
    tel: "+43 4733 2340",
    telHref: "tel:+4347332340",
    mail: "info@maltacamp.at",
    facebook: "https://www.facebook.com/CampingMaltatal",
    adresse: "Malta 6 · 9854 Malta · Kärnten · Österreich",
    coords: { lat: 46.9496263, lng: 13.5097015 },
  },

  story: {
    kicker: "Seit über 50 Jahren",
    heading: "Über Generationen gewachsen",
    intro:
      "Vom visionären Großvater Alfred bis zu Andreas Pirker – die Geschichte eines echten Familienbetriebs im Maltatal.",
    chapters: [
      { no: "01", kicker: "Die Anfänge", title: "Großvater Alfred", text: "Ein echter Visionär schuf im Maltatal einen besonderen Ort – ein Kaffeehaus und Restaurant mit Campingplatz, eigenem 12-Bahnen-Golfplatz und einem kleinen Sanitärgebäude." },
      { no: "02", kicker: "Der Wandel", title: "Erika & Herbert Pirker", text: "Die jüngste Tochter Erika und Herbert übernahmen den Betrieb, entfernten den Golfplatz und konzentrierten sich auf den Campingplatz – fortan unter dem Namen Terrassencamping Maltatal." },
      { no: "03", kicker: "Seit 1999", title: "Andreas Pirker", text: "Sohn Andreas übernahm die Leitung und entwickelte den Platz mit frischen Ideen weiter – stets nah an der Natur und der familiären Gastfreundschaft." },
      { no: "04", kicker: "Heute", title: "Gäste aus aller Welt", text: "Heute heißt der Terrassencamping Maltatal Gäste aus aller Welt willkommen – ein Ort, der über Generationen mit Leidenschaft gewachsen ist." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Kategorien 1–3", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Solarbeheiztes Freibad", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Mobile Homes", href: "#mobilheime" },
        { label: "Juniorsuiten", href: "#mobilheime" },
        { label: "Frühstück", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Streichelzoo & Ponys", href: "#kinder" },
        { label: "Traktorkutschenfahrten", href: "#kinder" },
        { label: "Freibad", href: "#kinder" },
      ],
    },
    {
      label: "Erlebnis",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern & Bergsteigen", href: "#aktivitaeten" },
        { label: "Kölnbreinsperre & Gmünd", href: "#aktivitaeten" },
        { label: "Canyoning & Radfahren", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Kontakt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campsite;

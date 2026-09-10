/**
 * The festival roster behind the Festival tab.
 *
 * Asafotufiami keeps its own hand-built, year-stamped page (see
 * lib/festival.js and /festival/asafotufiami-2027) because it is the edition
 * Drill Tours actively sells — merch, reservations, countdown and all. The
 * festivals below are the rest of Ghana's headline traditional calendar, and
 * they share one data-driven template at /festival/[slug].
 *
 * To add another festival: append an entry here. The hub listing, the detail
 * page, the static params and the sitemap all read from this array, so no
 * other file needs touching. Keep `months` in calendar order within the
 * array — the hub renders the roster as a season-by-season calendar.
 */

import {
  YEAR as ASAFO_YEAR,
  PATH as ASAFO_PATH,
  FESTIVAL_WEEK_SHORT as ASAFO_WHEN_SHORT,
} from "./festival";

/**
 * The flagship. Rendered first in the roster but linked to its own bespoke
 * page rather than the shared template, so it is kept deliberately thin —
 * just enough for a hub card.
 */
export const FLAGSHIP = {
  slug: `asafotufiami-${ASAFO_YEAR}`,
  path: ASAFO_PATH,
  name: "Asafotufiami",
  people: "Ada",
  region: "Greater Accra",
  place: "Ada-Foah, Big-Ada & Sege",
  season: "August",
  when: ASAFO_WHEN_SHORT,
  meaning: "The firing of musketry",
  tagline: "A homecoming rooted in memory.",
  summary:
    "The Ada war festival — musket volleys, a ceremonial march to Luhuese, " +
    "mock battle re-enactments and a grand durbar of chiefs on the Volta " +
    "estuary. Our flagship departure, sold as a full festival package.",
  flagship: true,
};

export const FESTIVALS = [
  {
    slug: "damba",
    name: "Damba",
    people: "Dagomba, Mamprusi & Gonja",
    region: "Northern Ghana",
    place: "Tamale, Yendi & Savelugu",
    season: "Varies — Islamic calendar",
    when: "Third month of the Islamic calendar",
    meaning: "The Prophet's birth, kept in Dagbon's own idiom",
    tagline: "Horsemen, lunsi drums, and a chief who dances his own history.",
    intro:
      "Damba began as a commemoration of the birth of the Prophet Muhammad " +
      "and became, over centuries in Dagbon, something entirely its own: the " +
      "grandest statement of northern chieftaincy in Ghana.",
    story: [
      "The festival unfolds in movements. Somo Damba opens it with drumming " +
        "at the chief's palace. Naa Damba marks the birth itself. Then comes " +
        "Belkulsi, the closing day, when the Ya-Naa — the overlord of Dagbon " +
        "— rides out in layered smock and turban at the head of a cavalcade " +
        "of horsemen, and the lunsi drummers recite the royal genealogy " +
        "aloud so that no ancestor is forgotten.",
      "What visitors remember is the sound and the horses. The lunsi are " +
        "hereditary drummer-historians: their rhythms are language, naming " +
        "kings back through generations. Around them the durbar fills with " +
        "richly embroidered batakari smocks, gunfire salutes, and the " +
        "controlled chaos of riders wheeling through the crowd.",
      "Because Damba follows the lunar Islamic calendar, its date shifts " +
        "roughly eleven days earlier each year — worth confirming with us " +
        "before booking flights.",
    ],
    highlights: [
      ["Belkulsi durbar", "The Ya-Naa in state, mounted, at the head of his chiefs."],
      ["Lunsi drum history", "Hereditary drummers reciting the royal line."],
      ["Horsemen's cavalcade", "Dagbon's equestrian tradition at full display."],
      ["Batakari craft", "Hand-woven smocks from the Tamale weaving quarters."],
    ],
    pairing:
      "Pairs naturally with Mole National Park, the Larabanga mud-and-stick " +
      "mosque, and the Tamale craft markets.",
    accent: "gold",
  },
  {
    slug: "aboakyir",
    name: "Aboakyir",
    people: "Effutu",
    region: "Central Region",
    place: "Winneba",
    season: "First Saturday of May",
    when: "First Saturday in May",
    meaning: "The hunting",
    tagline: "Two warrior companies. One live antelope. Bare hands only.",
    intro:
      "Aboakyir is the deer hunt of Winneba, and the most physically " +
      "audacious festival in Ghana: two rival asafo companies race into the " +
      "bush to catch a live bushbuck with their hands, and the first to " +
      "present it to the Omanhene wins the year.",
    story: [
      "The origin story is a bargain with the god Penkye Otu. The Effutu, " +
        "migrating from the ancient Western Sudan, were told to offer a " +
        "member of the royal family each year. Horrified, the elders " +
        "negotiated the sacrifice down — first to a leopard, then, after too " +
        "many hunters died, to the bushbuck antelope that is caught today.",
      "On the morning of the hunt, Asafo Number One (Tuafo) and Asafo Number " +
        "Two (Dentsefo) parade in flags and warpaint, then vanish into the " +
        "Winneba bush. The town waits. When the winning company returns, the " +
        "live animal held aloft above a running, singing crowd, the Omanhene " +
        "steps on it to accept the offering and the durbar erupts.",
      "The rest of the weekend is pure street festival: asafo flag-dancing, " +
        "palanquin processions, drumming duels between the companies, and a " +
        "coastal town with every door open.",
    ],
    highlights: [
      ["The hunt itself", "Dawn departure into the bush; bare-handed capture."],
      ["Asafo flag dancing", "Embroidered company flags flown as choreography."],
      ["Grand durbar", "The Omanhene of Effutu in palanquin, in full state."],
      ["Winneba beachfront", "A fishing town at its loudest and most generous."],
    ],
    pairing:
      "Under an hour from Accra along the coast road — easily combined with " +
      "Cape Coast Castle and Kakum's canopy walkway.",
    accent: "red1",
  },
  {
    slug: "homowo",
    name: "Homowo",
    people: "Ga",
    region: "Greater Accra",
    place: "Accra, Teshie, Nungua & Ga Mashie",
    season: "August – September",
    when: "August into September, by Ga quarter",
    meaning: "Hooting at hunger",
    tagline: "The harvest that laughs at famine.",
    intro:
      "Homowo is Accra's own festival, and its name is a taunt: to hoot at " +
      "hunger. It commemorates a famine the migrating Ga survived, and the " +
      "harvest that followed — which they celebrated by mocking the hunger " +
      "that had nearly ended them.",
    story: [
      "The season opens quietly. A thirty-day ban on drumming and noise-making " +
        "falls over the Ga state so the crops can grow undisturbed. Then the " +
        "ban lifts, the twins are honoured, and the city changes register " +
        "entirely.",
      "On Homowo day, Ga chiefs and family heads walk their neighbourhoods " +
        "sprinkling kpokpoi — steamed fermented cornmeal with palm-nut soup " +
        "— on the ground and on doorposts, feeding the ancestors before the " +
        "living eat. Families gather. Old quarrels are formally settled. " +
        "Then come the processions: the Kpashimo dance winding through Ga " +
        "Mashie, Twins Yeli rites, and drumming that runs from dusk into the " +
        "next morning.",
      "Because each Ga town keeps its own date, the festival rolls across " +
        "Greater Accra over several weeks — Teshie, Nungua, Osu and Ga Mashie " +
        "each taking their turn.",
    ],
    highlights: [
      ["Kpokpoi sprinkling", "The ancestral feeding rite, door to door."],
      ["Kpashimo processions", "Street dance through the old Ga quarters."],
      ["Twins Yeli", "Rites honouring twins as bringers of fortune."],
      ["Ga Mashie by night", "Jamestown drumming until sunrise."],
    ],
    pairing:
      "Entirely within Accra — pairs with Jamestown, Independence Square and " +
      "the Nkrumah Memorial Park on non-festival days.",
    accent: "forest",
  },
  {
    slug: "fetu-afahye",
    name: "Fetu Afahye",
    people: "Oguaa (Fante)",
    region: "Central Region",
    place: "Cape Coast",
    season: "First Saturday of September",
    when: "First Saturday in September",
    meaning: "The festival of the new year, after the plague",
    tagline: "Seventy-seven gods, and a castle on the shore.",
    intro:
      "Fetu Afahye is Cape Coast at full volume — a purification festival " +
      "born from an epidemic that once swept Oguaa, and now the most " +
      "photogenic durbar on Ghana's coast.",
    story: [
      "The people of Oguaa traditionally recognise seventy-seven gods, and " +
        "Fetu Afahye is when all of them are honoured. The week opens with a " +
        "ban on drumming and on fishing in the Fosu lagoon, then moves " +
        "through the ritual slaughter of a cow to the deity Nana Pra, the " +
        "cleansing of the town, and offerings at the lagoon.",
      "Saturday is the durbar. The Omanhene of Oguaa is carried through Cape " +
        "Coast in a palanquin under state umbrellas that spin as they move, " +
        "gold ornaments catching the light, asafo companies flanking him with " +
        "flags and muskets. The route runs beneath the white walls of Cape " +
        "Coast Castle — the same shore from which the enslaved were shipped " +
        "— which gives the whole day a weight no other Ghanaian festival " +
        "quite carries.",
      "For diaspora travellers this is often the emotional centre of a Ghana " +
        "trip: celebration and return, held in the same frame.",
    ],
    highlights: [
      ["Palanquin durbar", "The Omanhene in state beneath spinning umbrellas."],
      ["Fosu lagoon rites", "Offerings and the lifting of the fishing ban."],
      ["Asafo companies", "Flags, muskets and rival street theatre."],
      ["Cape Coast Castle", "The dungeons and Door of No Return, walked with a guide."],
    ],
    pairing:
      "Cape Coast and Elmina castles, Kakum National Park, and the Fante " +
      "posuban shrines at Anomabo.",
    accent: "kente",
  },
  {
    slug: "hogbetsotso",
    name: "Hogbetsotso Za",
    people: "Anlo Ewe",
    region: "Volta Region",
    place: "Anloga",
    season: "First Saturday of November",
    when: "First Saturday in November",
    meaning: "The festival of exodus",
    tagline: "A people who escaped a tyrant by walking backwards.",
    intro:
      "Hogbetsotso remembers an escape. The Anlo Ewe fled the walled city of " +
      "Notsie in present-day Togo and the tyranny of King Agokoli — and, so " +
      "the tradition holds, walked out backwards so their footprints would " +
      "point the wrong way.",
    story: [
      "The festival's rites follow that story closely. Peacemaking comes " +
        "first: disputes between families and clans are aired and settled, " +
        "because the exodus succeeded only through unity. Then Nugbidodo, " +
        "the general reconciliation ceremony, and a ritual cleansing of " +
        "Anloga, when the whole town is swept from one end to the other and " +
        "the refuse carried out.",
      "The climax is the grand durbar at Anloga: the Awoamefia — the " +
        "paramount chief of the Anlo state — and his chiefs in kente and " +
        "gold, war drums, the borborbor dance, and re-enactments of the " +
        "night march out of Notsie.",
      "It falls in November, at the end of Ghana's festival calendar, which " +
        "makes it a natural close to a Volta itinerary.",
    ],
    highlights: [
      ["Nugbidodo reconciliation", "Public peacemaking before the celebration."],
      ["Cleansing of Anloga", "The town swept end to end in ritual order."],
      ["Grand durbar", "The Awoamefia in state with the Anlo chiefs."],
      ["Borborbor drumming", "Ewe social dance, all evening, everyone in."],
    ],
    pairing:
      "Keta lagoon and the Anlo coast, Wli waterfalls, and the Volta " +
      "estuary crossing up from Ada.",
    accent: "gold",
  },
];

/** Everything on the hub, flagship first. */
export const ROSTER = [FLAGSHIP, ...FESTIVALS];

export function getFestival(slug) {
  return FESTIVALS.find((f) => f.slug === slug);
}

/** Tailwind classes per accent, resolved statically so JIT keeps them. */
export const ACCENT = {
  gold: { text: "text-gold", border: "border-gold", bg: "bg-gold" },
  red1: { text: "text-red1", border: "border-red1", bg: "bg-red1" },
  forest: { text: "text-forest", border: "border-forest", bg: "bg-forest" },
  kente: { text: "text-kente", border: "border-kente", bg: "bg-kente" },
};

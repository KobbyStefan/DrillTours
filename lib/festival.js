/**
 * Single source of truth for the Asafotufiami Festival edition currently on
 * sale. Every year the festival moves, and the dates used to live as loose
 * literals across a dozen components — which is how the site once ended up
 * advertising a 2027 edition while the countdown still ticked toward 2026.
 * Change the facts here and the whole festival module follows.
 *
 * When the Ada Traditional Council confirms next year's dates: bump YEAR,
 * EDITION, CONCERT_*, and FESTIVAL_WEEK, drop the new flyer into
 * /public/photos/festival/, and point FLYER at it.
 */

export const YEAR = 2027;

/** Ordinal of this year's festival — 2026 was the 89th edition. */
export const EDITION = "90th";

/**
 * The Rep Your Clan Concert — Drill Tours' own event, which opens the
 * festival season a week ahead of the traditional programme.
 *
 * Ghana runs on GMT year-round (no DST), so the instant is written as fixed
 * UTC rather than relying on the visitor's local timezone parsing.
 */
export const CONCERT_DATE_ISO = "2027-08-01T11:00:00Z";
export const CONCERT_DATE = `1st August, ${YEAR}`;
export const CONCERT_DATE_SHORT = `1 Aug ${YEAR}`;
export const CONCERT_TIME = "11:00 AM till late";
export const CONCERT_VENUE = "Mohee Food Court, Sege — Ada";

/**
 * The traditional festival programme — durbar of chiefs and the coastal
 * procession — which runs the week after the concert.
 */
export const FESTIVAL_WEEK = `8th to 13th August ${YEAR}`;
export const FESTIVAL_WEEK_SHORT = `Aug 1–13, ${YEAR}`;
export const FESTIVAL_ROUTE_DESC =
  "from Sege to Big-Ada, all the way to Ada-Foah";

/** Festival page slug — year-stamped, so each edition gets its own URL. */
export const SLUG = `asafotufiami-${YEAR}`;
export const PATH = `/festival/${SLUG}`;

/**
 * The official flyer artwork. `isCurrentEdition` is false while the artwork
 * on disk still shows the previous year — the image is kept on the page
 * (it is the most recent one that exists) but it is labelled honestly as a
 * past edition rather than presented as this year's official flyer. Flip
 * both fields together when new artwork lands.
 */
export const FLYER = {
  src: "/photos/festival/asafotufiami-2026-flyer.jpg",
  edition: 2026,
  isCurrentEdition: false,
  alt:
    "Asafotufiami Festival 2026 — Rep Your Clan Concert official flyer, " +
    "Mohee Food Court, Sege-Ada, 11:00 AM till late",
  downloadName: "asafotufiami-2026-rep-your-clan-flyer.jpg",
};

/** Badge copy for the flyer: honest about which edition is pictured. */
export const FLYER_BADGE = FLYER.isCurrentEdition
  ? "Official Flyer"
  : `Flyer · ${FLYER.edition} Edition`;

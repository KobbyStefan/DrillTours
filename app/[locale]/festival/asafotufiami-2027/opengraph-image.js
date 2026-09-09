import { buildOgImage } from "@/lib/og-image";
import { YEAR, CONCERT_DATE_SHORT } from "@/lib/festival";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Asafotufiami Festival ${YEAR} — Rep Your Clan Concert`;

export default function Image() {
  return buildOgImage({
    eyebrow: `Asafotufiami Festival ${YEAR}`,
    title: `Rep Your Clan Concert — ${CONCERT_DATE_SHORT}, Mohee Food Court, Sege.`,
  });
}

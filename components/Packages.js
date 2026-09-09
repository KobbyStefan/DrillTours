import { Link } from "@/i18n/routing";
import {
  EDITION,
  PATH,
  CONCERT_DATE,
  FESTIVAL_WEEK_SHORT,
  FLYER,
} from "@/lib/festival";

const PACKAGES = [
  { name: "Heritage Tours", desc: "Castles, forts, and the memory routes of the transatlantic story." },
  { name: "Wildlife Safaris", desc: "Savanna and rainforest game viewing across five regions." },
  { name: "Beach Holidays", desc: "Gold Coast shoreline retreats, private and curated." },
  { name: "Adventure Tours", desc: "Canopy walks, waterfalls, river crossings, hill trekking." },
  { name: "Cultural Experiences", desc: "Festivals, craft villages, royal courts, living traditions." },
  { name: "Corporate Travel", desc: "Delegations, conferences, and executive logistics." },
  { name: "Educational Excursions", desc: "Structured itineraries for schools and institutions." },
  { name: "Luxury Africa Packages", desc: "Private guiding, premium lodges, bespoke pacing." },
];

export { PACKAGES };

export default function Packages() {
  return (
    <section id="packages" className="py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[600px] mb-12">
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
            THE MANIFEST
          </div>
          <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-tight">
            Eight ways to move through Africa.
          </h2>
        </div>

        {/* Featured seasonal package — Asafotufiami Festival, Ada. The Rep Your
            Clan Concert opens the festival season; the traditional durbar and
            wider festival programme continue the following week per the Ada
            Traditional Council's own announcements. All of these dates come
            from lib/festival.js — update them there once the council confirms
            the new year's programme. */}
        <Link
          href={PATH}
          className="group block relative overflow-hidden mb-16 border border-neutral-800 hover:border-gold/50 transition-colors"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">
            <div className="relative h-[220px] md:h-full md:min-h-[260px] overflow-hidden">
              <img
                src={FLYER.src}
                alt={`Asafotufiami Festival ${FLYER.edition} — Rep Your Clan Concert`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-ink/10" />
              <div className="absolute top-5 left-5 bg-gold text-ink text-[11px] tracking-wide px-3 py-1.5 uppercase font-medium">
                {FESTIVAL_WEEK_SHORT}
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="font-mono text-[11px] tracking-[2px] text-gold mb-3 uppercase">
                Featured · Seasonal
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                Asafotufiami Festival, Ada
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5 max-w-[480px]">
                The Ada people's annual homecoming on the Greater Accra coast opens with the
                Rep Your Clan Concert at Mohee Food Court, Sege — live drumming, clan
                processions, and music on {CONCERT_DATE}. The traditional durbar of chiefs
                and the wider {EDITION}-edition programme continue the following week.
              </p>
              <span className="text-xs tracking-wide text-gold border-b border-gold/40 w-fit group-hover:border-gold transition-colors">
                See festival details & reserve →
              </span>
            </div>
          </div>
        </Link>

        <div>
          {PACKAGES.map((p, i) => (
            <div
              key={p.name}
              className={`grid grid-cols-1 md:grid-cols-[1.4fr_2fr_auto] gap-4 md:gap-6 items-center py-7 ${
                i === PACKAGES.length - 1 ? "" : "border-b border-neutral-900"
              }`}
            >
              <h3 className="font-display text-[23px]">{p.name}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
              <Link
                href="/reserve"
                className="text-xs tracking-wide text-gold whitespace-nowrap border-b border-gold/40 w-fit"
              >
                INQUIRE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

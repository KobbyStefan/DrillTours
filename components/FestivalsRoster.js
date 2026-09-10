import { Link } from "@/i18n/routing";
import { ROSTER, ACCENT } from "@/lib/festivals";

/**
 * The Festival tab's roster: the whole calendar in one column, flagship
 * first, each row linking to its own page. Deliberately typographic — there
 * is no photography on disk for the non-Asafotufiami festivals yet, and a
 * calendar of names reads better than a grid of stock images would.
 */
export default function FestivalsRoster() {
  return (
    <section className="py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
          The Roster
        </div>
        <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-4">
          Six festivals. One calendar year.
        </h2>
        <p className="text-[15px] leading-relaxed text-neutral-400 max-w-[680px] mb-12">
          Ghana marks time by festival. Each one belongs to a people and a
          place, and each is a different way of telling the same story —
          where we came from, and who came back. Pick a date and we build the
          journey around it.
        </p>

        <div className="flex flex-col">
          {ROSTER.map((f, i) => {
            const accent = ACCENT[f.accent || "gold"];
            return (
              <Link
                key={f.slug}
                href={f.path || `/festival/${f.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 py-7 border-b border-neutral-900 hover:border-neutral-700 transition-colors"
              >
                <span className="font-mono text-xs text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3
                      className={`font-display text-[clamp(22px,3vw,32px)] ${
                        f.flagship ? "text-gold" : "text-ivory"
                      } group-hover:text-gold transition-colors`}
                    >
                      {f.name}
                    </h3>
                    {f.flagship && (
                      <span className="text-[10.5px] tracking-wide border border-gold text-gold px-2.5 py-1 uppercase">
                        Flagship
                      </span>
                    )}
                  </div>
                  <p className="text-[13.5px] text-neutral-400 mt-1.5">
                    {f.people} · {f.place}
                  </p>
                  <p className="text-[14px] text-neutral-300 mt-2 max-w-[560px]">
                    {f.tagline}
                  </p>
                </div>

                <div className="sm:text-right">
                  <div className={`font-mono text-[12px] ${accent.text}`}>
                    {f.season}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-neutral-500 mt-2 group-hover:text-ivory transition-colors">
                    View →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

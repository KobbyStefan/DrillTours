import { Link } from "@/i18n/routing";
import { PACKAGES } from "./Packages";
import { YEAR } from "@/lib/festival";

/**
 * Homepage teaser: shows the first 4 packages, links through to the full
 * list at /packages. Keeps the homepage shorter now that Packages has its
 * own dedicated page.
 */
export default function PackagesTeaser() {
  const featured = PACKAGES.slice(0, 4);

  return (
    <section className="py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div className="max-w-[600px]">
            <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
              THE MANIFEST
            </div>
            <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-tight">
              Eight ways to move through Africa.
            </h2>
          </div>
          <Link
            href="/packages"
            className="text-xs tracking-wide text-gold border-b border-gold/40 whitespace-nowrap"
          >
            See all packages →
          </Link>
        </div>

        <Link
          href="/packages"
          className="flex items-center gap-3 mb-10 text-[13px] text-neutral-300 hover:text-gold transition-colors w-fit"
        >
          <span className="bg-gold text-ink text-[10.5px] tracking-wide px-2.5 py-1 uppercase font-medium">
            Aug {YEAR}
          </span>
          Featured this season: the Asafotufiami Festival, Ada →
        </Link>

        <div>
          {featured.map((p, i) => (
            <div
              key={p.name}
              className={`grid grid-cols-1 md:grid-cols-[1.4fr_2fr_auto] gap-4 md:gap-6 items-center py-7 ${
                i === featured.length - 1 ? "" : "border-b border-neutral-900"
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

import { Link } from "@/i18n/routing";
import FestivalCountdown from "./FestivalCountdown";

/**
 * Premium seasonal advertisement for the Asafotufiami Festival's "Rep Your
 * Clan" concert, placed directly below the homepage Hero — the highest-
 * visibility slot on the site while the festival is on sale. Kept as its
 * own section (not folded into the generic Packages teaser) because it
 * carries a live countdown and a distinct call-to-action set: reserving
 * merchandise is a different action from reserving a guided tour.
 */
export default function FestivalBanner() {
  return (
    <section className="relative border-b border-neutral-900 bg-ink overflow-hidden">
      {/* Kente-inspired diagonal band — the one deliberate signature flourish
          for the whole festival module, used once here and echoed thinly on
          the festival page divider. Reserved "kente" maroon per brand guide. */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #8B1538 0 14px, #F2B705 14px 28px, #0F0F0F 28px 34px)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
            Festival Week · Ada, Greater Accra
          </div>
          <h2 className="font-display leading-[1.05] text-[clamp(28px,4vw,44px)]">
            Asafotufiami 2026 —<br />
            <span className="italic text-gold font-light">Rep Your Clan Concert.</span>
          </h2>
          <p className="mt-5 text-[14.5px] text-neutral-300 leading-relaxed max-w-[460px]">
            The Ada people's homecoming opens with a night of drumming, procession, and
            clan pride at Mohee Food Court, Sege. Order your gear ahead of time, or let
            Drill Tours handle the whole trip down from Accra.
          </p>

          <div className="mt-7">
            <FestivalCountdown size="sm" />
          </div>

          <div className="flex gap-3 sm:gap-4 mt-9 flex-wrap">
            <Link
              href="/festival/asafotufiami-2026#merchandise"
              className="inline-flex items-center border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
            >
              Reserve Merchandise
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center border border-ivory text-ivory px-6 py-3 text-xs uppercase tracking-widest hover:bg-ivory hover:text-ink transition-colors"
            >
              Book Festival + Tour
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center text-xs uppercase tracking-widest text-neutral-400 hover:text-ivory transition-colors px-2 py-3"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <Link
          href="/festival/asafotufiami-2026"
          className="group relative block border border-neutral-800 hover:border-gold/50 transition-colors overflow-hidden"
        >
          <div className="absolute top-4 left-4 z-[1] bg-gold text-ink text-[11px] tracking-wide px-3 py-1.5 uppercase font-medium">
            Official Flyer
          </div>
          <img
            src="/photos/festival/asafotufiami-2026-flyer.jpg"
            alt="Asafotufiami Festival 2027 , 1st August 2027, Mohee Food Court, Sege-Ada, 11:00 AM till late"
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
}

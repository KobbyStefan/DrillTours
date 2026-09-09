import { Link } from "@/i18n/routing";
import FestivalCountdown from "./FestivalCountdown";
import {
  YEAR,
  CONCERT_DATE,
  CONCERT_DATE_SHORT,
  CONCERT_TIME,
  CONCERT_VENUE,
  FLYER,
  FLYER_BADGE,
} from "@/lib/festival";

export default function FestivalHero() {
  return (
    <header className="relative border-b border-neutral-900 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-8 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <div className="font-mono text-xs tracking-[3px] text-gold mb-6 uppercase">
            Coming Soon · Ada, Greater Accra Region
          </div>
          <h1 className="font-display font-normal leading-[1.02] tracking-tight text-[clamp(36px,5.4vw,64px)]">
            Asafotufiami
            <br />
            <span className="italic text-gold font-light">Festival {YEAR}.</span>
          </h1>
          <p className="mt-3 font-display text-xl sm:text-2xl text-neutral-300">
            Rep Your Clan Concert
          </p>

          <dl className="flex flex-wrap gap-x-9 gap-y-4 mt-8 font-mono text-[13px]">
            <div>
              <dt className="text-neutral-500 text-[10.5px] tracking-[1.5px] uppercase mb-1">Date</dt>
              <dd className="text-ivory">{CONCERT_DATE}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 text-[10.5px] tracking-[1.5px] uppercase mb-1">Venue</dt>
              <dd className="text-ivory">{CONCERT_VENUE}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 text-[10.5px] tracking-[1.5px] uppercase mb-1">Time</dt>
              <dd className="text-ivory">{CONCERT_TIME}</dd>
            </div>
          </dl>

          <p className="mt-6 text-[15px] leading-relaxed text-neutral-300 max-w-[480px]">
            Celebrating our culture, unity, and pride through music, dance, and tradition —
            open to everyone, free to attend. Reserve your clan gear ahead of time, or let
            Drill Tours arrange the whole trip down from Accra.
          </p>

          <div className="mt-8">
            <FestivalCountdown size="lg" />
          </div>

          <div className="flex gap-4 mt-9 flex-wrap">
            <Link
              href="#merchandise"
              className="inline-flex items-center border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
            >
              Reserve Merchandise
            </Link>
            <Link
              href={`/reserve?destination=Asafotufiami+Festival%2C+Ada&pkg=Cultural+Experiences&notes=${encodeURIComponent(
                `Interested in the Rep Your Clan Concert, ${CONCERT_DATE_SHORT}.`
              )}`}
              className="inline-flex items-center border border-ivory text-ivory px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-ivory hover:text-ink transition-colors"
            >
              Book Festival + Tour
            </Link>
          </div>
        </div>

        <div className="relative border border-neutral-800">
          <div className="absolute top-4 left-4 z-[1] bg-gold text-ink text-[11px] tracking-wide px-3 py-1.5 uppercase font-medium">
            {FLYER_BADGE}
          </div>
          <img
            src={FLYER.src}
            alt={FLYER.alt}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Signature kente-diagonal band — echoes the homepage banner's flourish,
          used once more here to bookend the module, then not repeated again
          on this page. */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #8B1538 0 14px, #F2B705 14px 28px, #0F0F0F 28px 34px)",
        }}
      />
    </header>
  );
}

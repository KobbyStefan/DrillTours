import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FESTIVALS, getFestival, ACCENT } from "@/lib/festivals";
import { locales } from "@/i18n/routing";

/**
 * Shared template for every festival except Asafotufiami, which keeps its
 * bespoke, year-stamped page at /festival/asafotufiami-<year>. Static
 * segments win over this dynamic one in the App Router, so the two coexist.
 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    FESTIVALS.map((f) => ({ locale, slug: f.slug }))
  );
}

export function generateMetadata({ params }) {
  const { slug } = params;
  const f = getFestival(slug);
  if (!f) return {};
  return {
    title: `${f.name} Festival — ${f.place} | Drill Tours Gh`,
    description: `${f.name}, the ${f.people} festival at ${f.place} (${f.when}). ${f.tagline} Travel to it with Drill Tours.`,
  };
}

export default function FestivalPage({ params }) {
  const { slug } = params;
  const f = getFestival(slug);
  if (!f) notFound();

  const accent = ACCENT[f.accent || "gold"];
  const others = FESTIVALS.filter((x) => x.slug !== f.slug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[["Home", "/"], ["Festivals", "/festival"], [f.name, null]]}
      />

      {/* Hero */}
      <section className="pt-10 pb-14 border-b border-neutral-900">
        <div className="max-w-[1240px] mx-auto px-8">
          <div
            className={`font-mono text-[11px] tracking-[2px] ${accent.text} mb-5 uppercase`}
          >
            {f.region} · {f.people}
          </div>
          <h1 className="font-display text-[clamp(34px,6vw,62px)] leading-[1.05]">
            {f.name}
          </h1>
          <p className="font-display text-[clamp(19px,2.4vw,26px)] text-neutral-300 mt-4 max-w-[760px]">
            {f.tagline}
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 border-t border-neutral-900 pt-8">
            {[
              ["When", f.when],
              ["Where", f.place],
              ["Name means", f.meaning],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[10.5px] tracking-[2px] text-neutral-500 uppercase mb-2">
                  {label}
                </dt>
                <dd className="text-[15px] text-ivory leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The story */}
      <section className="py-20 sm:py-24 border-b border-neutral-900">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-16">
          <div>
            <div
              className={`font-mono text-[11px] tracking-[2px] ${accent.text} mb-4 uppercase`}
            >
              The Story
            </div>
            <h2 className="font-display text-[clamp(26px,3.4vw,36px)] leading-tight">
              {f.intro}
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-neutral-300 max-w-[720px]">
            {f.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-24 border-b border-neutral-900">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
            What You'll See
          </div>
          <h2 className="font-display text-[clamp(26px,3.4vw,36px)] leading-tight mb-12">
            The moments worth travelling for.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {f.highlights.map(([title, note], i) => (
              <div
                key={title}
                className="border-t border-neutral-900 pt-5 flex gap-4"
              >
                <span className="font-mono text-xs text-neutral-500 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[20px] text-ivory mb-1.5">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-neutral-400">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan it */}
      <section className="py-20 sm:py-24 border-b border-neutral-900">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="max-w-[760px]">
            <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
              Build the Trip
            </div>
            <h2 className="font-display text-[clamp(26px,3.4vw,36px)] leading-tight mb-5">
              Where {f.name} fits in an itinerary.
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-300 mb-4">
              {f.pairing}
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-400 mb-9">
              {f.name} is built to order rather than sold off the shelf — we
              confirm this year's dates with the traditional council, arrange
              a local host to walk you into the durbar, and hold rooms before
              the town fills up. Ground transport, guiding and accreditation
              are ours to handle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="inline-flex items-center bg-gold text-ink px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-ivory transition-colors"
              >
                Reserve a Place
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-neutral-700 text-ivory px-7 py-3.5 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
              >
                Ask About {f.season.includes("Varies") ? "This Year's Dates" : "Availability"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other festivals */}
      <section className="py-20 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="font-display text-[clamp(24px,3vw,32px)] leading-tight mb-10">
            Elsewhere on the calendar
          </h2>
          <div className="flex flex-col">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/festival/${o.slug}`}
                className="group flex flex-wrap justify-between items-baseline gap-4 py-5 border-b border-neutral-900 hover:border-neutral-700 transition-colors"
              >
                <span className="font-display text-[20px] text-ivory group-hover:text-gold transition-colors">
                  {o.name}
                </span>
                <span className="text-[13px] text-neutral-500">
                  {o.people} · {o.season}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/festival"
            className="inline-flex items-center mt-10 text-[11px] uppercase tracking-widest text-gold hover:text-ivory transition-colors"
          >
            ← All festivals
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

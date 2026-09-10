import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestivalsRoster from "@/components/FestivalsRoster";
import { Link } from "@/i18n/routing";
import { PATH as ASAFO_PATH, YEAR as ASAFO_YEAR } from "@/lib/festival";

export const metadata = {
  title: "Ghana Festivals | Drill Tours Gh",
  description:
    "Asafotufiami, Damba, Aboakyir, Homowo, Fetu Afahye and Hogbetsotso — Ghana's headline traditional festivals, with dates, meaning and how to travel to each with Drill Tours.",
};

export default function FestivalsHubPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Festivals", null]]} />

      <section className="pt-10 pb-16 sm:pb-20 border-b border-neutral-900">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-5 uppercase">
            The Festival Calendar
          </div>
          <h1 className="font-display text-[clamp(34px,6vw,64px)] leading-[1.05] max-w-[900px]">
            Ghana keeps time <span className="text-gold">by festival.</span>
          </h1>
          <p className="text-[15.5px] leading-relaxed text-neutral-300 max-w-[720px] mt-7">
            Not one homecoming but a whole year of them — musket volleys on
            the Volta estuary in August, horsemen in Yendi, a bare-handed deer
            hunt in Winneba, kpokpoi sprinkled on Accra's doorposts, palanquins
            passing beneath Cape Coast Castle, and an exodus remembered in
            Anloga come November.
          </p>
          <p className="text-[15.5px] leading-relaxed text-neutral-400 max-w-[720px] mt-4">
            Asafotufiami {ASAFO_YEAR} is our flagship departure and the one we
            sell as a complete package, merchandise and all. The rest of the
            roster we build to order — tell us which date matters to you.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href={ASAFO_PATH}
              className="inline-flex items-center bg-gold text-ink px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-ivory transition-colors"
            >
              Asafotufiami {ASAFO_YEAR}
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center border border-neutral-700 text-ivory px-7 py-3.5 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
            >
              Plan a Festival Trip
            </Link>
          </div>
        </div>
      </section>

      <FestivalsRoster />

      <section className="py-20 sm:py-24">
        <div className="max-w-[760px] mx-auto px-8">
          <h2 className="font-display text-[clamp(26px,3.4vw,36px)] leading-tight mb-5">
            Travelling to a festival is not the same as attending one.
          </h2>
          <p className="text-[15px] leading-relaxed text-neutral-300 mb-4">
            Durbar grounds fill early, ritual days are closed to outsiders,
            and several of these dates move each year with the lunar or
            traditional calendar. We handle the accreditation, the local host
            who walks you in, the transport that beats the road closures, and
            beds in towns that sell out months ahead.
          </p>
          <p className="text-[15px] leading-relaxed text-neutral-400 mb-9">
            Tell us the festival and we'll confirm this year's dates before you
            book a flight.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
          >
            Ask About Dates
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

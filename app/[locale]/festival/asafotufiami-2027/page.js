import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestivalHero from "@/components/FestivalHero";
import FestivalHistory from "@/components/FestivalHistory";
import FestivalProgramme from "@/components/FestivalProgramme";
import FestivalGallery from "@/components/FestivalGallery";
import FestivalVenue from "@/components/FestivalVenue";
import FestivalMerch from "@/components/FestivalMerch";
import FestivalReservation from "@/components/FestivalReservation";
import FestivalFlyer from "@/components/FestivalFlyer";
import FestivalFAQ from "@/components/FestivalFAQ";
import { YEAR, FESTIVAL_WEEK, FESTIVAL_ROUTE_DESC } from "@/lib/festival";

export const metadata = {
  title: `Asafotufiami Festival ${YEAR} | Drill Tours Gh`,
  description: `Asafotufiami Festival ${YEAR} — ${FESTIVAL_WEEK}, ${FESTIVAL_ROUTE_DESC}. Reserve your elegant merchandise or book the full festival + tour package with Drill Tours.`,
};

export default function AsafotufiamiFestivalPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          ["Home", "/"],
          ["Packages", "/packages"],
          [`Asafotufiami Festival ${YEAR}`, null],
        ]}
      />
      <FestivalHero />
      <FestivalHistory />
      <FestivalProgramme />
      <FestivalGallery />
      <FestivalVenue />
      <FestivalMerch />
      <FestivalReservation />
      <FestivalFlyer />
      <FestivalFAQ />
    </PageShell>
  );
}

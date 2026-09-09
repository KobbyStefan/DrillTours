export default function FestivalHistory() {
  return (
    <section className="py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-16">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
            The Story
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight">
            A homecoming rooted in memory.
          </h2>
        </div>

        <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-neutral-300 max-w-[720px]">
          <p>
            Asafotufiami takes its name from the Dangme for the divisional firing of musketry —
            a tradition of the Ada people of Greater Accra dating back to the wars fought to
            settle and defend their homeland. Warriors returning from battle were once welcomed
            with musket volleys, feet-washing rituals, and songs of victory; when the fighting
            ended, the community kept the welcome alive as a festival instead, reviving it
            formally in 1937 to draw the Ada diaspora home each year.
          </p>
          <p>
            Held every August, the festival runs from a candlelight procession and
            homecoming float through a ceremonial march to Luhuese, mock battle re-enactments,
            and a grand durbar where the Ada chiefs parade in state. It's as much a family reunion
            as a commemoration — a chance for sons and daughters scattered across Ghana and the
            diaspora to reconnect with home, and with each other.
          </p>
          <p>
            The <span className="text-ivory">Rep Your Clan Concert</span> opens the festival
            season on the coast at Sege — a night built around the founding clans of the Ada state,
            Adibiawe, Lomobiawe, and Kabiawe among them. Expect live drumming, DJ sets, clan
            processions, and a crowd proud to name where they come from.
          </p>
        </div>
      </div>
    </section>
  );
}

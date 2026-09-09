import Plate from "./Plate";
import { YEAR } from "@/lib/festival";

const MOMENTS = [
  { variant: "savanna", label: "Clan Processions" },
  { variant: "coast", label: "Rep Your Clan Concert" },
  { variant: "river", label: "Grand Durbar" },
  { variant: "forest", label: "Sege Coastline" },
];

export default function FestivalGallery() {
  return (
    <section className="py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[600px] mb-4">
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
            What To Expect
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight">
            Moments from festival week.
          </h2>
        </div>
        <p className="text-[13px] text-neutral-500 mb-10 max-w-[560px]">
          Illustrative artwork for now — real photography from the {YEAR} edition goes
          here once the festival wraps.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MOMENTS.map((m) => (
            <div key={m.label} className="relative border border-neutral-800 overflow-hidden group">
              <Plate variant={m.variant} height={220} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                <span className="text-[12.5px] tracking-wide text-ivory">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

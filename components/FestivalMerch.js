const MERCH = [
  {
    id: "tshirt",
    name: "T-Shirt",
    desc: "Premium quality cotton unisex T-shirt.",
    price: "GH₵85",
    image: "/photos/festival/merch-tshirt.jpg.PNG",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "cap",
    name: "Cap",
    desc: "Classic embroidered unisex cap.",
    price: "GH₵60",
    image: "/photos/festival/merch-cap.jpg.PNG",
    sizes: null,
  },
  {
    id: "bundle",
    name: "T-Shirt + Cap",
    desc: "Get both and rep your clan in style.",
    price: "GH₵130",
    image: "/photos/festival/merch-bundle.jpeg.PNG",
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "Best Value",
  },
];

const PERKS = [
  ["Pick up at the festival venue", "No shipping — collect at Mohee Food Court"],
  ["Payment on pickup", "Reserve now, pay when you collect"],
  ["Wear it with pride", "Officially made for your Asafotufiami vibes"],
  ["Support our culture", "Proceeds help fund festival week programming"],
];

export default function FestivalMerch() {
  return (
    <section id="merchandise" className="bg-ivory text-ink py-20 sm:py-24 border-b border-neutral-900 scroll-mt-[100px]">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[600px] mb-12">
          <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4 uppercase">
            Ada Rep Your Clan Gear
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight">
            Show your pride. Order ahead.
          </h2>
          <p className="mt-4 text-[14.5px] text-neutral-600 leading-relaxed">
           RepYourClan Asafotufiami Festival 2026 T-shirts and caps, reserved in advance for
            pickup at the venue — no shipping, no waiting in line on the day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {MERCH.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border border-neutral-200 flex flex-col"
            >
              {item.badge && (
                <div className="absolute top-4 right-4 z-[1] bg-gold text-ink text-[10.5px] tracking-wide px-2.5 py-1 uppercase font-medium">
                  {item.badge}
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={`Asafotufiami Festival 2026 official ${item.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl mb-1">{item.name}</h3>
                <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-3">{item.desc}</p>
                <div className="text-forest font-display text-2xl mb-4">{item.price}</div>
                {item.sizes && (
                  <div className="flex gap-1.5 flex-wrap mt-auto">
                    {item.sizes.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono border border-neutral-300 px-2 py-1 text-neutral-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-neutral-300 pt-8">
          {PERKS.map(([title, desc]) => (
            <div key={title}>
              <div className="text-[13px] font-medium text-ink mb-1">{title}</div>
              <div className="text-[12.5px] text-neutral-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

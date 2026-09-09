"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { CONCERT_DATE, FESTIVAL_WEEK } from "@/lib/festival";

const FAQS = [
  {
    q: "What is Asafotufiami?",
    a: "The annual homecoming festival of the Ada people in Greater Accra, held every August. It commemorates the ancestral wars fought to settle the Ada state, and today it's mainly a celebration — processions, drumming, a chiefs' durbar, and a reunion for Ada sons and daughters at home and abroad.",
  },
  {
    q: "What is the Rep Your Clan Concert?",
    a: `A concert opening the festival season at Mohee Food Court, Sege, on ${CONCERT_DATE} — live drumming, DJ sets, and clan processions celebrating Adibiawe, Lomobiawe, Kabiawe, and the wider Ada community. The traditional programme follows from ${FESTIVAL_WEEK}.`,
  },
  {
    q: "Is entry free?",
    a: "Yes — the concert is free and open to everyone. Merchandise reservations and the optional guided festival + tour package are separate, paid add-ons.",
  },
  {
    q: "I'm not sure which clan I belong to — what do I select?",
    a: "If you're not sure, or you're joining as a guest rather than a member of the Ada community, select \"Other\" on the reservation form. It won't affect your order.",
  },
  {
    q: "How does gear pickup work?",
    a: "Reserve online or via WhatsApp, then pay and collect at the venue — Mohee Food Court by default, or Drill Tours' Accra office if you'd rather pick up before the festival. Nothing is charged until pickup.",
  },
  {
    q: "Can Drill Tours handle my whole trip from Accra?",
    a: (
      <>
        Yes — the festival + tour package includes return transport from Accra and can be
        combined with any of our other Ghana experiences. Use the{" "}
        <Link href="/reserve?destination=Asafotufiami+Festival%2C+Ada&pkg=Cultural+Experiences" className="text-gold underline">
          festival + tour reservation form
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    q: "What should I bring?",
    a: "Comfortable footwear for standing and dancing, cash for food vendors, and something to represent your clan colours if you have them. The event runs into the evening, so a light layer for after dark isn't a bad idea on the coast.",
  },
];

export default function FestivalFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-[840px] mx-auto px-8">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
          Before You Go
        </div>
        <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-12">
          Frequently asked questions.
        </h2>

        <div className="border-t border-neutral-800">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-neutral-800">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-[18px] sm:text-[20px] text-ivory">
                    {item.q}
                  </span>
                  <span
                    className="text-gold text-xl flex-shrink-0 transition-transform"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="text-[14.5px] text-neutral-400 leading-relaxed pb-6 pr-10">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

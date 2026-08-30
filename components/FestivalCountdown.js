"use client";
import { useEffect, useState } from "react";

// Rep Your Clan Concert — 1 Aug 2027, 11:00, Mohee Food Court, Sege-Ada.
// Ghana runs on GMT year-round (no DST), so this is written as a fixed
// UTC instant rather than relying on the visitor's local timezone parsing.
export const FESTIVAL_DATE_ISO = "2026-08-01T11:00:00Z";

function getTimeLeft() {
  const diff = new Date(FESTIVAL_DATE_ISO).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/**
 * `size`: "lg" for the festival page hero, "sm" for the compact homepage banner.
 */
export default function FestivalCountdown({ size = "lg" }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Avoid a server/client mismatch on first paint — render nothing until
  // mounted, then the real countdown appears a beat later.
  if (!mounted) return null;

  if (!timeLeft) {
    return (
      <div className="font-mono text-xs tracking-[2px] text-gold uppercase">
        Happening now — see you at Mohee Food Court
      </div>
    );
  }

  const units = [
    ["Days", timeLeft.days],
    ["Hrs", timeLeft.hours],
    ["Min", timeLeft.minutes],
    ["Sec", timeLeft.seconds],
  ];

  const big = size === "lg";

  return (
    <div className="flex items-start gap-5 sm:gap-7" role="timer" aria-live="off">
      {units.map(([label, value], i) => (
        <div key={label} className="flex items-center gap-5 sm:gap-7">
          <div className="text-center">
            <div
              className={`font-mono font-medium text-gold tabular-nums ${
                big ? "text-[clamp(28px,4.2vw,44px)]" : "text-2xl"
              }`}
            >
              {String(value).padStart(2, "0")}
            </div>
            <div className="font-mono text-[10px] tracking-[2px] text-neutral-400 uppercase mt-1">
              {label}
            </div>
          </div>
          {i < units.length - 1 && (
            <div className={`text-neutral-700 ${big ? "text-2xl" : "text-lg"} -mt-3`}>:</div>
          )}
        </div>
      ))}
    </div>
  );
}

"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";

const CLANS = ["Adi Biawɛ", "Lomo Biawɛ", "Ka Biawɛ", "Tepker Biawɛ", "Dangme Biawɛ", "Kudzragbe", "Korgbor", "Ohuewem", "Other"];
const ITEMS = ["T-Shirt — GH₵85", "Cap — GH₵60", "T-Shirt + Cap Bundle — GH₵130"];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const PICKUP_LOCATIONS = ["Mohee Food Court", "Okoli FM", "Radio Ada", "Eagle FM", "Drill Tours Office, Accra", "Festival Grounds"];

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  clan: "",
  item: "",
  size: "",
  quantity: "1",
  pickupLocation: "Mohee Food Court",
};

const FESTIVAL_WHATSAPP_NUMBER = "233246361258";

export default function FestivalReservation() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/festival-reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <section id="reserve" className="bg-ivory text-ink py-24 scroll-mt-[100px]">
        <div className="max-w-[640px] mx-auto px-8 text-center">
          <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4 uppercase">
            Reserved
          </div>
          <h2 className="font-display text-[clamp(26px,3.2vw,34px)] leading-tight mb-4">
            Your gear is on hold.
          </h2>
          <p className="text-[14.5px] text-neutral-600 leading-relaxed mb-8">
            We've received your reservation and sent a confirmation to your email. Pay on
            pickup at {form.pickupLocation || "the venue"} — see you at the festival.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center border border-forest text-forest px-6 py-3 text-xs uppercase tracking-widest hover:bg-forest hover:text-ivory transition-colors"
          >
            Reserve Another Item
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="reserve" className="bg-ivory text-ink py-20 sm:py-24 scroll-mt-[100px]">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4 uppercase">
            Reserve Your Gear
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-4">
            Delivery &amp; pickup during the festival.
          </h2>
          <p className="text-[14.5px] text-neutral-600 leading-relaxed mb-6">
            Reserve now, pay when you collect at the venue. A confirmation lands in your
            inbox as soon as you submit.
          </p>
          <a
            href={`https://wa.me/${FESTIVAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Drill Tours, I'd like to reserve Asafotufiami Festival gear."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-forest text-forest px-6 py-3 text-xs uppercase tracking-widest hover:bg-forest hover:text-ivory transition-colors"
          >
            Reserve via WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="cdt-label !text-neutral-500">Full Name</label>
            <input
              required
              className="cdt-field !text-ink !border-neutral-300"
              placeholder="Ama Owusu"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Email</label>
            <input
              required
              type="email"
              className="cdt-field !text-ink !border-neutral-300"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">WhatsApp / Phone</label>
            <input
              required
              className="cdt-field !text-ink !border-neutral-300"
              placeholder="+233 24 636 1258"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            />
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Clan</label>
            <select
              required
              className="cdt-field !text-ink !border-neutral-300"
              value={form.clan}
              onChange={(e) => setForm({ ...form, clan: e.target.value })}
            >
              <option value="">Select your clan</option>
              {CLANS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Item</label>
            <select
              required
              className="cdt-field !text-ink !border-neutral-300"
              value={form.item}
              onChange={(e) => setForm({ ...form, item: e.target.value })}
            >
              <option value="">Select item</option>
              {ITEMS.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Size (T-Shirt)</label>
            <select
              className="cdt-field !text-ink !border-neutral-300"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
            >
              <option value="">Select size</option>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Quantity</label>
            <input
              type="number"
              min="1"
              className="cdt-field !text-ink !border-neutral-300"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            />
          </div>
          <div>
            <label className="cdt-label !text-neutral-500">Pickup Location</label>
            <select
              className="cdt-field !text-ink !border-neutral-300"
              value={form.pickupLocation}
              onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
            >
              {PICKUP_LOCATIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {status === "error" && (
            <div className="sm:col-span-2 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
              {errorMessage}
            </div>
          )}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full justify-center inline-flex items-center gap-2 border border-gold bg-gold text-ink px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-transparent hover:text-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Reserving…" : "Reserve Now"}
            </button>
            <p className="text-[11.5px] text-neutral-500 mt-3 text-center">
              Your reservation is secure. You will receive a confirmation via email. By
              submitting, you agree to our{" "}
              <Link href="/privacy-policy" className="underline hover:text-neutral-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

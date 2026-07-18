import { Resend } from "resend";
import { appendRowToSheet } from "@/lib/sheets";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FESTIVAL_INBOX =
  process.env.FESTIVAL_INBOX || process.env.RESERVATION_INBOX || "drilltours@gmail.com";

// See app/api/reserve/route.js for the full explanation of why this defaults to Resend's
// sandbox sender rather than a @drilltours.com address.
const FROM_EMAIL =
  process.env.FESTIVAL_FROM_EMAIL || "Drill Tours Festival Gear <onboarding@resend.dev>";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      whatsapp = "",
      clan = "",
      item = "",
      size = "",
      quantity = "1",
      pickupLocation = "",
    } = body;

    const safeName = String(name ?? "").trim();
    const safeEmail = String(email ?? "").trim();
    const safeClan = String(clan ?? "").trim();
    const safeItem = String(item ?? "").trim();

    if (!safeName || !safeEmail || !safeClan || !safeItem) {
      return Response.json(
        { error: "Name, email, clan, and item are required." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    let emailResult = { skipped: true };
    if (resend) {
      try {
        const { error } = await resend.emails.send({
          from: FROM_EMAIL,
          to: [FESTIVAL_INBOX],
          replyTo: email,
          subject: `New festival gear reservation — ${name} (${item})`,
          html: `
            <h2>Asafotufiami Festival 2026 — Gear Reservation</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>WhatsApp / Phone:</strong> ${escapeHtml(whatsapp)}</p>
            <p><strong>Clan:</strong> ${escapeHtml(clan)}</p>
            <p><strong>Item:</strong> ${escapeHtml(item)}</p>
            <p><strong>Size:</strong> ${escapeHtml(size) || "—"}</p>
            <p><strong>Quantity:</strong> ${escapeHtml(String(quantity))}</p>
            <p><strong>Pickup Location:</strong> ${escapeHtml(pickupLocation)}</p>
            <hr />
            <p style="color:#888;font-size:12px;">Submitted ${submittedAt}</p>
          `,
        });
        if (error) {
          console.error("[festival-reserve] Resend error:", JSON.stringify(error));
          emailResult = { skipped: true, error: error.message || String(error) };
        } else {
          emailResult = { skipped: false };
        }
      } catch (err) {
        console.error("[festival-reserve] Email send failed:", err.message);
        emailResult = { skipped: true, error: err.message };
      }
    } else {
      console.warn("[festival-reserve] RESEND_API_KEY not set — skipping email send. See SETUP.md.");
    }

    const sheetResult = await appendRowToSheet("Festival Reservations", [
      submittedAt,
      name,
      email,
      whatsapp,
      clan,
      item,
      size,
      quantity,
      pickupLocation,
    ]);

    return Response.json({
      ok: true,
      emailSent: !emailResult.skipped,
      loggedToSheet: !sheetResult.skipped,
    });
  } catch (err) {
    console.error("[festival-reserve] Unexpected error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

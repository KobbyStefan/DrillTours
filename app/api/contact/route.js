import { Resend } from "resend";
import { appendRowToSheet } from "@/lib/sheets";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const CONTACT_INBOX = process.env.CONTACT_INBOX || "drilltours@gmail.com";

// See app/api/reserve/route.js for the full explanation: drilltours.com isn't verified in
// Resend yet, so sending from a @drilltours.com address fails silently. Default to Resend's
// sandbox sender so mail actually delivers today; set CONTACT_FROM_EMAIL once the domain is
// verified to switch over without touching code.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Drill Tours Contact <onboarding@resend.dev>";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name = "", email = "", message = "" } = body;

    // Coerce to string first since destructuring defaults don't catch explicit null.
    const safeName = String(name ?? "").trim();
    const safeEmail = String(email ?? "").trim();
    const safeMessage = String(message ?? "").trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    let emailResult = { skipped: true };
    if (resend) {
      try {
        const { error } = await resend.emails.send({
          from: FROM_EMAIL,
          to: [CONTACT_INBOX],
          replyTo: email,
          subject: `New contact form message from ${name}`,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
            <hr />
            <p style="color:#888;font-size:12px;">Submitted ${submittedAt}</p>
          `,
        });
        if (error) {
          console.error("[contact] Resend error:", JSON.stringify(error));
          emailResult = { skipped: true, error: error.message || String(error) };
        } else {
          emailResult = { skipped: false };
        }
      } catch (err) {
        console.error("[contact] Email send failed:", err.message);
        emailResult = { skipped: true, error: err.message };
      }
    } else {
      console.warn("[contact] RESEND_API_KEY not set — skipping email send. See SETUP.md.");
    }

    const sheetResult = await appendRowToSheet("Contact Messages", [
      submittedAt,
      name,
      email,
      message,
    ]);

    return Response.json({
      ok: true,
      emailSent: !emailResult.skipped,
      loggedToSheet: !sheetResult.skipped,
    });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
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

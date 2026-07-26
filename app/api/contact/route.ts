import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { BRAND } from "@/lib/content";

// nodemailer needs the Node.js runtime (not Edge), and this must never be
// statically optimised.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
  topic?: string;
  company?: string; // honeypot — real users never fill this
};

const TOPIC_SUBJECT: Record<string, string> = {
  dealer: "Dealer / Partnership Enquiry — LIBOR India",
  product: "Product Enquiry — LIBOR India",
  general: "Enquiry — LIBOR India",
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // silently accept bots so they don't retry, but send nothing
  if (data.company) return NextResponse.json({ ok: true });

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const city = (data.city ?? "").trim();
  const topic = data.topic ?? "general";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "That message is too long." }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || BRAND.email;

  if (!user || !pass) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not configured.");
    return NextResponse.json(
      { error: "The mail service isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user, pass },
  });

  const subject = TOPIC_SUBJECT[topic] ?? TOPIC_SUBJECT.general;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `City: ${city || "—"}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0a1430;line-height:1.6">
      <h2 style="margin:0 0 16px;color:#0b2c8f">New enquiry from liborindia.com</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#55607a">Name</td><td><strong>${esc(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55607a">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55607a">Phone</td><td>${esc(phone) || "—"}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55607a">City</td><td>${esc(city) || "—"}</td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#55607a">Topic</td><td>${esc(topic)}</td></tr>
      </table>
      <p style="margin:18px 0 6px;color:#55607a">Message</p>
      <p style="white-space:pre-wrap;margin:0;padding:14px 16px;background:#f4f7fa;border-radius:10px">${esc(message)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"LIBOR Website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text: lines,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }
}

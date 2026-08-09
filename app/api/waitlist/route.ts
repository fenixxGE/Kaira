import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/schema";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Datos no válidos" }, { status: 422 });
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // honeypot

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const ua = req.headers.get("user-agent") ?? null;

  const db = supabaseAdmin();
  const { error } = await db.from("kaira_waitlist").insert({
    name: d.name,
    email: d.email.toLowerCase(),
    pain_point: d.pain_point ?? null,
    source: "landing",
    ip_address: ip,
    user_agent: ua,
  });

  if (error) {
    if (error.code === "23505") return NextResponse.json({ ok: true, already: true });
    console.error("Waitlist error:", error);
    return NextResponse.json({ ok: false, error: "No se pudo guardar" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const MODULE_CARDS = [
  { href: "/app/correos", icon: "📧", title: "Correos", desc: "Bandeja priorizada por Kaira", accent: "bg-salvia-soft text-salvia-dark" },
  { href: "/app/agenda", icon: "📅", title: "Agenda", desc: "Google Calendar unificado", accent: "bg-peach-soft text-alert" },
  { href: "/app/familia", icon: "🎒", title: "Familia", desc: "Cole, extraescolares, cumples", accent: "bg-salvia-soft text-salvia-dark" },
  { href: "/app/finanzas", icon: "💶", title: "Finanzas", desc: "Gastos + predicción mes", accent: "bg-peach-soft text-alert" },
  { href: "/app/futuro", icon: "🎯", title: "Futuro", desc: "Vacaciones · Ahorro · Objetivos", accent: "bg-salvia-soft text-salvia-dark" },
  { href: "/app/bienestar", icon: "🌿", title: "Bienestar", desc: "Retos Fenixx + mindfulness", accent: "bg-peach-soft text-alert" },
];

export default async function DashboardPage() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("kaira_profiles")
    .select("name, onboarding_completed")
    .eq("id", user.id)
    .single();

  // Si no ha hecho onboarding, redirigir
  if (profile && !profile.onboarding_completed) {
    redirect("/app/onboarding");
  }

  const firstName = (profile?.name ?? user.email?.split("@")[0] ?? "").split(" ")[0];
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 20 ? "Buenas tardes" : "Buenas noches";

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-[clamp(28px,4vw,42px)] font-semibold text-ink">
          {greeting}, {firstName}.
        </h1>
        <p className="mt-2 text-[16px] text-ink2">
          Estos son tus módulos. Kaira aún está aprendiendo — cada semana
          activamos uno nuevo.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODULE_CARDS.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="card group flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className={"inline-flex h-14 w-14 items-center justify-center rounded-xl text-[26px] " + m.accent}>
              {m.icon}
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-ink">{m.title}</h3>
              <p className="mt-1 text-[13.5px] text-ink2">{m.desc}</p>
            </div>
            <span className="mt-2 text-[12px] text-salvia-dark transition-transform group-hover:translate-x-1">
              Abrir →
            </span>
          </Link>
        ))}
      </div>

      {/* Chat central con Kaira */}
      <section className="mt-10 rounded-xl border border-salvia/30 bg-gradient-to-br from-salvia-soft/40 to-peach-soft/20 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[28px] shadow-soft">
            💬
          </div>
          <div>
            <h2 className="text-[20px] font-semibold text-ink">Habla con Kaira</h2>
            <p className="mt-1 text-[13.5px] text-ink2">
              &ldquo;¿Qué tengo mañana?&rdquo; · &ldquo;¿Puedo permitirme la escapada?&rdquo; · &ldquo;Recuérdame llamar al cole&rdquo;
            </p>
          </div>
        </div>
        <p className="mt-4 rounded-md bg-white/60 p-3 text-center text-[12px] italic text-ink3">
          Chat con IA en desarrollo. Se activa en la Fase 2.
        </p>
      </section>
    </div>
  );
}

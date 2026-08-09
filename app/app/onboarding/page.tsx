"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-client";

/**
 * Onboarding mínimo: nombre, ciudad, ¿tienes hijos?, ¿pareja?, objetivo #1.
 * Al terminar marca onboarding_completed=true y va a /app.
 */
export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [childName, setChildName] = useState("");
  const [childSchool, setChildSchool] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [goal, setGoal] = useState("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const finish = async () => {
    setSaving(true);
    setErr(null);
    try {
      const supabase = supabaseBrowser();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user");

      const children = childName ? [{ name: childName, school: childSchool || null }] : [];
      const goals = goal ? [{ title: goal, target_date: null, why: null }] : [];

      const { error } = await supabase
        .from("kaira_profiles")
        .update({
          name: name.trim() || null,
          partner_name: partnerName.trim() || null,
          children,
          personal_goals: goals,
          onboarding_completed: true,
          onboarding_completed_at: new Date().toISOString(),
        })
        .eq("id", user.id);
      if (error) throw error;
      router.push("/app");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error al guardar");
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-[560px] px-5 py-14">
      <p className="mb-2 text-[13px] font-medium text-salvia-dark">Paso {step} de 3</p>
      <div className="mb-8 h-1 rounded-full bg-cream2">
        <div
          className="h-full rounded-full bg-salvia transition-all"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h1 className="text-[28px] font-semibold text-ink">Empecemos por ti.</h1>
          <p className="text-[15px] text-ink2">
            Kaira quiere saber cómo te llamas para dirigirse a ti como una persona, no como un usuario.
          </p>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink2">Tu nombre</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
              placeholder="Ana"
              autoFocus
            />
          </label>
          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!name.trim()}
            className="btn-primary w-full disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h1 className="text-[28px] font-semibold text-ink">¿Y en casa?</h1>
          <p className="text-[15px] text-ink2">
            Kaira lleva especialmente bien las cosas de familia. Si no aplica, deja en blanco y saltamos.
          </p>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink2">Nombre de tu hija/o (uno para empezar)</span>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
              placeholder="Lucía"
            />
          </label>
          {childName && (
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink2">Colegio de {childName}</span>
              <input
                type="text"
                value={childSchool}
                onChange={(e) => setChildSchool(e.target.value)}
                className="w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
                placeholder="CEIP Ejemplo"
              />
            </label>
          )}
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink2">Tu pareja (opcional)</span>
            <input
              type="text"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
              placeholder="Nombre de tu pareja"
            />
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-ghost flex-1"
            >
              ← Atrás
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn-primary flex-1"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h1 className="text-[28px] font-semibold text-ink">Un objetivo para arrancar.</h1>
          <p className="text-[15px] text-ink2">
            ¿Qué te gustaría conseguir en los próximos 6 meses? No hace falta que sea perfecto.
          </p>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink2">Tu objetivo #1</span>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
              placeholder="Ej: viaje familiar a Grecia en verano · ahorrar 5.000€ · sacar tiempo para leer"
            />
          </label>
          {err && (
            <p className="rounded-lg border border-alert/40 bg-alert/8 p-3 text-[13px] text-alert">
              {err}
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-ghost flex-1"
              disabled={saving}
            >
              ← Atrás
            </button>
            <button
              type="button"
              onClick={finish}
              disabled={saving}
              className="btn-primary flex-1 disabled:opacity-60"
            >
              {saving ? "Guardando…" : "Entrar a Kaira"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

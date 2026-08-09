"use client";

import { useState } from "react";
import { PAIN_POINTS, PAIN_LABELS, type PainPoint } from "@/lib/schema";

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pain, setPain] = useState<PainPoint | "">("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [already, setAlready] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          pain_point: pain || undefined,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json?.error ?? "Error");
      setAlready(!!json.already);
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <section id="waitlist" className="bg-salvia-soft/40 py-16 sm:py-24">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <div className="rounded-xl border border-salvia/30 bg-white p-6 shadow-soft sm:p-10">
          <p className="chip mb-4">Cohorte 1 · Plazas limitadas</p>
          <h2 className="mb-3 text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
            Sé de las primeras
            <br />
            en usar <span className="text-salvia-dark">Kaira.</span>
          </h2>
          <p className="mb-8 max-w-[560px] text-[15.5px] leading-[1.65] text-ink2">
            Vamos a lanzar en cohortes pequeñas para dar soporte real. Deja tu email
            y avisamos en cuanto abramos plazas para ti.
          </p>

          {status === "ok" ? (
            <div className="rounded-lg border border-salvia/40 bg-salvia-soft/60 p-8 text-center">
              <p className="mb-2 text-[24px] font-semibold text-ink">
                {already ? "Ya estabas dentro." : "¡Estás dentro!"}
              </p>
              <p className="text-[14.5px] text-ink2">
                Te avisaremos en cuanto abramos plazas. Gracias.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Tu nombre">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    maxLength={120}
                    className={inp}
                    placeholder="Cómo te llamas"
                  />
                </Field>
                <Field label="Tu email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={inp}
                    placeholder="tu@email.com"
                  />
                </Field>
              </div>

              <div>
                <p className="mb-2.5 text-[13px] font-medium text-ink2">
                  ¿Qué es lo que más caos te genera hoy?{" "}
                  <span className="text-ink3">(opcional)</span>
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {PAIN_POINTS.map((p) => {
                    const active = pain === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPain(active ? "" : p)}
                        className={
                          "rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-all " +
                          (active
                            ? "border-salvia bg-salvia text-white shadow-soft"
                            : "border-ink2/15 bg-white text-ink2 hover:border-salvia hover:text-salvia-dark")
                        }
                      >
                        {PAIN_LABELS[p]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {errMsg && (
                <p className="rounded-lg border border-alert/40 bg-alert/8 p-3 text-[13px] text-alert">
                  {errMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Enviando…" : "Únete a la lista de espera"}
              </button>

              <p className="text-center text-[12px] text-ink3">
                Solo usamos tu email para avisarte del lanzamiento. Nunca lo compartimos
                ni te añadimos a listas de marketing.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inp =
  "w-full rounded-lg border border-ink2/15 bg-cream2/40 px-4 py-3 text-[15px] text-ink placeholder:text-ink3 focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink2">{label}</span>
      {children}
    </label>
  );
}

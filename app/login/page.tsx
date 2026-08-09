"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabaseBrowser } from "@/lib/supabase-client";

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginInner />
    </Suspense>
  );
}

function LoginInner() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/app";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErr(null);
    try {
      const supabase = supabaseBrowser();
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
        },
      });
      if (error) throw error;
      setStatus("sent");
    } catch (e) {
      setStatus("error");
      setErr(e instanceof Error ? e.message : "Error al enviar el enlace");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="w-full max-w-[440px]">
        <Link href="/" className="mb-8 inline-flex items-center gap-2.5">
          <span
            className="block h-9 w-9 rounded-lg"
            style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
          />
          <span className="text-[22px] font-semibold text-ink">Kaira</span>
        </Link>

        <h1 className="mb-3 text-[32px] font-semibold text-ink">Entra a tu Kaira.</h1>

        {status === "sent" ? (
          <div className="rounded-xl border border-salvia/40 bg-salvia-soft/50 p-6">
            <p className="mb-2 text-[18px] font-semibold text-ink">📬 Revisa tu email.</p>
            <p className="text-[14px] leading-[1.65] text-ink2">
              Te acabamos de mandar un enlace mágico a <strong>{email}</strong>.
              Ábrelo desde el mismo navegador (esta pestaña) y entras.
            </p>
            <p className="mt-4 text-[12px] text-ink3">
              ¿No lo ves? Revisa spam. O{" "}
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-salvia-dark underline"
              >
                intenta con otro email
              </button>
              .
            </p>
          </div>
        ) : (
          <>
            <p className="mb-8 text-[15px] leading-[1.65] text-ink2">
              Escribe tu email y te mandamos un enlace mágico. Sin contraseñas.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                placeholder="tu@email.com"
                className="w-full rounded-full border border-ink2/20 bg-white px-6 py-4 text-[15px] text-ink placeholder:text-ink3 focus:border-salvia focus:outline-none focus:ring-2 focus:ring-salvia/20"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === "sending" ? "Enviando enlace…" : "Enviarme el enlace"}
              </button>
            </form>

            {status === "error" && err && (
              <p className="mt-4 rounded-lg border border-alert/40 bg-alert/8 p-3 text-[13px] text-alert">
                {err}
              </p>
            )}
          </>
        )}

        <p className="mt-8 text-[12px] leading-[1.6] text-ink3">
          Al continuar aceptas nuestra política de privacidad. Kaira almacena datos en la UE
          y cumple RGPD. Puedes exportar o borrar todo cuando quieras.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-[13px] text-ink3 hover:text-salvia-dark"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}

function LoginSkeleton() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="w-full max-w-[440px] animate-pulse">
        <div className="mb-8 h-9 w-32 rounded bg-cream2" />
        <div className="mb-3 h-10 w-64 rounded bg-cream2" />
        <div className="mb-8 h-6 w-full rounded bg-cream2" />
        <div className="h-14 w-full rounded-full bg-cream2" />
      </div>
    </main>
  );
}

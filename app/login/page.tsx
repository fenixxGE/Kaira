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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const loginWithGoogle = async () => {
    setLoading(true);
    setErr(null);
    try {
      const supabase = supabaseBrowser();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
        },
      });
      if (error) throw error;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error al iniciar sesión");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="w-full max-w-[420px]">
        <Link href="/" className="mb-8 inline-flex items-center gap-2.5">
          <span
            className="block h-9 w-9 rounded-lg"
            style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
          />
          <span className="text-[22px] font-semibold text-ink">Kaira</span>
        </Link>

        <h1 className="mb-3 text-[32px] font-semibold text-ink">Entra a tu Kaira.</h1>
        <p className="mb-8 text-[15px] leading-[1.65] text-ink2">
          Usamos tu cuenta de Google. Kaira solo accede a lo que tú apruebes en el onboarding.
        </p>

        <button
          type="button"
          onClick={loginWithGoogle}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-full border border-ink2/20 bg-white px-6 py-4 text-[15px] font-medium text-ink shadow-card transition-all hover:-translate-y-0.5 hover:border-salvia hover:shadow-soft disabled:cursor-wait disabled:opacity-60"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.6 10.2c0-.7-.1-1.4-.2-2H10v3.9h5.4c-.2 1.3-.9 2.4-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.6z" fill="#4285F4" />
            <path d="M10 20c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H1v2.6C2.7 17.8 6.1 20 10 20z" fill="#34A853" />
            <path d="M4.4 11.9c-.2-.6-.3-1.3-.3-1.9s.1-1.3.3-1.9V5.5H1c-.7 1.3-1 2.9-1 4.5s.4 3.2 1 4.5l3.4-2.6z" fill="#FBBC05" />
            <path d="M10 4c1.5 0 2.8.5 3.8 1.5L16.7 2.6C15 1 12.7 0 10 0 6.1 0 2.7 2.2 1 5.5l3.4 2.6c.8-2.3 3-4.1 5.6-4.1z" fill="#EA4335" />
          </svg>
          {loading ? "Redirigiendo…" : "Continuar con Google"}
        </button>

        {err && (
          <p className="mt-4 rounded-lg border border-alert/40 bg-alert/8 p-3 text-[13px] text-alert">
            {err}
          </p>
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
      <div className="w-full max-w-[420px] animate-pulse">
        <div className="mb-8 h-9 w-32 rounded bg-cream2" />
        <div className="mb-3 h-10 w-64 rounded bg-cream2" />
        <div className="mb-8 h-6 w-full rounded bg-cream2" />
        <div className="h-14 w-full rounded-full bg-cream2" />
      </div>
    </main>
  );
}

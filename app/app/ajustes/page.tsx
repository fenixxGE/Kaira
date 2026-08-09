import { supabaseServer } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AjustesPage() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("kaira_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div>
      <h1 className="mb-8 text-[32px] font-semibold text-ink">Ajustes</h1>

      <div className="space-y-5">
        <section className="card">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink3">Cuenta</p>
          <p className="text-[15px] text-ink">{profile?.name ?? "—"}</p>
          <p className="text-[13px] text-ink2">{user.email}</p>
        </section>

        <section className="card">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink3">Integraciones</p>
          <div className="space-y-2 text-[14px]">
            <Row label="Gmail" ok={profile?.gmail_connected} />
            <Row label="Google Calendar" ok={profile?.gcal_connected} />
            <Row label="Fintonic / Belvo" ok={profile?.fintonic_connected || profile?.belvo_connected} />
            <Row label="Fenixx" ok={profile?.fenixx_connected} />
          </div>
          <p className="mt-4 text-[12px] italic text-ink3">
            Las integraciones se activan según se van desarrollando los módulos.
          </p>
        </section>

        <section className="card">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink3">Plan</p>
          <p className="text-[15px] text-ink">Plan gratuito</p>
          <p className="mt-1 text-[12px] text-ink3">
            Los primeros inscritos tenéis Plus gratis durante los 3 primeros meses del lanzamiento.
          </p>
        </section>

        <section className="card">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink3">Datos</p>
          <p className="text-[13px] text-ink2">
            Todos tus datos están cifrados en la UE. Puedes exportar o borrar todo escribiéndonos
            a <a href="mailto:hola@kaira.app" className="text-salvia-dark underline">hola@kaira.app</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

function Row({ label, ok }: { label: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink">{label}</span>
      <span
        className={
          "rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
          (ok ? "bg-salvia text-white" : "bg-ink2/12 text-ink2")
        }
      >
        {ok ? "Conectado" : "No conectado"}
      </span>
    </div>
  );
}

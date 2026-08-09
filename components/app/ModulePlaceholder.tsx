import Link from "next/link";

export function ModulePlaceholder({
  icon,
  title,
  intro,
  features,
  status,
  phase,
}: {
  icon: string;
  title: string;
  intro: string;
  features: { text: string; done?: boolean }[];
  status: "coming" | "beta" | "live";
  phase: string;
}) {
  const statusLabel =
    status === "live" ? "Activo" : status === "beta" ? "Beta" : "Próximamente";
  const statusColor =
    status === "live"
      ? "bg-salvia text-white"
      : status === "beta"
        ? "bg-peach text-white"
        : "bg-ink2/12 text-ink2";

  return (
    <div>
      <Link
        href="/app"
        className="mb-6 inline-block text-[13px] text-ink2 hover:text-salvia-dark"
      >
        ← Volver
      </Link>

      <header className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-[36px]">{icon}</span>
          <span className={"rounded-full px-2.5 py-1 text-[11px] font-medium " + statusColor}>
            {statusLabel}
          </span>
          <span className="text-[11px] text-ink3">{phase}</span>
        </div>
        <h1 className="text-[clamp(28px,3.5vw,36px)] font-semibold text-ink">{title}</h1>
        <p className="mt-2 max-w-[640px] text-[15px] leading-[1.65] text-ink2">{intro}</p>
      </header>

      <div className="rounded-xl border border-ink2/10 bg-white p-6 shadow-card">
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.1em] text-ink3">
          Lo que Kaira hará aquí
        </p>
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={
                  "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] " +
                  (f.done
                    ? "bg-salvia text-white"
                    : "bg-cream2 text-ink3")
                }
              >
                {f.done ? "✓" : ""}
              </span>
              <span className="text-[14px] leading-[1.55] text-ink">{f.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-dashed border-ink2/20 bg-cream2/40 p-6 text-center">
        <p className="text-[13px] text-ink2">
          Este módulo está en desarrollo. Se activa en <strong className="text-ink">{phase}</strong>.
        </p>
        <p className="mt-1 text-[12px] text-ink3">
          Te avisamos por email en cuanto esté listo.
        </p>
      </div>
    </div>
  );
}

import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";
import Link from "next/link";
import { FENIXX_URL } from "@/lib/config";

export default function BienestarPage() {
  return (
    <>
      <ModulePlaceholder
        icon="🌿"
        title="Bienestar"
        intro="Impulsado por Fenixx, nuestra plataforma de bienestar con IA y VR. Aquí ves tus retos activos, tu seguimiento de estrés y sesiones guiadas."
        status="coming"
        phase="Fase 4 · Q3 2026"
        features={[
          { text: "Integración con tu cuenta de Fenixx" },
          { text: "Retos activos visibles desde Kaira" },
          { text: "Sesiones de mindfulness/relajación rápidas" },
          { text: "Seguimiento suave del nivel de estrés (opt-in)" },
          { text: "Kaira te sugiere una pausa cuando la agenda aprieta" },
        ]}
      />
      <div className="mt-6 rounded-xl border border-salvia/30 bg-salvia-soft/30 p-6 text-center">
        <p className="mb-3 text-[15px] text-ink">Mientras tanto, abre Fenixx directamente:</p>
        <Link
          href={FENIXX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Abrir Fenixx →
        </Link>
      </div>
    </>
  );
}

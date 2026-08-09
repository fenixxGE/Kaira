import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export default function FuturoPage() {
  return (
    <ModulePlaceholder
      icon="🎯"
      title="Futuro"
      intro="Vacaciones, ahorro y objetivos personales — juntos. Porque planificar la escapada de agosto y ahorrar para ella es la misma cosa."
      status="coming"
      phase="Fase 4 · Q3 2026"
      features={[
        { text: "Planificador de vacaciones con presupuesto real" },
        { text: "Metas de ahorro (hucha virtual) con seguimiento visual" },
        { text: "Objetivos personales (más allá del dinero)" },
        { text: "Kaira te avisa cuando el ritmo actual no llega a la meta" },
        { text: "Simulador: '¿me lo puedo permitir sin descuadrar la escapada?'" },
      ]}
    />
  );
}

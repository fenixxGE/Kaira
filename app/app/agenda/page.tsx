import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export default function AgendaPage() {
  return (
    <ModulePlaceholder
      icon="📅"
      title="Agenda"
      intro="Google Calendar sincronizado. Kaira ve qué tienes cada día y evita que te propongan reuniones que se pisan con recoger a tu hija."
      status="coming"
      phase="Fase 1 · Q1 2026"
      features={[
        { text: "Conexión con Google Calendar" },
        { text: "Vista propia + calendario compartido con pareja" },
        { text: "Kaira detecta conflictos con tareas familiares" },
        { text: "Sugerencias de reprogramación cuando algo cambia" },
        { text: "Recordatorios inteligentes (no las 8:00 en punto para todo)" },
      ]}
    />
  );
}

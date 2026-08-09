import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export default function CorreosPage() {
  return (
    <ModulePlaceholder
      icon="📧"
      title="Correos"
      intro="Kaira lee tu bandeja de entrada, prioriza lo que importa y responde los rutinarios con tu aprobación. Tu inbox al día en 5 minutos."
      status="coming"
      phase="Fase 1 · Q1 2026"
      features={[
        { text: "Conexión con Gmail (OAuth Google, tú apruebas)" },
        { text: "Clasificación automática por prioridad" },
        { text: "Resumen diario en 30 segundos" },
        { text: "Respuestas automáticas a rutinarios (con tu ok)" },
        { text: "Reglas familiares: todo lo del cole → carpeta hija + resumen semanal" },
      ]}
    />
  );
}

import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export default function FinanzasPage() {
  return (
    <ModulePlaceholder
      icon="💶"
      title="Finanzas"
      intro="Conexión con Fintonic o directamente con tu banco (vía Belvo, con licencia PSD2). Kaira ve gastos, predice el cierre de mes y avisa cuando algo se sale."
      status="coming"
      phase="Fase 3 · Q2 2026"
      features={[
        { text: "Conexión Fintonic (importación manual) o Belvo (API bancaria)" },
        { text: "Dashboard de gastos por categoría, sin jerga" },
        { text: "Predicción realista de cierre de mes" },
        { text: "Alertas cuando un gasto se dispara" },
        { text: "Nunca guardamos tus contraseñas bancarias" },
      ]}
    />
  );
}

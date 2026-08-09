import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export default function FamiliaPage() {
  return (
    <ModulePlaceholder
      icon="🎒"
      title="Familia"
      intro="El módulo que te libera la cabeza. Cole, extraescolares, cumpleaños de compis, material que pide la profe. Todo ordenado, todo recordado a tiempo."
      status="coming"
      phase="Fase 1-2 · Q1-Q2 2026"
      features={[
        { text: "Ficha de cada hijo (colegio, curso, profesor)" },
        { text: "Extraescolares y horarios recurrentes" },
        { text: "Cumpleaños de compañeros con recordatorios" },
        { text: "Lista de material del cole (fotos del WhatsApp de la profe)" },
        { text: "Coordinar con la otra parte de la pareja sin llamadas" },
      ]}
    />
  );
}

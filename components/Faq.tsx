"use client";

import { motion } from "framer-motion";

const FAQ = [
  {
    q: "¿Kaira lee todos mis correos? ¿Es seguro?",
    a: "Sí, lee tu Gmail — pero solo con permiso explícito tuyo (OAuth de Google) y solo para clasificar y proponer respuestas. Nunca envía nada sin que tú lo apruebes. Los correos no se almacenan en nuestros servidores más allá del análisis puntual.",
  },
  {
    q: "¿Cómo se conecta a Fintonic o a mi banco?",
    a: "Usamos Belvo (proveedor con licencia bancaria) para conectar directamente con tu banco, o puedes importar tus datos de Fintonic manualmente. Nunca guardamos contraseñas bancarias — todo va con estándares abiertos (PSD2) y datos cifrados.",
  },
  {
    q: "¿Y WhatsApp? ¿Puede responder mis mensajes?",
    a: "WhatsApp personal no permite integraciones externas por seguridad. Lo que sí hacemos: Kaira te manda por WhatsApp Business su resumen diario y avisos importantes. Tu WhatsApp personal sigue siendo tuyo.",
  },
  {
    q: "¿Y mis datos financieros y familiares? ¿Están seguros?",
    a: "Sí. Los datos van cifrados, alojados en la UE (Supabase Frankfurt), y solo tú los ves. Cumplimos RGPD. Puedes exportar o borrar todos tus datos cuando quieras desde ajustes.",
  },
  {
    q: "¿Cuándo lanzáis?",
    a: "Los primeros accesos llegan a lo largo de 2026, en cohortes pequeñas. Empezamos por agenda + correos + finanzas. Los demás módulos se van activando cada 4-8 semanas.",
  },
  {
    q: "¿Cuánto va a costar?",
    a: "Habrá una versión gratuita con lo esencial y una versión Plus con integraciones bancarias, correos avanzados y Fenixx incluido. Los primeros inscritos tienen acceso Plus gratis los primeros 3 meses.",
  },
  {
    q: "¿Qué es exactamente Fenixx dentro de Kaira?",
    a: "Fenixx es nuestra plataforma de bienestar con IA y VR — la usamos como motor del módulo Bienestar de Kaira. Puedes usar el bienestar dentro de Kaira, o abrir Fenixx directamente si quieres la experiencia completa. Las dos apps las hace el mismo equipo.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[820px] px-5 sm:px-8">
        <h2 className="mb-8 text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
          Preguntas antes de dar el paso.
        </h2>
        <div className="space-y-3">
          {FAQ.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-lg border border-ink2/12 bg-white p-5 open:shadow-soft"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-medium text-ink list-none">
                {f.q}
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-salvia-soft text-salvia-dark transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-ink2">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

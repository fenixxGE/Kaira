"use client";

import { motion } from "framer-motion";

const FAQ = [
  {
    q: "¿Y mis datos financieros? ¿Están seguros?",
    a: "Sí. Nos conectamos a tus apps mediante integraciones oficiales (OAuth), nunca guardamos tus contraseñas bancarias. Los datos van cifrados y solo tú los ves.",
  },
  {
    q: "¿Cuándo lanzáis?",
    a: "Los primeros accesos llegan a lo largo de 2026, en cohortes pequeñas. Si estás en la lista, avisamos cuando toque tu turno.",
  },
  {
    q: "¿Cuánto va a costar?",
    a: "Habrá una versión gratuita con lo esencial y una versión Plus. Los primeros inscritos en la lista tendrán acceso Plus gratis durante los primeros meses.",
  },
  {
    q: "¿Qué es exactamente Fenixx dentro de Kaira?",
    a: "Fenixx es nuestra plataforma de bienestar con IA y VR — la usamos como motor del módulo Bienestar de Kaira. Puedes usar el bienestar dentro de Kaira, o abrir Fenixx directamente si quieres la experiencia completa. Las dos apps están hechas por el mismo equipo.",
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
              transition={{ duration: 0.4, delay: i * 0.05 }}
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

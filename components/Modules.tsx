"use client";

import { motion } from "framer-motion";
import { FENIXX_URL } from "@/lib/config";

const MODULES = [
  {
    icon: "📅",
    title: "Agenda familiar",
    desc: "Clases, extraescolares, citas, reuniones — todo en un calendario compartido con tu pareja. Sin dobles reservas ni 'se me olvidó decírtelo'.",
    color: "bg-salvia-soft text-salvia-dark",
  },
  {
    icon: "💶",
    title: "Finanzas claras",
    desc: "Dashboard sin jerga: ingresos, gastos y predicción realista de cómo acaba el mes. Se conecta con tu banco vía Fintonic.",
    color: "bg-peach-soft text-alert",
  },
  {
    icon: "🎯",
    title: "Ahorro con propósito",
    desc: "Metas tipo hucha ('Escapada agosto', 'Portátil nuevo') con barra visual que avanza cada mes. Sin culpa, sin gráficos que asustan.",
    color: "bg-salvia-soft text-salvia-dark",
  },
];

export function Modules() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-12 max-w-[640px]">
          <h2 className="mb-4 text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
            Todo lo que necesitas,
            <br />
            en <span className="text-salvia-dark">una sola app.</span>
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink2">
            Cinco módulos que trabajan juntos, para que tú no tengas que hacerlo.
          </p>
        </div>

        {/* 3 primeros módulos grid 2x2 en tablet+ */}
        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          {MODULES.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="card flex flex-col gap-4"
            >
              <div className={"inline-flex h-14 w-14 items-center justify-center rounded-xl text-[26px] " + m.color}>
                {m.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-ink">{m.title}</h3>
              <p className="text-[14.5px] leading-[1.65] text-ink2">{m.desc}</p>
            </motion.article>
          ))}

          {/* Bienestar con badge Fenixx */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="card relative flex flex-col gap-4"
          >
            <span className="absolute top-4 right-4 chip">con tecnología de Fenixx</span>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-salvia-soft text-[26px] text-salvia-dark">
              🌿
            </div>
            <h3 className="text-[20px] font-semibold text-ink">Bienestar</h3>
            <p className="text-[14.5px] leading-[1.65] text-ink2">
              Sesiones guiadas de relajación y mindfulness, seguimiento suave del estrés.
              Impulsado por Fenixx, nuestra plataforma de bienestar con IA/VR.
            </p>
            <a
              href={FENIXX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-medium text-salvia-dark transition-colors hover:text-salvia"
            >
              Descubre Fenixx <span aria-hidden="true">→</span>
            </a>
          </motion.article>
        </div>

        {/* Conecta lo que ya usas — ancho completo */}
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="card"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-peach-soft text-[26px] text-alert">
                🔗
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold text-ink">Conecta lo que ya usas</h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink2">
                No te pedimos que abandones nada. Kaira lee y organiza lo que ya tienes.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  "Fintonic",
                  "Google Calendar",
                  "Asana",
                  "Airtable",
                  "Gmail",
                  "Instagram",
                ].map((n) => (
                  <span key={n} className="text-[13px] font-medium text-ink3">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

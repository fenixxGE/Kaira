"use client";

import { motion } from "framer-motion";
import { FENIXX_URL } from "@/lib/config";

const MODULES = [
  {
    icon: "📧",
    title: "Correos que se leen solos",
    desc: "Kaira lee tu bandeja de entrada, prioriza lo que importa, responde los rutinarios (con tu ok) y te resume el resto en 30 segundos por la mañana.",
    color: "bg-salvia-soft text-salvia-dark",
    tag: "Gmail",
  },
  {
    icon: "📅",
    title: "Agenda familiar",
    desc: "Google Calendar + calendario compartido con tu pareja. Nadie propone reuniones que se pisan con recogerla del cole.",
    color: "bg-peach-soft text-alert",
    tag: "Google Calendar",
  },
  {
    icon: "🎒",
    title: "Cole y actividades de tu hija",
    desc: "Reuniones, extraescolares, cumpleaños de compis, material que pide la profe. Todo ordenado, todo recordado a tiempo.",
    color: "bg-salvia-soft text-salvia-dark",
    tag: "Familia",
  },
  {
    icon: "💶",
    title: "Finanzas claras",
    desc: "Se conecta a tu Fintonic (o directamente a tu banco). Ves gastos por categoría, predicción de cierre de mes y alertas si algo se dispara.",
    color: "bg-peach-soft text-alert",
    tag: "Fintonic · Belvo",
  },
  {
    icon: "🎯",
    title: "Vacaciones, ahorro y objetivos",
    desc: "Planifica la escapada de agosto con presupuesto real. Metas de ahorro con hucha virtual. Objetivos personales con seguimiento suave. Tu vida futura, cuidada.",
    color: "bg-salvia-soft text-salvia-dark",
    tag: "Planificación",
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
            Seis módulos que trabajan juntos para que tú no tengas que hacerlo.
          </p>
        </div>

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
              <div className="flex items-start justify-between">
                <div className={"inline-flex h-14 w-14 items-center justify-center rounded-xl text-[26px] " + m.color}>
                  {m.icon}
                </div>
                <span className="text-[11px] font-medium text-ink3">{m.tag}</span>
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
            transition={{ duration: 0.55, delay: 0.3 }}
            className="card relative flex flex-col gap-4"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-salvia-soft text-[26px] text-salvia-dark">
                🌿
              </div>
              <span className="chip">con Fenixx</span>
            </div>
            <h3 className="text-[20px] font-semibold text-ink">Bienestar y retos</h3>
            <p className="text-[14.5px] leading-[1.65] text-ink2">
              Sesiones guiadas de relajación y mindfulness, seguimiento suave del estrés
              y tus retos activos. Impulsado por Fenixx, nuestra plataforma con IA y VR.
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

        {/* Chat central con Kaira - fila entera */}
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="card relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(228,239,231,0.5) 0%, rgba(251,228,213,0.3) 100%)",
          }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[32px] shadow-soft">
                💬
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[22px] font-semibold text-ink">Habla con Kaira</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink2">
                &ldquo;¿Qué tengo mañana?&rdquo; · &ldquo;¿Puedo permitirme la escapada?&rdquo; ·
                &ldquo;Recuérdame llamar al cole el jueves&rdquo; ·
                &ldquo;Envía a mi pareja la lista de la compra&rdquo;
              </p>
              <p className="mt-2 text-[13.5px] text-ink3">
                Kaira ve tu agenda, tus correos, tus finanzas y tus objetivos. Te responde
                con contexto, no con genérico.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

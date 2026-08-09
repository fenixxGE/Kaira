"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero con animación en loop: elementos dispersos (correo, agenda, cole,
 * WhatsApp, €, corazón, meta) se organizan dentro de la tarjeta central
 * de Kaira, luego se dispersan, ciclo.
 */

const CHAOS_ITEMS = [
  { emoji: "📧", label: "Correo" },
  { emoji: "💬", label: "WhatsApp" },
  { emoji: "📅", label: "Agenda" },
  { emoji: "🎒", label: "Cole hija" },
  { emoji: "€", label: "Gasto" },
  { emoji: "🎯", label: "Meta" },
  { emoji: "💚", label: "Bienestar" },
  { emoji: "✈️", label: "Vacaciones" },
];

const CHAOS_POSITIONS = [
  { x: 8, y: 12 }, { x: 82, y: 8 }, { x: 15, y: 62 }, { x: 88, y: 58 },
  { x: 22, y: 88 }, { x: 72, y: 82 }, { x: 4, y: 42 }, { x: 92, y: 38 },
];

export function Hero() {
  const rm = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(148,196,159,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(244,179,147,0.10) 0%, transparent 50%)",
        }}
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip mb-5"
          >
            Próximamente · Lista de espera abierta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(34px,5.5vw,58px)] font-semibold leading-[1.05] text-ink"
          >
            Tu asistente personal
            <br />
            <span className="text-salvia-dark">para todo lo que no llegas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-[520px] text-[17px] leading-[1.65] text-ink2"
          >
            Kaira lee tus correos, lleva tu agenda, ordena las cosas del cole de tu hija,
            controla tus finanzas, planea tus vacaciones y cuida de ti.
            <br />
            <span className="mt-2 inline-block font-medium text-ink">Todo en un solo lugar. Sin saltar entre siete apps.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Link href="#waitlist" className="btn-primary w-full sm:w-auto">
              Únete a la lista de espera
            </Link>
            <p className="text-[12px] text-ink3">Sin spam · Aviso solo cuando lancemos</p>
          </motion.div>
        </div>

        {/* Animación */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-1/2 flex h-[52%] w-[70%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-salvia-soft bg-white/95 p-4 shadow-[0_20px_50px_rgba(46,42,38,0.08)]"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="block h-6 w-6 rounded-md"
                style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
              />
              <span className="text-[13px] font-semibold text-ink">Kaira</span>
            </div>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              <MiniRow icon="📧" label="12 correos prioritarios" />
              <MiniRow icon="📅" label="Reunión colegio 17:00" />
              <MiniRow icon="€" label="Gasto mes en verde" />
              <MiniRow icon="🎯" label="Escapada agosto · 68%" />
              <MiniRow icon="💚" label="Reto Fenixx pendiente" />
            </div>
          </motion.div>

          {CHAOS_ITEMS.map((item, i) => {
            const p = CHAOS_POSITIONS[i];
            return (
              <motion.div
                key={i}
                className="absolute flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[18px] shadow-card"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                initial={{ opacity: 0.6, scale: 0.9 }}
                animate={
                  rm
                    ? { opacity: 0, scale: 0 }
                    : {
                        opacity: [0.6, 0.9, 0.9, 0, 0, 0.6],
                        scale: [1, 1, 0.7, 0.3, 0.3, 1],
                        x: [0, 0, `${(50 - p.x) * 0.7}%`, `${(50 - p.x) * 0.7}%`, `${(50 - p.x) * 0.7}%`, 0],
                        y: [0, 0, `${(50 - p.y) * 0.7}%`, `${(50 - p.y) * 0.7}%`, `${(50 - p.y) * 0.7}%`, 0],
                      }
                }
                transition={{
                  duration: 6,
                  times: [0, 0.25, 0.45, 0.6, 0.75, 1],
                  repeat: rm ? 0 : Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              >
                {item.emoji}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MiniRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-cream2 px-2.5 py-1.5">
      <span className="text-[13px]">{icon}</span>
      <span className="text-[11px] text-ink2">{label}</span>
    </div>
  );
}

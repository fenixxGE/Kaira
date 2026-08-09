"use client";

import { motion } from "framer-motion";

const BEFORE = [
  { app: "WhatsApp familiar", badge: 42 },
  { app: "Fintonic", badge: 8 },
  { app: "Google Calendar", badge: 6 },
  { app: "Notion", badge: 14 },
  { app: "Calm", badge: 3 },
];

const AFTER = [
  { app: "Agenda del día", note: "3 eventos" },
  { app: "Finanzas del mes", note: "en verde" },
  { app: "Ahorro escapada", note: "68%" },
  { app: "Pausa consciente", note: "10 min" },
];

export function Comparison() {
  return (
    <section className="bg-cream2/70 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <h2 className="mb-10 max-w-[560px] text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
          El día a día,
          <br />
          <span className="text-salvia-dark">sin cambiar de app.</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.55 }}
            className="rounded-lg border border-ink2/10 bg-white/60 p-6 shadow-card"
          >
            <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink3">Antes</p>
            <p className="mb-5 text-[15px] text-ink2">Con 5 apps sueltas</p>
            <ul className="space-y-3">
              {BEFORE.map((b) => (
                <li key={b.app} className="flex items-center justify-between rounded-md bg-cream2 px-3 py-2.5">
                  <span className="text-[14px] text-ink2 line-through decoration-ink3/40">{b.app}</span>
                  <span className="inline-flex h-5 min-w-[24px] items-center justify-center rounded-full bg-alert/85 px-1.5 text-[11px] font-semibold text-white">
                    {b.badge}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Después */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-lg border border-salvia/25 bg-salvia-soft/40 p-6 shadow-card"
          >
            <p className="mb-1 text-[12px] font-medium uppercase tracking-[0.1em] text-salvia-dark">Con Kaira</p>
            <p className="mb-5 text-[15px] text-ink2">Una sola app</p>
            <ul className="space-y-3">
              {AFTER.map((a) => (
                <li key={a.app} className="flex items-center justify-between rounded-md bg-white px-3 py-2.5">
                  <span className="text-[14px] font-medium text-ink">{a.app}</span>
                  <span className="text-[12px] font-medium text-salvia-dark">{a.note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

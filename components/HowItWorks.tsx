"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", t: "Conecta tus apps", d: "Enlaza las herramientas que ya usas.", tag: "1 min" },
  { n: "02", t: "Kaira organiza", d: "Categoriza, agrupa y te muestra lo importante.", tag: "24 h" },
  { n: "03", t: "Tú decides", d: "Kaira propone, tú confirmas. Nunca actúa sola.", tag: "siempre" },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="mb-10 max-w-[560px] text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
          Empezar te lleva menos que un café.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <p className="font-mono text-[42px] font-bold leading-none text-salvia">{s.n}</p>
              <h3 className="mt-4 text-[20px] font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink2">{s.d}</p>
              <span className="mt-3 inline-block chip">{s.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

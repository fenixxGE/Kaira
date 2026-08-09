"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { icon: "🧠", text: "La agenda familiar vive en tu cabeza." },
  { icon: "💸", text: "Los gastos se te van sin darte cuenta." },
  { icon: "🔀", text: "Tienes 5 apps y ninguna se habla con las otras." },
  { icon: "🌿", text: "Cuidarte a ti es lo último en la lista." },
];

export function Problem() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="mb-10 max-w-[520px] text-[clamp(26px,3.5vw,36px)] font-semibold leading-tight text-ink">
          ¿Te suena?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card flex flex-col gap-4"
            >
              <span className="text-[32px]">{it.icon}</span>
              <p className="text-[15px] leading-[1.55] text-ink">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

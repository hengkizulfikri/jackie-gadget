"use client";

import { motion } from "framer-motion";

const trustItems = [
  {
    title: "Produk Original",
    desc: "Garansi resmi & kualitas terjamin",
  },
  {
    title: "Fast Response",
    desc: "Respon cepat via WhatsApp",
  },
  {
    title: "Aman & Transparan",
    desc: "Harga jelas, tanpa biaya tersembunyi",
  },
];

export default function TrustMini() {
  return (
    <section className="bg-neutral-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-xl
                border border-white/10
                bg-neutral-800/60
                p-6
                text-center
                hover:border-amber-400/40
                transition
              "
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

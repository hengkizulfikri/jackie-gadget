"use client";

import { ShieldCheck, Zap, Wallet, Truck } from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: ShieldCheck,
    title: "Produk Original & Bergaransi",
    desc: "Semua produk dijamin 100% original dengan garansi resmi.",
  },
  {
    icon: Wallet,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi. Harga jelas & kompetitif.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Respon cepat via WhatsApp untuk konsultasi & pemesanan.",
  },
  {
    icon: Truck,
    title: "Pengiriman Aman",
    desc: "Packing rapi dan pengiriman terpercaya ke seluruh Indonesia.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="relative bg-neutral-900 py-20 px-6 text-white scroll-mt-24"
      id="why-us"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="mx-auto max-w-6xl">
        {/* Heading (Scroll Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Kenapa Pilih Jackie Gadget?
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Kami fokus pada kualitas produk, transparansi, dan pelayanan
            terbaik.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="group p-6 text-center flex flex-col items-center">
                  {/* Icon */}
                  <div
                    className="
                      mb-5 flex h-14 w-14 items-center justify-center rounded-full
                      bg-amber-500/10
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-amber-500/20
                      group-hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]
                    "
                  >
                    <Icon className="h-7 w-7 text-amber-400" />
                  </div>

                  {/* Text (hover naik sedikit) */}
                  <h3
                    className="
                      text-lg font-semibold
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2 text-sm text-neutral-400
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

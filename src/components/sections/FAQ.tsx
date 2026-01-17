"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";


export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-neutral-950 py-20 px-6 text-white" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center md:text-4xl">
          Pertanyaan yang Sering Ditanyakan
        </h2>
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
        <div className="mt-12 divide-y divide-white/20 border border-white/10 rounded-xl overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div key={i}>
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium">{item.q}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-6"
                    >
                      <p className="pb-5 text-sm text-neutral-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
      <motion.div
        className="relative min-h-80 overflow-hidden rounded-2xl border border-[#B8960C]/35 shadow-lg md:min-h-96"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={encodeURI("/WhatsApp Image 2026-02-17 at 14.44.46 (1).jpeg")}
          alt="Kilimani Walk — Ring Road Kilimani mixed-use landmark"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1A1A2E]/25 via-transparent to-[#B8960C]/10" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#B8960C]">About Kilimani Walk</p>
        <h1 className="mt-3 font-heading text-4xl text-[#123A67] md:text-5xl">
          World-Class Mixed-Use Development
        </h1>
        <p className="mt-4 leading-8 text-slate-700">
          Kilimani Walk on Ring Road Kilimani, Nairobi is designed as a premium business and
          lifestyle destination bringing together retail, dining, entertainment, offices, and
          conference facilities in one iconic address.
        </p>
      </motion.div>
    </section>
  );
}

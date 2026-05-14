"use client";

import { motion } from "framer-motion";
import { Building2, Car, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Car,
    title: "Arrival & parking",
    text: "Secure basement parking and clear circulation set a professional first impression for shoppers, diners, and office tenants alike.",
  },
  {
    icon: Sparkles,
    title: "Retail, dining & leisure",
    text: "Multiple levels combine high-visibility retail, anchor supermarket space, terraces, and a leisure-led mix of restaurants, cafés, and entertainment so the building stays active from morning through evening.",
  },
  {
    icon: Building2,
    title: "Offices, events & upper levels",
    text: "Light-filled workspace rises through dedicated office floors, with conference and event capacity and upper levels designed for prestige, privacy, and panoramic city views—including rooftop access at the top of the stack.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
};

export default function FloorsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl text-[#123A67] md:text-4xl">Floors</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          Kilimani Walk is organised as a full vertical destination: parking and service levels at
          the base, retail and lifestyle through the middle, and modern offices, meetings, and
          skyline-level workspace above—so shopping, dining, leisure, and business share one
          address without each use feeling crowded into a single generic floor plate.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {highlights.map((block) => {
          const Icon = block.icon;
          return (
          <motion.article
            key={block.title}
            variants={item}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group rounded-xl border border-[#B8960C]/40 bg-gradient-to-br from-white via-[#F5E6B3]/20 to-[#EAF2FF]/50 p-5 shadow-sm transition-shadow duration-300 hover:border-[#B8960C]/65 hover:shadow-lg"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4 md:flex-col md:gap-3">
              <motion.div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B8960C]/15 text-[#B8960C] ring-1 ring-[#B8960C]/25 transition group-hover:bg-[#B8960C]/25 group-hover:ring-[#B8960C]/40"
                whileHover={{ scale: 1.06, rotate: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </motion.div>
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold text-[#1A1A2E] md:text-lg">
                  {block.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {block.text}
                </p>
              </div>
            </div>
          </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const floorPlans = [
  {
    title: "Ground Floor Plan",
    subtitle: "Arrival, anchors, and high-footfall retail frontage",
    image: "/floor-plan-ground.png",
    accent: "from-[#123A67]/80 via-[#1A1A2E]/65 to-[#B8960C]/60",
  },
  {
    title: "First Floor Plan",
    subtitle: "Balanced mix of retail units, terraces, and circulation",
    image: "/floor-plan-first.png",
    accent: "from-[#123A67]/78 via-[#1A1A2E]/62 to-[#B8960C]/56",
  },
  {
    title: "Second Floor Plan",
    subtitle: "Upper-level retail and dining zones with efficient cores",
    image: "/floor-plan-second.png",
    accent: "from-[#123A67]/76 via-[#1A1A2E]/60 to-[#B8960C]/54",
  },
];

const verticalStack = [
  { level: "3rd Floor", use: "Entertainment zone" },
  { level: "4th Floor", use: "Office spaces" },
  { level: "5th Floor", use: "Conference halls" },
  { level: "6th - 9th Floors", use: "Premium offices" },
];

export default function FloorsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8960C]">
          Floors & architectural design
        </p>
        <h2 className="mt-2 font-heading text-3xl text-[#123A67] md:text-4xl">
          Floor Plans
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
          Ground, first, and second floor drawings are shown below.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6">
        {floorPlans.map((plan, index) => (
          <motion.article
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="overflow-hidden rounded-3xl border border-[#B8960C]/35 bg-white shadow-xl"
          >
            <div className="relative h-24 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.accent}`} />
              <div className="relative flex h-full items-center justify-between px-5 text-white md:px-7">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl">{plan.title}</h3>
                  <p className="mt-1 text-xs text-slate-100 md:text-sm">{plan.subtitle}</p>
                </div>
                <span className="rounded-full border border-white/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#F5E6B3]">
                  Drawing
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[#F8FAFC]">
              <Image
                src={plan.image}
                alt={`${plan.title} architectural drawing`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1120px"
              />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-10 rounded-3xl border border-[#B8960C]/35 bg-gradient-to-b from-white via-[#FFFDF6] to-white p-6 shadow-lg md:p-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8960C]">
          Full development stack
        </p>
        <h3 className="mt-2 font-heading text-2xl text-[#123A67] md:text-3xl">
          Upper floors at a glance
        </h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {verticalStack.map((item) => (
            <article
              key={item.level}
              className="rounded-xl border border-[#B8960C]/30 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8960C]">
                {item.level}
              </p>
              <h4 className="mt-1 font-heading text-lg text-[#123A67]">{item.use}</h4>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

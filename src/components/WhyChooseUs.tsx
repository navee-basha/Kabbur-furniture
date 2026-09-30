/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layers, Tag, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { WHY_CHOOSE_US_ITEMS } from "../data/config";

export default function WhyChooseUs() {
  const icons = [
    Layers,
    Tag,
    ShieldCheck,
    SlidersHorizontal
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 texture-oak-light text-[#2A2018] border-y border-[#B8893C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A9743F] mb-3 inline-block">
            The Kabbur Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3B2416] mb-4 text-balance">
            Why Davangere Chooses Us
          </h2>
          <p className="text-base text-[#2A2018]/80 leading-relaxed">
            Rooted in honest pricing, exceptional woodwork, and personal customer service.
          </p>
        </motion.div>

        {/* 4 Icon-Style Blocks with Staggered Fade-Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="craft-card bg-[#FBF7F0]/90 rounded-lg p-6 sm:p-7 border border-[#B8893C]/25 flex flex-col justify-between shadow-sm relative overflow-hidden group"
              >
                {/* Subtle corner inlay line */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#B8893C]/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Icon with warm brass container */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-lg bg-[#3B2416] text-[#B8893C] flex items-center justify-center mb-6 shadow-sm"
                  >
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </motion.div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2416] mb-1.5 group-hover:text-[#A9743F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-[#A9743F] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#2A2018]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B8893C]/15 flex items-center gap-2 text-[11px] font-medium text-[#3B2416]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]" />
                  <span>Customer verified highlight</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

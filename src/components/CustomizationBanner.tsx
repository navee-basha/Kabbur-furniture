/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle, Ruler, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

export default function CustomizationBanner() {
  return (
    <section className="relative py-16 sm:py-20 texture-walnut text-[#F5EDE0] overflow-hidden">
      {/* Decorative brass inlay borders top and bottom */}
      <div className="absolute top-0 inset-x-0 brass-divider opacity-60" />
      <div className="absolute bottom-0 inset-x-0 brass-divider opacity-60" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 bg-radial from-[#A9743F]/15 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B2416]/90 border border-[#B8893C]/40 text-xs font-medium text-[#B8893C] mb-4"
        >
          <Ruler className="w-3.5 h-3.5 text-[#B8893C]" />
          <span>Tailored Woodwork & Sizing</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 text-balance"
        >
          Made Your Way
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#F5EDE0]/85 font-normal max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Need a specific length, custom wood finish, or tailored upholstery for your room? We customize furniture to fit your home and lifestyle perfectly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={BUSINESS_DETAILS.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B8893C] hover:bg-[#c99a4c] text-[#3B2416] font-semibold text-sm rounded-md shadow-lg shadow-black/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDE0]"
          >
            <Phone className="w-4 h-4 text-[#3B2416]" />
            <span>Call to Discuss</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`${BUSINESS_DETAILS.whatsappBaseUrl}?text=Hello%20Kabbur%20Furniture%2C%20I%20am%20interested%20in%20customizing%20furniture%20for%20my%20home.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3B2416]/80 hover:bg-[#4d301f] text-[#F5EDE0] hover:text-white font-medium text-sm border border-[#B8893C]/40 hover:border-[#B8893C] rounded-md transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893C]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Consultation</span>
          </motion.a>
        </motion.div>

        <p className="mt-6 text-xs text-[#F5EDE0]/60">
          Available 7 days a week · Open until 9:00 pm at PB Road Showroom
        </p>
      </div>
    </section>
  );
}

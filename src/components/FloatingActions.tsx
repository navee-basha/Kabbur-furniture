/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

export default function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 sm:bottom-6 sm:right-6"
      style={{ maxHeight: "12vh" }}
      aria-label="Direct contact quick actions"
    >
      {/* WhatsApp Quick Button */}
      <motion.a
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        href={`${BUSINESS_DETAILS.whatsappBaseUrl}?text=Hello%20Kabbur%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20furniture.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg shadow-black/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">WhatsApp</span>
      </motion.a>

      {/* Tap to Call Primary Button */}
      <motion.a
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        href={BUSINESS_DETAILS.phoneTel}
        aria-label="Call Kabbur Furniture"
        className="flex items-center gap-2 px-4 py-2.5 bg-[#3B2416] hover:bg-[#2a170c] text-[#F5EDE0] border border-[#B8893C]/50 rounded-full shadow-lg shadow-black/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8893C]"
      >
        <div className="w-5 h-5 rounded-full bg-[#B8893C] flex items-center justify-center text-[#3B2416]">
          <Phone className="w-3 h-3 fill-[#3B2416]" />
        </div>
        <span className="text-xs font-semibold tracking-wide">Call Now</span>
      </motion.a>
    </motion.div>
  );
}

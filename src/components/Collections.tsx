/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MessageCircle, Phone, ArrowUpRight, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import { FURNITURE_COLLECTIONS, BUSINESS_DETAILS } from "../data/config";

interface CollectionsProps {
  onOpenEnquiryModal: (collectionTitle: string) => void;
  onImagePreview: (src: string, title: string) => void;
}

export default function Collections({ onOpenEnquiryModal, onImagePreview }: CollectionsProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="collections" className="relative py-20 lg:py-28 texture-cream-linen text-[#2A2018]">
      {/* Top delicate brass line */}
      <div className="brass-divider max-w-5xl mx-auto mb-16 opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8893C] mb-3 inline-block">
            Curated Showroom Displays
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3B2416] mb-4 text-balance">
            Explore Our Signature Collections
          </h2>
          <p className="text-base sm:text-lg text-[#2A2018]/80 leading-relaxed font-normal">
            From heirloom solid wood sofa sets to contemporary living pieces and custom cabinetry, experience furniture built with care and integrity.
          </p>
        </motion.div>

        {/* Elegant Grid of Category Cards (Top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {FURNITURE_COLLECTIONS.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="craft-card group bg-white/80 rounded-lg overflow-hidden border border-[#B8893C]/20 flex flex-col shadow-sm"
            >
              {/* Image Frame with hover zoom - 100% CLEAN: NO TEXT OVERLAY */}
              <div className="relative aspect-[4/3] bg-[#E8DDD0] overflow-hidden">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-[#E8DDD0] animate-pulse flex items-center justify-center text-xs text-[#3B2416]/50">
                    Loading {item.title}...
                  </div>
                )}
                <img
                  src={item.image}
                  alt={`Kabbur Furniture ${item.title}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 ${
                    loadedImages[item.id] ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Quick inspect button */}
                <button
                  type="button"
                  onClick={() => onImagePreview(item.image, item.title)}
                  className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100"
                  title="Expand photograph"
                  aria-label={`Expand photograph of ${item.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#3B2416] mb-1 group-hover:text-[#A9743F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#B8893C] mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-[#2A2018]/80 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Brass Enquire Link */}
                <div className="pt-4 border-t border-[#B8893C]/15 flex items-center justify-between">
                  <span className="text-xs text-[#2A2018]/60">Showroom display & orders</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiryModal(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A9743F] hover:text-[#3B2416] transition-colors py-1 group/btn"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Row: 2 items centered & wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FURNITURE_COLLECTIONS.slice(3, 5).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="craft-card group bg-white/80 rounded-lg overflow-hidden border border-[#B8893C]/20 flex flex-col shadow-sm"
            >
              {/* Image Frame with hover zoom - 100% CLEAN: NO TEXT OVERLAY */}
              <div className="relative aspect-[4/3] bg-[#E8DDD0] overflow-hidden">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-[#E8DDD0] animate-pulse flex items-center justify-center text-xs text-[#3B2416]/50">
                    Loading {item.title}...
                  </div>
                )}
                <img
                  src={item.image}
                  alt={`Kabbur Furniture ${item.title}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 ${
                    loadedImages[item.id] ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => onImagePreview(item.image, item.title)}
                  className="absolute top-3 right-3 p-1.5 bg-black/50 hover:bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100"
                  title="Expand photograph"
                  aria-label={`Expand photograph of ${item.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#3B2416] mb-1 group-hover:text-[#A9743F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#B8893C] mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-[#2A2018]/80 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Brass Enquire Link */}
                <div className="pt-4 border-t border-[#B8893C]/15 flex items-center justify-between">
                  <span className="text-xs text-[#2A2018]/60">Showroom display & orders</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiryModal(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A9743F] hover:text-[#3B2416] transition-colors py-1 group/btn"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Helpful Showroom Notice Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-5 rounded-lg bg-[#F2E8DC] border border-[#B8893C]/25 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-[#3B2416]">
              Looking for something specific or custom sizing?
            </h4>
            <p className="text-xs text-[#2A2018]/70 mt-0.5">
              Visit our showroom on PB Road, Davangere to see demo pieces and touch fabric swatches.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3B2416] text-[#F5EDE0] hover:bg-[#4d301f] text-xs font-medium rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8893C]" />
              <span>Call Showroom</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`${BUSINESS_DETAILS.whatsappBaseUrl}?text=Hello%20Kabbur%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20furniture%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white hover:bg-[#1faa4e] text-xs font-medium rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

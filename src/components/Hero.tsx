/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Phone, Navigation, Star, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

interface HeroProps {
  onImagePreview?: (src: string, title: string) => void;
}

export default function Hero({ onImagePreview }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageSrc = "/images/hero-fur.png";

  // Editable headline and subtext
  const headline = "Furniture Crafted for Every Home in Davangere";
  const subtext = "Wide collections, quality craftsmanship and honest prices.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen texture-walnut text-[#F5EDE0] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Subtle organic light gradient & vignette */}
      <div
        className="absolute inset-0 pointer-events-none bg-radial from-transparent via-[#24140A]/40 to-[#190c05]/90"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Brand & Action Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Trust badge: 4.6 ★ · 136 Google Reviews & Open status */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-2.5 text-xs font-medium text-[#F5EDE0]/90 mb-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B2416]/80 border border-[#B8893C]/40 rounded-full shadow-sm backdrop-blur-sm">
                <div className="flex items-center text-[#B8893C]">
                  <Star className="w-3.5 h-3.5 fill-[#B8893C] text-[#B8893C]" />
                </div>
                <span className="font-semibold text-white tracking-wide">4.6 ★</span>
                <span className="text-[#B8893C]/60">·</span>
                <span className="text-[#F5EDE0]/80">136 Google Reviews</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B2416]/80 border border-[#B8893C]/30 rounded-full shadow-sm backdrop-blur-sm">
                <Clock className="w-3 h-3 text-[#B8893C]" />
                <span className="text-[#F5EDE0]/90 font-medium">Open · Closes 9 pm</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white mb-6 text-balance"
            >
              Furniture Crafted for Every Home in{" "}
              <span className="italic text-[#B8893C] font-normal">Davangere</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#F5EDE0]/85 font-normal leading-relaxed max-w-xl mb-8"
            >
              {subtext}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#B8893C] hover:bg-[#c99a4c] text-[#3B2416] font-semibold text-sm tracking-wide rounded-md shadow-lg shadow-black/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDE0]"
              >
                <Phone className="w-4 h-4 text-[#3B2416]" />
                <span>Call {BUSINESS_DETAILS.phone}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3B2416]/80 hover:bg-[#4a2e1d] text-[#F5EDE0] hover:text-white font-medium text-sm border border-[#B8893C]/40 hover:border-[#B8893C] rounded-md transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893C]"
              >
                <Navigation className="w-4 h-4 text-[#B8893C]" />
                <span>Get Directions</span>
              </motion.a>
            </motion.div>

            {/* Hallmark customer highlights bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#B8893C]/20 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#F5EDE0]/70"
            >
              <span className="text-[#B8893C] font-serif uppercase tracking-wider text-[11px]">Showroom Hallmark:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]"></span> Wide Collection
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]"></span> Honest Prices
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]"></span> Custom Woodwork
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Showcase Wooden Sofa Set Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 relative"
          >
            {/* Decorative wood-inlay border framing */}
            <div className="relative rounded-lg p-2 sm:p-2.5 bg-gradient-to-br from-[#B8893C]/40 via-[#3B2416]/50 to-[#B8893C]/20 shadow-2xl shadow-black/50">
              <div className="relative rounded-md overflow-hidden aspect-[16/10] sm:aspect-[16/10] bg-[#2E1A0F]">
                
                {/* Fallback container with warm craft motif */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#2E1A0F] text-[#F5EDE0]/60">
                    <Sparkles className="w-8 h-8 text-[#B8893C]/40 mb-2 animate-pulse" />
                    <span className="font-serif text-lg text-[#F5EDE0]/80">Kabbur Solid Wood Living Suite</span>
                    <span className="text-xs text-[#F5EDE0]/50 mt-1">Loading showroom photograph...</span>
                  </div>
                )}

                <img
                  src={heroImageSrc}
                  alt="Kabbur Furniture handcrafted wooden sofa set in showroom living setting"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-102 cursor-pointer ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0"
                  }`}
                  onClick={() => onImagePreview?.(heroImageSrc, "Kabbur Handcrafted Wooden Sofa Suite")}
                />
              </div>
            </div>

            {/* Subtle decorative wood joinery corner accent */}
            <div
              className="hidden lg:block absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[#B8893C]/40 pointer-events-none rounded-br-md"
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

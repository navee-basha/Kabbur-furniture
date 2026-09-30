/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Copy, Check, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

export default function VisitUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DETAILS.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const mapEmbedUrl = "https://maps.google.com/maps?q=118%2F1%2C%20PB%20Rd%2C%20beside%20Sulthan%20Diamonds%20and%20Gold%2C%20KB%20Extension%2C%20Davangere%2C%20Karnataka%20577002&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="visit-us" className="relative py-20 lg:py-28 texture-oak-light text-[#2A2018] border-t border-[#B8893C]/20">
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
            Our Showroom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3B2416] mb-4 text-balance">
            Visit Us in Davangere
          </h2>
          <p className="text-base text-[#2A2018]/80 leading-relaxed font-normal">
            Step into our showroom on PB Road to explore our living room displays, test cushion comfort, and discuss custom furniture with our team.
          </p>
        </motion.div>

        {/* Two Columns: Details Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact & Visit Information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white/90 rounded-xl p-7 sm:p-9 border border-[#B8893C]/30 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* Address block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#3B2416] text-[#B8893C] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#A9743F] mb-1">
                    Showroom Address
                  </span>
                  <p className="text-sm sm:text-base font-normal text-[#2A2018] leading-relaxed">
                    {BUSINESS_DETAILS.address}
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#A9743F] hover:text-[#3B2416] font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy full address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone block */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#B8893C]/15">
                <div className="w-10 h-10 rounded-lg bg-[#3B2416] text-[#B8893C] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#A9743F] mb-1">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={BUSINESS_DETAILS.phoneTel}
                    className="text-lg sm:text-xl font-serif font-semibold text-[#3B2416] hover:text-[#A9743F] transition-colors block"
                  >
                    {BUSINESS_DETAILS.phone}
                  </a>
                  <p className="text-xs text-[#2A2018]/60 mt-0.5">
                    Tap to call directly or connect for inquiries
                  </p>
                </div>
              </div>

              {/* Status / Hours block */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#B8893C]/15">
                <div className="w-10 h-10 rounded-lg bg-[#3B2416] text-[#B8893C] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#A9743F] mb-1">
                    Showroom Hours
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    <p className="text-base font-semibold text-[#3B2416]">
                      {BUSINESS_DETAILS.status}
                    </p>
                  </div>
                  <p className="text-xs text-[#2A2018]/60 mt-0.5">
                    Open Monday to Sunday
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-[#B8893C]/20 flex flex-col sm:flex-row gap-3 mt-8">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#3B2416] hover:bg-[#4d301f] text-[#F5EDE0] text-sm font-semibold rounded-md shadow transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#B8893C]" />
                <span>Get Directions</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#B8893C] hover:bg-[#c99a4c] text-[#3B2416] text-sm font-semibold rounded-md shadow transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Embed with Brass Frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-xl overflow-hidden border border-[#B8893C]/30 shadow-lg relative min-h-[380px] lg:min-h-[460px] bg-[#E8DDD0] flex flex-col"
          >
            {/* Top map frame header */}
            <div className="bg-[#3B2416] text-[#F5EDE0] px-4 py-3 flex items-center justify-between text-xs border-b border-[#B8893C]/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8893C]" />
                <span className="font-serif tracking-wide text-sm font-medium">
                  Kabbur Furniture · Davangere Location
                </span>
              </div>
              <a
                href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8893C] hover:text-white inline-flex items-center gap-1 text-[11px] font-medium transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-1 relative w-full h-full min-h-[340px]">
              <iframe
                title="Kabbur Furniture Location in Davangere"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom address confirmation strip */}
            <div className="bg-[#F5EDE0] px-4 py-2 text-[11px] text-[#2A2018]/70 border-t border-[#B8893C]/20 flex items-center justify-between">
              <span>PB Rd, beside Sulthan Diamonds and Gold, KB Extension</span>
              <span className="text-[#A9743F] font-mono">PIN: 577002</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

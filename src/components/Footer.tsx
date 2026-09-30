/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, Navigation, Star, ArrowUp } from "lucide-react";
import { BUSINESS_DETAILS } from "../data/config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative texture-walnut text-[#F5EDE0] pt-16 pb-24 sm:pb-16 border-t border-[#B8893C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#B8893C]/20">
          
          {/* Brand & Summary Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="font-serif text-3xl font-medium tracking-tight text-white">
                Kabbur <span className="italic text-[#B8893C]">Furniture</span>
              </span>
            </a>
            
            <p className="text-sm text-[#F5EDE0]/80 leading-relaxed font-normal max-w-sm">
              Davangere's premier furniture destination. Offering wide collections of solid wood living suites, modern sofas, center tables, and bespoke furniture crafted with pride.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#F5EDE0]/90">
              <div className="flex items-center text-[#B8893C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B8893C] text-[#B8893C]" />
                ))}
              </div>
              <span className="font-medium text-white">{BUSINESS_DETAILS.rating} Rating</span>
              <span className="text-[#B8893C]/50">·</span>
              <span>136 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5EDE0]/75">
              <li>
                <a href="#hero" className="hover:text-[#B8893C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#B8893C] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B8893C] transition-colors">
                  Craftsmanship Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#B8893C] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B8893C] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-[#B8893C] transition-colors">
                  Visit Showroom
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-medium text-white tracking-wide">
              Showroom Location
            </h4>
            
            <div className="space-y-2.5 text-sm text-[#F5EDE0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8893C] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  {BUSINESS_DETAILS.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#B8893C] shrink-0" />
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="font-mono text-[#F5EDE0] hover:text-[#B8893C] transition-colors font-medium"
                >
                  {BUSINESS_DETAILS.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B8893C] hover:text-white font-medium transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EDE0]/60">
          <p>© Kabbur Furniture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{BUSINESS_DETAILS.status}</span>
            <span className="text-[#B8893C]/40">·</span>
            <span>Davangere, Karnataka</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#B8893C] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

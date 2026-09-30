/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

interface NavbarProps {
  onOpenEnquire?: (category?: string) => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Collections", href: "#collections" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit-us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#3B2416] border-b border-[#B8893C]/25 shadow-lg shadow-black/20 py-3.5"
            : "bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              className="group flex items-baseline gap-1 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893C]"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-white group-hover:text-[#F5EDE0] transition-colors">
                Kabbur
              </span>
              <span className="font-serif text-2xl sm:text-3xl tracking-tight italic font-normal text-[#B8893C]">
                Furniture
              </span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[#F5EDE0]/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-[#B8893C] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={BUSINESS_DETAILS.phoneTel}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3B2416] bg-[#B8893C] hover:bg-[#c99a4c] rounded-md transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDE0]"
              >
                <Phone className="w-3.5 h-3.5 text-[#3B2416]" />
                <span>Call Now</span>
              </motion.a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#F5EDE0] hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893C] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#3B2416] border-l border-[#B8893C]/30 p-6 flex flex-col justify-between shadow-2xl texture-walnut"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#B8893C]/20">
                  <span className="font-serif text-2xl text-white">
                    Kabbur <span className="text-[#B8893C] italic">Furniture</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-white/80 hover:text-white rounded-md focus-visible:outline-none cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-serif text-[#F5EDE0] hover:text-[#B8893C] transition-colors py-1 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B8893C]/60" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#B8893C]/20 space-y-3">
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#B8893C] text-[#3B2416] font-semibold text-sm rounded-md shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DETAILS.phone}</span>
                </a>
                <p className="text-center text-xs text-[#F5EDE0]/60">
                  {BUSINESS_DETAILS.status}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

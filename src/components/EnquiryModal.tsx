/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { X, Phone, MessageCircle, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_DETAILS } from "../data/config";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialCategory }: EnquiryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "Wooden Sofa Sets");
  const [customerName, setCustomerName] = useState("");
  const [customerRequirement, setCustomerRequirement] = useState("");

  const categories = [
    "Wooden Sofa Sets",
    "Modern Sofas",
    "Center Tables",
    "Cushions & Accents",
    "Custom Furniture",
  ];

  const getWhatsappUrl = () => {
    let msg = `Hello Kabbur Furniture, I am interested in *${selectedCategory}*.`;
    if (customerName.trim()) {
      msg += ` My name is ${customerName.trim()}.`;
    }
    if (customerRequirement.trim()) {
      msg += ` Requirement: ${customerRequirement.trim()}`;
    }
    return `${BUSINESS_DETAILS.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FAF4EB] rounded-xl p-6 sm:p-8 border border-[#B8893C]/40 shadow-2xl text-[#2A2018] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle wood header styling */}
            <div className="flex items-center justify-between pb-4 border-b border-[#B8893C]/20">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A9743F]">
                  Kabbur Furniture Showroom
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#3B2416]">
                  Enquire About Collection
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-md text-[#2A2018]/60 hover:text-[#3B2416] hover:bg-black/5 transition-colors focus-visible:outline-none cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-2">
                  Select Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-2 text-xs font-medium rounded text-left transition-colors border cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-[#3B2416] text-[#F5EDE0] border-[#3B2416] shadow-xs"
                          : "bg-white text-[#2A2018]/80 border-[#B8893C]/20 hover:border-[#B8893C]/60"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                  Your Name (Optional)
                </label>
                <input
                  id="name-input"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="req-input" className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                  Notes or Dimensions (Optional)
                </label>
                <textarea
                  id="req-input"
                  rows={2}
                  value={customerRequirement}
                  onChange={(e) => setCustomerRequirement(e.target.value)}
                  placeholder="e.g. 5-seater solid teak, walnut finish..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#B8893C]/20 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1fa951] text-white font-semibold text-sm rounded shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Enquire via WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BUSINESS_DETAILS.phoneTel}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#3B2416] hover:bg-[#4d301f] text-[#F5EDE0] font-semibold text-sm rounded shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B8893C]" />
                <span>Call Showroom</span>
              </motion.a>
            </div>

            <p className="text-[11px] text-center text-[#2A2018]/60 mt-3">
              Direct conversation with Kabbur Furniture staff · {BUSINESS_DETAILS.status}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

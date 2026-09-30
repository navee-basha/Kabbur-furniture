/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "../data/galleryData";
import { BUSINESS_DETAILS } from "../data/config";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentItem?: {
    image: string;
    title: string;
    woodType?: string;
  } | null;
  allItems?: GalleryItem[];
  currentIndex?: number;
  onNavigate?: (newIndex: number) => void;
  onOpenEnquire?: (title: string) => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  currentItem,
  allItems = [],
  currentIndex = 0,
  onNavigate,
  onOpenEnquire,
}: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && onNavigate && currentIndex < allItems.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, allItems.length, onNavigate, onClose]);

  if (!isOpen || !currentItem) return null;

  const hasPrev = onNavigate && currentIndex > 0;
  const hasNext = onNavigate && currentIndex < allItems.length - 1;

  const activeImage = currentItem.image;
  const activeTitle = currentItem.title;
  const activeWood = currentItem.woodType;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Top Close & Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 text-[#F5EDE0] text-xs font-mono border border-white/10 backdrop-blur-sm">
            <span>Kabbur Showroom</span>
            {allItems.length > 0 && (
              <>
                <span className="text-white/40">·</span>
                <span className="text-[#B8893C] font-semibold">
                  {currentIndex + 1} / {allItems.length}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Navigation Arrows */}
        {hasPrev && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate!(currentIndex - 1);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm z-20 cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {hasNext && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate!(currentIndex + 1);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm z-20 cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}

        {/* Main Image Container: 100% CLEAN - No text over the photo */}
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-lg overflow-hidden border border-[#B8893C]/40 shadow-2xl bg-[#1a0e07]">
            <img
              src={activeImage}
              alt={activeTitle}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-[94vw] object-contain select-none"
            />
          </div>

          {/* Clean bottom information & direct action bar */}
          <div className="w-full mt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg sm:text-xl text-[#F5EDE0] tracking-wide">
                {activeTitle}
              </h4>
              {activeWood && (
                <p className="text-xs text-[#B8893C] font-mono mt-0.5">
                  {activeWood}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`${BUSINESS_DETAILS.whatsappBaseUrl}?text=${encodeURIComponent(
                  `Hello Kabbur Furniture, I saw this photograph of *${activeTitle}* and would like details and pricing.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded shadow transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                <span>Enquire on WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={BUSINESS_DETAILS.phoneTel}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#3B2416] hover:bg-[#4d301f] text-[#F5EDE0] border border-[#B8893C]/40 text-xs font-semibold rounded shadow transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8893C]" />
                <span>Call Showroom</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

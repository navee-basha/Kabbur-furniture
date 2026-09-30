/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import {
  LayoutGrid,
  Columns3,
  Columns4,
  SlidersHorizontal,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  SHOWROOM_GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  GalleryItem
} from "../data/galleryData";
import { BUSINESS_DETAILS } from "../data/config";

interface ShowroomGalleryProps {
  onImageSelect: (item: GalleryItem, index: number, allItems: GalleryItem[]) => void;
  onOpenEnquire: (title?: string) => void;
}

export type GalleryLayoutMode = "mosaic" | "grid" | "magazine" | "strip";

export default function ShowroomGallery({ onImageSelect, onOpenEnquire }: ShowroomGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [layoutMode, setLayoutMode] = useState<GalleryLayoutMode>("mosaic");
  const [imagesList, setImagesList] = useState<GalleryItem[]>(SHOWROOM_GALLERY_IMAGES);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Image Form State
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCategory, setNewCategory] = useState<GalleryItem["category"]>("living");
  const [newAspect, setNewAspect] = useState<GalleryItem["aspect"]>("landscape");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return imagesList;
    return imagesList.filter((item) => item.category === activeCategory);
  }, [activeCategory, imagesList]);

  const handleAddNewImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    const newItem: GalleryItem = {
      id: `custom-img-${Date.now()}`,
      title: newTitle.trim() || `Showroom Piece #${imagesList.length + 1}`,
      category: newCategory,
      image: newUrl.trim(),
      aspect: newAspect,
      woodType: "Custom Selected Woodwork"
    };
    setImagesList([newItem, ...imagesList]);
    setNewTitle("");
    setNewUrl("");
    setShowAddModal(false);
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-28 texture-cream-linen text-[#2A2018] border-t border-[#B8893C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B8893C] mb-2 inline-block">
              Showroom Walkthrough & Lookbook
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3B2416] text-balance">
              Craftsmanship Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#2A2018]/75 mt-2 max-w-xl font-normal">
              Browse actual showroom pieces, joinery details, and living suites. Pure photography with zero clutter.
            </p>
          </div>

          {/* Action & Layout Switcher Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Layout Switcher segmented control */}
            <div className="inline-flex items-center p-1 bg-[#EBE0D2] rounded-lg border border-[#B8893C]/30 shadow-xs">
              <button
                type="button"
                onClick={() => setLayoutMode("mosaic")}
                title="Mosaic Lookbook Layout"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  layoutMode === "mosaic"
                    ? "bg-[#3B2416] text-[#F5EDE0] shadow-xs"
                    : "text-[#3B2416]/80 hover:text-[#3B2416]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mosaic</span>
              </button>

              <button
                type="button"
                onClick={() => setLayoutMode("grid")}
                title="Clean 4-Column Grid Layout"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  layoutMode === "grid"
                    ? "bg-[#3B2416] text-[#F5EDE0] shadow-xs"
                    : "text-[#3B2416]/80 hover:text-[#3B2416]"
                }`}
              >
                <Columns4 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">4-Col Grid</span>
              </button>

              <button
                type="button"
                onClick={() => setLayoutMode("magazine")}
                title="Magazine Feature Layout"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  layoutMode === "magazine"
                    ? "bg-[#3B2416] text-[#F5EDE0] shadow-xs"
                    : "text-[#3B2416]/80 hover:text-[#3B2416]"
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Magazine</span>
              </button>

              <button
                type="button"
                onClick={() => setLayoutMode("strip")}
                title="Filmstrip Slider Layout"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  layoutMode === "strip"
                    ? "bg-[#3B2416] text-[#F5EDE0] shadow-xs"
                    : "text-[#3B2416]/80 hover:text-[#3B2416]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Filmstrip</span>
              </button>
            </div>

            {/* Add Image Helper Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#3B2416] bg-[#B8893C]/20 hover:bg-[#B8893C]/35 border border-[#B8893C]/40 rounded-lg transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Images ({imagesList.length})</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B2416] text-[#F5EDE0] border-[#3B2416] shadow-xs"
                  : "bg-white/80 text-[#2A2018]/80 border-[#B8893C]/25 hover:border-[#B8893C] hover:bg-white"
              }`}
            >
              {cat.label}
              {cat.id === "all" ? ` (${imagesList.length})` : ""}
            </button>
          ))}
        </div>

        {/* ============================================================ */}
        {/* LAYOUT 1: MOSAIC LOOKBOOK (Masonry / Varied Scale - Clean)   */}
        {/* ============================================================ */}
        <AnimatePresence mode="wait">
          {layoutMode === "mosaic" && (
            <motion.div
              key={`mosaic-${activeCategory}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]"
            >
              {filteredImages.map((item, index) => {
                const isHeroSpan = index % 7 === 0;
                const isTallSpan = index % 7 === 1 || index % 7 === 5;
                const isWideSpan = index % 7 === 3;
                
                const spanClasses = isHeroSpan
                  ? "lg:col-span-7 lg:row-span-2"
                  : isTallSpan
                  ? "lg:col-span-5 lg:row-span-2"
                  : isWideSpan
                  ? "lg:col-span-7"
                  : "lg:col-span-5";

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    onClick={() => onImageSelect(item, index, filteredImages)}
                    className={`craft-card group relative rounded-xl overflow-hidden bg-[#2E1A0F] border border-[#B8893C]/25 shadow-sm cursor-pointer ${spanClasses}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Clean hover scrim with only minimal caption underneath on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <p className="font-serif text-lg tracking-wide text-white">{item.title}</p>
                          {item.woodType && (
                            <p className="text-xs text-[#B8893C] font-mono">{item.woodType}</p>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* LAYOUT 2: CLEAN 4-COLUMN STUDIO GRID                         */}
          {/* ============================================================ */}
          {layoutMode === "grid" && (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
            >
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -5 }}
                  onClick={() => onImageSelect(item, index, filteredImages)}
                  className="craft-card group bg-white/85 rounded-xl overflow-hidden border border-[#B8893C]/25 shadow-sm cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-[#2E1A0F] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 bg-black/60 text-white rounded-full backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between">
                    <div className="truncate mr-2">
                      <h3 className="font-serif text-base font-semibold text-[#3B2416] group-hover:text-[#A9743F] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#A9743F] font-mono truncate">
                        {item.woodType || "Handcrafted Hardwood"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenEnquire(item.title);
                      }}
                      className="text-[11px] font-semibold uppercase tracking-wider text-[#A9743F] hover:text-[#3B2416] shrink-0"
                    >
                      Enquire
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* LAYOUT 3: MAGAZINE WALL (Alternating Major Feature & Duos)    */}
          {/* ============================================================ */}
          {layoutMode === "magazine" && (
            <motion.div
              key={`magazine-${activeCategory}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, blockIdx) => {
                const trio = filteredImages.slice(blockIdx * 3, blockIdx * 3 + 3);
                const isEven = blockIdx % 2 === 0;

                return (
                  <div key={blockIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Large focal image */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      onClick={() => onImageSelect(trio[0], blockIdx * 3, filteredImages)}
                      className={`craft-card group relative rounded-xl overflow-hidden bg-[#2E1A0F] border border-[#B8893C]/30 shadow-md cursor-pointer aspect-[16/10] lg:aspect-auto ${
                        isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                      }`}
                    >
                      {trio[0] && (
                        <>
                          <img
                            src={trio[0].image}
                            alt={trio[0].title}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            <p className="font-serif text-xl text-white">{trio[0].title}</p>
                            <p className="text-xs text-[#B8893C] font-mono">{trio[0].woodType}</p>
                          </div>
                        </>
                      )}
                    </motion.div>

                    {/* Two stacked companion images */}
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 ${
                        isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                      }`}
                    >
                      {trio.slice(1, 3).map((subItem, subIdx) => {
                        const realIndex = blockIdx * 3 + 1 + subIdx;
                        return (
                          <motion.div
                            key={subItem.id}
                            whileHover={{ scale: 1.015 }}
                            onClick={() => onImageSelect(subItem, realIndex, filteredImages)}
                            className="craft-card group relative rounded-xl overflow-hidden bg-[#2E1A0F] border border-[#B8893C]/25 shadow-sm cursor-pointer aspect-[16/9] lg:aspect-[16/10]"
                          >
                            <img
                              src={subItem.image}
                              alt={subItem.title}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                              <p className="font-serif text-base text-white">{subItem.title}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* LAYOUT 4: FILMSTRIP CAROUSEL STRIP                           */}
          {/* ============================================================ */}
          {layoutMode === "strip" && (
            <motion.div
              key={`strip-${activeCategory}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin">
                {filteredImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -5 }}
                    onClick={() => onImageSelect(item, index, filteredImages)}
                    className="craft-card group shrink-0 w-[290px] sm:w-[360px] snap-start bg-white/90 rounded-xl overflow-hidden border border-[#B8893C]/25 shadow-sm cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] bg-[#2E1A0F] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 bg-black/60 text-white rounded-full">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-serif text-base font-semibold text-[#3B2416]">{item.title}</p>
                        <p className="text-xs text-[#A9743F] font-mono">{item.woodType}</p>
                      </div>
                      <span className="text-xs text-[#B8893C] font-semibold">Inspect</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-center text-[#2A2018]/60 mt-3">
                ← Swipe or scroll horizontally to view all {filteredImages.length} showroom pieces →
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA for Custom Orders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 pt-8 border-t border-[#B8893C]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[#2A2018]/80 text-center sm:text-left">
            Have a photo of a design you like? Bring it to our Davangere showroom or WhatsApp it to us.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => onOpenEnquire()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B2416] hover:bg-[#4d301f] text-[#F5EDE0] text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-colors cursor-pointer"
            >
              <span>Enquire Any Piece</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B8893C]" />
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* ADD NEW IMAGE MODAL */}
      <AnimatePresence>
        {showAddModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md bg-[#FAF4EB] rounded-xl p-6 border border-[#B8893C]/40 shadow-2xl text-[#2A2018]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#B8893C]/20">
                <h3 className="font-serif text-2xl font-semibold text-[#3B2416]">
                  Add Showroom Image
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="text-xs font-semibold text-[#A9743F] hover:text-[#3B2416]"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleAddNewImage} className="py-4 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                    Image URL or Path
                  </label>
                  <input
                    type="text"
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://... or /src/assets/images/my_photo.jpg"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                    Piece Title
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Teak Wood Dining Chair Set"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                      Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none"
                    >
                      <option value="living">Living & Sofas</option>
                      <option value="dining">Dining & Tables</option>
                      <option value="bedroom">Bedroom</option>
                      <option value="accent">Chairs & Accents</option>
                      <option value="woodwork">Woodcraft & Temple</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3B2416] uppercase tracking-wider mb-1">
                      Aspect Ratio
                    </label>
                    <select
                      value={newAspect}
                      onChange={(e) => setNewAspect(e.target.value as any)}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#B8893C]/30 rounded focus:border-[#3B2416] focus:outline-none"
                    >
                      <option value="landscape">Landscape (4:3)</option>
                      <option value="portrait">Portrait (3:4)</option>
                      <option value="wide">Wide (16:9)</option>
                      <option value="square">Square (1:1)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#3B2416] hover:bg-[#4d301f] text-[#F5EDE0] text-sm font-semibold rounded transition-colors shadow cursor-pointer"
                  >
                    Insert Into Gallery
                  </button>
                </div>
              </form>

              <div className="p-3 bg-[#EBE0D2]/60 rounded text-[11px] text-[#2A2018]/70 border border-[#B8893C]/20 leading-relaxed">
                💡 <strong>Pro-tip:</strong> You can also paste your photos directly into <code>src/data/galleryData.ts</code> in the <code>SHOWROOM_GALLERY_IMAGES</code> array to save 8 to 20+ images permanently!
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

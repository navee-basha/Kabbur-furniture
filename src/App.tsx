/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import ShowroomGallery from "./components/ShowroomGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomizationBanner from "./components/CustomizationBanner";
import Reviews from "./components/Reviews";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import EnquiryModal from "./components/EnquiryModal";
import ImageModal from "./components/ImageModal";
import { GalleryItem, SHOWROOM_GALLERY_IMAGES } from "./data/galleryData";

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedEnquiryCategory, setSelectedEnquiryCategory] = useState<string>("Wooden Sofa Sets");

  // Lightbox & Carousel State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryList, setActiveGalleryList] = useState<GalleryItem[]>(SHOWROOM_GALLERY_IMAGES);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [singlePreviewItem, setSinglePreviewItem] = useState<{
    image: string;
    title: string;
    woodType?: string;
  } | null>(null);

  const handleOpenEnquire = (category?: string) => {
    if (category) {
      setSelectedEnquiryCategory(category);
    }
    setEnquiryModalOpen(true);
  };

  // For Hero and Collections preview
  const handleSingleImagePreview = (src: string, title: string) => {
    setSinglePreviewItem({
      image: src,
      title: title,
      woodType: "Kabbur Showroom Signature Piece"
    });
    // Find if it exists in SHOWROOM_GALLERY_IMAGES
    const idx = SHOWROOM_GALLERY_IMAGES.findIndex((item) => item.image === src);
    if (idx !== -1) {
      setActiveGalleryList(SHOWROOM_GALLERY_IMAGES);
      setActiveImageIndex(idx);
    } else {
      setActiveGalleryList([
        {
          id: "preview-single",
          title,
          category: "living",
          image: src,
          woodType: "Kabbur Showroom Signature Piece"
        }
      ]);
      setActiveImageIndex(0);
    }
    setLightboxOpen(true);
  };

  // For ShowroomGallery multi-layout click
  const handleGalleryItemSelect = (
    item: GalleryItem,
    index: number,
    allItems: GalleryItem[]
  ) => {
    setActiveGalleryList(allItems);
    setActiveImageIndex(index);
    setSinglePreviewItem(item);
    setLightboxOpen(true);
  };

  const handleNavigateImage = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < activeGalleryList.length) {
      setActiveImageIndex(newIndex);
      setSinglePreviewItem(activeGalleryList[newIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EDE0] text-[#2A2018] flex flex-col font-sans selection:bg-[#B8893C]/20 selection:text-[#3B2416]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Main Content Sections (Strict Human Craftsmanship Order) */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onImagePreview={handleSingleImagePreview} />

        {/* 3. Collections Grid */}
        <Collections
          onOpenEnquiryModal={handleOpenEnquire}
          onImagePreview={handleSingleImagePreview}
        />

        {/* 3b. Showroom Walkthrough & Craftsmanship Gallery with 4 Interchangeable Layouts */}
        <ShowroomGallery
          onImageSelect={handleGalleryItemSelect}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Customization Banner */}
        <CustomizationBanner />

        {/* 6. Customer Reviews */}
        <Reviews />

        {/* 7. Visit Us */}
        <VisitUs />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating "Call" / WhatsApp button */}
      <FloatingActions />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialCategory={selectedEnquiryCategory}
      />

      {/* Clean Full-Screen Lightbox Carousel (Zero Text Clutter on Top of Photos) */}
      <ImageModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentItem={singlePreviewItem}
        allItems={activeGalleryList}
        currentIndex={activeImageIndex}
        onNavigate={handleNavigateImage}
        onOpenEnquire={handleOpenEnquire}
      />
    </div>
  );
}

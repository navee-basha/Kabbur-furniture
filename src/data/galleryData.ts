/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "living" | "dining" | "bedroom" | "woodwork" | "accent";
  image: string;
  aspect?: "square" | "landscape" | "portrait" | "wide";
  dimensions?: string;
  woodType?: string;
}

/**
 * SHOWROOM IMAGE DATABASE
 * You can easily add, remove, or swap images here (8 to 20+ images).
 * To use your own showroom photos, simply replace the image path with your file or URL.
 */
export const SHOWROOM_GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "img-1",
    title: "Living Suite",
    category: "living",
    image: "/src/assets/images/living_sofa.png",
    aspect: "wide",
    woodType: "Solid Teak & Walnut Finish"
  },
  {
    id: "img-2",
    title: "Solid Wood Sofa Set",
    category: "living",
    image: "/src/assets/images/wooden_sofa_set.png",
    aspect: "landscape",
    woodType: "Seasoned Teakwood"
  },
  {
    id: "img-3",
    title: "Artisanal Walnut Center Table",
    category: "living",
    image: "/src/assets/images/center_tables.png",
    aspect: "portrait",
    woodType: "Solid Hardwood & Brass Inlay"
  },
  {
    id: "img-4",
    title: "6-Seater Royal Teak Dining Suite",
    category: "dining",
    image: "/src/assets/images/6seter_table.png",
    aspect: "wide",
    woodType: "Solid Teakwood"
  },
  {
    id: "img-5",
    title: "Hand-Sculpted Wooden Rocking Chair",
    category: "accent",
    image: "/src/assets/images/chair1.png",
    aspect: "portrait",
    woodType: "Curved Hardwood & Cane"
  },
  {
    id: "img-6",
    title: "Modern Sectional Living Suite",
    category: "living",
    image: "/src/assets/images/modern_sofa.png",
    aspect: "landscape",
    woodType: "Hardwood Structure & Linen"
  },
  {
    id: "img-7",
    title: "King Size Solid Teak Bed",
    category: "bedroom",
    image: "/src/assets/images/bed.png",
    aspect: "wide",
    woodType: "Pure Teakwood"
  },
  {
    id: "img-8",
    title: "Dovetail Wood Joinery Detail",
    category: "woodwork",
    image: "/src/assets/images/gal_wood_joint_1790606734708.jpg",
    aspect: "square",
    woodType: "Master Carpenter Joinery"
  },
  {
    id: "img-9",
    title: "Contemporary Oak Accent Lounge Chair",
    category: "accent",
    image: "/src/assets/images/chair2.png",
    aspect: "square",
    woodType: "Warm Oak & Textured Linen"
  },
  {
    id: "img-10",
    title: "Hanging Swing or Indoor Jhula",
    category: "living",
    image: "/src/assets/images/jula.png",
    aspect: "wide",
    woodType: "American Walnut & Brass"
  },
  {
    id: "img-12",
    title: "Spacious L-Shape Corner Sofa",
    category: "living",
    image: "/src/assets/images/l_sofa.png",
    aspect: "landscape",
    woodType: "Solid Wood Base Suite"
  },
  {
    id: "img-14",
    title: "Master Carpenter Workshop Custom Works",
    category: "woodwork",
    image: "/src/assets/images/cat_custom_furniture_1790606347693.jpg",
    aspect: "landscape",
    woodType: "Custom Workshop Joinery"
  }
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "living", label: "Living & Sofas" },
  { id: "dining", label: "Dining & Tables" },
  { id: "bedroom", label: "Bedroom" },
  { id: "accent", label: "Chairs & Accents" },
  { id: "woodwork", label: "Woodcraft & Temple" },
] as const;

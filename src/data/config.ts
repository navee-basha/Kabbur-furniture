/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Core Design Variables & Color Palette
export const BRAND_COLORS = {
  deepWalnut: "#3B2416",
  warmOak: "#A9743F",
  creamLinen: "#F5EDE0",
  antiqueBrass: "#B8893C",
  charcoal: "#2A2018",
  lightOakBg: "#F6EFE5",
  darkWalnutBg: "#24140A",
} as const;

export const BRAND_FONTS = {
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
} as const;

// BUSINESS DETAILS (Exact provided details - phone updated to placeholder per request)
export const BUSINESS_DETAILS = {
  name: "Kabbur Furniture",
  category: "Furniture store",
  rating: 4.6,
  reviewCount: 136,
  address: "118/1, PB Rd, beside Sulthan Diamonds and Gold, KB Extension, Davangere, Karnataka 577002",
  phone: "+91 XXXXXXXXXX",
  phoneRaw: "+91XXXXXXXXXX",
  phoneTel: "tel:+91XXXXXXXXXX",
  status: "Open · Closes 9 pm",
  statusNote: "Open, closes 9 pm",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Kabbur+Furniture+118%2F1+PB+Rd+beside+Sulthan+Diamonds+and+Gold+KB+Extension+Davangere+Karnataka+577002",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Kabbur+Furniture+Davangere+Karnataka+reviews",
  whatsappBaseUrl: "https://wa.me/91XXXXXXXXXX",
  highlights: [
    "wide collection",
    "affordable prices",
    "attractive demo/display",
    "good quality",
    "customization available"
  ]
};

// REAL CUSTOMER REVIEWS (verbatim, 5 stars each, attributed as Google Review)
export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    quote: "Amazing collections of furniture and very affordable prices !!",
    rating: 5,
    attribution: "Google Review",
    date: "Verified Customer",
    reviewerInitials: "AC"
  },
  {
    id: 2,
    quote: "Super collection and attractive demo along with best price",
    rating: 5,
    attribution: "Google Review",
    date: "Verified Customer",
    reviewerInitials: "SC"
  },
  {
    id: 3,
    quote: "Found very good collections and quality in furniture. Customization is also available. I would definitely recommend this place.",
    rating: 5,
    attribution: "Google Review",
    date: "Verified Customer",
    reviewerInitials: "RC"
  }
];

// COLLECTIONS (Requested categories with generated showroom photography)
export const FURNITURE_COLLECTIONS = [
  {
    id: "wooden-sofa-sets",
    title: "Wooden Sofa Sets",
    tagline: "Solid Teak & Walnut Craftsmanship",
    description: "Handcrafted solid wood frames with timeless grain patterns, hand-planed finishes, and high-density supportive cushioning.",
    image: "/images/wooden_sofa_set.png",
    aspect: "4:3",
    tag: "Showroom Favorite"
  },
  {
    id: "modern-sofas",
    title: "Modern Sofas",
    tagline: "Contemporary Comfort & Tailored Lines",
    description: "Curated and sectional living room suites featuring textured woven upholstery and warm tapered hardwood accents.",
    image: "/images/modern_sofa.png",
    aspect: "4:3",
    tag: "Popular Choice"
  },
  {
    id: "center-tables",
    title: "Center Tables",
    tagline: "Artisanal Wood with Brass Details",
    description: "Statement coffee tables sculpted from seasoned hardwood with organic natural edge profiles and refined joinery.",
    image: "/images/center_tables.png",
    aspect: "4:3",
    tag: "Hand-finished"
  },
  {
    id: "cushions-accents",
    title: "Cushions & Accents",
    tagline: "Tactile Linens & Living Accents",
    description: "Earth-toned designer cushions, handcrafted accents, and comfort additions to complete your home living space.",
    image: "/images/accents_sofa.png",
    aspect: "4:3",
    tag: "Curated Textures"
  },
  {
    // id: "custom-furniture",
    // title: "Custom Furniture",
    // tagline: "Made to Your Exact Space & Specifications",
    // description: "Bespoke dimensions, wood selection, finish stains, and fabric upholstery tailored by skilled craftsmen to your exact home layout.",
    // image: "/src/assets/images/cat_custom_furniture_1790606347693.jpg",
    // aspect: "4:3",
    // tag: "Bespoke Service"
  }
];

// WHY CHOOSE US (Derived strictly from customer feedback highlights)
export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Wide Collection",
    subtitle: "Living, Dining & Bespoke",
    description: "An expansive showroom display featuring traditional wooden suites, sleek modern designs, and diverse styles all under one roof."
  },
  {
    title: "Affordable Prices",
    subtitle: "Honest Showroom Pricing",
    description: "Direct-from-craftsman transparency and honest rates ensuring superior solid wood craftsmanship stays accessible for every household."
  },
  {
    title: "Quality Furniture",
    subtitle: "Hand-selected Hardwood & Finish",
    description: "Built to last generations with seasoned timber, robust mortise and tenon joinery, and durable protective hand finishes."
  },
  {
    title: "Customization Available",
    subtitle: "Tailored to Your Home",
    description: "Have a specific room size or design in mind? Our master craftsmen tailor dimensions, wood finishes, and upholstery to your requirements."
  }
];

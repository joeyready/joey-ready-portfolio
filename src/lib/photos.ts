export type Category =
  | 'Product'
  | 'Lifestyle'
  | 'Portrait'
  | 'E-commerce'
  | 'Event'
  | 'Food & Bev';

export const CATEGORIES: Category[] = [
  'Product',
  'Lifestyle',
  'Portrait',
  'E-commerce',
  'Event',
  'Food & Bev',
];

export interface Photo {
  id: string;
  src: string;          // path under /public/images/
  alt: string;
  category: Category;
  width: number;
  height: number;
  featured?: boolean;   // show on homepage featured grid
}

// ─── ADD YOUR PHOTOS HERE ────────────────────────────────────────────────────
// Drop files into /public/images/ and add entries below.
// Width/height are the native pixel dimensions of the file.
//
// Example:
// {
//   id: 'blush-001',
//   src: '/images/blush-wellness-001.jpg',
//   alt: 'Blush Wellness product flatlay',
//   category: 'Product',
//   width: 3000,
//   height: 4000,
//   featured: true,
// },
// ─────────────────────────────────────────────────────────────────────────────

export const photos: Photo[] = [
  // ── PRODUCT ──
  {
    id: 'Better Booch',
    src: '/images/better-booch-1.jpg',
    alt: 'Better Booch',
    category: 'Product',
    width: 2000,
    height: 2000,
    featured: true,
  },
  {
    id: 'Charlotte Stone Shoes',
    src: '/images/charlotte-stone-shoes-1.jpg',
    alt: 'Charlotte Stone Shoes',
    category: 'Product',
    width: 1600,
    height: 1260,
  },
  {
    id: 'Blush Wellness',
    src: '/images/blush-wellness-1.jpg',
    alt: 'Blush Wellness',
    category: 'Product',
    width: 1800,
    height: 1800,
  },
  {
    id: 'Blush Wellness',
    src: '/images/blush-wellness-2.jpg',
    alt: 'Blush Wellness',
    category: 'Product',
    width: 1800,
    height: 1800,
  },
  {
    id: 'Back Beat Co.',
    src: '/images/back-beat-co-1.jpg',
    alt: 'Back Beat Co.',
    category: 'Product',
    width: 1600,
    height: 2000,
  },
  {
    id: 'Charlotte Stone Shoes',
    src: '/images/charlotte-stone-shoes-2.jpg',
    alt: 'Charlotte Stone Shoes',
    category: 'Product',
    width: 1600,
    height: 1260,
  },

  // ── LIFESTYLE ──
  {
    id: 'lifestyle-001',
    src: '/images/lifestyle-001.jpg',
    alt: 'Lifestyle photography placeholder',
    category: 'Lifestyle',
    width: 4000,
    height: 3000,
    featured: true,
  },
  {
    id: 'lifestyle-002',
    src: '/images/lifestyle-002.jpg',
    alt: 'Lifestyle photography placeholder',
    category: 'Lifestyle',
    width: 3000,
    height: 4500,
  },

  // ── PORTRAIT ──
  {
    id: 'portrait-001',
    src: '/images/portrait-001.jpg',
    alt: 'Portrait photography placeholder',
    category: 'Portrait',
    width: 3000,
    height: 4000,
    featured: true,
  },
  {
    id: 'portrait-002',
    src: '/images/portrait-002.jpg',
    alt: 'Portrait photography placeholder',
    category: 'Portrait',
    width: 3000,
    height: 3000,
  },

  // ── E-COMMERCE ──
  {
    id: 'ecom-001',
    src: '/images/ecom-001.jpg',
    alt: 'E-commerce photography placeholder',
    category: 'E-commerce',
    width: 3000,
    height: 3000,
    featured: true,
  },
  {
    id: 'ecom-002',
    src: '/images/ecom-002.jpg',
    alt: 'E-commerce photography placeholder',
    category: 'E-commerce',
    width: 4000,
    height: 3000,
  },

  // ── EVENT ──
  {
    id: 'event-001',
    src: '/images/event-001.jpg',
    alt: 'Event photography placeholder',
    category: 'Event',
    width: 4000,
    height: 2700,
    featured: true,
  },
  {
    id: 'event-002',
    src: '/images/event-002.jpg',
    alt: 'Event photography placeholder',
    category: 'Event',
    width: 3000,
    height: 4000,
  },

  // ── FOOD & BEV ──
  {
    id: 'food-001',
    src: '/images/food-001.jpg',
    alt: 'Food & beverage photography placeholder',
    category: 'Food & Bev',
    width: 3000,
    height: 3000,
    featured: true,
  },
  {
    id: 'food-002',
    src: '/images/food-002.jpg',
    alt: 'Food & beverage photography placeholder',
    category: 'Food & Bev',
    width: 4000,
    height: 3000,
  },
];

export function getPhotosByCategory(category: Category): Photo[] {
  return photos.filter((p) => p.category === category);
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((p) => p.featured);
}

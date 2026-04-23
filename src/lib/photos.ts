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
  storyId?: string;     // group related photos into a mini story
  storyTitle?: string;  // display title for a story group
  storyOrder?: number;  // order inside a story group (1..N)
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
    id: 'Nova Sage',
    src: '/images/nova-sage-1.jpg',
    alt: 'Nova Sage',
    category: 'Product',
    width: 1800,
    height: 2400,
  },{
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
  {
    id: 'thankyoux-1',
    src: '/images/thankyoux-1.jpg',
    alt: 'ThankYouX portrait in studio',
    category: 'Portrait',
    width: 2000,
    height: 1581,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 1,
  },
  {
    id: 'thankyoux-2',
    src: '/images/thankyoux-2.jpg',
    alt: 'ThankYouX studio detail',
    category: 'Portrait',
    width: 2000,
    height: 1343,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 2,
  },
  {
    id: 'thankyoux-3',
    src: '/images/thankyoux-3.jpg',
    alt: 'ThankYouX painting action',
    category: 'Portrait',
    width: 2000,
    height: 1343,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 3,
  },
  {
    id: 'thankyoux-4',
    src: '/images/thankyoux-4.jpg',
    alt: 'ThankYouX studio process',
    category: 'Portrait',
    width: 2000,
    height: 1342,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 4,
  },
  {
    id: 'thankyoux-5',
    src: '/images/thankyoux-5.jpg',
    alt: 'ThankYouX final portrait',
    category: 'Portrait',
    width: 2000,
    height: 1343,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 5,
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
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-1.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food & Bev',
    width: 1276,
    height: 1021,
    featured: true,
  },
  {
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-3.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food & Bev',
    width: 1016,
    height: 1270,
    featured: true,
  },

  {
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-2.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food & Bev',
    width: 1295,
    height: 1036,
    featured: true,
  },
];

export function getPhotosByCategory(category: Category): Photo[] {
  return photos.filter((p) => p.category === category);
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((p) => p.featured);
}

export function getPhotosByStory(storyId: string): Photo[] {
  return photos
    .filter((p) => p.storyId === storyId)
    .sort((a, b) => (a.storyOrder ?? 999) - (b.storyOrder ?? 999));
}

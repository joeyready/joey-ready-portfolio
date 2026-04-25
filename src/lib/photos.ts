export type Category =
  | 'Product'
  | 'People'
  | 'Food + Beverage';

export const CATEGORIES: Category[] = [
  'Product',
  'People',
  'Food + Beverage',
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
  {
    id: 'Better Booch',
    src: '/images/better-booch-2.jpg',
    alt: 'Better Booch',
    category: 'Product',
    width: 1920,
    height: 1920,
    featured: true,
  },
  {
    id: 'Charlotte Stone Shoes',
    src: '/images/charlotte-stone-shoes-3.jpg',
    alt: 'Charlotte Stone Shoes',
    category: 'Product',
    width: 1600,
    height: 1600,
  },

  {
    id: 'Back Beat Co.',
    src: '/images/back-beat-co-2.jpg',
    alt: 'Back Beat Co.',
    category: 'Product',
    width: 1920,
    height: 2400,
  },
  {
    id: 'Blush Wellness',
    src: '/images/blush-wellness-3.gif',
    alt: 'Blush Wellness',
    category: 'Product',
    width: 1200,
    height: 675,
  },
  {
    id: 'Blush Wellness',
    src: '/images/blush-wellness-4.jpg',
    alt: 'Blush Wellness',
    category: 'Product',
    width: 1800,
    height: 1800,
  },


  // ── PEOPLE ──

  {
    id: 'thankyoux-1',
    src: '/images/thankyoux-1.jpg',
    alt: 'ThankYouX portrait in studio',
    category: 'People',
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
    category: 'People',
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
    category: 'People',
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
    category: 'People',
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
    category: 'People',
    width: 2000,
    height: 1343,
    storyId: 'thankyoux',
    storyTitle: 'ThankYouX',
    storyOrder: 5,
  },


  // ── EVENT ──
  // {
  //   id: 'event-001',
  //   src: '/images/event-001.jpg',
  //   alt: 'Event photography placeholder',
  //   category: 'People',
  //   width: 4000,
  //   height: 2700,
  //   featured: true,
  // },
  // {
  //   id: 'event-002',
  //   src: '/images/event-002.jpg',
  //   alt: 'Event photography placeholder',
  //   category: 'People',
  //   width: 3000,
  //   height: 4000,
  // },

  // ── FOOD + BEVERAGE ──
  {
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-1.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food + Beverage',
    width: 1276,
    height: 1021,
    featured: true,
  },
  {
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-3.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food + Beverage',
    width: 1016,
    height: 1270,
    featured: true,
  },

  {
    id: 'Ventura Coast Brewing Company',
    src: '/images/vcbc-2.jpg',
    alt: 'Ventura Coast Brewing Company',
    category: 'Food + Beverage',
    width: 1295,
    height: 1036,
    featured: true,
  },
];

export function categoryToSlug(category: Category): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function slugToCategory(slug: string): Category | null {
  const decoded = decodeURIComponent(slug);
  return CATEGORIES.find((category) => categoryToSlug(category) === decoded) ?? null;
}

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

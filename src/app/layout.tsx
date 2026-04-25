import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Joey Ready — Photographer & Videographer',
  description: 'Los Angeles-based commercial photographer and content creator.',
  metadataBase: new URL('https://joey-ready-portfolio.vercel.app'),
  openGraph: {
    title: 'Joey Ready — Photographer',
    description: 'Los Angeles-based commercial photographer and content creator.',
    // TODO: update metadataBase to https://www.joeyready.com once domain is connected
    url: 'https://joey-ready-portfolio.vercel.app',
    siteName: 'Joey Ready',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joey Ready — Photographer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joey Ready — Photographer',
    description: 'Los Angeles-based commercial photographer and content creator.',
    images: ['/og-image.jpg'],
  },
};

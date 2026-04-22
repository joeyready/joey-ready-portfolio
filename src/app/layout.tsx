import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  title: 'Joey Ready — Photographer & Videographer',
  description: 'Los Angeles-based commercial photographer and content creator. Product, lifestyle, portrait, e-commerce, event, and food & beverage photography.',
  openGraph: {
    title: 'Joey Ready — Photographer',
    description: 'Commercial photographer based in Los Angeles.',
    url: 'https://joeyready.com',
    siteName: 'Joey Ready',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

import { notFound } from 'next/navigation';
import { CATEGORIES, Category, getPhotosByCategory } from '@/lib/photos';
import MasonryGallery from '@/components/MasonryGallery';
import Footer from '@/components/Footer';
import CategoryTabs from '@/components/CategoryTabs';

const slugToCategory = (slug: string): Category | null => {
  const decoded = decodeURIComponent(slug);
  return CATEGORIES.find(
    (c) => c.toLowerCase().replace(/ & /g, '-') === decoded
  ) ?? null;
};

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: encodeURIComponent(cat.toLowerCase().replace(/ & /g, '-')),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();

  const photos = getPhotosByCategory(category);

  return (
    <>
      <div style={{ paddingTop: 120 }}>
        <div style={{
          padding: '60px 64px 48px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }} className="gallery-header">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,6vw,88px)', fontWeight: 300, lineHeight: 0.95 }}>
            {category}{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', display: 'block' }}>Photography</em>
          </h1>
          <span style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)' }}>
            {photos.length} photographs
          </span>
        </div>

        <CategoryTabs activeCategory={category} />

        {photos.length > 0 ? (
          <MasonryGallery photos={photos} />
        ) : (
          <div style={{ padding: '80px 64px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 300, color: 'var(--muted)', marginBottom: 16 }}>
              Photos coming soon
            </p>
            <p style={{ fontSize: 12, color: 'var(--border)', letterSpacing: '0.1em' }}>
              Drop images in /public/images/ and add entries to src/lib/photos.ts
            </p>
          </div>
        )}
      </div>
      <Footer />
      <style>{`
        @media(max-width:1024px){ .gallery-header{padding-left:40px!important;padding-right:40px!important} }
        @media(max-width:640px){ .gallery-header{padding-left:20px!important;padding-right:20px!important} }
      `}</style>
    </>
  );
}

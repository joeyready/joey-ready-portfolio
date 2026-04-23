import { photos } from '@/lib/photos';
import MasonryGallery from '@/components/MasonryGallery';
import Footer from '@/components/Footer';
import CategoryTabs from '@/components/CategoryTabs';

export default function WorkPage() {
  return (
    <>
      <div style={{ paddingTop: 36 }}>
        <div style={{
          padding: '60px 64px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }} className="gallery-header">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,6vw,88px)', fontWeight: 300, lineHeight: 0.95 }}>
            All <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Work</em>
          </h1>
          {/* <span style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)' }}>
            {photos.length} photographs
          </span> */}
        </div>

        <CategoryTabs activeCategory="all" />
        <MasonryGallery photos={photos} />
      </div>
      <Footer />
      <style>{`
        @media(max-width:1024px){ .gallery-header{padding-left:40px!important;padding-right:40px!important} }
        @media(max-width:640px){ .gallery-header{padding-left:20px!important;padding-right:20px!important} }
      `}</style>
    </>
  );
}

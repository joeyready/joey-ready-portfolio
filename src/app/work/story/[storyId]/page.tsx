import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPhotosByStory } from '@/lib/photos';
import Footer from '@/components/Footer';

export default async function StoryPage({
  params,
}: {
  params: Promise<{ storyId: string }>;
}) {
  const { storyId } = await params;
  const photos = getPhotosByStory(decodeURIComponent(storyId));

  if (photos.length === 0) notFound();

  const storyTitle = photos[0].storyTitle ?? photos[0].id;
  const hero = photos[0];
  const rest = photos.slice(1);

  return (
    <>
      <div style={{ paddingTop: 120 }}>
        <div
          style={{
            padding: '56px 64px 32px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            flexWrap: 'wrap',
          }}
          className="story-header"
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px,5.5vw,82px)',
              fontWeight: 300,
              lineHeight: 0.95,
            }}
          >
            {storyTitle}
          </h1>
          <span style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)' }}>
            {photos.length} photographs
          </span>
        </div>

        <div style={{ padding: '24px 64px 24px' }} className="story-back-wrap">
          <Link
            href="/work"
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
            }}
          >
            ← Back to All Work
          </Link>
        </div>

        <section style={{ padding: '0 64px 80px' }} className="story-content">
          <div style={{ position: 'relative', width: '100%', aspectRatio: `${hero.width} / ${hero.height}`, marginBottom: 4 }}>
            <Image src={hero.src} alt={hero.alt} fill sizes="(max-width: 1024px) 100vw, 90vw" style={{ objectFit: 'cover' }} priority />
          </div>

          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 4 }} className="story-rest-grid">
              {rest.map((photo) => (
                <div key={`${photo.id}-${photo.src}`} style={{ position: 'relative', width: '100%', aspectRatio: `${photo.width} / ${photo.height}` }}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
      <style>{`
        @media(max-width:1024px){
          .story-header,.story-back-wrap,.story-content{padding-left:40px!important;padding-right:40px!important}
        }
        @media(max-width:640px){
          .story-header,.story-back-wrap,.story-content{padding-left:20px!important;padding-right:20px!important}
          .story-rest-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}

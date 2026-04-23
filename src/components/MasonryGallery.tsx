'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Photo } from '@/lib/photos';

interface MasonryGalleryProps {
  photos: Photo[];
}

interface StoryGroup {
  id: string;
  title: string;
  firstIndex: number;
  photos: Photo[];
}

type GalleryCard =
  | { key: string; type: 'photo'; photo: Photo }
  | { key: string; type: 'story'; cover: Photo; storyId: string; storyTitle: string; storyCount: number };

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
  const router = useRouter();
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [imgError, setImgError] = useState<Set<string>>(new Set());

  const close = useCallback(() => setLightbox(null), []);

  const storyMap = new Map<string, StoryGroup>();

  photos.forEach((photo, index) => {
    if (!photo.storyId) {
      return;
    }

    const existing = storyMap.get(photo.storyId);
    if (existing) {
      existing.photos.push(photo);
      return;
    }

    storyMap.set(photo.storyId, {
      id: photo.storyId,
      title: photo.storyTitle ?? photo.storyId,
      photos: [photo],
      firstIndex: index,
    });
  });

  const stories = Array.from(storyMap.values())
    .sort((a, b) => a.firstIndex - b.firstIndex)
    .map((story) => ({
      ...story,
      photos: [...story.photos].sort((a, b) => (a.storyOrder ?? 999) - (b.storyOrder ?? 999)),
    }));

  const storyById = new Map(stories.map((story) => [story.id, story]));
  const seenStories = new Set<string>();
  const cards: GalleryCard[] = [];

  photos.forEach((photo) => {
    if (!photo.storyId) {
      cards.push({ key: `${photo.id}-${photo.src}`, type: 'photo', photo });
      return;
    }

    if (seenStories.has(photo.storyId)) return;
    seenStories.add(photo.storyId);

    const story = storyById.get(photo.storyId);
    if (!story) return;
    cards.push({
      key: `story-${story.id}`,
      type: 'story',
      cover: story.photos[0],
      storyId: story.id,
      storyTitle: story.title,
      storyCount: story.photos.length,
    });
  });

  // Split into 3 columns (2 on tablet, 1 on mobile — handled via CSS)
  const cols = 3;
  const columns: GalleryCard[][] = Array.from({ length: cols }, () => []);
  cards.forEach((card, i) => columns[i % cols].push(card));

  return (
    <>
      {/* Masonry grid */}
      {cards.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          padding: '4px 64px 80px',
        }} className="masonry-grid">
          {columns.map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {col.map((card, pi) => {
                const photo = card.type === 'story' ? card.cover : card.photo;
                return (
                  <motion.div
                    key={card.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (ci * col.length + pi) * 0.04, duration: 0.5 }}
                    onClick={() => {
                      if (card.type === 'story') {
                        router.push(`/work/story/${encodeURIComponent(card.storyId)}`);
                        return;
                      }
                      setLightbox(card.photo);
                    }}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'var(--surface)',
                      aspectRatio: `${photo.width} / ${photo.height}`,
                      cursor: 'none',
                    }}
                    className="gallery-item"
                  >
                    {imgError.has(photo.src) ? (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'var(--surface)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        minHeight: 200,
                      }}>
                        <span style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--border)' }}>
                          {photo.category}
                        </span>
                        <span style={{ fontSize: 9, color: 'var(--border)', letterSpacing: '0.1em' }}>
                          {photo.src.split('/').pop()}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                        className="gallery-img"
                        onError={() => setImgError((prev) => new Set([...prev, photo.src]))}
                      />
                    )}
                    <div className="gallery-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.45)',
                      opacity: 0,
                      transition: 'opacity 0.35s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 8,
                      textAlign: 'center',
                    }}>
                      {card.type === 'story' ? (
                        <>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 300, color: 'rgba(255,255,255,0.95)' }}>
                            {card.storyTitle}
                          </span>
                          <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                            {card.storyCount} Photo Story
                          </span>
                        </>
                      ) : (
                        <span style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', fontWeight: 200 }}>+</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.96)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={close}
              style={{
                position: 'absolute',
                top: 32, right: 40,
                fontSize: 20,
                color: 'var(--muted)',
                background: 'none',
                border: 'none',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-body)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              ✕ Close
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '85vw',
                maxHeight: '88vh',
                aspectRatio: `${lightbox.width} / ${lightbox.height}`,
                width: '100%',
              }}
            >
              {imgError.has(lightbox.src) ? (
                <div style={{
                  width: '100%', height: '100%', minHeight: 400, minWidth: 300,
                  background: 'var(--surface)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 12,
                }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    {lightbox.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text)', fontWeight: 300 }}>
                    {lightbox.alt}
                  </span>
                </div>
              ) : (
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  sizes="85vw"
                  style={{ objectFit: 'contain' }}
                  priority
                  onError={() => setImgError((prev) => new Set([...prev, lightbox.src]))}
                />
              )}
              <div style={{
                position: 'absolute',
                bottom: -36,
                left: 0,
                display: 'flex',
                gap: 16,
                alignItems: 'center',
              }}>
                <span style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {lightbox.category}
                </span>
                <span style={{ fontSize: 9, color: 'var(--border)' }}>—</span>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{lightbox.alt}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-item:hover .gallery-img { transform: scale(1.04); }

        @media (max-width: 1024px) {
          .masonry-grid { grid-template-columns: repeat(2, 1fr) !important; padding: 4px 40px 60px !important; }
        }
        @media (max-width: 640px) {
          .masonry-grid { grid-template-columns: 1fr !important; padding: 4px 20px 60px !important; }
        }
      `}</style>
    </>
  );
}

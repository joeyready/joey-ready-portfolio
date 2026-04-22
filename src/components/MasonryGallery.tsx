'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Photo } from '@/lib/photos';

interface MasonryGalleryProps {
  photos: Photo[];
}

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [imgError, setImgError] = useState<Set<string>>(new Set());

  const close = useCallback(() => setLightbox(null), []);

  // Split into 3 columns (2 on tablet, 1 on mobile — handled via CSS)
  const cols = 3;
  const columns: Photo[][] = Array.from({ length: cols }, () => []);
  photos.forEach((photo, i) => columns[i % cols].push(photo));

  return (
    <>
      {/* Masonry grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 4,
        padding: '4px 64px 80px',
      }} className="masonry-grid">
        {columns.map((col, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {col.map((photo, pi) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (ci * col.length + pi) * 0.04, duration: 0.5 }}
                onClick={() => setLightbox(photo)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  aspectRatio: `${photo.width} / ${photo.height}`,
                  cursor: 'none',
                }}
                className="gallery-item"
              >
                {imgError.has(photo.id) ? (
                  // Placeholder when image not yet added
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: `var(--surface)`,
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
                    onError={() => setImgError(prev => new Set([...prev, photo.id]))}
                  />
                )}
                {/* Hover overlay */}
                <div className="gallery-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.45)',
                  opacity: 0,
                  transition: 'opacity 0.35s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', fontWeight: 200 }}>+</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

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
              {imgError.has(lightbox.id) ? (
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
                  onError={() => setImgError(prev => new Set([...prev, lightbox.id]))}
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

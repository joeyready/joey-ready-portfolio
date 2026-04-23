'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CATEGORIES, Category } from '@/lib/photos';
import Footer from '@/components/Footer';

const catSlug = (c: string) =>
  encodeURIComponent(c.toLowerCase().replace(/ & /g, '-'));

const heroImages = [
  { label: 'Product', image: '/images/blush-wellness-1.jpg' },
  { label: 'Lifestyle', image: '/images/charlotte-stone-shoes-1.jpg' },
  { label: 'Portrait', image: '/images/vcbc-1.jpg' },
];

const featured = [
  { cat: 'Product' as Category, title: 'Blush Wellness', image: '/images/blush-wellness-2.jpg', span: true },
  { cat: 'Lifestyle' as Category, title: 'Charlotte Stone', image: '/images/charlotte-stone-shoes-2.jpg', span: false },
  { cat: 'Portrait' as Category, title: 'Editorial Series', image: '/images/vcbc-2.jpg', span: false },
  { cat: 'Food & Bev' as Category, title: 'Better Booch', image: '/images/better-booch-1.jpg', span: false },
  { cat: 'Event' as Category, title: 'Findings Market', image: '/images/vcbc-3.jpg', span: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '72vh', display: 'flex', alignItems: 'flex-end' }} className="hero-section">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 64px 56px', maxWidth: 760, zIndex: 2 }} className="hero-left">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            Los Angeles · Commercial Photography
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 6vw, 96px)', fontWeight: 300, lineHeight: 0.95, marginBottom: 18 }}>
            Joey <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Ready.</em>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--muted)', maxWidth: 460, marginBottom: 28 }}>
            Product, lifestyle, portrait, and campaign photography for modern brands.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="/work" className="btn-primary">View Work</Link>
            <Link href="/contact" className="btn-ghost">Get in Touch →</Link>
          </motion.div>
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
            style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 6 }}
            className="hero-image-strip">
            {heroImages.map((item) => (
              <div
                key={item.label}
                style={{
                  height: 140,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                <span className="hero-image-label">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section style={{ padding: '72px 64px 120px' }} className="featured-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1 }}>
            Selected <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Work</em>
          </h2>
          <Link href="/work" className="section-link">View All →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '360px 240px', gap: 4 }} className="featured-grid">
          {featured.map((item) => (
            <Link key={item.title} href={`/work/${catSlug(item.cat)}`}
              style={{ position: 'relative', overflow: 'hidden', gridColumn: item.span ? '1' : undefined, gridRow: item.span ? '1 / 3' : undefined, display: 'block', textDecoration: 'none' }}
              className="featured-item">
              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="featured-overlay">
                <span className="overlay-cat">{item.cat}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 300 }}>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '100px 64px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="categories-section">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1, marginBottom: 56 }}>
          Browse by <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Category</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }} className="cat-grid">
          {CATEGORIES.map((cat) => (
            <Link key={cat} href={`/work/${catSlug(cat)}`}
              style={{ position: 'relative', overflow: 'hidden', height: 280, background: 'var(--surface)', display: 'block', textDecoration: 'none' }}
              className="cat-card">
              <div style={{ width: '100%', height: '100%', background: 'var(--surface)' }} className="cat-bg" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 16px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 300, marginBottom: 4 }} className="cat-name">{cat}</p>
                <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(232,228,222,0.4)' }}>View all →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-section">
        <div style={{ position: 'relative', height: 520, overflow: 'hidden', background: '#1a1418' }}>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '55%', height: '55%', borderRight: '1px solid var(--accent)', borderBottom: '1px solid var(--accent)', opacity: 0.3 }} />
        </div>
        <div style={{ paddingLeft: 24 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>About</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,4vw,64px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 32 }}>
            Your one stop shop<br />for <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>content.</em>
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#999', marginBottom: 20 }}>
            Based in Los Angeles, I specialize in commercial and editorial photography that moves product and tells brand stories. From clean e-commerce shots to immersive lifestyle campaigns — I&apos;ve got you covered.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: '#999', marginBottom: 32 }}>
            Currently available for brand partnerships, campaign shoots, and ongoing content retainers.
          </p>
          <div style={{ width: 40, height: 1, background: 'var(--accent)', marginBottom: 32, opacity: 0.4 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px', marginBottom: 40 }}>
            {['Product Photography', 'Lifestyle Shoots', 'Portrait Sessions', 'E-commerce Content', 'Event Coverage', 'Video Production'].map(s => (
              <span key={s} style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />{s}
              </span>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">Work Together</Link>
        </div>
      </section>

      <Footer />

      <style>{`
        .btn-primary { display:inline-block; padding:14px 36px; background:var(--accent); color:#080808; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; text-decoration:none; font-weight:500; transition:background 0.3s,transform 0.2s; font-family:var(--font-body); }
        .btn-primary:hover { background:#fff; transform:translateY(-1px); }
        .btn-ghost { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color 0.3s; }
        .btn-ghost:hover { color:var(--text); }
        .section-link { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color 0.3s; }
        .section-link:hover { color:var(--accent); }
        .hero-image-label { position:absolute; left:12px; bottom:10px; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(232,228,222,0.78); }
        .featured-item .featured-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 50%); opacity:0; transition:opacity 0.4s; display:flex; flex-direction:column; justify-content:flex-end; padding:24px; }
        .featured-item:hover .featured-overlay { opacity:1; }
        .overlay-cat { font-size:9px; letter-spacing:0.25em; text-transform:uppercase; color:var(--accent); margin-bottom:4px; }
        .cat-card:hover .cat-name { color:var(--accent) !important; }
        .cat-card:hover .cat-bg { transform:scale(1.06); }
        .cat-bg { transition:transform 0.6s ease; }
        @media(max-width:1024px){
          .hero-left{padding:120px 40px 56px!important}
          .featured-grid{grid-template-columns:1fr 1fr!important;grid-template-rows:auto!important}
          .featured-section,.categories-section,.about-section{padding-left:40px!important;padding-right:40px!important}
          .cat-grid{grid-template-columns:repeat(3,1fr)!important}
          .about-section{grid-template-columns:1fr!important;gap:48px!important}
        }
        @media(max-width:640px){
          .hero-left{padding:108px 24px 48px!important}
          .hero-image-strip{grid-template-columns:1fr!important}
          .featured-section,.categories-section,.about-section{padding:72px 24px!important}
          .featured-grid{grid-template-columns:1fr!important}
          .cat-grid{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>
    </>
  );
}

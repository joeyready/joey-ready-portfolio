'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES, categoryToSlug } from '@/lib/photos';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '26px 48px',
          background: scrolled
          ? 'rgba(8,8,8,0.92)'
          : 'linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.75) 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          Joey <span style={{ color: 'var(--accent)' }}>Ready</span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', alignItems: 'center' }}
            className="nav-desktop">
          <li><NavLink href="/work">Work</NavLink></li>
          {CATEGORIES.slice(0, 3).map((cat) => (
            <li key={cat}>
              <NavLink href={`/work/${categoryToSlug(cat)}`}>
                {cat}
              </NavLink>
            </li>
          ))}
          <li><NavLink href="/contact">Contact</NavLink></li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="nav-hamburger"
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            background: 'none',
            border: 'none',
            padding: 4,
          }}
        >
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--text)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--text)',
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--text)',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(8,8,8,0.97)',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.4s',
      }}>
        {['/', '/work', '/contact', ...CATEGORIES.map(c =>
          `/work/${categoryToSlug(c)}`
        )].map((href, i) => {
          const labels: Record<string, string> = {
            '/': 'Home', '/work': 'All Work', '/contact': 'Contact',
          };
          CATEGORIES.forEach(c => {
            labels[`/work/${categoryToSlug(c)}`] = c;
          });
          return (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 38,
              fontWeight: 300,
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              transition: 'color 0.3s',
              animationDelay: `${i * 0.05}s`,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              {labels[href]}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: 'var(--muted)',
        textDecoration: 'none',
        fontSize: 11,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        transition: 'color 0.3s',
        position: 'relative',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
    >
      {children}
    </Link>
  );
}

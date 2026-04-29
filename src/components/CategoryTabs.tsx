'use client';

import Link from 'next/link';
import { CATEGORIES, Category, categoryToSlug } from '@/lib/photos';

const tabStyle: React.CSSProperties = {
  padding: '20px 28px',
  fontSize: 10,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  borderBottom: '2px solid transparent',
  marginBottom: -1,
  transition: 'color 0.3s, border-color 0.3s',
  fontFamily: 'var(--font-body)',
  display: 'inline-block',
};

export default function CategoryTabs({ activeCategory }: { activeCategory?: Category | 'all' }) {
  return (
    <div style={{
      display: 'flex',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto',
      overflowY: 'hidden',
      padding: '0 64px',
    }} className="cat-tabs">
      <Link
        href="/work"
        style={{
          ...tabStyle,
          color: !activeCategory || activeCategory === 'all' ? 'var(--accent)' : 'var(--muted)',
          borderBottomColor: !activeCategory || activeCategory === 'all' ? 'var(--accent)' : 'transparent',
        }}
      >
        All
      </Link>
      {CATEGORIES.map((cat) => {
        const isActive = cat === activeCategory;
        return (
          <Link
            key={cat}
            href={`/work/${categoryToSlug(cat)}`}
            style={{
              ...tabStyle,
              color: isActive ? 'var(--accent)' : 'var(--muted)',
              borderBottomColor: isActive ? 'var(--accent)' : 'transparent',
            }}
            onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
          >
            {cat}
          </Link>
        );
      })}
      <style>{`
        .cat-tabs{
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cat-tabs::-webkit-scrollbar{
          display: none;
        }
        @media(max-width:1024px){ .cat-tabs{padding-left:40px!important;padding-right:40px!important} }
        @media(max-width:640px){ .cat-tabs{padding-left:20px!important;padding-right:20px!important} }
      `}</style>
    </div>
  );
}

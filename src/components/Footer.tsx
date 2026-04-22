'use client';

export default function Footer() {
  return (
    <footer style={{
      padding: '48px 64px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
      gap: 20,
      background: 'var(--bg)',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 300,
        color: 'var(--muted)',
        letterSpacing: '0.08em',
      }}>
        Joey <span style={{ color: 'var(--accent)' }}>Ready</span>
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: 'Instagram', href: 'https://instagram.com/joeyreadyphoto' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/joey-ready/' },
          // { label: 'Vimeo', href: 'https://vimeo.com/joeyready' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ fontSize: 11, color: 'var(--border)', letterSpacing: '0.1em' }}>
        © {new Date().getFullYear()} Joey Ready
      </div>
    </footer>
  );
}

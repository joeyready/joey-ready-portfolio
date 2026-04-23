'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

const projectTypes = [
  'Product Photography',
  'Lifestyle / Campaign',
  'Portrait Session',
  'E-commerce Content',
  'Event Coverage',
  'Food & Beverage',
  'Video Production',
  'Other',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire up to Resend / Formspree / your preferred email service
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <>
      <div style={{ paddingTop: 120 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'calc(100vh - 120px)',
        }} className="contact-grid">

          {/* Left — info */}
          <div style={{
            padding: '80px 64px',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }} className="contact-left">
            <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
              Get in Touch
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,5vw,80px)', fontWeight: 300, lineHeight: 1, marginBottom: 32 }}>
              Let&apos;s make<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>something.</em>
            </h1>
            <p style={{ fontSize: 13, lineHeight: 1.9, color: '#888', maxWidth: 380, marginBottom: 56 }}>
              Available for commercial campaigns, brand partnerships,
              e-commerce shoots, and ongoing content retainers.
              Based in Los Angeles, open to travel.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                // { icon: '✉', label: 'Email', value: 'joey@joeyready.com', href: 'mailto:joey@joeyready.com' },
                { icon: '◎', label: 'Location', value: 'Southern California, USA', href: null },
                { icon: '↗', label: 'Instagram', value: '@joeyreadyphoto', href: 'https://instagram.com/joeyreadyphoto' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 32, height: 32,
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, color: 'var(--accent)', flexShrink: 0, marginTop: 2,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ fontSize: 13, color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 13, color: 'var(--text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="contact-right">
            {status === 'sent' ? (
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 300, color: 'var(--accent)', marginBottom: 16 }}>✓</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 300, marginBottom: 12 }}>Message sent.</p>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>I&apos;ll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
                  <FormField label="First Name" placeholder="Jane" type="text" required />
                  <FormField label="Last Name" placeholder="Smith" type="text" required />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <FormField label="Email" placeholder="jane@brand.com" type="email" required />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <FormField label="Company / Brand" placeholder="Brand name (optional)" type="text" />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Project Type</label>
                  <select style={{ ...inputStyle, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', appearance: 'none' as const }}>
                    <option value="">Select a category</option>
                    {projectTypes.map(t => <option key={t} value={t} style={{ background: 'var(--bg2)' }}>{t}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Tell me about your project</label>
                  <textarea
                    placeholder="Timeline, budget, vision..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'none', height: 'auto' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    padding: '16px 48px',
                    background: 'var(--accent)',
                    color: '#080808',
                    border: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    transition: 'background 0.3s, transform 0.2s',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                  onMouseEnter={e => { if (status !== 'sending') (e.currentTarget.style.background = '#fff'); }}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--border); }
        input:focus, select:focus, textarea:focus { border-bottom-color: var(--accent) !important; outline: none; }
        @media(max-width:1024px){
          .contact-grid{grid-template-columns:1fr!important}
          .contact-left{border-right:none!important;border-bottom:1px solid var(--border);padding:60px 40px!important}
          .contact-right{padding:60px 40px!important}
        }
        @media(max-width:640px){
          .contact-left,.contact-right{padding:48px 24px!important}
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 9,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: 10,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '12px 0',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  fontWeight: 300,
  color: 'var(--text)',
  letterSpacing: '0.03em',
  display: 'block',
  transition: 'border-color 0.3s',
};

function FormField({ label, placeholder, type, required }: {
  label: string; placeholder: string; type: string; required?: boolean;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} placeholder={placeholder} required={required} style={inputStyle} />
    </div>
  );
}

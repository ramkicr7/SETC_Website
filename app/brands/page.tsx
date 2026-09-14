import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { brands as brandsData, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Brands',
  description: 'Explore the SETC family of education brands: Students Dubai, Language Skills Dubai, and EnglishWise UAE.',
};

export default function BrandsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Brands</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Our ecosystem</div>
          <h1>SETC Brands</h1>
          <p>Three specialised education brands, one connected vision. Explore our family of brands focused on language training, test preparation and international education opportunities.</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 60 }}>
            {brandsData.map((brand, idx) => {
              const isExternal = !!brand.url;
              const href = brand.url || brand.internalHref || '/';
              const LinkTag = isExternal ? 'a' : Link;
              const linkProps = isExternal ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };

              return (
                <Reveal as="article" key={brand.name} className="brand-detail-card" delay={idx * 100}>
                  <LinkTag {...linkProps} className="brand-detail-link">
                    <div className="brand-detail-logo">
                      <img src={brand.logo} alt={`${brand.name} logo`} width={240} height={120} loading="lazy" />
                    </div>
                    <h3>{brand.name}</h3>
                    <p className="brand-tagline">{brand.tagline}</p>
                    <p className="brand-description">{brand.description}</p>
                    <div className="brand-focus-tags">
                      {brand.focus.map((f) => (
                        <span key={f} className="brand-focus-tag">{f}</span>
                      ))}
                    </div>
                    <span className="brand-explore">
                      Explore brand <ArrowUpRight size={16} />
                    </span>
                  </LinkTag>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Connect with SETC</div>
            <h2 style={{ color: 'var(--navy)' }}>Get in Touch</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Have questions about any of our brands? Contact our team to learn more about how we can support your learning goals.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_LINK} className="button button-blue">
                Call us: {PHONE_NUMBER}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button button-outline">
                WhatsApp us
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} style={{ background: 'var(--paper)', padding: 40, borderRadius: 8 }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: 16 }}>Why Choose SETC?</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 800, flex: '0 0 auto' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>Specialised brands with focused expertise in their areas</span>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 800, flex: '0 0 auto' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>Connected by one shared vision of student success</span>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 800, flex: '0 0 auto' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>Multiple learning pathways for different goals</span>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 800, flex: '0 0 auto' }}>✓</span>
                <span style={{ color: 'var(--muted)' }}>Dubai-based with a global perspective</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

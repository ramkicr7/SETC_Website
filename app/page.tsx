'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Globe as Globe2, Sparkles, Users, MapPin, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { MagneticButton } from '@/components/MagneticButton';
import { ParallaxLayer } from '@/components/ParallaxLayer';
import { brands, services, whySetc, WHATSAPP_LINK, ADDRESS_LINES, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero-v2" aria-label="Hero">
        <div className="hero-v2-grid" aria-hidden="true">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="rgba(100,170,230,0.06)" strokeWidth="0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
              ))}
            </g>
            <g fill="rgba(100,170,230,0.08)">
              {[[120,140],[200,100],[300,180],[400,120],[480,200],[560,140],[620,220],[680,160],[160,280],[260,320],[360,300],[440,340],[540,320],[620,380],[700,300],[100,220],[240,220],[420,260],[520,280],[660,340]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="2" className="hero-map-point" style={{ animationDelay: `${(i % 6) * 0.8}s` }} />
              ))}
            </g>
            <g stroke="rgba(100,170,230,0.07)" strokeWidth="0.8" fill="none">
              <path d="M200,140 Q300,80 400,180" className="hero-conn-line" />
              <path d="M400,180 Q480,120 560,200" className="hero-conn-line" style={{ animationDelay: '1s' }} />
              <path d="M560,200 Q630,150 680,220" className="hero-conn-line" style={{ animationDelay: '2s' }} />
              <path d="M200,140 Q160,220 160,280" className="hero-conn-line" style={{ animationDelay: '0.5s' }} />
              <path d="M400,180 Q380,260 360,300" className="hero-conn-line" style={{ animationDelay: '1.5s' }} />
            </g>
          </svg>
        </div>

        <div className="hero-v2-content">
          <div className="container hero-v2-inner">
            <div className="hero-v2-copy">
              <div className="hero-v2-eyebrow"><Sparkles size={14} /> STUDENTS EVERYWHERE TRAINING CENTER</div>
              <h1 className="hero-v2-title">
                <span className="hero-v2-line hero-v2-line-1">Learning Without Borders.</span>
                <span className="hero-v2-line hero-v2-line-2 hero-v2-line-accent">Opportunities Without Limits.</span>
              </h1>
              <p className="hero-v2-text">Students Everywhere Training Center brings together specialised brands in language training, test preparation and international education pathways.</p>
              <div className="hero-v2-actions">
                <MagneticButton href="/englishwise" className="button button-blue">
                  Explore Our Brands <ArrowRight size={17} />
                </MagneticButton>
                <MagneticButton href="/contact" className="text-link light-link">
                  Contact Us <ArrowUpRight size={17} />
                </MagneticButton>
              </div>
              <div className="hero-v2-meta">
                <div className="hero-v2-meta-item"><Globe2 size={16} /> Dubai · Global · Connected</div>
                <div className="hero-v2-meta-item"><Users size={16} /> 3 Specialised Brands</div>
              </div>
            </div>
            <div className="hero-globe-wrap">
              <div className="hero-glow" />
              <div className="hero-globe-canvas">
                <div className="hero-ring hero-ring-1" />
                <div className="hero-ring hero-ring-2" />
                <div className="hero-ring hero-ring-3" />
                <div className="hero-node hero-node-dubai" />
                <div className="hero-globe-labels">
                  <span className="hero-globe-label" style={{ top: '12%', left: '20%' }}>London</span>
                  <span className="hero-globe-label" style={{ top: '25%', right: '12%' }}>Sydney</span>
                  <span className="hero-globe-label" style={{ bottom: '20%', left: '15%' }}>Toronto</span>
                  <span className="hero-globe-label" style={{ bottom: '15%', right: '20%' }}>Singapore</span>
                </div>
              </div>
              <div className="hero-globe-mobile">
                <div className="hero-glow" />
                <div className="hero-ring hero-ring-1" style={{ width: 260, height: 260 }} />
                <div className="hero-ring hero-ring-2" style={{ width: 200, height: 200 }} />
                <div className="hero-node hero-node-dubai" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SETC ============ */}
      <section className="about-v2" aria-label="About SETC">
        <div className="container about-v2-grid">
          <Reveal className="about-v2-left">
            <div className="eyebrow"><span /> About SETC</div>
            <h2>More Than Training.<br />A Connected Education Ecosystem.</h2>
            <p>Students Everywhere Training Center (SETC) is a Dubai-based parent organisation bringing together specialised brands focused on language training, test preparation and international education opportunities.</p>
            <p>Our ecosystem allows learners to access focused services through specialised brands, while remaining connected through a shared vision of helping people develop skills and move towards new opportunities.</p>
          </Reveal>
          <Reveal className="about-v2-right" delay={150}>
            <div className="hierarchy-tree">
              <div className="hierarchy-item">
                <div className="hierarchy-item-main">SETC</div>
                <div className="hierarchy-sub-tag">Parent Organisation · Dubai, UAE</div>
              </div>
              <div className="hierarchy-item">
                <div className="hierarchy-sub">Students Dubai</div>
                <div className="hierarchy-sub-tag">Languages · Test Preparation · Study Abroad</div>
              </div>
              <div className="hierarchy-item">
                <div className="hierarchy-sub">Language Skills Dubai</div>
                <div className="hierarchy-sub-tag">Language Training</div>
              </div>
              <div className="hierarchy-item">
                <div className="hierarchy-sub">EnglishWise UAE</div>
                <div className="hierarchy-sub-tag">Test Preparation</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BRAND ECOSYSTEM ============ */}
      <section className="ecosystem-section" aria-label="Our Brands">
        <div className="container">
          <Reveal className="ecosystem-head">
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span /> Our Brands</div>
            <h2>Our Brands.<br />One Connected Vision.</h2>
            <p>Specialised brands. Focused expertise. Connected opportunities.</p>
          </Reveal>

          <Reveal className="ecosystem-diagram">
            <div className="ecosystem-parent">
              <div className="ecosystem-parent-badge">
                <Image src="/assets/images/logos/SETC_(1).png" alt="SETC" width={32} height={32} />
                Students Everywhere Training Center
              </div>
            </div>

            <div className="ecosystem-lines" aria-hidden="true">
              <svg viewBox="0 0 600 60" preserveAspectRatio="none">
                <path className="ecosystem-line ecosystem-line-1" d="M300,0 L300,30 L100,30 L100,60" />
                <path className="ecosystem-line ecosystem-line-2" d="M300,0 L300,60" />
                <path className="ecosystem-line ecosystem-line-3" d="M300,0 L300,30 L500,30 L500,60" />
              </svg>
            </div>

            <div className="ecosystem-brands">
              {brands.map((brand, i) => (
                <Reveal as="article" key={brand.name} className="ecosystem-brand glow-hover" delay={i * 120}>
                  {brand.url ? (
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="ecosystem-brand-link" aria-label={`Visit ${brand.name}`} />
                  ) : brand.internalHref ? (
                    <Link href={brand.internalHref} className="ecosystem-brand-link" aria-label={`Visit ${brand.name}`} />
                  ) : null}
                  <ArrowUpRight size={18} className="ecosystem-brand-arrow" />
                  <div className="ecosystem-brand-logo">
                    <Image src={brand.logo} alt={brand.name} width={120} height={64} style={{ width: 'auto', height: 'auto', maxHeight: 64, objectFit: 'contain' }} />
                  </div>
                  <h3 className="ecosystem-brand-name">{brand.name}</h3>
                  <div className="ecosystem-brand-focus">
                    {brand.focus.map((f) => (
                      <span key={f} className="ecosystem-focus-tag">{f}</span>
                    ))}
                  </div>
                  <p className="ecosystem-brand-desc">{brand.description}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services-v2" aria-label="Services">
        <div className="container">
          <Reveal className="services-v2-head">
            <div className="eyebrow"><span /> What We Do</div>
            <h2>What We Help You Move Towards.</h2>
          </Reveal>
          <Reveal className="services-v2-list">
            {services.map((s) => (
              <div key={s.num} className="service-row">
                <div className="service-num-big">{s.num}</div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <ArrowRight size={24} className="service-arrow" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ WHY SETC ============ */}
      <section className="why-v2" aria-label="Why SETC">
        <div className="container">
          <Reveal className="why-v2-head">
            <div className="eyebrow eyebrow-light" style={{ justifyContent: 'center' }}><span /> Why SETC</div>
            <h2>Built Around Your Next Step.</h2>
          </Reveal>
          <div className="why-v2-grid">
            {whySetc.map((item, i) => (
              <Reveal as="article" key={item.num} className="why-v2-item" delay={i * 100}>
                <div className="why-num-big">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaSection />
    </main>
  );
}

function CtaSection() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = glowRef.current?.parentElement;
    if (!section) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left - 300;
      const y = e.clientY - rect.top - 300;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="cta-v2" aria-label="Get started">
      <div className="cta-v2-bg" aria-hidden="true">
        <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="rgba(100,170,230,0.08)" strokeWidth="0.5">
            {Array.from({ length: 16 }).map((_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />)}
            {Array.from({ length: 8 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />)}
          </g>
          <g stroke="rgba(100,170,230,0.1)" strokeWidth="1" fill="none">
            <path className="hero-conn-line" d="M150,200 Q300,100 400,200" />
            <path className="hero-conn-line" style={{ animationDelay: '1s' }} d="M400,200 Q500,140 650,200" />
            <path className="hero-conn-line" style={{ animationDelay: '2s' }} d="M150,200 Q200,280 300,300" />
          </g>
        </svg>
      </div>
      <div ref={glowRef} className="cta-glow" />
      <div className="cta-v2-content">
        <Reveal>
          <div className="eyebrow eyebrow-light" style={{ justifyContent: 'center' }}><span /> Get Started</div>
          <h2>Your Next Opportunity<br />Starts With the Right Preparation.</h2>
          <p>Tell us where you want to go. We&apos;ll help you understand the right pathway.</p>
          <div className="cta-v2-actions">
            <MagneticButton href="/contact" className="button button-blue">
              Talk to Us <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button button-outline-light">
              <MessageCircle size={18} /> WhatsApp Us
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

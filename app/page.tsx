'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Globe2, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { WHATSAPP_LINK } from '@/lib/data'

const brands = [
  {
    name: 'Students Dubai',
    focus: 'Languages · Test Preparation · Study Abroad',
    description: 'Supporting learners through language development, examination preparation and international study opportunities.',
    href: 'https://www.studentsdubai.com',
    logo: '/assets/images/logos/SETC_(1).png',
    external: true,
  },
  {
    name: 'Language Skills Dubai',
    focus: 'Language Training',
    description: 'Focused language training designed to help learners develop practical communication skills.',
    href: '/language-skills',
    logo: '/assets/images/brands/Languageskills.png',
    external: false,
  },
  {
    name: 'EnglishWise UAE',
    focus: 'Test Preparation',
    description: 'Focused preparation for English language and relevant professional examinations.',
    href: 'https://www.englishwise.ae/',
    logo: '/assets/images/brands/Englishwise_UAE.png',
    external: true,
  },
]

const services = [
  ['01', 'Language Training', 'Build stronger language and communication skills for academic, professional and everyday opportunities.'],
  ['02', 'Test Preparation', 'Structured preparation for IELTS, PTE, OET, NAATI CCL, CELPIP, LanguageCert and other relevant examinations.'],
  ['03', 'Study Abroad', 'Guidance and support for students exploring international study opportunities.'],
]

const reasons = [
  ['01', 'Specialised brand ecosystem', 'Focused services connected by one shared vision.'],
  ['02', 'Dubai-based, globally minded', 'A local foundation for international opportunity.'],
  ['03', 'Multiple learning pathways', 'The right direction for different goals and next steps.'],
  ['04', 'Focused on real opportunities', 'Practical preparation that keeps your ambitions moving.'],
]

export default function Home() {
  return (
    <main className="setc-home">
      <section className="setc-hero" aria-labelledby="hero-title">
        <div className="setc-hero-grid" aria-hidden="true" />
        <div className="setc-hero-orbit setc-orbit-one" />
        <div className="setc-hero-orbit setc-orbit-two" />
        <div className="setc-hero-dots" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="container setc-hero-content">
          <Reveal className="setc-hero-copy">
            <p className="setc-kicker"><Globe2 size={15} /> Students Everywhere Training Center</p>
            <h1 id="hero-title">Learning without borders.<br /><em>Opportunities without limits.</em></h1>
            <p className="setc-hero-lede">A Dubai-based education ecosystem connecting specialised brands in language training, test preparation and international study opportunities.</p>
            <div className="setc-actions">
              <a className="button button-blue" href="#brands">Explore our brands <ArrowRight size={17} /></a>
              <Link className="setc-text-link" href="/contact">Contact us <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal className="setc-network" delay={180} aria-label="Global education network visual">
            <svg viewBox="0 0 520 440" role="img" aria-label="Connected global learning network">
              <defs><radialGradient id="setcGlow"><stop stopColor="#5bbcff" stopOpacity=".35" /><stop offset="1" stopColor="#5bbcff" stopOpacity="0" /></radialGradient></defs>
              <circle cx="270" cy="220" r="170" fill="url(#setcGlow)" /><ellipse cx="270" cy="220" rx="162" ry="166" fill="none" stroke="currentColor" opacity=".35" /><ellipse cx="270" cy="220" rx="85" ry="166" fill="none" stroke="currentColor" opacity=".22" /><ellipse cx="270" cy="220" rx="162" ry="65" fill="none" stroke="currentColor" opacity=".22" />
              <path d="M115 170 C190 80 330 110 420 185 M125 290 C220 340 340 305 426 235 M270 55 C235 135 245 250 275 385" fill="none" stroke="currentColor" opacity=".28" />
              <circle cx="270" cy="220" r="7" fill="#8bd4ff" /><circle cx="270" cy="220" r="16" fill="none" stroke="#8bd4ff" opacity=".55" className="setc-pulse" />
              <circle cx="150" cy="150" r="4" fill="#8bd4ff" /><circle cx="397" cy="182" r="4" fill="#8bd4ff" /><circle cx="350" cy="315" r="4" fill="#8bd4ff" />
            </svg>
            <span className="setc-network-label">Dubai → everywhere</span>
          </Reveal>
        </div>
      </section>

      <section className="setc-about section-pad" id="about" aria-labelledby="about-title">
        <div className="container setc-about-grid">
          <Reveal><p className="eyebrow"><span /> About SETC</p><h2 id="about-title">More than training.<br /><span>A connected education ecosystem.</span></h2></Reveal>
          <Reveal className="setc-about-copy" delay={120}><p className="lead">Students Everywhere Training Center (SETC) is a Dubai-based parent organisation bringing together specialised brands focused on language training, test preparation and international education opportunities.</p><p>Our ecosystem gives learners access to focused services through specialised brands, while remaining connected through a shared vision of helping people develop skills and move towards new opportunities.</p></Reveal>
        </div>
      </section>

      <section className="setc-brands section-pad" id="brands" aria-labelledby="brands-title">
        <div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> Our brands</p><h2 id="brands-title">One connected vision.</h2><p>Specialised brands. Focused expertise. Connected opportunities.</p></Reveal>
          <Reveal className="setc-ecosystem-line" aria-hidden="true"><span>SETC</span><i /><i /><i /></Reveal>
          <div className="setc-brand-grid">{brands.map((brand, index) => { const content = <><div className="setc-brand-logo"><Image src={brand.logo} alt={`${brand.name} logo`} width={220} height={110} /></div><span className="setc-brand-index">0{index + 1}</span><h3>{brand.name}</h3><p className="setc-brand-focus">{brand.focus}</p><p>{brand.description}</p><span className="setc-brand-link">Explore brand <ArrowUpRight size={16} /></span></>; return <Reveal as="article" key={brand.name} className="setc-brand-card" delay={index * 100}>{brand.external ? <a href={brand.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${brand.name}`}>{content}</a> : <Link href={brand.href}>{content}</Link>}</Reveal> })}</div>
        </div>
      </section>

      <section className="setc-services section-pad" id="services" aria-labelledby="services-title"><div className="container"><Reveal><p className="eyebrow"><span /> What we help you move towards</p><h2 id="services-title">Three pathways.<br /><span>Many possibilities.</span></h2></Reveal><div className="setc-service-list">{services.map(([number, title, text], index) => <Reveal as="article" className="setc-service-row" key={title} delay={index * 80}><span className="setc-service-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight className="setc-service-arrow" size={22} /></Reveal>)}</div></div></section>

      <section className="setc-why section-pad" aria-labelledby="why-title"><div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> Why SETC</p><h2 id="why-title">Built around your next step.</h2></Reveal><div className="setc-reason-grid">{reasons.map(([number, title, text], index) => <Reveal key={title} className="setc-reason" delay={index * 80}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

      <section className="setc-cta" id="contact" aria-labelledby="cta-title"><div className="setc-cta-grid" aria-hidden="true" /><div className="container setc-cta-inner"><Reveal><p className="setc-kicker">Start with the right direction</p><h2 id="cta-title">Your next opportunity<br /><em>starts with preparation.</em></h2><p>Tell us where you want to go. We&apos;ll help you understand the right pathway.</p><div className="setc-actions"><Link className="button button-blue" href="/contact">Talk to us <ArrowRight size={17} /></Link><a className="button button-outline-light" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></Reveal></div></section>
    </main>
  )
}

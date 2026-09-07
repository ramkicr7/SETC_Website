'use client';

import Link from 'next/link';
import { ArrowUpRight, Check, Globe2, Languages, MessageCircle, MoveRight, Network, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WHATSAPP_LINK } from '@/lib/data';

const brands = [
  { name: 'Students Dubai', label: 'Student pathways in Dubai', href: '/dubai', mark: 'SD', tone: 'brand-slate' },
  { name: 'Language Skills', label: 'Language training for real life', href: '/language-skills', mark: 'LS', tone: 'brand-blue' },
  { name: 'EnglishWise UAE', label: 'English for global opportunity', href: '/englishwise', mark: 'EW', tone: 'brand-sky' },
];

const pillars = [
  { icon: Languages, title: 'Language learning', text: 'Build communication skills that travel with you — from everyday confidence to academic English.' },
  { icon: Network, title: 'Exam preparation', text: 'Structured pathways for internationally recognised English and professional examinations.' },
  { icon: Globe2, title: 'Global opportunity', text: 'Connect your learning to the cities, institutions and opportunities that come next.' },
];

const reasons = ['A connected family of focused education brands', 'Practical, learner-first programmes', 'A clear path from learning to opportunity', 'A Dubai base with an international outlook'];

function NetworkGraphic() {
  return (
    <div className="network-graphic" aria-hidden="true">
      <div className="network-halo" />
      <svg viewBox="0 0 640 520" role="presentation" className="network-svg">
        <defs>
          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#82b8ff" stopOpacity=".12" /><stop offset="1" stopColor="#82b8ff" stopOpacity=".7" /></linearGradient>
          <radialGradient id="network-core"><stop stopColor="#dff0ff" stopOpacity=".95" /><stop offset="1" stopColor="#6da6ff" stopOpacity=".05" /></radialGradient>
        </defs>
        <g className="network-grid">{Array.from({ length: 11 }).map((_, i) => <line key={`v-${i}`} x1={50 + i * 54} y1="25" x2={50 + i * 54} y2="495" />)}{Array.from({ length: 9 }).map((_, i) => <line key={`h-${i}`} x1="24" y1={40 + i * 55} x2="616" y2={40 + i * 55} />)}</g>
        <g className="network-lines"><path d="M118 150 Q260 58 420 118 T552 304" /><path d="M118 150 Q188 272 310 366 T536 438" /><path d="M420 118 Q354 240 310 366" /><path d="M118 150 Q330 194 552 304" /><path d="M310 366 Q408 318 552 304" /></g>
        <g className="network-nodes"><circle cx="118" cy="150" r="8" /><circle cx="420" cy="118" r="6" /><circle cx="552" cy="304" r="9" /><circle cx="310" cy="366" r="7" /><circle cx="536" cy="438" r="5" /></g>
        <circle cx="310" cy="244" r="82" fill="url(#network-core)" className="network-core" /><circle cx="310" cy="244" r="18" fill="#eef7ff" /><circle cx="310" cy="244" r="7" fill="#2d72e8" />
      </svg>
      <div className="network-label network-label-center"><span>SETC</span><small>learning, connected</small></div>
      <div className="network-label network-label-one"><b>Learn</b><small>skills</small></div>
      <div className="network-label network-label-two"><b>Prepare</b><small>confidence</small></div>
      <div className="network-label network-label-three"><b>Go</b><small>everywhere</small></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="setc-home">
      <section className="setc-hero" aria-labelledby="hero-title">
        <div className="hero-noise" />
        <div className="container setc-hero-inner">
          <div className="setc-hero-copy">
            <Reveal className="setc-kicker"><Sparkles size={14} /> Students Everywhere Training Center</Reveal>
            <Reveal delay={100}><h1 id="hero-title">Learn with purpose.<br /><em>Go everywhere.</em></h1></Reveal>
            <Reveal delay={180}><p className="hero-lede">SETC is a connected education group helping learners build language skills, prepare for opportunity and move confidently through a global world.</p></Reveal>
            <Reveal delay={260} className="hero-actions"><Link href="#ecosystem" className="setc-button setc-button-light">Explore SETC <MoveRight size={17} /></Link><Link href="/contact" className="setc-text-link">Talk to our team <ArrowUpRight size={16} /></Link></Reveal>
            <Reveal delay={340} className="hero-footnote"><span /> Dubai based. Globally minded.</Reveal>
          </div>
          <Reveal delay={180} className="setc-hero-art"><NetworkGraphic /></Reveal>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to learn more"><span>Scroll to explore</span><MoveRight size={16} /></a>
      </section>

      <section id="about" className="setc-section setc-about">
        <div className="container about-layout"><Reveal className="section-index">01 <span>About SETC</span></Reveal><Reveal delay={100} className="about-statement"><p className="setc-eyebrow">A parent organisation with a clear point of view</p><h2>Education should open doors — not add more walls.</h2><p className="setc-body">SETC brings together specialised learning brands with one shared belief: the right support can turn ambition into movement. From first language lesson to next international step, we make the path clearer.</p><Link href="/about" className="setc-arrow-link">Meet the organisation <MoveRight size={17} /></Link></Reveal></div>
      </section>

      <section id="ecosystem" className="setc-section ecosystem-section">
        <div className="container"><Reveal className="section-heading-row"><div><p className="setc-eyebrow">The SETC ecosystem</p><h2>Different strengths.<br />One direction.</h2></div><p className="setc-muted">Three focused brands, connected by a shared commitment to progress.</p></Reveal><div className="brand-grid">{brands.map((brand, i) => <Reveal key={brand.name} delay={i * 100} className={`brand-tile ${brand.tone}`}><div className="brand-mark">{brand.mark}</div><div><p className="brand-role">{brand.label}</p><h3>{brand.name}</h3></div><Link href={brand.href} aria-label={`Explore ${brand.name}`}><ArrowUpRight size={19} /></Link></Reveal>)}</div></div>
      </section>

      <section id="services" className="setc-section pillars-section"><div className="container"><Reveal className="section-index">02 <span>What we do</span></Reveal><Reveal className="pillars-intro" delay={100}><p className="setc-eyebrow">Learning that moves with you</p><h2>From building the skill<br />to taking the next step.</h2></Reveal><div className="pillar-grid">{pillars.map((pillar, i) => <Reveal key={pillar.title} delay={i * 100} className="pillar"><span className="pillar-number">0{i + 1}</span><pillar.icon size={24} /><h3>{pillar.title}</h3><p>{pillar.text}</p><Link href="/contact" className="setc-arrow-link">Find out more <MoveRight size={16} /></Link></Reveal>)}</div></div></section>

      <section className="setc-section why-section"><div className="container why-layout"><Reveal className="section-index">03 <span>Why SETC</span></Reveal><Reveal className="why-copy" delay={100}><p className="setc-eyebrow">The SETC difference</p><h2>Progress feels possible when the path is clear.</h2><ul>{reasons.map((reason) => <li key={reason}><span><Check size={14} /></span>{reason}</li>)}</ul></Reveal><Reveal className="why-quote" delay={200}><div className="quote-mark">“</div><p>We are building an education group for people who are going places.</p><span>— The SETC team</span></Reveal></div></section>

      <section id="contact" className="setc-final-cta"><div className="container final-cta-inner"><Reveal><p className="setc-eyebrow">Your next chapter starts here</p><h2>Ready to move<br /><em>everywhere?</em></h2></Reveal><Reveal delay={120} className="final-cta-actions"><p>Tell us where you want to go. We’ll help you find the right place to start.</p><Link href="/contact" className="setc-button setc-button-blue">Start a conversation <ArrowUpRight size={17} /></Link><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="setc-text-link dark">Or chat on WhatsApp <MessageCircle size={16} /></a></Reveal></div></section>
    </main>
  );
}

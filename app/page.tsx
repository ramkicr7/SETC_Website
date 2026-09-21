'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, ArrowRight, Globe2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { blogPosts, classroomImage, courses, dubaiImage, journeySteps, WHATSAPP_LINK } from '@/lib/data'

const brands = [
  {
    name: 'Students Dubai',
    focus: 'Languages · Test Preparation · Study Abroad',
    description: 'Supporting learners through language development, examination preparation and international study opportunities.',
    href: '/brands/students-dubai',
    logo: '/assets/images/logos/SETC_(1).png',
    external: false,
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
    href: '/englishwise',
    logo: '/assets/images/brands/Englishwise_UAE.png',
    external: false,
  },
]

const services = [
  ['01', 'Language Training', 'Build stronger language and communication skills for academic, professional and everyday opportunities.', courses.find((course) => course.slug === 'spoken-english')?.image ?? classroomImage, '/courses/spoken-english'],
  ['02', 'Test Preparation', 'Structured preparation for IELTS, PTE, OET, NAATI CCL, CELPIP, LanguageCert and other relevant examinations.', courses.find((course) => course.slug === 'ielts')?.image ?? classroomImage, '/courses'],
  ['03', 'Study Abroad', 'Guidance and support for students exploring international study opportunities.', dubaiImage, '/global-learning'],
]

const reasons = [
  ['01', 'Specialised brand ecosystem', 'Focused services connected by one shared vision.'],
  ['02', 'Dubai-based, globally minded', 'A local foundation for international opportunity.'],
  ['03', 'Multiple learning pathways', 'The right direction for different goals and next steps.'],
  ['04', 'Focused on real opportunities', 'Practical preparation that keeps your ambitions moving.'],
]

const heroSlides = [
  { kicker: 'Language training', title: <>Build the skills<br /><em>that open doors.</em></>, lede: 'Practical language training for study, work, travel and everyday confidence.', label: 'LANGUAGES', href: '/courses', image: courses.find((course) => course.slug === 'spoken-english')?.image ?? classroomImage },
  { kicker: 'Test preparation', title: <>Prepare with<br /><em>purpose.</em></>, lede: 'Focused preparation and expert guidance for the exam that supports your next move.', label: 'TEST PREPARATION', href: '/courses', image: courses.find((course) => course.slug === 'ielts')?.image ?? classroomImage },
  { kicker: 'Study abroad', title: <>Go further.<br /><em>Go everywhere.</em></>, lede: 'Explore international study opportunities with a connected team behind you.', label: 'STUDY ABROAD', href: '/services', image: dubaiImage },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]
  const nextSlide = () => setActiveSlide((current) => (current + 1) % heroSlides.length)
  const previousSlide = () => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)

  return (
    <main className="setc-home">
      <section className="setc-hero" aria-labelledby="hero-title">
        <Image className="setc-hero-slide-image" src={slide.image} alt="" fill priority={activeSlide === 0} sizes="100vw" />
        <div className="setc-hero-slide-overlay" aria-hidden="true" />
        <div className="setc-hero-grid" aria-hidden="true" />
        <div className="setc-hero-ambient" aria-hidden="true" />
        <div className="setc-hero-orbit setc-orbit-one" aria-hidden="true" />
        <div className="setc-hero-orbit setc-orbit-two" aria-hidden="true" />
        <div className="setc-hero-dots" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="container setc-hero-content">
          <Reveal className="setc-hero-copy">
            <p className="setc-kicker"><Globe2 size={15} /> {slide.kicker}</p>
            <h1 id="hero-title"><span>Learning</span><span>{slide.title}</span></h1>
            <p className="setc-hero-lede">{slide.lede}</p>
            <div className="setc-hero-path"><span>Building futures through</span><strong>{slide.label}</strong><span className="setc-path-arrow">↓</span></div>
            <div className="setc-actions">
              <Link className="button button-blue" href={slide.href}>Explore pathway <ArrowRight size={17} /></Link>
              <Link className="setc-text-link" href="/contact">Enquire now <ArrowUpRight size={16} /></Link>
            </div>
            <div className="setc-hero-controls" aria-label="Hero slides">
              <button type="button" onClick={previousSlide} aria-label="Previous hero slide"><ChevronLeft size={16} /></button>
              <span>{String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
              <button type="button" onClick={nextSlide} aria-label="Next hero slide"><ChevronRight size={16} /></button>
            </div>
          </Reveal>
          <Reveal className="setc-network" delay={180} aria-label="Global education network visual">
            <svg viewBox="0 0 620 520" role="img" aria-label="A global education network anchored in Dubai">
              <defs><radialGradient id="setcGlow"><stop stopColor="#38bdf8" stopOpacity=".28" /><stop offset="1" stopColor="#38bdf8" stopOpacity="0" /></radialGradient><filter id="setcBlur"><feGaussianBlur stdDeviation="16" /></filter></defs>
              <circle cx="350" cy="260" r="190" fill="url(#setcGlow)" filter="url(#setcBlur)" /><ellipse cx="350" cy="260" rx="190" ry="194" fill="none" stroke="currentColor" opacity=".28" /><ellipse cx="350" cy="260" rx="96" ry="194" fill="none" stroke="currentColor" opacity=".18" /><ellipse cx="350" cy="260" rx="190" ry="78" fill="none" stroke="currentColor" opacity=".2" /><ellipse cx="350" cy="260" rx="190" ry="132" fill="none" stroke="currentColor" opacity=".12" />
              <path className="setc-network-line" d="M350 260 C282 198 218 140 112 110 M350 260 C445 215 500 164 552 105 M350 260 C258 302 190 355 108 410 M350 260 C432 306 493 363 556 417 M350 260 C266 252 192 250 82 258" fill="none" stroke="currentColor" opacity=".5" />
              <circle cx="350" cy="260" r="9" fill="#b8e8ff" /><circle cx="350" cy="260" r="27" fill="none" stroke="#70cfff" opacity=".65" className="setc-pulse" />
              <g className="setc-network-node"><circle cx="112" cy="110" r="5" /><text x="92" y="88">London</text></g><g className="setc-network-node"><circle cx="552" cy="105" r="5" /><text x="530" y="82">Singapore</text></g><g className="setc-network-node"><circle cx="108" cy="410" r="5" /><text x="76" y="441">Toronto</text></g><g className="setc-network-node"><circle cx="556" cy="417" r="5" /><text x="536" y="449">Sydney</text></g><g className="setc-network-node"><circle cx="82" cy="258" r="5" /><text x="31" y="253">Mumbai</text></g>
              <text className="setc-dubai-label" x="370" y="292">DUBAI</text>
            </svg>
            <span className="setc-network-label">Global education hub <i>Dubai</i></span>
            <span className="setc-network-fragment">↗ Global opportunities</span>
          </Reveal>
        </div>
        <a className="setc-scroll-cue" href="#about"><span>Explore SETC</span><i /></a>
      </section>

      <section className="setc-about section-pad" id="about" aria-labelledby="about-title">
        <div className="container setc-about-grid">
          <Reveal><p className="eyebrow"><span /> About SETC</p><h2 id="about-title">More than training.<br /><span>A connected education ecosystem.</span></h2></Reveal>
          <Reveal className="setc-about-copy" delay={120}><p className="lead">Students Everywhere Training Center (SETC) is a Dubai-based parent organisation bringing together specialised brands focused on language training, test preparation and international education opportunities.</p><p>Our ecosystem gives learners access to focused services through specialised brands, while remaining connected through a shared vision of helping people develop skills and move towards new opportunities.</p></Reveal>
        </div>
      </section>

      <section className="setc-brands section-pad" id="brands" aria-labelledby="brands-title">
        <div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> Our brands</p><h2 id="brands-title">One connected vision.</h2><p>Specialised brands. Focused expertise. Connected opportunities.</p><Link className="setc-section-link" href="/brands">Explore Our Brands <ArrowRight size={16} /></Link></Reveal>
          <div className="setc-brand-grid">{brands.map((brand, index) => { const content = <><div className="setc-brand-logo"><Image src={brand.logo} alt={`${brand.name} logo`} width={220} height={110} loading="lazy" /></div><span className="setc-brand-index">0{index + 1}</span><h3>{brand.name}</h3><p className="setc-brand-focus">{brand.focus}</p><p>{brand.description}</p><span className="setc-brand-link">Explore brand <ArrowUpRight size={16} /></span></>; return <Reveal as="article" key={brand.name} className="setc-brand-card" delay={index * 100}>{brand.external ? <a href={brand.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${brand.name}`}>{content}</a> : <Link href={brand.href}>{content}</Link>}</Reveal> })}</div>
        </div>
      </section>

      <section className="setc-services section-pad" id="services" aria-labelledby="services-title"><div className="container"><Reveal><p className="eyebrow"><span /> What we help you move towards</p><h2 id="services-title">Three pathways.<br /><span>Many possibilities.</span></h2></Reveal><div className="setc-service-list">{services.map(([number, title, text, image, href], index) => <Reveal as="article" className="setc-service-row" key={title} delay={index * 80}><Link href={href} className="setc-service-card-link" aria-label={`${title} pathway`}><div className="setc-service-image"><Image src={image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="setc-service-card-content"><span className="setc-service-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="setc-service-cta" aria-hidden="true"><ArrowUpRight className="setc-service-arrow" size={22} /></span></div></Link></Reveal>)}</div></div></section>

      <section className="setc-partners" aria-labelledby="partners-title"><div className="container"><Reveal className="setc-partners-inner"><p className="eyebrow eyebrow-light"><span /> Recognition & pathways</p><h2 id="partners-title">Official partner pathways.</h2><p>Explore recognised routes through language training and test preparation.</p><div className="setc-partner-marks"><span>IDP</span><span>IELTS</span><span>Pearson</span></div></Reveal></div></section>

      <section className="setc-why section-pad" aria-labelledby="why-title"><div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> Why SETC</p><h2 id="why-title">Built around your next step.</h2></Reveal><div className="setc-reason-grid">{reasons.map(([number, title, text], index) => <Reveal key={title} className="setc-reason" delay={index * 80}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

      <section className="setc-journey section-pad" aria-labelledby="journey-title"><div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> The student journey</p><h2 id="journey-title">From first question<br /><span>to the next opportunity.</span></h2></Reveal><div className="setc-journey-track">{journeySteps.map((step, index) => <Reveal as="article" className="setc-journey-step" key={step.num} delay={index * 70}><span>{step.num}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></Reveal>)}</div><Link className="setc-section-link" href="/student-journey">Explore the student journey <ArrowRight size={16} /></Link></div></section>

      <section className="setc-insights section-pad" aria-labelledby="insights-title"><div className="container"><Reveal className="setc-section-intro"><p className="eyebrow"><span /> Latest insights</p><h2 id="insights-title">Ideas for your next step.</h2><Link className="setc-section-link" href="/blog">View all insights <ArrowRight size={16} /></Link></Reveal><div className="setc-insights-grid">{blogPosts.slice(0, 3).map((post, index) => <Reveal as="article" className={`setc-insight-card ${index === 0 ? 'setc-insight-featured' : ''}`} key={post.slug} delay={index * 80}><Link href={`/blog/${post.slug}`}><div className="setc-insight-image"><Image src={post.cover} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="setc-insight-copy"><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong>Read article <ArrowUpRight size={15} /></strong></div></Link></Reveal>)}</div></div></section>

      <section className="setc-cta" id="contact" aria-labelledby="cta-title"><div className="setc-cta-grid" aria-hidden="true" /><div className="container setc-cta-inner"><Reveal><p className="setc-kicker">Start with the right direction</p><h2 id="cta-title">Your next opportunity<br /><em>starts with preparation.</em></h2><p>Tell us where you want to go. We&apos;ll help you understand the right pathway.</p><div className="setc-actions"><Link className="button button-blue" href="/contact">Talk to us <ArrowRight size={17} /></Link><a className="button button-outline-light" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></Reveal></div></section>
    </main>
  )
}

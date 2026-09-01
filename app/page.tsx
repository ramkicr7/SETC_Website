'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MoveUpRight,
  Sparkles,
  Globe2,
  Check,
  MapPin,
  Monitor,
  Users,
  Clock3,
  MessageCircle,
  Target,
  Compass,
  Building2,
  Phone,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQAccordion } from '@/components/FAQAccordion';
import { WorldMap } from '@/components/WorldMap';
import { Gallery } from '@/components/Gallery';
import {
  courses,
  trustItems,
  benefits,
  journeySteps,
  faqs,
  languages,
  dubaiGallery,
  ADDRESS_LINES,
  WHATSAPP_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
  heroImage,
  aboutImage,
  classroomImage,
  dubaiImage,
  onlineLearningImage,
} from '@/lib/data';

export default function Home() {
  return (
    <main>
      {/* HERO — PREMIUM MOTION */}
      <section className="hero" aria-label="Hero">
        {/* Background layers */}
        <div className="hero-bg-decor" />
        <div className="hero-worldmap" aria-hidden="true">
          <svg viewBox="0 0 800 400" className="hero-map-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(17,167,238,0.06)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="800" height="400" fill="url(#mapGlow)" />
            <g className="hero-map-grid" fill="none" stroke="rgba(100,170,230,0.07)" strokeWidth="0.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} />
              ))}
            </g>
            <g className="hero-map-dots" fill="rgba(100,170,230,0.12)">
              {[
                [120,140],[180,100],[260,160],[340,120],[420,180],[500,110],[560,200],[620,150],[680,220],[140,240],[220,280],[300,260],[380,300],[460,280],[540,320],[600,280],[700,300],[100,180],[200,200],[380,220],[480,240],[660,260],[160,320],[440,340],[720,180],[80,260],[280,200],[520,160],[640,320],[240,220]
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="2" className="hero-map-point" style={{ animationDelay: `${(i % 6) * 0.8}s` }} />
              ))}
            </g>
            <g className="hero-map-connections" stroke="rgba(100,170,230,0.1)" strokeWidth="0.8" fill="none">
              <path d="M200,160 Q300,80 420,180" className="hero-conn-line" style={{ animationDelay: '0s' }} />
              <path d="M420,180 Q500,120 560,200" className="hero-conn-line" style={{ animationDelay: '1s' }} />
              <path d="M560,200 Q630,140 680,220" className="hero-conn-line" style={{ animationDelay: '2s' }} />
              <path d="M200,160 Q160,220 140,240" className="hero-conn-line" style={{ animationDelay: '0.5s' }} />
              <path d="M420,180 Q400,240 380,300" className="hero-conn-line" style={{ animationDelay: '1.5s' }} />
            </g>
          </svg>
        </div>
        {/* Particles */}
        <div className="hero-particles" aria-hidden="true">
          <span className="hero-particle p1" />
          <span className="hero-particle p2" />
          <span className="hero-particle p3" />
          <span className="hero-particle p4" />
          <span className="hero-particle p5" />
          <span className="hero-particle p6" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow hero-stagger" style={{ animationDelay: '0ms' }}><Sparkles size={14} /> STUDENTS EVERYWHERE TRAINING CENTER</div>
            <h1 className="hero-title">
              <span className="hero-line hero-stagger" style={{ animationDelay: '100ms' }}>Learn.</span>
              <span className="hero-line hero-stagger" style={{ animationDelay: '220ms' }}>Grow.</span>
              <span className="hero-line hero-line-accent hero-stagger" style={{ animationDelay: '340ms' }}>Go Everywhere.</span>
            </h1>
            <p className="hero-text hero-stagger" style={{ animationDelay: '460ms' }}>SETC helps learners develop English language skills and prepare for internationally recognised English language and professional examinations.</p>
            <div className="hero-actions hero-stagger" style={{ animationDelay: '560ms' }}>
              <Link className="button button-red hero-cta-primary" href="/courses">Explore Our Courses <ArrowRight size={18} className="cta-arrow" /></Link>
              <Link className="text-link light-link hero-cta-secondary" href="/contact">Talk to Us <MoveUpRight size={17} className="cta-arrow" /></Link>
            </div>
            <div className="hero-meta hero-stagger" style={{ animationDelay: '660ms' }}>
              <div className="hero-meta-item"><Globe2 size={16} /> Dubai · Online · Everywhere</div>
              <div className="hero-meta-item"><Users size={16} /> Learner-focused training</div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-glow" />
            <div className="hero-orbit-ring" />
            <div className="hero-orbit-node node-a" />
            <div className="hero-orbit-node node-b" />
            <div className="hero-image-wrap">
              <Image src={heroImage} alt="International students learning together" fill priority sizes="(max-width: 700px) 100vw, 600px" className="hero-image" />
              <div className="hero-image-overlay" />
            </div>
            <div className="hero-floating-card card-top">
              <Target size={18} className="card-icon-pulse" /><div><strong>Exam Preparation</strong><span>IELTS · PTE · OET</span></div>
            </div>
            <div className="hero-floating-card card-bottom">
              <Globe2 size={18} className="card-icon-pulse" /><div><strong>Global Learning</strong><span>Learn Beyond Borders</span></div>
            </div>
            <div className="hero-floating-card card-side">
              <Users size={18} className="card-icon-pulse" /><div><strong>Student Focused</strong><span>Your Goals. Your Journey.</span></div>
            </div>
          </div>
        </div>
        <div className="hero-slice" />
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container trust-grid">
          {trustItems.map((item, i) => (
            <Reveal key={item.title} className="trust-item" delay={i * 100}>
              <div className="trust-icon"><item.icon size={22} /></div>
              <div><strong>{item.title}</strong><span>{item.text}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-pad">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <div className="about-image-wrap">
              <Image src={aboutImage} alt="Student studying with laptop" fill sizes="(max-width: 700px) 100vw, 500px" className="about-image" />
            </div>
            <div className="about-badge"><Users size={18} /><span>Dubai-based training center</span></div>
          </Reveal>
          <Reveal className="about-copy" delay={150}>
            <div className="eyebrow"><span /> About SETC</div>
            <h2>Building Skills for Opportunities Everywhere</h2>
            <p className="lead">Students Everywhere Training Center is a Dubai-based training center dedicated to helping learners develop strong communication skills and prepare for English language and professional examinations.</p>
            <p>Whether you are preparing for an exam, improving your English, pursuing a professional opportunity or building practical language skills, our approach is structured, flexible and focused on your goals.</p>
            <ul className="about-points">
              <li><Check size={16} /> Classroom training in Dubai</li>
              <li><Check size={16} /> Online learning where applicable</li>
              <li><Check size={16} /> Structured exam preparation</li>
              <li><Check size={16} /> Learner-focused approach</li>
            </ul>
            <Link className="button button-blue" href="/about">Discover SETC <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* COURSES — FEATURED + GRID */}
      <section className="courses-section section-pad">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow"><span /> What we help with</div>
              <h2>Prepare With Confidence</h2>
            </div>
            <p>Explore language and examination preparation designed around your learning goals.</p>
          </Reveal>
          <div className="courses-featured-grid">
            <Reveal as="article" className="course-featured">
              <Link href="/courses/ielts" className="course-featured-link">
                <div className="course-featured-image">
                  <Image src={classroomImage} alt="IELTS Preparation" fill sizes="(max-width: 900px) 100vw, 600px" className="course-featured-img" />
                  <div className="course-featured-overlay" />
                </div>
                <div className="course-featured-body">
                  <div className="course-icon blue"><Target size={24} /></div>
                  <span className="course-type">English exam preparation</span>
                  <h3>IELTS Preparation</h3>
                  <p>Structured preparation for the IELTS exam, covering the skills and strategies needed for each section.</p>
                  <span className="course-cta">Learn More <ArrowRight size={15} /></span>
                </div>
              </Link>
            </Reveal>
            <div className="course-featured-side">
              {courses.slice(1, 4).map((course, i) => (
                <Reveal as="article" key={course.slug} className="course-card course-card-img" delay={i * 80}>
                  <Link href={`/courses/${course.slug}`} className="course-card-link">
                    <div className="course-card-thumb">
                      <Image src={course.image} alt={course.title} fill sizes="(max-width: 900px) 100vw, 400px" className="course-card-img-el" />
                      <div className="course-card-overlay" />
                      <div className={`course-icon ${course.tone}`}><course.icon size={18} /></div>
                    </div>
                    <div className="course-card-body">
                      <span className="course-type">{course.short}</span>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <span className="course-cta">Learn More <ArrowRight size={15} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="course-grid-sm">
            {courses.slice(4).map((course, i) => (
              <Reveal as="article" key={course.slug} className="course-card course-card-img" delay={i * 80}>
                <Link href={`/courses/${course.slug}`} className="course-card-link">
                  <div className="course-card-thumb">
                    <Image src={course.image} alt={course.title} fill sizes="(max-width: 700px) 100vw, 300px" className="course-card-img-el" />
                    <div className="course-card-overlay" />
                    <div className={`course-icon ${course.tone}`}><course.icon size={18} /></div>
                  </div>
                  <div className="course-card-body">
                    <span className="course-type">{course.short}</span>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <span className="course-cta">Learn More <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="courses-foot">
            <Link className="text-link dark-link" href="/courses">View all courses <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* EXAM PREP — EDITORIAL SPLIT */}
      <section className="exam-prep-editorial section-pad-dark">
        <div className="container exam-editorial-grid">
          <Reveal className="exam-editorial-left">
            <div className="eyebrow eyebrow-light"><span /> Exam Preparation</div>
            <h2>Your Goal.<br />Your Preparation.<br />Your Next Step.</h2>
            <p>SETC supports learners preparing for a range of English language and professional examinations. Each preparation pathway is structured to help you build the skills and confidence needed for test day.</p>
            <Link className="button button-blue" href="/courses">Explore All Exams <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="exam-editorial-right" delay={150}>
            <div className="exam-list">
              {courses.slice(0, 6).map((c) => (
                <Link href={`/courses/${c.slug}`} key={c.slug} className="exam-row">
                  <div className="exam-row-icon"><c.icon size={20} /></div>
                  <div className="exam-row-body">
                    <strong>{c.title.replace(' Preparation', '')}</strong>
                    <span>{c.short}</span>
                  </div>
                  <ArrowRight size={18} className="exam-row-arrow" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LANGUAGES & GLOBAL COMMUNICATION */}
      <section className="languages-section section-pad">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Languages & Global Communication</div>
            <h2>Language Connects the World</h2>
            <p>Language is a bridge between people, cultures and opportunities. SETC supports learners in building communication skills for an international world.</p>
          </Reveal>
          <div className="languages-grid">
            {languages.map((lang, i) => (
              <Reveal as="article" key={lang.name} className={`lang-card lang-${i}`} delay={i * 100}>
                <div className="lang-script">{lang.script}</div>
                <div className="lang-native">{lang.native}</div>
                <div className="lang-note">{lang.note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING OPTIONS PREVIEW */}
      <section className="learning-modes section-pad">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> How you learn</div>
            <h2>Learn Your Way</h2>
            <p>Choose the learning format that works best for your schedule and goals.</p>
          </Reveal>
          <div className="modes-grid">
            <Reveal className="mode-card">
              <div className="mode-image-wrap">
                <Image src={classroomImage} alt="Classroom training" fill sizes="(max-width: 700px) 100vw, 600px" className="mode-image" />
                <div className="mode-overlay" />
                <MapPin size={28} className="mode-icon-big" />
              </div>
              <div className="mode-body">
                <h3>Classroom Training</h3>
                <p>Dubai-based classroom training at our Al Barsha center.</p>
                <p className="mode-address">{ADDRESS_LINES.join(', ')}</p>
                <Link className="text-link dark-link" href="/learning-options">Learn More <ArrowRight size={15} /></Link>
              </div>
            </Reveal>
            <Reveal className="mode-card" delay={150}>
              <div className="mode-image-wrap mode-online">
                <Image src={onlineLearningImage} alt="Online training" fill sizes="(max-width: 700px) 100vw, 600px" className="mode-image" style={{ opacity: 0.4 }} />
                <Monitor size={28} className="mode-icon-big" />
              </div>
              <div className="mode-body">
                <h3>Online Training</h3>
                <p>Flexible online learning for applicable courses. Contact our team to discuss currently available options.</p>
                <Link className="text-link dark-link" href="/learning-options">Learn More <ArrowRight size={15} /></Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="courses-foot">
            <Link className="text-link dark-link" href="/learning-options">Explore learning options <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE SETC */}
      <section className="why-section section-pad">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Why SETC</div>
            <h2>Why Learn With SETC?</h2>
            <p>Our approach is practical, structured and focused on your individual learning goals.</p>
          </Reveal>
          <div className="benefit-grid">
            {benefits.map((b, i) => (
              <Reveal as="article" key={b.title} className="benefit-card" delay={i * 80}>
                <div className="benefit-icon"><b.icon size={24} /></div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT JOURNEY PREVIEW */}
      <section className="journey-section section-pad-dark">
        <div className="container">
          <Reveal className="center-heading center-heading-light">
            <div className="eyebrow eyebrow-light"><span /> Your path</div>
            <h2>Your Learning Journey</h2>
            <p>A simple, supportive process from first enquiry to starting your training.</p>
          </Reveal>
          <div className="journey-timeline">
            {journeySteps.slice(0, 4).map((step, i) => (
              <Reveal as="article" key={step.num} className="journey-step" delay={i * 120}>
                <div className="journey-dot">{step.num}</div>
                {i < 3 && <span className="journey-line-h" />}
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="courses-foot" style={{ marginTop: 40 }}>
            <Link className="text-link light-link" href="/student-journey">See the full journey <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* DUBAI EXPERIENCE — FULL-WIDTH IMAGE */}
      <section className="dubai-experience">
        <div className="dubai-experience-bg">
          <Image src={dubaiImage} alt="Dubai skyline" fill priority sizes="100vw" className="dubai-experience-img" />
          <div className="dubai-experience-overlay" />
        </div>
        <div className="container dubai-experience-content">
          <Reveal>
            <div className="eyebrow eyebrow-light"><span /> Learning in Dubai</div>
            <h2 className="dubai-experience-title">Experience Learning<br />in a Global City</h2>
            <p className="dubai-experience-text">Dubai connects learners from across the world in one dynamic, multicultural city. Learn in an environment that supports international communication and global opportunity.</p>
            <Link className="button button-red" href="/dubai">Discover Dubai <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* WORLD MAP */}
      <WorldMap />

      {/* DUBAI GALLERY PREVIEW */}
      <section className="dubai-gallery-section section-pad">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Dubai in focus</div>
            <h2>A City Like No Other</h2>
            <p>Explore Dubai through our gallery — a modern, international city that supports learning and growth.</p>
          </Reveal>
          <Reveal>
            <Gallery images={dubaiGallery} />
          </Reveal>
          <Reveal className="courses-foot">
            <Link className="text-link dark-link" href="/dubai">See more of Dubai <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ENGLISHWISE */}
      <section className="brand-section section-pad">
        <div className="container brand-split">
          <Reveal className="brand-visual brand-visual-blue">
            <Image src="/assets/images/brands/Englishwise_UAE.png" alt="EnglishWise UAE" width={320} height={160} className="brand-logo-img" />
          </Reveal>
          <Reveal className="brand-info" delay={150}>
            <div className="eyebrow"><span /> Associated Brand</div>
            <h2>EnglishWise UAE</h2>
            <p>EnglishWise UAE is a brand focused on English language and test preparation services, including preparation for examinations such as IELTS, PTE, OET and other relevant English language or professional tests, along with English language skills training.</p>
            <a className="button button-blue" href="https://www.englishwise.ae/" target="_blank" rel="noopener noreferrer">Explore EnglishWise <MoveUpRight size={17} /></a>
          </Reveal>
        </div>
      </section>

      {/* LANGUAGE SKILLS */}
      <section className="brand-section brand-section-light section-pad">
        <div className="container brand-split brand-split-reverse">
          <Reveal className="brand-info">
            <div className="eyebrow"><span /> Associated Brand</div>
            <h2>Language Skills Dubai</h2>
            <p>Language Skills Dubai is a language-focused brand supporting learners who want to develop practical communication and language skills, including relevant English language learning and skills development requirements.</p>
            <Link className="button button-outline" href="/language-skills">Learn More <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="brand-visual brand-visual-light" delay={150}>
            <Image src="/assets/images/brands/Languageskills.png" alt="Language Skills Training Center" width={260} height={190} className="brand-logo-img" />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section section-pad">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Student stories</div>
            <h2>What Our Learners Say</h2>
            <p>Genuine testimonials from approved students will appear here once supplied.</p>
          </Reveal>
          <Reveal className="testimonial-placeholder">
            <div className="testimonial-card-empty">
              <MessageCircle size={32} />
              <p>Testimonials are coming soon.</p>
              <span>Only genuine, approved student reviews will be published here.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="faq-section section-pad">
        <div className="container faq-grid">
          <Reveal className="faq-intro-side">
            <div className="eyebrow"><span /> Questions, answered</div>
            <h2>Good decisions start with clarity.</h2>
            <p>Here are a few things learners often want to know before they begin.</p>
            <Link className="button button-outline" href="/faq">View all FAQs <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="faq-list-side" delay={150}>
            <FAQAccordion items={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section section-pad-dark">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div className="eyebrow eyebrow-light"><span /> Let&apos;s get started</div>
            <h2>Ready to Take Your Next Step?</h2>
            <p>Tell us what you are working towards. Our team will help you understand the right training options for your needs.</p>
            <div className="contact-details">
              <a href={PHONE_LINK}><div className="contact-icon"><Phone size={18} /></div><span><small>Call us</small>{PHONE_NUMBER}</span></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><div className="contact-icon"><MessageCircle size={18} /></div><span><small>WhatsApp</small>{PHONE_NUMBER}</span></a>
              <div className="contact-detail-static"><div className="contact-icon"><MapPin size={18} /></div><span><small>Visit us</small>{ADDRESS_LINES.join(', ')}</span></div>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={150}>
            <Link href="/contact" className="button button-red" style={{ width: '100%', padding: '20px', fontSize: 16 }}>
              Go to Contact Page <ArrowRight size={18} />
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="button button-outline-light" style={{ width: '100%', marginTop: 12, padding: '20px' }}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Find us</div>
            <h2>Visit Our Training Center</h2>
            <p>{ADDRESS_LINES.join(', ')}</p>
          </Reveal>
        </div>
        <Reveal className="map-placeholder">
          <MapPin size={40} />
          <p>Official Google Maps embed will appear here once the verified location link is provided.</p>
          <a className="button button-outline" href="https://maps.google.com/?q=Pinnacle+Building+Sheikh+Zayed+Road+Al+Barsha+Dubai" target="_blank" rel="noopener noreferrer">Open in Google Maps <MoveUpRight size={16} /></a>
        </Reveal>
      </section>
    </main>
  );
}

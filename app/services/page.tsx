import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe2, MapPin, Monitor, Users, Target, Compass, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ADDRESS_LINES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Training services at SETC Dubai including exam preparation, Spoken English, language skills, classroom training and online training.',
};

const services = [
  { icon: Target, title: 'Exam Preparation', text: 'Structured preparation for IELTS, PTE, OET, NAATI CCL, CELPIP and LanguageCert examinations.' },
  { icon: Users, title: 'Spoken English Training', text: 'Build practical communication skills and confidence in everyday English.' },
  { icon: Globe2, title: 'Language Skills Training', text: 'Develop broader English language skills for work, study and daily life.' },
  { icon: Monitor, title: 'Online Training', text: 'Flexible online learning options for applicable courses. Contact us for availability.' },
  { icon: MapPin, title: 'Classroom Training', text: 'In-person training at our Dubai center in Al Barsha.' },
  { icon: Compass, title: 'Learner Guidance', text: 'Support to help you choose the right course and learning format.' },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Services</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> What we offer</div>
          <h1>Training Services</h1>
          <p>English language and examination preparation designed around your learning goals, with flexible learning options.</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="benefit-grid">
            {services.map((s, i) => (
              <Reveal as="article" key={s.title} className="benefit-card" delay={i * 80}>
                <div className="benefit-icon"><s.icon size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Learning modes</div>
            <h2>How You Can Learn</h2>
            <p>Choose the learning format that works best for your schedule and goals.</p>
          </Reveal>
          <div className="modes-grid">
            <Reveal className="mode-card">
              <div className="mode-image-wrap" style={{ background: 'var(--navy)', display: 'grid', placeItems: 'center' }}>
                <MapPin size={28} className="mode-icon-big" />
              </div>
              <div className="mode-body">
                <h3>Classroom Training in Dubai</h3>
                <p>Learn in person at our training center.</p>
                <p className="mode-address">{ADDRESS_LINES.join(', ')}</p>
                <Link className="text-link dark-link" href="/learning-options">Learn More <ArrowRight size={15} /></Link>
              </div>
            </Reveal>
            <Reveal className="mode-card" delay={150}>
              <div className="mode-image-wrap mode-online">
                <Monitor size={28} className="mode-icon-big" />
              </div>
              <div className="mode-body">
                <h3>Online Training</h3>
                <p>Flexible online learning for applicable courses. Contact our team to discuss currently available options.</p>
                <Link className="text-link dark-link" href="/learning-options">Learn More <ArrowRight size={15} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span /> Explore courses</div>
            <h2 style={{ color: 'var(--navy)', fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', margin: '16px 0 20px' }}>Find the Right Course</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 30px' }}>Browse our full range of exam preparation and language skills courses.</p>
            <Link className="button button-blue" href="/courses">Explore Courses <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

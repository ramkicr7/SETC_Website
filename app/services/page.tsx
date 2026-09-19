import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe2, MapPin, Monitor, Target, Compass } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ADDRESS_LINES, services as serviceCards } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Training services at SETC Dubai including exam preparation, Spoken English, language skills, classroom training and online training.',
};

const serviceLinks = ['/courses', '/courses', '/global-learning'];

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
          <div className="services-hub-grid">
            {serviceCards.map((service, i) => (
              <Reveal as="article" key={service.title} className="service-hub-card" delay={i * 80}>
                <Link href={serviceLinks[i]} aria-label={`Explore ${service.title}`}>
                  <span className="service-number">{service.num}</span>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <span className="service-card-arrow">Explore <ArrowRight size={17} /></span>
                </Link>
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

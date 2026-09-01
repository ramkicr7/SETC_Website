import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Monitor } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { ADDRESS_LINES, classroomImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Learning Options',
  description: 'Choose between classroom training in Dubai and online training for applicable courses at SETC.',
};

export default function LearningOptionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Learning Options</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> How you learn</div>
          <h1>Learn Your Way</h1>
          <p>Choose the learning format that works best for your schedule and goals.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container modes-grid">
          <Reveal className="mode-card">
            <div className="mode-image-wrap">
              <Image src={classroomImage} alt="Classroom training" fill sizes="(max-width: 700px) 100vw, 600px" className="mode-image" />
              <div className="mode-overlay" />
              <MapPin size={28} className="mode-icon-big" />
            </div>
            <div className="mode-body">
              <h3>Classroom Training</h3>
              <p>Dubai-based classroom training at our Al Barsha center. Learn in person with structured sessions and direct interaction with our team.</p>
              <p className="mode-address">{ADDRESS_LINES.join(', ')}</p>
              <Link className="text-link dark-link" href="/contact">Enquire about classroom <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
          <Reveal className="mode-card" delay={150}>
            <div className="mode-image-wrap mode-online">
              <Monitor size={28} className="mode-icon-big" />
            </div>
            <div className="mode-body">
              <h3>Online Training</h3>
              <p>Flexible online learning for applicable courses. Study from anywhere while receiving structured guidance and support from our team.</p>
              <p className="mode-address">Contact us to discuss currently available online options.</p>
              <Link className="text-link dark-link" href="/contact">Enquire about online <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Find your option</div>
            <h2 style={{ color: 'var(--navy)' }}>Not Sure Which Format Suits You?</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Tell us about your schedule and goals. Our team will help you choose the right learning option.</p>
            <Link className="button button-blue" href="/contact">Talk to Our Team <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="form-card">
              <div className="form-heading"><span>ENQUIRE NOW</span><h3>Find Your Learning Option</h3></div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

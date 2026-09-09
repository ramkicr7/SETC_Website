import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock3, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Gallery } from '@/components/Gallery';
import { ContactForm } from '@/components/ContactForm';
import { accommodationFeatures, accommodationGallery, accommodationImage, ADDRESS_LINES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Accommodation',
  description: 'Accommodation options for learners in Dubai. Contact SETC to discuss available room options and stay arrangements.',
};

export default function AccommodationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Accommodation</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Your stay</div>
          <h1>Your Stay in Dubai</h1>
          <p>International-standard rooms and considered stay arrangements for learners during their training in Dubai.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <div className="about-image-wrap">
              <Image src={accommodationImage} alt="Accommodation in Dubai" fill sizes="(max-width: 700px) 100vw, 500px" className="about-image" />
            </div>
            <div className="about-badge"><Building2 size={18} /><span>Student accommodation</span></div>
          </Reveal>
          <Reveal className="about-copy" delay={150}>
            <div className="eyebrow"><span /> Accommodation Overview</div>
            <h2>International-standard living in Dubai</h2>
            <p className="lead">A well-chosen room gives learners the calm, comfort and confidence to make the most of their international experience.</p>
            <p>Our accommodation arrangements are designed around the expectations of learners arriving from around the world, with clean, comfortable rooms and practical access to the SETC learning environment.</p>
            <p>Room types, facilities, pricing and availability are confirmed personally by our team so every learner receives clear, reliable information before travelling.</p>
            <div className="accommodation-standard"><Building2 size={14} /> International-standard rooms</div>
            <div style={{ marginTop: 24 }}><Link className="button button-blue" href="#enquire">Enquire About Accommodation <ArrowRight size={17} /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Room gallery</div>
            <h2>Accommodation Gallery</h2>
            <p>A preview of room options. Actual images will be updated when supplied by the client.</p>
          </Reveal>
          <Reveal>
            <Gallery images={accommodationGallery} />
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> What to expect</div>
            <h2>Accommodation Features</h2>
            <p>Options designed to support learners during their stay in Dubai.</p>
          </Reveal>
          <div className="benefit-grid">
            {accommodationFeatures.map((item, i) => (
              <Reveal as="article" key={item.title} className="benefit-card" delay={i * 80}>
                <div className="benefit-icon"><item.icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="enquire" style={{ background: 'var(--paper)' }}>
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Enquire about accommodation</div>
            <h2 style={{ color: 'var(--navy)' }}>Discuss Your Stay</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Contact our team to discuss available accommodation options and stay arrangements in Dubai.</p>
            <Link className="button button-outline" href="/contact">Contact Us <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="form-card">
              <div className="form-heading"><span>ENQUIRE NOW</span><h3>Accommodation Enquiry</h3></div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

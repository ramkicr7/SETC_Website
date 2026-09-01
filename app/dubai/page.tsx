import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Gallery } from '@/components/Gallery';
import { dubaiHighlights, dubaiActivities, dubaiGallery, ADDRESS_LINES, dubaiImage, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Dubai',
  description: 'Experience learning in Dubai — a global hub connecting learners from around the world. SETC is based in Al Barsha, Dubai.',
};

export default function DubaiPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Dubai</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Learning in Dubai</div>
          <h1>Dubai Experience</h1>
          <p>Learn in a city that connects the world. Dubai offers a dynamic, international environment for learners.</p>
        </div>
      </section>

      <section className="dubai-experience" style={{ minHeight: 420 }}>
        <div className="dubai-experience-bg">
          <Image src={dubaiImage} alt="Dubai skyline" fill priority sizes="100vw" className="dubai-experience-img" />
          <div className="dubai-experience-overlay" />
        </div>
        <div className="container dubai-experience-content">
          <Reveal>
            <div className="eyebrow eyebrow-light"><span /> Discover Dubai</div>
            <h2 className="dubai-experience-title">Learn in Dubai<br />Live the Experience</h2>
            <p className="dubai-experience-text">Dubai is a dynamic international hub where learners from many backgrounds come together to study, work and grow. As a Dubai-based training center, SETC is positioned in one of the world&apos;s most connected cities.</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Why Dubai</div>
            <h2>Why Learn in Dubai?</h2>
            <p>A global city that supports international learning and cross-cultural communication.</p>
          </Reveal>
          <div className="benefit-grid">
            {dubaiHighlights.map((item, i) => (
              <Reveal as="article" key={item.title} className="benefit-card" delay={i * 80}>
                <div className="benefit-icon"><item.icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Places to Explore</div>
            <h2>Experience the City</h2>
            <p>Dubai offers a rich environment for learning and personal growth.</p>
          </Reveal>
          <div className="modes-grid">
            {dubaiActivities.map((item, i) => (
              <Reveal as="article" key={item.title} className="benefit-card" delay={i * 100}>
                <div className="benefit-icon"><item.icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Dubai in focus</div>
            <h2>Visual Gallery</h2>
            <p>A glimpse of the city where learning meets international opportunity.</p>
          </Reveal>
          <Reveal>
            <Gallery images={dubaiGallery} />
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Our Location</div>
            <h2>Visit Our Training Center</h2>
            <p>{ADDRESS_LINES.join(', ')}</p>
          </Reveal>
          <Reveal className="map-placeholder">
            <MapPin size={40} />
            <p>Official Google Maps embed will appear here once the verified location link is provided.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="button button-outline" href="https://maps.google.com/?q=Pinnacle+Building+Sheikh+Zayed+Road+Al+Barsha+Dubai" target="_blank" rel="noopener noreferrer">Get Directions <ArrowRight size={16} /></a>
              <a className="button button-blue" href={PHONE_LINK}><Phone size={16} /> {PHONE_NUMBER}</a>
              <a className="button button-outline" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

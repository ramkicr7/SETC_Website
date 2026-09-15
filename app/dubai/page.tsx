import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Gallery } from '@/components/Gallery';
import { GlobalContactSection } from '@/components/layout/GlobalContactSection';
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
            <h2 className="dubai-experience-title">Learn in Dubai<br />Grow in a global city</h2>
            <p className="dubai-experience-text">Dubai brings together cultures, ambition and opportunity. At SETC, your learning experience extends beyond the classroom into one of the world&apos;s most connected and welcoming cities.</p>
          </Reveal>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container dubai-editorial-grid">
          <Reveal className="dubai-editorial-image">
            <Image src={dubaiGallery[1].url} alt={dubaiGallery[1].alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
            <span>Dubai, UAE</span>
          </Reveal>
          <div className="dubai-editorial-copy">
            <Reveal className="section-heading">
              <div><div className="eyebrow"><span /> Why Dubai</div><h2>Why Learn in Dubai?</h2></div>
              <p>A global city that supports international learning and cross-cultural communication.</p>
            </Reveal>
            <div className="dubai-benefit-list">
              {dubaiHighlights.map((item, i) => (
                <Reveal as="article" key={item.title} className="dubai-benefit-item" delay={i * 80}>
                  <div className="benefit-icon"><item.icon size={22} /></div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="dubai-benefit-thumb"><Image src={dubaiGallery[(i + 2) % dubaiGallery.length].url} alt="" fill sizes="100px" /></span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container dubai-city-grid">
          <Reveal className="dubai-city-intro">
            <div className="eyebrow"><span /> Places to Explore</div>
            <h2>Experience the City</h2>
            <p>Dubai offers a rich environment for learning and personal growth.</p>
            <div className="dubai-city-collage">
              <Image src={dubaiGallery[3].url} alt={dubaiGallery[3].alt} fill sizes="(max-width: 900px) 50vw, 300px" />
            </div>
          </Reveal>
          <div className="dubai-activity-list">
            {dubaiActivities.map((item, i) => (
              <Reveal as="article" key={item.title} className="dubai-activity-card" delay={i * 100}>
                <Image src={dubaiGallery[(i + 3) % dubaiGallery.length].url} alt="" fill sizes="(max-width: 700px) 100vw, 48vw" className="dubai-activity-image" />
                <div className="dubai-activity-overlay" />
                <div className="dubai-activity-content"><div className="benefit-icon"><item.icon size={22} /></div><h3>{item.title}</h3><p>{item.text}</p></div>
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

      <GlobalContactSection className="dubai-location-section global-location-section" labelledBy="dubai-location-title">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Our Location</div>
            <h2 id="dubai-location-title">Visit Our Training Center</h2>
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
      </GlobalContactSection>
    </main>
  );
}

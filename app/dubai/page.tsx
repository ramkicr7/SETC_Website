import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, MessageCircle, BookOpen, Plane, Building2, Users, Headphones, Award, Compass, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Gallery } from '@/components/Gallery';
import { GlobalContactSection } from '@/components/layout/GlobalContactSection';
import { dubaiHighlights, dubaiActivities, dubaiGallery, ADDRESS_LINES, dubaiImage, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Dubai',
  description: 'Experience learning in Dubai — a global hub connecting learners from around the world. SETC is based in Al Barsha, Dubai.',
};

const dubaiJourney = [
  { number: '01', title: 'Choose Your Course', text: 'Explore the available learning options and choose the course that matches your goals.', icon: Compass },
  { number: '02', title: 'Prepare for Dubai', text: 'Receive guidance on the information and arrangements to consider before travelling.', icon: Plane },
  { number: '03', title: 'Arrival & Settling In', text: 'Get practical guidance as you arrive and begin settling into your Dubai experience.', icon: MapPin },
  { number: '04', title: 'Accommodation', text: 'Discuss available accommodation information and stay arrangements with the team.', icon: Building2 },
  { number: '05', title: 'Start Your Training', text: 'Begin your selected course with a clear understanding of the available learning options.', icon: BookOpen },
  { number: '06', title: 'Ongoing Student Support', text: 'Stay connected with the team for guidance and assistance during your training.', icon: Users },
  { number: '07', title: 'Complete Your Course', text: 'Finish your course and review your progress and next learning goals.', icon: Award },
  { number: '08', title: 'Next Step / Return Home', text: 'Consider your next opportunity and the direction you want to take after your course.', icon: CheckCircle2 },
];

const supportAreas = [
  { title: 'Pre-arrival guidance', text: 'Information and guidance to help you prepare before travelling to Dubai.', icon: Plane },
  { title: 'Accommodation coordination', text: 'Support discussing available accommodation options and stay arrangements.', icon: Building2 },
  { title: 'Course coordination', text: 'Guidance on course options, learning formats and your training path.', icon: BookOpen },
  { title: 'Student assistance', text: 'A point of contact for general questions and support during your stay.', icon: Headphones },
];

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

      <section className="content-section dubai-journey-section">
        <div className="container">
          <Reveal className="center-heading">
            <div className="eyebrow"><span /> Your Dubai experience</div>
            <h2>Your Journey in Dubai</h2>
            <p>From choosing your course to completing your training, SETC helps you understand the next step.</p>
          </Reveal>
          <div className="dubai-journey-grid">
            {dubaiJourney.map((step, index) => {
              const Icon = step.icon;
              return <Reveal as="article" key={step.number} className="dubai-journey-card" delay={index * 60}><span className="dubai-journey-number">{step.number}</span><div className="dubai-journey-icon"><Icon size={20} /></div><h3>{step.title}</h3><p>{step.text}</p>{step.title === 'Accommodation' && <Link className="text-link dark-link dubai-journey-link" href="/accommodation">Explore accommodation <ArrowRight size={15} /></Link>}</Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--navy)', color: 'white' }}>
        <div className="container dubai-support-layout">
          <Reveal className="dubai-support-intro">
            <div className="eyebrow eyebrow-light"><span /> Student care and support</div>
            <h2>Support Throughout Your Stay</h2>
            <p>Our team can provide guidance, assistance and coordination as you prepare for Dubai, begin your course and work towards completion.</p>
            <Link className="button button-blue" href="/contact">Talk to Our Team <ArrowRight size={17} /></Link>
          </Reveal>
          <div className="dubai-support-list">
            {supportAreas.map((item, index) => { const Icon = item.icon; return <Reveal as="article" key={item.title} className="dubai-support-item" delay={index * 80}><div className="dubai-support-icon"><Icon size={21} /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>; })}
          </div>
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

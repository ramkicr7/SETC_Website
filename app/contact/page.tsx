import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER, ADDRESS_LINES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Students Everywhere Training Center in Dubai. Call or WhatsApp +971 58 589 6200 or send us an enquiry.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Contact</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Get in touch</div>
          <h1>Ready to Take Your Next Step?</h1>
          <p>Tell us what you are working towards. Our team will help you understand the right training options for your needs.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Contact details</div>
            <h2 style={{ color: 'var(--navy)' }}>Talk to Our Team</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Reach out by phone, WhatsApp or the enquiry form. We&apos;ll help you find the right training path.</p>
            <div className="contact-details">
              <a href={PHONE_LINK} style={{ color: 'var(--ink)' }}>
                <div className="contact-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}><Phone size={18} /></div>
                <span><small>Call us</small>{PHONE_NUMBER}</span>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                <div className="contact-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}><MessageCircle size={18} /></div>
                <span><small>WhatsApp</small>{PHONE_NUMBER}</span>
              </a>
              <div className="contact-detail-static" style={{ color: 'var(--ink)' }}>
                <div className="contact-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}><MapPin size={18} /></div>
                <span><small>Visit us</small>{ADDRESS_LINES.join(', ')}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="form-card">
              <div className="form-heading"><span>ENQUIRE NOW</span><h3>Let&apos;s find your path.</h3></div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

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
          <a className="button button-outline" href="https://maps.google.com/?q=Pinnacle+Building+Sheikh+Zayed+Road+Al+Barsha+Dubai" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        </Reveal>
      </section>
    </main>
  );
}

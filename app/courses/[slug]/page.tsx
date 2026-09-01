import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { courses, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: course.title,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/courses">Courses</Link> / <span>{course.title}</span>
          </div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> {course.short}</div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link className="button button-red" href="#enquire">Enquire Now <ArrowRight size={17} /></Link>
            <a className="button button-outline-light" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal>
            <h2 style={{ color: 'var(--navy)', fontSize: 28, fontWeight: 800, letterSpacing: '-.03em', margin: '0 0 20px' }}>About This Course</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>{course.title} at SETC is designed to help learners prepare in a structured and practical way. Our training focuses on developing the relevant skills and confidence needed for your examination or learning goal.</p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 30 }}>Contact our team to discuss current course availability and learning options.</p>

            <h2 style={{ color: 'var(--navy)', fontSize: 22, fontWeight: 800, margin: '30px 0 16px' }}>Learning Options</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'grid', gap: 12 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--ink)', fontSize: 15 }}><Check size={18} style={{ color: 'var(--blue)' }} /> Classroom training in Dubai</li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--ink)', fontSize: 15 }}><Check size={18} style={{ color: 'var(--blue)' }} /> Online training where applicable</li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--ink)', fontSize: 15 }}><Check size={18} style={{ color: 'var(--blue)' }} /> Guidance based on your current level</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="content-section" id="enquire" style={{ background: 'var(--paper)' }}>
        <div className="container contact-grid">
          <Reveal className="contact-info" style={{ color: 'var(--ink)' }}>
            <div className="eyebrow"><span /> Enquire about {course.title}</div>
            <h2 style={{ color: 'var(--navy)' }}>Ready to Get Started?</h2>
            <p style={{ color: 'var(--muted)', margin: '20px 0 30px' }}>Tell us about your goal. Our team will help you understand the available training options.</p>
            <div className="contact-details">
              <a href={PHONE_LINK} style={{ color: 'var(--ink)' }}><div className="contact-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}><Phone size={18} /></div><span><small>Call us</small>{PHONE_NUMBER}</span></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}><div className="contact-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}><MessageCircle size={18} /></div><span><small>WhatsApp</small>{PHONE_NUMBER}</span></a>
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
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { journeySteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Student Journey',
  description: 'Your learning journey at SETC — from first contact to starting your training. A simple, supportive process.',
};

export default function StudentJourneyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Student Journey</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Your path</div>
          <h1>Your Learning Journey</h1>
          <p>A simple, supportive process from first enquiry to starting your training.</p>
        </div>
      </section>

      <section className="content-section section-pad-dark" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <Reveal className="center-heading center-heading-light">
            <div className="eyebrow eyebrow-light"><span /> Step by step</div>
            <h2>From Enquiry to Learning</h2>
            <p>Every learner&apos;s journey starts with a conversation. Here&apos;s how it works.</p>
          </Reveal>
          <div className="journey-timeline-page">
            {journeySteps.map((step, i) => (
              <Reveal as="article" key={step.num} className="journey-step-page" delay={i * 120}>
                <div className="journey-step-num">{step.num}</div>
                <div className="journey-step-line" style={{ display: i < journeySteps.length - 1 ? 'block' : 'none' }} />
                <div className="journey-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span /> Ready to begin</div>
            <h2 style={{ color: 'var(--navy)', fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', margin: '16px 0 20px' }}>Start Your Journey Today</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 30px' }}>Take the first step. Contact our team and we&apos;ll guide you through the rest.</p>
            <Link className="button button-red" href="/contact">Enquire Now <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

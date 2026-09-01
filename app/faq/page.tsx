import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about SETC courses, training options, location and enrolment.',
};

export default function FAQPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>FAQ</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Questions, answered</div>
          <h1>Frequently Asked Questions</h1>
          <p>Here are a few things learners often want to know before they begin.</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <FAQAccordion />
          </Reveal>
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <p style={{ color: 'var(--muted)', marginBottom: 20 }}>Still have a question?</p>
              <Link className="button button-outline" href="/contact">Ask a question <MessageCircle size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

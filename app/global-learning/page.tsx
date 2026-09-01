import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WorldMap } from '@/components/WorldMap';

export const metadata: Metadata = {
  title: 'Global Learning',
  description: 'Skills that take you everywhere. SETC supports learners with international aspirations through English language training and exam preparation.',
};

export default function GlobalLearningPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Global Learning</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> International aspirations</div>
          <h1>Skills That Take You Everywhere</h1>
          <p>Learning can open doors to academic, professional and personal opportunities around the world.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal>
            <div className="eyebrow"><span /> Global learning</div>
            <h2 style={{ color: 'var(--navy)', fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', margin: '16px 0 24px' }}>Connected Learning</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>Language is a bridge between people, cultures and opportunities. At Students Everywhere Training Center, we support learners who want to develop English language skills for international communication, professional growth and personal development.</p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>Our training is designed to help learners build confidence and practical skills — whether the goal is an English language examination, professional communication, or everyday conversation in an international environment.</p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8 }}>Dubai is one of the world&apos;s most international cities. Learning here means being part of a global community of learners, professionals and cultures.</p>
          </Reveal>
        </div>
      </section>

      <WorldMap />

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span /> Start your journey</div>
            <h2 style={{ color: 'var(--navy)', fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', margin: '16px 0 20px' }}>Learn. Grow. Go Everywhere.</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 30px' }}>Take the first step toward your international goals. Explore our courses and learning options.</p>
            <Link className="button button-blue" href="/courses">Explore Courses <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

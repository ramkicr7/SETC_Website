import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'EnglishWise UAE',
  description: 'EnglishWise UAE is a brand focused on English language and test preparation services, including IELTS, PTE, OET and other relevant exams.',
};

export default function EnglishWisePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>EnglishWise</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Associated Brand</div>
          <h1>EnglishWise UAE</h1>
          <p>English language and test preparation services.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container brand-split">
          <Reveal className="brand-visual brand-visual-blue">
            <Image src="/assets/images/brands/Englishwise_UAE.png" alt="EnglishWise UAE" width={320} height={160} className="brand-logo-img" />
          </Reveal>
          <Reveal className="brand-info" delay={150}>
            <div className="eyebrow"><span /> About EnglishWise</div>
            <h2>English Language & Test Preparation</h2>
            <p>EnglishWise UAE is a brand focused on English language and test preparation services. Its offerings may include preparation for examinations such as IELTS, PTE, OET and other relevant English language or professional tests, along with English language skills training.</p>
            <a className="button button-blue" href="https://www.englishwise.ae/" target="_blank" rel="noopener noreferrer">Explore EnglishWise <MoveUpRight size={17} /></a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

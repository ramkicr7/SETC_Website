import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Language Skills Dubai',
  description: 'Language Skills Dubai is a language-focused brand supporting learners who want to develop practical communication and language skills.',
};

export default function LanguageSkillsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Language Skills</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Associated Brand</div>
          <h1>Language Skills Dubai</h1>
          <p>Practical communication and language skills training.</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container brand-split">
          <Reveal className="brand-info">
            <div className="eyebrow"><span /> About Language Skills</div>
            <h2>Develop Practical Language Skills</h2>
            <p>Language Skills Dubai is a language-focused brand supporting learners who want to develop practical communication and language skills. The brand can support relevant English language learning and skills development requirements.</p>
            <Link className="button button-outline" href="/contact">Enquire Now <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="brand-visual brand-visual-light" delay={150}>
            <Image src="/assets/images/brands/Languageskills.png" alt="Language Skills Training Center" width={260} height={190} className="brand-logo-img" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

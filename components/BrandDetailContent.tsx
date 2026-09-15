import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type BrandDetailContentProps = {
  name: string;
  description: string;
  focus: string[];
  officialWebsite?: string;
};

export function BrandDetailContent({ name, description, focus, officialWebsite }: BrandDetailContentProps) {
  return (
    <>
      <section className="content-section brand-detail-overview">
        <div className="container brand-detail-overview-grid">
          <Reveal>
            <div className="eyebrow"><span /> What the brand does</div>
            <h2>{focus.join(' · ')}</h2>
            <p>{description}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="brand-detail-ecosystem-panel">
              <span className="brand-detail-panel-label">SETC ecosystem</span>
              <h3>{name} within SETC</h3>
              <p>This brand sits within the connected SETC ecosystem, giving learners a focused route into the relevant language, examination or international learning area.</p>
              <Link className="text-link dark-link" href="/brands">Explore all brands <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container brand-detail-purpose-grid">
          <Reveal>
            <div className="eyebrow"><span /> Who it is for</div>
            <h2>Focused support for learners</h2>
            <p>Learners exploring {focus.join(', ').toLowerCase()} can use this brand as a focused starting point for understanding the relevant options and next steps.</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="brand-detail-focus-list">
              {focus.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
            </div>
          </Reveal>
        </div>
        <div className="container brand-detail-actions">
          {officialWebsite && <a className="button button-blue" href={officialWebsite} target="_blank" rel="noopener noreferrer">Visit Official Website <ArrowUpRight size={17} /></a>}
          <Link className="button button-outline" href="/contact">Enquire Now <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}

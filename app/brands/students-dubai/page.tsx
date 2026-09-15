import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { BrandDetailContent } from '@/components/BrandDetailContent';
import { brands } from '@/lib/data';

const brand = brands.find((item) => item.name === 'Students Dubai')!;

export const metadata: Metadata = {
  title: 'Students Dubai',
  description: brand.description,
};

export default function StudentsDubaiPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/brands">Brands</Link> / <span>{brand.name}</span></div>
          <div className="eyebrow eyebrow-light" style={{ marginTop: 16 }}><span /> Associated Brand</div>
          <h1>{brand.name}</h1>
          <p>{brand.description}</p>
        </div>
      </section>

      <section className="content-section" style={{ background: 'var(--paper)' }}>
        <div className="container brand-split">
          <Reveal className="brand-info">
            <div className="eyebrow"><span /> About Students Dubai</div>
            <h2>{brand.tagline}</h2>
            <p>{brand.description}</p>
            <div className="brand-focus-tags">
              {brand.focus.map((focus) => <span key={focus} className="brand-focus-tag">{focus}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="button button-blue" href={brand.url} target="_blank" rel="noopener noreferrer">Visit Website <ArrowUpRight size={17} /></a>
              <Link className="button button-outline" href="/brands">All Brands <ArrowRight size={17} /></Link>
            </div>
          </Reveal>
          <Reveal className="brand-visual brand-visual-light" delay={150}>
            <Image src={brand.logo} alt={`${brand.name} logo`} width={260} height={190} className="brand-logo-img" />
          </Reveal>
        </div>
      </section>
      <BrandDetailContent name={brand.name} description={brand.description} focus={brand.focus} officialWebsite={brand.url} />
    </main>
  );
}

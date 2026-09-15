'use client';

import { Globe2 } from 'lucide-react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

const points = [
  { top: '28%', left: '22%', delay: 0 },
  { top: '35%', left: '48%', delay: 400 },
  { top: '42%', left: '72%', delay: 800 },
  { top: '55%', left: '35%', delay: 1200 },
  { top: '50%', left: '82%', delay: 1600 },
  { top: '62%', left: '58%', delay: 2000 },
];

export function WorldMap() {
  return (
    <section className="world-map section-pad-dark">
      <div className="container">
        <Reveal className="center-heading center-heading-light">
          <div className="eyebrow eyebrow-light"><span /> Global aspirations</div>
          <h2>Skills That Take You Everywhere</h2>
          <p>Learning can open doors to academic, professional and personal opportunities around the world.</p>
        </Reveal>
        <Reveal className="map-visual">
          <div className="map-glow" />
          <div className="map-dots">
            {points.map((p, i) => (
              <span key={i} className="map-dot" style={{ top: p.top, left: p.left, animationDelay: `${p.delay}ms` }} />
            ))}
          </div>
          <Image src="/assets/images/gmap.jpg" alt="" fill sizes="(max-width: 700px) 100vw, 1000px" className="map-image" />
          <div className="map-center">
            <Globe2 size={40} />
            <span>Learn. Grow. Go Everywhere.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

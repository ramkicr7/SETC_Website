'use client';

import { Globe2 } from 'lucide-react';
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
          <svg className="map-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g className="world-grid" fill="none" strokeWidth="1">
              {[...Array(12)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 45} x2="1000" y2={i * 45} />)}
              {[...Array(22)].map((_, i) => <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="500" />)}
            </g>
            <g fill="rgba(100,170,230,0.08)" stroke="rgba(120,190,240,0.25)" strokeWidth="1">
              <path d="M150,180 Q200,140 280,160 Q340,150 380,200 Q360,260 290,270 Q220,260 170,240 Z" />
              <path d="M420,150 Q480,120 560,140 Q640,130 680,180 Q660,240 590,250 Q520,240 460,220 Z" />
              <path d="M700,170 Q780,150 850,180 Q880,230 830,270 Q760,260 710,240 Z" />
              <path d="M180,300 Q260,280 320,320 Q300,380 240,390 Q190,370 170,340 Z" />
              <path d="M480,300 Q560,290 620,330 Q600,390 540,400 Q480,380 460,350 Z" />
              <path d="M740,320 Q820,310 870,350 Q850,400 790,410 Q740,390 720,360 Z" />
            </g>
          </svg>
          <div className="map-center">
            <Globe2 size={40} />
            <span>Learn. Grow. Go Everywhere.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

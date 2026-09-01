'use client';

import { type CSSProperties, type ReactNode } from 'react';
import { useReveal } from '@/hooks/use-reveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  style?: CSSProperties;
};

export function Reveal({ children, className = '', delay = 0, as = 'div', style }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function MagneticButton({ children, className = '', href, onClick, strength = 0.25, target, rel, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  if (href) {
    return (
      <a
        ref={ref as never}
        href={href}
        className={`magnetic-btn ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as never}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

import Image from 'next/image';
import type { ReactNode } from 'react';

type GlobalContactSectionProps = {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  id?: string;
};

export function GlobalContactSection({ children, className = '', labelledBy, id }: GlobalContactSectionProps) {
  return (
    <section id={id} className={`global-contact-section ${className}`} aria-labelledby={labelledBy}>
      <Image
        src="/assets/images/gmap.jpg"
        alt=""
        fill
        sizes="100vw"
        className="global-contact-map"
        aria-hidden="true"
      />
      <div className="global-contact-overlay" aria-hidden="true" />
      <div className="global-contact-content">{children}</div>
    </section>
  );
}

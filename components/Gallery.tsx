'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type GalleryImage = { url: string; alt: string };

export function Gallery({ images, className = '' }: { images: GalleryImage[]; className?: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, next, prev]);

  if (images.length === 0) return null;

  return (
    <>
      <div className={`gallery-grid ${className}`}>
        {images.map((img, i) => (
          <button key={img.url} className={`gallery-tile ${i === 0 ? 'gallery-tile-featured' : ''}`} onClick={() => { setIndex(i); setOpen(true); }} aria-label={`Open image ${i + 1}: ${img.alt}`}>
            <Image src={img.url} alt={img.alt} fill sizes={i === 0 ? '(max-width: 700px) 100vw, 600px' : '(max-width: 700px) 50vw, 300px'} className="gallery-img" />
            <div className="gallery-overlay"><span>{i === 0 ? 'View Gallery' : img.alt}</span></div>
          </button>
        ))}
      </div>
      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Close gallery"><X size={24} /></button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image"><ChevronLeft size={28} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image src={images[index].url} alt={images[index].alt} fill sizes="(max-width: 900px) 100vw, 1000px" className="lightbox-img" />
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image"><ChevronRight size={28} /></button>
          <div className="lightbox-counter">{index + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}

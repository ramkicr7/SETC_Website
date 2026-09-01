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
        <button className="gallery-main" onClick={() => { setIndex(0); setOpen(true); }} aria-label="Open gallery">
          <Image src={images[0].url} alt={images[0].alt} fill sizes="(max-width: 700px) 100vw, 600px" className="gallery-img" />
          <div className="gallery-overlay"><span>View Gallery</span></div>
        </button>
        {images.length > 1 && (
          <div className="gallery-thumbs">
            {images.slice(1, 3).map((img, i) => (
              <button key={i} className="gallery-thumb" onClick={() => { setIndex(i + 1); setOpen(true); }} aria-label={`Open image ${i + 2}`}>
                <Image src={img.url} alt={img.alt} fill sizes="(max-width: 700px) 100vw, 300px" className="gallery-img" />
              </button>
            ))}
          </div>
        )}
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

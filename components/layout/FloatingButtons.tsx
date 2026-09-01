'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/data';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="floating-buttons">
      <a
        className="whatsapp-float"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
      </a>
      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs as allFaqs } from '@/lib/data';

export function FAQAccordion({ items = allFaqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? 'is-open' : ''}`} key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{item.q}</span>
            <ChevronDown size={19} />
          </button>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

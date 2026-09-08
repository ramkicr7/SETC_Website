'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, ADDRESS_LINES, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h2>Ready to Take Your Next Step?</h2>
            <p>Start building the language skills and confidence you need for your next opportunity.</p>
          </div>
          <div className="footer-cta-actions">
            <Link className="button button-red" href="/contact">Enquire Now <ArrowRight size={18} /></Link>
            <a className="button button-outline-light" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Chat on WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand brand-footer">
              <Image src="/assets/images/logos/SETC_(1).png" alt="Students Everywhere Training Center" width={56} height={56} />
              <span><strong>Students Everywhere</strong><small>Training Center</small></span>
            </Link>
            <p>A connected education ecosystem bringing together specialised brands across language training, test preparation and international education opportunities.</p>
            <p className="footer-tagline">Learn. Grow. Go Everywhere.</p>
          </div>
          <div className="footer-links">
            <div>
              <span>Quick Links</span>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/learning-options">Learning Options</Link>
              <Link href="/student-journey">Student Journey</Link>
              <Link href="/dubai">Dubai</Link>
              <Link href="/accommodation">Accommodation</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <span>Training</span>
              <Link href="/courses/ielts">IELTS</Link>
              <Link href="/courses/pte">PTE</Link>
              <Link href="/courses/oet">OET</Link>
              <Link href="/courses/naati-ccl">NAATI CCL</Link>
              <Link href="/courses/celpip">CELPIP</Link>
              <Link href="/courses/languagecert">LanguageCert</Link>
              <Link href="/courses/spoken-english">Spoken English</Link>
              <Link href="/courses/english-language-skills">English Language Skills</Link>
            </div>
            <div>
              <span>Contact</span>
              <p>{ADDRESS_LINES.join(', ')}</p>
              <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              <p className="footer-email-pending">Email: to be confirmed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-brands">
          <span>Associated Brands:</span>
          <a href="https://www.studentsdubai.com" target="_blank" rel="noopener noreferrer" className="footer-brand-tag">Students Dubai</a>
          <Link href="/language-skills" className="footer-brand-tag">Language Skills Dubai</Link>
          <a href="https://www.englishwise.ae/" target="_blank" rel="noopener noreferrer" className="footer-brand-tag">EnglishWise UAE</a>
        </div>
        <span>© {new Date().getFullYear()} Students Everywhere Training Center. All rights reserved.</span>
      </div>
    </footer>
  );
}

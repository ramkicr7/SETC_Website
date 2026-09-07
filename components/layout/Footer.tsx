import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, ADDRESS_LINES, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export function Footer() {
  return <footer className="footer setc-footer"><div className="container setc-footer-main"><div className="setc-footer-brand"><Link href="/" className="setc-wordmark"><span className="setc-logo">S</span><span><b>SETC</b><small>Students Everywhere Training Center</small></span></Link><p>A connected education group helping people build skills and move towards global opportunity.</p></div><div className="setc-footer-column"><span>Explore</span><Link href="/about">About SETC</Link><Link href="/englishwise">Our brands</Link><Link href="/courses">Services</Link><Link href="/contact">Contact</Link></div><div className="setc-footer-column"><span>Connect</span><a href={PHONE_LINK}>{PHONE_NUMBER}</a><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} /> WhatsApp</a><p>{ADDRESS_LINES.join(', ')}</p></div></div><div className="container setc-footer-bottom"><span>© {new Date().getFullYear()} SETC. All rights reserved.</span><span>Learn with purpose. Go everywhere.</span><span className="setc-footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><ArrowUpRight size={14} /></span></div></footer>;
}

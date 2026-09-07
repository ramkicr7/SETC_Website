'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [{ label: 'About', href: '/about' }, { label: 'Brands', href: '/englishwise' }, { label: 'Services', href: '/courses' }, { label: 'Contact', href: '/contact' }];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  const transparent = pathname === '/' && !scrolled;
  return <><header className={`setc-header ${transparent ? 'setc-header-transparent' : ''} ${scrolled ? 'setc-header-scrolled' : ''}`}><div className="container setc-nav"><Link href="/" className="setc-wordmark" aria-label="SETC home"><span className="setc-logo">S</span><span><b>SETC</b><small>Students Everywhere Training Center</small></span></Link><nav className="setc-desktop-nav" aria-label="Primary navigation"><Link href="/">Home</Link>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><Link href="/contact" className="setc-nav-cta">Let’s talk <ArrowUpRight size={15} /></Link><button className="setc-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></header>{open && <div className="setc-mobile-menu"><nav aria-label="Mobile navigation"><Link href="/">Home</Link>{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><Link href="/contact" className="setc-button setc-button-light">Start a conversation <ArrowUpRight size={17} /></Link></div>}</>;
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import { navItems, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><span className="topbar-dot" /> Dubai, UAE</span>
          <div className="topbar-links">
            <a href={PHONE_LINK}><Phone size={12} /> {PHONE_NUMBER}</a>
            <span className="topbar-separator" />
            <span>Learn. Grow. Go Everywhere.</span>
          </div>
        </div>
      </div>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${isTransparent ? 'is-transparent' : ''}`}>
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Students Everywhere Training Center home">
            <Image src="/assets/images/logos/SETC_(1).png" alt="Students Everywhere Training Center" width={56} height={56} className="brand-logo" />
            <span><strong>Students Everywhere</strong><small>Training Center</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="nav-item-wrapper"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${pathname === item.href || (item.children?.some(c => c.href === pathname)) ? 'nav-active' : ''} ${item.children ? 'has-dropdown' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="dropdown-chevron" />}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => {
                      const isExternal = child.href.startsWith('http');
                      if (isExternal) {
                        return (
                          <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer">
                            {child.label}
                          </a>
                        );
                      }
                      return (
                        <Link key={child.href} href={child.href} className={pathname === child.href ? 'dropdown-active' : ''}>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link className="button button-small button-blue desktop-cta" href="/contact">Enquire Now <ArrowRight size={16} /></Link>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-slide-menu" onClick={(e) => e.stopPropagation()} aria-label="Mobile navigation">
            <div className="mobile-menu-header">
              <span>Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <div key={item.href} className="mobile-nav-item">
                  {item.children ? (
                    <>
                      <button
                        className="mobile-nav-parent"
                        onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                        aria-expanded={mobileExpanded === item.href}
                      >
                        {item.label}
                        <ChevronDown size={16} className={mobileExpanded === item.href ? 'chevron-rotated' : ''} />
                      </button>
                      {mobileExpanded === item.href && (
                        <div className="mobile-nav-children">
                          <Link href={item.href}>View all {item.label}</Link>
                          {item.children.map((child) => {
                            const isExternal = child.href.startsWith('http');
                            if (isExternal) {
                              return <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer">{child.label}</a>;
                            }
                            return <Link key={child.href} href={child.href}>{child.label}</Link>;
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className={pathname === item.href ? 'mobile-nav-active' : ''}>{item.label}</Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <Link className="button button-blue" href="/contact">Enquire Now <ArrowRight size={16} /></Link>
              <a className="mobile-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

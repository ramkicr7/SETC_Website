'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';
import { navItems, WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER, type NavChild, type NavItem } from '@/lib/data';

function isExternalLink(href: string) {
  return href.startsWith('http');
}

function isItemActive(item: NavItem | NavChild, pathname: string): boolean {
  if (!isExternalLink(item.href) && (pathname === item.href || pathname.startsWith(`${item.href}/`))) return true;
  return item.children?.some((child) => isItemActive(child, pathname)) ?? false;
}

function NavLink({ item, className, children }: { item: NavChild | NavItem; className?: string; children?: ReactNode }) {
  if (isExternalLink(item.href)) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children ?? item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {children ?? item.label}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileNestedExpanded, setMobileNestedExpanded] = useState<string | null>(null);
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
    setMobileNestedExpanded(null);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <div className="topbar">
        <div className="topbar-ticker" aria-label="SETC information">
          <div className="topbar-track">
            {[0, 1].map((loop) => (
              <div className="topbar-marquee-group" aria-hidden={loop === 1} key={loop}>
                <span><span className="topbar-dot" /> Dubai, UAE</span>
                <span className="topbar-separator" />
                <a href={PHONE_LINK}><Phone size={12} /> {PHONE_NUMBER}</a>
                <span className="topbar-separator" />
                <span>Learn. Grow. Go Everywhere.</span>
                <span className="topbar-separator" />
                <Link href="/contact" className="topbar-enquiry">Enquire Now <ArrowRight size={12} /></Link>
              </div>
            ))}
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
                onFocus={() => item.children && setOpenDropdown(item.href)}
              >
                <NavLink
                  item={item}
                  className={`${isItemActive(item, pathname) ? 'nav-active' : ''} ${item.children ? 'has-dropdown' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="dropdown-chevron" />}
                </NavLink>
                {item.children && openDropdown === item.href && (
                  <div className="dropdown-menu" onFocus={() => setOpenDropdown(item.href)}>
                    {item.children.map((child) => {
                      return (
                        <div key={child.href} className="dropdown-row">
                          <NavLink item={child} className={isItemActive(child, pathname) ? 'dropdown-active' : ''}>
                            <span>{child.label}</span>
                            {child.children && <ChevronRight size={14} />}
                          </NavLink>
                          {child.children && (
                            <div className="flyout-menu">
                              {child.children.map((nested) => (
                                <NavLink
                                  key={`${child.href}-${nested.href}-${nested.label}`}
                                  item={nested}
                                  className={`${pathname === nested.href ? 'dropdown-active' : ''} ${nested.groupLabel ? 'flyout-related-link' : ''}`}
                                >
                                  {nested.groupLabel && <small>{nested.groupLabel}</small>}
                                  <span>{nested.label}</span>
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
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
                          <NavLink item={item}>View all {item.label}</NavLink>
                          {item.children.map((child) => {
                            if (!child.children) return <NavLink key={child.href} item={child} />;

                            return (
                              <div key={child.href} className="mobile-nav-nested">
                                <button
                                  className="mobile-nav-subparent"
                                  onClick={() => setMobileNestedExpanded(mobileNestedExpanded === child.href ? null : child.href)}
                                  aria-expanded={mobileNestedExpanded === child.href}
                                >
                                  {child.label}
                                  <ChevronDown size={15} className={mobileNestedExpanded === child.href ? 'chevron-rotated' : ''} />
                                </button>
                                {mobileNestedExpanded === child.href && (
                                  <div className="mobile-nav-grandchildren">
                                    {child.children.map((nested) => (
                                      <NavLink key={`${child.href}-${nested.href}-${nested.label}`} item={nested}>
                                        {nested.groupLabel && <small>{nested.groupLabel}</small>}
                                        <span>{nested.label}</span>
                                      </NavLink>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
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

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

type SiteHeaderProps = {
  logoSrc: string;
  logoAlt: string;
  homeHref?: string;
  navItems: NavItem[];
};

export function SiteHeader({ logoSrc, logoAlt, homeHref = '/', navItems }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderNavItems = (linkClassName: string, sublinkClassName: string) =>
    navItems.map((item) => (
      <li className={`bu-nav-item${item.children?.length ? ' bu-has-children' : ''}`} key={item.href}>
        <Link className={linkClassName} href={item.href}>
          {item.label}
        </Link>
        {item.children && item.children.length > 0 ? (
          <ul className="bu-nav-submenu">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link className={sublinkClassName} href={child.href}>
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    ));

  return (
    <header className={`bu-header${isScrolled ? ' bu-header--scrolled' : ''}`}>
      <style>{`
        .bu-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--color-background);
          border-bottom: 1px solid var(--color-border);
          transition: box-shadow 0.25s ease;
        }
        .bu-header--scrolled {
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        }

        .bu-header-inner {
          margin-inline: auto;
          max-width: 1300px;
          padding-inline: 20px;
          padding-block: 10.5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: padding-block 0.25s ease;
        }
        @media (min-width: 1024px) {
          .bu-header-inner { padding-block: 13px; }
        }
        .bu-header--scrolled .bu-header-inner { padding-block: 7px; }
        @media (min-width: 1024px) {
          .bu-header--scrolled .bu-header-inner { padding-block: 8px; }
        }

        .bu-logo-link { display: inline-flex; align-items: center; flex-shrink: 0; }
        .bu-logo {
          height: 24px;
          width: auto;
          transition: height 0.25s ease;
        }
        @media (min-width: 1024px) {
          .bu-logo { height: 43px; }
        }
        .bu-header--scrolled .bu-logo { height: 20px; }
        @media (min-width: 1024px) {
          .bu-header--scrolled .bu-logo { height: 34px; }
        }

        .bu-toggler {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 32px;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          background: transparent;
          color: var(--color-ui);
          cursor: pointer;
          padding: 0;
        }
        @media (min-width: 1024px) {
          .bu-toggler { display: none; }
        }

        .bu-nav--desktop { display: none; }
        @media (min-width: 1024px) {
          .bu-nav--desktop { display: block; }
        }
        .bu-nav--mobile {
          border-top: 1px solid var(--color-border);
          padding: 16px 20px 20px;
        }
        @media (min-width: 1024px) {
          .bu-nav--mobile { display: none; }
        }

        .bu-nav-list { list-style: none; display: flex; align-items: center; gap: 28px; margin: 0; padding: 0; }
        @media (max-width: 1023px) {
          .bu-nav-list { flex-direction: column; align-items: flex-start; gap: 2px; }
        }

        .bu-nav-item { position: relative; }

        .bu-nav-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 0;
          font-family: var(--font-ui);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-ui);
          text-decoration: none;
          white-space: nowrap;
        }
        .bu-nav-link:hover, .bu-nav-link:focus { color: var(--color-primary); }

        .bu-has-children > .bu-nav-link::after {
          content: '';
          display: inline-block;
          margin-left: 6px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid currentColor;
        }

        .bu-nav-submenu {
          list-style: none;
          margin: 0;
          padding: 8px;
          position: absolute;
          left: 0;
          top: 100%;
          min-width: 200px;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          display: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          z-index: 20;
        }
        .bu-nav-item:hover > .bu-nav-submenu, .bu-nav-item:focus-within > .bu-nav-submenu { display: block; }
        .bu-nav-submenu li { padding: 2px 0; }

        .bu-nav-sublink {
          display: block;
          padding: 8px 12px;
          font-family: var(--font-ui);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--color-ui);
          text-decoration: none;
          white-space: nowrap;
          border-radius: 4px;
        }
        .bu-nav-sublink:hover, .bu-nav-sublink:focus { color: var(--color-primary); }

        @media (max-width: 1023px) {
          .bu-nav-submenu {
            position: static;
            display: block;
            border: none;
            box-shadow: none;
            padding: 0 0 0 16px;
          }
        }
      `}</style>
      <div className="bu-header-inner">
        <Link href={homeHref} className="bu-logo-link" aria-label={logoAlt}>
          <Image src={logoSrc} alt={logoAlt} width={500} height={88} className="bu-logo" priority />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="bu-mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
          className="bu-toggler"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
            <path d="M1 4h16M1 9h16M1 14h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <nav aria-label="Primary" className="bu-nav bu-nav--desktop">
          <ul className="bu-nav-list">{renderNavItems('bu-nav-link', 'bu-nav-sublink')}</ul>
        </nav>
      </div>

      {mobileOpen ? (
        <nav id="bu-mobile-nav" aria-label="Primary mobile" className="bu-nav bu-nav--mobile">
          <ul className="bu-nav-list">{renderNavItems('bu-nav-link', 'bu-nav-sublink')}</ul>
        </nav>
      ) : null}
    </header>
  );
}

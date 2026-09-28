import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { SiteHeader, SiteFooter, CookieConsent } from '@repo/base-ui';

import { HEADER_LOGO, FOOTER_LOGO, NAV_ITEMS, FOOTER_COLUMNS, SOCIAL_LINKS, HEADQUARTERS, COPYRIGHT } from '../lib/site-data';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ansco & Associates, LLC',
    template: '%s | Ansco & Associates, LLC',
  },
  description:
    'Ansco & Associates, LLC is a leading national telecommunications service provider offering OSP construction and maintenance, wireless infrastructure, fiber splicing, and engineering and design services.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <SiteHeader logoSrc={HEADER_LOGO.src} logoAlt={HEADER_LOGO.alt} navItems={NAV_ITEMS} />
        {children}
        <SiteFooter
          logoSrc={FOOTER_LOGO.src}
          logoAlt={FOOTER_LOGO.alt}
          columns={FOOTER_COLUMNS}
          socialLinks={SOCIAL_LINKS}
          contact={
            <>
              <p className="mb-1">{HEADQUARTERS.address}</p>
              <p className="m-0">{HEADQUARTERS.phone}</p>
            </>
          }
          copyright={COPYRIGHT}
        />
        {/* Copy/buttons from migration/captures/anscollc/home/consent.json (Termly banner, captured 2026-09-28).
            The source's "Preferences" button opens a full Termly preference-center modal, which isn't
            replicated here — only Accept/Decline are functionally implemented; see migration report. */}
        <CookieConsent
          storageKey="ansco-cookie-consent"
          acceptLabel="Accept"
          rejectLabel="Decline"
          message={
            <>
              We use essential cookies to make our site work. With your consent, we may also use non-essential
              cookies to improve user experience and analyze website traffic. By clicking &ldquo;Accept,&rdquo; you
              agree to our website&apos;s cookie use as described in our{' '}
              <Link href="/privacy-policy" className="underline">
                Cookie Policy
              </Link>
              .
            </>
          }
        />
      </body>
    </html>
  );
}

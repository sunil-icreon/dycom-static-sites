import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type SocialLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  logoSrc?: string;
  logoAlt?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  contact?: ReactNode;
  copyright: string;
};

export function SiteFooter({ logoSrc, logoAlt, columns = [], socialLinks = [], contact, copyright }: SiteFooterProps) {
  return (
    <footer className="mt-12 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-8 px-6 py-8">
        {logoSrc ? (
          <div>
            <Image src={logoSrc} alt={logoAlt ?? ''} width={140} height={40} style={{ height: 36, width: 'auto' }} />
          </div>
        ) : null}

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-2 font-heading text-sm">{column.title}</h4>
            <ul className="m-0 list-none p-0">
              {column.links.map((link) => (
                <li key={link.href} className="mb-1">
                  <Link href={link.href} className="text-sm text-ink-soft no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {contact ? (
          <div className="text-sm text-ink-soft">
            <h4 className="mb-2 font-heading text-sm">Visit Us Online</h4>
            {contact}
          </div>
        ) : null}

        {socialLinks.length > 0 ? (
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="text-sm text-ink-soft no-underline">
                {social.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-ink-muted">{copyright}</div>
    </footer>
  );
}

import Image from 'next/image';
import type { ReactNode } from 'react';

import { Button } from './button';

type SplitPanelProps = {
  image: { src: string; alt: string };
  imagePosition?: 'left' | 'right';
  /**
   * 'overlay' — full-bleed background photo with the heading/text overlaid on top (used for
   * full-bleed promo panels, e.g. a "who we are"/"careers" triptych or a photo-backed contact section).
   * 'side-by-side' — a plain image next to plain text, both fully visible (used for narrative/history
   * rows and detailed service breakdowns).
   */
  variant?: 'overlay' | 'side-by-side';
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  cta?: { label: string; href: string };
  minHeightClassName?: string;
};

export function SplitPanel({
  image,
  imagePosition = 'left',
  variant = 'side-by-side',
  eyebrow,
  title,
  children,
  cta,
  minHeightClassName = 'min-h-[400px]',
}: SplitPanelProps) {
  const imageFirst = imagePosition === 'left';

  if (variant === 'overlay') {
    return (
      <div className={`relative flex items-end overflow-hidden ${minHeightClassName}`}>
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
        <div className="relative z-10 p-6 text-white md:p-8">
          {eyebrow ? <p className="mb-1 font-ui text-xs font-bold uppercase tracking-wide">{eyebrow}</p> : null}
          {title ? <h3 className="font-heading text-2xl font-semibold">{title}</h3> : null}
          <div className="mt-2 max-w-md">{children}</div>
          {cta ? (
            <div className="mt-4">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-8 ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:w-2/5">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
      <div className="lg:w-3/5">
        {eyebrow ? <p className="mb-1 font-ui text-xs font-bold uppercase tracking-wide text-primary">{eyebrow}</p> : null}
        {title ? <h3 className="font-heading text-2xl font-semibold text-ink">{title}</h3> : null}
        <div className="mt-2 text-ink-soft">{children}</div>
        {cta ? (
          <div className="mt-4">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

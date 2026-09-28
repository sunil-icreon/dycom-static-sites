import Image from 'next/image';
import type { ReactNode } from 'react';

import { Button } from './button';

type MediaHeroBackground = { type: 'image'; src: string; alt?: string } | { type: 'video'; embedSrc: string };

type MediaHeroProps = {
  background: MediaHeroBackground;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: { label: string; href: string };
  /** Overrides the default responsive min-height (`min-h-[420px] md:min-h-[520px] lg:min-h-[640px]`). */
  minHeightClassName?: string;
};

export function MediaHero({ background, eyebrow, title, subtitle, cta, minHeightClassName }: MediaHeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden text-white ${minHeightClassName ?? 'min-h-[420px] md:min-h-[520px] lg:min-h-[640px]'}`}
    >
      <div className="absolute inset-0">
        {background.type === 'image' ? (
          <Image src={background.src} alt={background.alt ?? ''} fill priority sizes="100vw" className="object-cover" />
        ) : (
          <div className="video-bg-wrapper absolute inset-0 overflow-hidden">
            <style>{`
              .video-bg-wrapper iframe {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 177.78vh;
                min-width: 100%;
                height: 56.25vw;
                min-height: 100%;
                transform: translate(-50%, -50%);
                pointer-events: none;
              }
            `}</style>
            <iframe
              src={background.embedSrc}
              title=""
              allow="autoplay; fullscreen"
              frameBorder="0"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6 py-16 text-center">
        {eyebrow ? <p className="mb-2 font-ui text-sm font-bold uppercase tracking-wide">{eyebrow}</p> : null}
        <h1 className="font-heading text-4xl font-semibold md:text-5xl">{title}</h1>
        {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-lg font-light">{subtitle}</p> : null}
        {cta ? (
          <div className="mt-6">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

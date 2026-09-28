import Image from 'next/image';
import type { ReactNode } from 'react';

type MediaTextRowProps = {
  image: { src: string; alt: string };
  title: string;
  children: ReactNode;
};

/**
 * Image-left / text-right row used to stand in for the source site's "Talent
 * Development and Growth" Swiper carousel (see migration/captures/anscollc/life/dom.html,
 * `.benefits-slider` / `.slide-image-column` / `.slide-text-column`), rendered against
 * the same dark band background so the white heading/body text stays legible —
 * SplitPanel's side-by-side variant hardcodes dark text, so it isn't reused here.
 */
export function MediaTextRow({ image, title, children }: MediaTextRowProps) {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="mb-3 font-heading text-2xl font-semibold text-primary-foreground">
          {title}
        </h3>
        <div className="text-lg text-primary-foreground/90">{children}</div>
      </div>
    </div>
  );
}

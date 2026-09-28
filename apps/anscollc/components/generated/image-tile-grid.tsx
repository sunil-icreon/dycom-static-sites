import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type ImageTileItem = {
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

type ImageTileGridProps = {
  items: ImageTileItem[];
  columnsClassName?: string;
  /** 'center' matches the source's hover-reveal tiles (e.g. Careers/Benefits/Life@Ansco);
   * 'left' matches the source's job-category tiles. */
  align?: 'center' | 'left';
};

/**
 * Full-bleed photo tiles with a heading + description overlaid at the bottom, used for the
 * "Careers / Benefits / Life@Ansco" triptych and the "Job Categories" grid on the careers and
 * opportunities pages. The source shows this text only on hover (`nectar-fancy-box[data-style="hover_desc"]`);
 * here it's always visible for a usable static migration.
 */
export function ImageTileGrid({ items, columnsClassName = 'md:grid-cols-3', align = 'left' }: ImageTileGridProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`grid grid-cols-1 gap-6 ${columnsClassName}`}>
      {items.map((item) => {
        const content = (
          <div className="group relative flex min-h-[280px] w-full overflow-hidden rounded-lg">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" aria-hidden="true" />
            <div className={`relative z-10 mt-auto flex w-full flex-col p-6 text-white ${alignClass}`}>
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="m-0 mt-2 text-sm text-white/90">{item.description}</p>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}

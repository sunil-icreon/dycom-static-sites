import Image from 'next/image';
import type { ReactNode } from 'react';

export type FeatureCardItem = {
  title: string;
  description: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

type FeatureCardGridProps = {
  title?: string;
  lead?: ReactNode;
  items: FeatureCardItem[];
  /** Tailwind grid-column classes for the >=md breakpoint. Defaults to a 2-column layout. */
  columnsClassName?: string;
};

export function FeatureCardGrid({ title, lead, items, columnsClassName = 'md:grid-cols-2' }: FeatureCardGridProps) {
  return (
    <section className="py-8">
      {title ? <h2 className="mb-2 font-heading text-2xl font-semibold text-ink md:text-3xl">{title}</h2> : null}
      {lead ? <p className="mb-6 max-w-3xl text-ink-soft">{lead}</p> : null}
      <div className={`grid grid-cols-1 gap-6 ${columnsClassName}`}>
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 rounded-xl border border-border p-6">
            {item.imageSrc ? (
              <Image src={item.imageSrc} alt={item.imageAlt ?? ''} width={64} height={64} className="h-16 w-16 shrink-0 object-contain" />
            ) : null}
            <div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="m-0 text-ink-soft">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';

type DiagonalSectionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Reproduces the source theme's `.diagnol.from-left` panel treatment (see
 * migration/captures/anscollc/safety/dom.html, inline stylesheet): a very faint diagonal
 * wash of the brand red — rgba(176,22,48,.04), i.e. the `--color-primary` token at 4% opacity —
 * covering the top-left half of the section on a hard diagonal line, feathering to transparent
 * past the midline. Used behind the intro/training/RIGHTWAY panels on /safety and /quality.
 */
export function DiagonalSection({ children, className = '' }: DiagonalSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.04] from-0% via-primary/[0.04] via-50% to-transparent to-50%"
      />
      <div className="relative">{children}</div>
    </section>
  );
}

type CheckListProps = {
  items: ReactNode[];
  className?: string;
};

/** Reproduces the source theme's `ul.icon-list.fa-ul` bullet list (FontAwesome check icons). */
export function CheckList({ items, className = '' }: CheckListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="flex gap-2 text-ink-soft">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="mt-1 h-3.5 w-3.5 shrink-0 fill-primary"
          >
            <path d="M7.629 13.233 3.4 9.005l1.4-1.4 2.83 2.828 6.57-6.57 1.4 1.4z" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

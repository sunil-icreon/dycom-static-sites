import type { ReactNode } from 'react';

export type FaqAccordionItem = {
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
  /** Index of the item that should render open by default. Defaults to 0 (first item), matching the source. */
  defaultOpenIndex?: number;
};

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index === defaultOpenIndex}
          className="group overflow-hidden rounded-md border border-border"
        >
          <summary className="cursor-pointer list-none bg-primary px-4 py-3 font-heading font-semibold text-primary-foreground marker:content-none">
            <span className="flex items-center justify-between gap-3">
              {item.question}
              <span aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <div className="border-t border-border px-4 py-3 text-ink-soft">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}

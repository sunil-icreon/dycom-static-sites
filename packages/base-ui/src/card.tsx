import type { ReactNode } from 'react';

type CardProps = {
  title?: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-xl border border-border p-6">
      {title ? <h2 className="font-heading">{title}</h2> : null}
      {children}
    </section>
  );
}

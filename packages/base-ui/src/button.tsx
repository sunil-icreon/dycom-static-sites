import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, href, onClick, type = 'button' }: ButtonProps) {
  const className =
    'inline-flex items-center rounded-md border border-border bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90';

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

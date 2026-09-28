'use client';

import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';

import { Button } from './button';

type MigratedFormProps = {
  children: ReactNode;
  /** The success/confirmation content to show after submit — should mirror what the source site displayed (captured in forms.json), not invented copy. */
  confirmation: ReactNode;
  submitLabel?: string;
  className?: string;
  /**
   * Optional real submission handler (e.g. a server action). When omitted, the form
   * only transitions to its confirmation state client-side — no data is sent anywhere.
   * A migration report should flag that as an outstanding item before go-live.
   */
  onSubmit?: (formData: FormData) => void | Promise<void>;
};

export function MigratedForm({ children, confirmation, submitLabel = 'Submit', className, onSubmit }: MigratedFormProps) {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (onSubmit) {
      await onSubmit(new FormData(event.currentTarget));
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="max-w-xl rounded-md border border-border bg-surface p-6">
        {confirmation}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className ?? 'flex max-w-xl flex-col gap-4'}>
      {children}
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}

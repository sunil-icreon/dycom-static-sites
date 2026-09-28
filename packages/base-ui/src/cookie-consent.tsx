'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type CookieConsentChoice = 'accepted' | 'rejected';

type CookieConsentProps = {
  message: ReactNode;
  acceptLabel?: string;
  rejectLabel?: string;
  privacyHref?: string;
  privacyLabel?: string;
  /** localStorage key used to persist the visitor's choice. Change only if a site needs to isolate its own consent state. */
  storageKey?: string;
  onChoice?: (choice: CookieConsentChoice) => void;
};

/**
 * Wire this in only when a site's capture (`migration/captures/<site-id>/<route>/consent.json`)
 * observed a real cookie-consent banner on the source — copy/buttons should mirror what was captured,
 * not be invented.
 */
export function CookieConsent({
  message,
  acceptLabel = 'Accept',
  rejectLabel,
  privacyHref,
  privacyLabel = 'Privacy Policy',
  storageKey = 'cookie-consent',
  onChoice,
}: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      setVisible(true);
    }
  }, [storageKey]);

  function choose(choice: CookieConsentChoice) {
    window.localStorage.setItem(storageKey, choice);
    setVisible(false);
    onChoice?.(choice);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-between gap-4 border-t border-border bg-background px-6 py-4 font-ui text-xs text-ink shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <p className="m-0 max-w-2xl">
        {message}
        {privacyHref ? (
          <>
            {' '}
            <a href={privacyHref} className="underline">
              {privacyLabel}
            </a>
          </>
        ) : null}
      </p>
      <div className="flex gap-2">
        {rejectLabel ? (
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="rounded-md border border-primary bg-primary px-4 py-2 font-bold text-primary-foreground"
          >
            {rejectLabel}
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="rounded-md border border-primary bg-primary px-4 py-2 font-bold text-primary-foreground"
        >
          {acceptLabel}
        </button>
      </div>
    </div>
  );
}

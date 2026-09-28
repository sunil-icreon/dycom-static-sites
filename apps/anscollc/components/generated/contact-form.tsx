'use client';

import { useState } from 'react';

import { MigratedForm } from '@repo/base-ui';

const REQUEST_TYPES = ['Customer Service', 'General Inquiries', 'Subcontractor'];

const labelClass = 'mb-1 block text-sm font-medium text-ink';
const inputClass =
  'w-full rounded-md border border-border bg-surface px-3 py-2 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-primary';

function RequiredMark() {
  return <span className="text-primary"> *</span>;
}

export function ContactForm() {
  const [requestType, setRequestType] = useState('');

  return (
    <MigratedForm
      className="flex max-w-xl flex-col gap-5"
      submitLabel="Submit"
      confirmation={
        // TODO(migration): placeholder confirmation copy pending a real capture
        <p className="m-0 text-ink">Thank you — we'll be in touch soon.</p>
      }
    >
      <div>
        <label className={labelClass} htmlFor="input_9">
          Request Type
          <RequiredMark />
        </label>
        <select
          id="input_9"
          name="input_9"
          required
          className={inputClass}
          value={requestType}
          onChange={(event) => setRequestType(event.target.value)}
        >
          <option value="">Please select...</option>
          {REQUEST_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {requestType === 'Subcontractor' ? (
          <p className="mt-2 text-sm">
            <a href="/subcontractor-request" className="font-semibold text-primary underline">
              Fill Out Subcontractor Request Here
            </a>
          </p>
        ) : null}
      </div>

      <div>
        <span className={labelClass}>
          Name
          <RequiredMark />
        </span>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <input type="text" name="input_3.3" id="input_3_3" required aria-label="First" placeholder="First" className={inputClass} />
            <p className="mt-1 text-xs text-ink-muted">First</p>
          </div>
          <div>
            <input type="text" name="input_3.6" id="input_3_6" required aria-label="Last" placeholder="Last" className={inputClass} />
            <p className="mt-1 text-xs text-ink-muted">Last</p>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="input_5">
          Phone
          <RequiredMark />
        </label>
        <input type="tel" name="input_5" id="input_5" required placeholder="(999) 999-9999" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="input_6">
          Email
          <RequiredMark />
        </label>
        <input type="email" name="input_6" id="input_6" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="input_7">
          Message
          <RequiredMark />
        </label>
        <textarea name="input_7" id="input_7" required rows={10} className={inputClass} />
      </div>

      {/* g-recaptcha-response is a reCAPTCHA (third-party script) field from the source form —
          intentionally not rendered per migration rules excluding third-party tracking/verification scripts. */}

      <p className="m-0 text-sm text-ink-muted">
        By clicking submit below, you consent to be contacted by Dycom Industries and its subsidiaries at the email
        address and phone number provided in an effort to respond to your inquiry.
      </p>
    </MigratedForm>
  );
}

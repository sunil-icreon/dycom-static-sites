'use client';

import { useEffect, useRef, useState } from 'react';

export type StatCounterItem = {
  value: number;
  label: string;
  suffix?: string;
};

type StatCounterRowProps = {
  items: StatCounterItem[];
  /** Milliseconds for the count-up tween. */
  durationMs?: number;
};

function useCountUp(target: number, active: boolean, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}

function StatCounter({ item, active, durationMs }: { item: StatCounterItem; active: boolean; durationMs: number }) {
  const value = useCountUp(item.value, active, durationMs);
  return (
    <div className="text-center">
      <div className="font-heading text-4xl font-bold text-primary">
        {value}
        {item.suffix ?? ''}
      </div>
      <div className="mt-1 font-ui text-sm text-ink-soft">{item.label}</div>
    </div>
  );
}

export function StatCounterRow({ items, durationMs = 1500 }: StatCounterRowProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {items.map((item) => (
        <StatCounter key={item.label} item={item} active={active} durationMs={durationMs} />
      ))}
    </div>
  );
}

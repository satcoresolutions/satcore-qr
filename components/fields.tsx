import type { ReactNode } from "react";

import { ui } from "@/lib/ui";

export const inputCls = `${ui.input} rounded-lg px-3.5 py-2.5 text-[15px] transition-colors hover:border-border-strong focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`;

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className={ui.label}>
      <span className="text-sm font-medium text-foreground">{label}</span>

      {children}

      {hint ? <span className={ui.hint}>{hint}</span> : null}
    </label>
  );
}

export function Segmented<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={ui.seg}
    >
      {options.map((opt) => {
        const active = opt.value === value;

        return (
          <button
            key={String(opt.value)}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              active
                ? ui.segOn
                : `${ui.segOff} hover:text-foreground`
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

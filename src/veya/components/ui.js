import React from "react";
import { ArrowLeft, Check } from "lucide-react";

/* ---------------------------------------------------------------- typography */

export function Title({ children, size = "lg", className = "" }) {
  // 36/45 for the splash, 30/36 for tab roots, 24/32 for pushed screens.
  const sizes = {
    xl: "text-4xl leading-[45px] tracking-[-0.9px]",
    lg: "text-3xl leading-9 tracking-[-0.75px]",
    md: "text-2xl leading-8 tracking-[-0.6px]",
  };
  return (
    <h1 className={`font-display font-bold text-veya-ink ${sizes[size]} ${className}`}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-lg font-bold leading-7 tracking-[-0.18px] text-veya-ink">
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }) {
  return <p className={`text-base leading-6 text-veya-muted ${className}`}>{children}</p>;
}

export function Hint({ children, className = "" }) {
  return <p className={`text-xs leading-4 text-veya-muted ${className}`}>{children}</p>;
}

export function GroupLabel({ children }) {
  return <p className="text-sm font-semibold leading-5 text-veya-muted">{children}</p>;
}

/* -------------------------------------------------------------------- layout */

export function TopBar({ title, onBack }) {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={onBack}
        aria-label="Geri"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-veya-surface transition active:scale-95"
      >
        <ArrowLeft size={18} className="text-veya-ink" aria-hidden="true" />
      </button>
      <Title size="md">{title}</Title>
    </div>
  );
}

export function Card({ children, className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag className={`rounded-card bg-veya-surface p-5 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Chip({ children, tone = "muted" }) {
  const tones = {
    muted: "bg-veya-surface text-veya-muted",
    solid: "bg-veya-ink text-veya-bg",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------- buttons */

export function PrimaryButton({ children, disabled, className = "", ...rest }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`h-14 w-full rounded-full bg-veya-primary text-base font-semibold text-veya-onPrimary transition active:scale-[0.99] disabled:pointer-events-none disabled:opacity-30 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, danger, className = "", ...rest }) {
  return (
    <button
      type="button"
      className={`h-12 w-full rounded-full bg-veya-surface text-base font-semibold transition active:scale-[0.99] ${
        danger ? "text-veya-primary" : "text-veya-ink"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function TextButton({ children, underline = true, className = "", ...rest }) {
  return (
    <button
      type="button"
      className={`text-sm font-semibold text-veya-ink ${
        underline ? "underline" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------- inputs */

export function ProgressBar({ step, total }) {
  const pct = Math.min(100, Math.round((step / total) * 100));
  return (
    <div
      className="h-1 w-full overflow-hidden rounded-full bg-veya-surface"
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      <div
        className="h-1 rounded-full bg-veya-primary transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/** Selectable card used by every onboarding multi-select. */
export function OptionCard({ title, description, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-start justify-between gap-4 rounded-card p-5 text-left transition active:scale-[0.99] ${
        selected ? "bg-veya-primary" : "bg-veya-surface"
      }`}
    >
      <span className="min-w-0">
        <span
          className={`block text-[17px] font-semibold leading-[25px] ${
            selected ? "text-veya-onPrimary" : "text-veya-ink"
          }`}
        >
          {title}
        </span>
        {description ? (
          <span
            className={`mt-1 block text-sm leading-[22.75px] ${
              selected ? "text-veya-onPrimary/70" : "text-veya-muted"
            }`}
          >
            {description}
          </span>
        ) : null}
      </span>
      {selected ? (
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-veya-onPrimary">
          <Check size={12} strokeWidth={3} className="text-veya-primary" aria-hidden="true" />
        </span>
      ) : null}
    </button>
  );
}

/** Three-way pill group (coach tone, detail, empathy). */
export function SegmentedControl({ options, value, onChange, label }) {
  return (
    <div className="flex gap-2" role="radiogroup" aria-label={label}>
      {options.map((option, index) => {
        const active = index === value;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(index)}
            className={`flex-1 rounded-full py-3 text-sm font-semibold transition ${
              active ? "bg-veya-ink text-veya-bg" : "bg-veya-surface text-veya-muted"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function Switch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors ${
        checked ? "bg-veya-ink" : "bg-veya-border"
      }`}
    >
      <span
        className={`absolute top-1 h-6 w-6 rounded-full bg-veya-bg transition-all ${
          checked ? "left-7" : "left-1"
        }`}
      />
    </button>
  );
}

export function Checkbox({ checked, onChange, children }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center gap-3 rounded-panel bg-veya-surface p-4 text-left"
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border-2 transition ${
          checked ? "border-veya-primary bg-veya-primary" : "border-veya-border"
        }`}
      >
        {checked ? (
          <Check size={14} strokeWidth={3} className="text-veya-onPrimary" aria-hidden="true" />
        ) : null}
      </span>
      <span className="text-sm font-medium leading-[19.25px] text-veya-ink">{children}</span>
    </button>
  );
}

/** Avatar circle with an initial, used for people and the profile header. */
export function Avatar({ name, size = 44 }) {
  const fontSize = size >= 64 ? "text-xl" : "text-[17px]";
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-veya-ink font-bold text-veya-bg ${fontSize}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {name.charAt(0).toLocaleUpperCase("tr-TR")}
    </span>
  );
}

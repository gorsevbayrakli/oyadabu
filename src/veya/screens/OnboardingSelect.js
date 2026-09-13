import React from "react";
import Screen from "../components/Screen";
import {
  Hint,
  Lede,
  OptionCard,
  PrimaryButton,
  ProgressBar,
  Title,
} from "../components/ui";
import { ONBOARDING_STEPS } from "../data";

/**
 * Shared layout for the multi-select onboarding steps (goals, relationships,
 * needs). Each step differs only in its copy, options and extra affordances.
 */
export default function OnboardingSelect({
  step,
  stepLabel,
  title,
  lede,
  hint,
  options,
  selected,
  onToggle,
  extraOption,
  footnote,
  onContinue,
}) {
  return (
    <Screen>
      <div>
        <ProgressBar step={step} total={ONBOARDING_STEPS} />
        <p className="pt-2 text-xs font-medium text-veya-muted">{stepLabel}</p>
      </div>

      <div>
        <Title>{title}</Title>
        <Lede className="pt-3">{lede}</Lede>
        {hint ? <p className="pt-3 text-sm leading-5 text-veya-muted">{hint}</p> : null}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            selected={selected.includes(option.id)}
            onClick={() => onToggle(option.id)}
          />
        ))}
        {extraOption ? (
          <button
            type="button"
            className="h-11 w-full rounded-panel bg-veya-surface text-sm font-semibold text-veya-muted"
          >
            {extraOption}
          </button>
        ) : null}
      </div>

      <div>
        <PrimaryButton disabled={selected.length === 0} onClick={onContinue}>
          Devam et
        </PrimaryButton>
        <Hint className="pt-3 text-center">{footnote}</Hint>
      </div>
    </Screen>
  );
}

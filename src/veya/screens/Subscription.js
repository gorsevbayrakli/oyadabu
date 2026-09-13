import React from "react";
import { Check } from "lucide-react";
import Screen from "../components/Screen";
import { Chip, Hint, Lede, PrimaryButton, TopBar } from "../components/ui";
import { PLANS } from "../data";

export default function Subscription({ nav }) {
  return (
    <Screen gap="gap-6">
      <TopBar title="Abonelik" onBack={nav.back} />

      <Lede>
        Şu an ücretsiz planla gayet iyi gidiyorsun. Daha fazlasını istersen burada.
      </Lede>

      <div className="flex flex-1 flex-col gap-4">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-card bg-veya-surface p-5 ${
              plan.current ? "ring-2 ring-veya-ink" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-bold leading-7 text-veya-ink">{plan.name}</p>
              {plan.current ? <Chip>Mevcut planın</Chip> : null}
            </div>
            <p className="pt-3 text-2xl font-bold leading-8 text-veya-ink">
              {plan.price}
            </p>
            <ul className="pt-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 pt-1.5 first:pt-0">
                  <Check
                    size={14}
                    className="shrink-0 text-veya-muted"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-5 text-veya-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <PrimaryButton>Premium'a göz at</PrimaryButton>
        <Hint className="pt-3 text-center">
          Baskı yok — istediğin zaman geç, istediğin zaman iptal et.
        </Hint>
      </div>
    </Screen>
  );
}

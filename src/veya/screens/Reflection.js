import React from "react";
import Screen from "../components/Screen";
import { Card, Chip, SectionTitle, Title } from "../components/ui";
import { DAILY_PROMPT, PAST_REFLECTIONS } from "../data";

export default function Reflection({ nav, store, tabProps }) {
  // User-written reflections come first, then the seeded history.
  const past = [...store.state.reflections, ...PAST_REFLECTIONS];

  return (
    <Screen gap="gap-6" {...tabProps}>
      <Title>Yansıma</Title>

      <button
        type="button"
        onClick={() => nav.go("daily-reflection")}
        className="w-full rounded-card bg-veya-ink p-5 text-left transition active:scale-[0.99]"
      >
        <p className="text-xs font-semibold uppercase leading-4 tracking-[0.3px] text-veya-bg/60">
          Bugünün sorusu
        </p>
        <p className="pt-2 text-lg font-semibold leading-[24.75px] text-veya-bg">
          {DAILY_PROMPT.question}
        </p>
        <p className="pt-2 text-sm leading-5 text-veya-bg/70">Yansımanı yaz →</p>
      </button>

      <div className="flex items-center justify-between">
        <SectionTitle>Geçmiş yansımalar</SectionTitle>
        <span className="text-sm font-semibold text-veya-muted">Zaman çizelgesi</span>
      </div>

      <div className="flex flex-col gap-3">
        {past.map((entry) => (
          <Card key={entry.id}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                {entry.title}
              </p>
              <span className="shrink-0 text-xs text-veya-muted">{entry.when}</span>
            </div>
            <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
              {entry.body}
            </p>
          </Card>
        ))}
      </div>

      <Card
        as="button"
        onClick={() => nav.go("patterns")}
        className="flex w-full items-center justify-between gap-4 text-left transition active:scale-[0.99]"
      >
        <span>
          <span className="block text-[17px] font-semibold leading-[25px] text-veya-ink">
            Kalıpların
          </span>
          <span className="block text-sm leading-5 text-veya-muted">
            Tekrar eden iletişim örüntülerin
          </span>
        </span>
        <Chip>3 yeni</Chip>
      </Card>
    </Screen>
  );
}

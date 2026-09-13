import React from "react";
import Screen from "../components/Screen";
import { Card, Hint, Lede, TopBar } from "../components/ui";
import { PATTERNS } from "../data";

export default function Patterns({ nav }) {
  return (
    <Screen gap="gap-6">
      <TopBar title="Sende tekrar edenler" onBack={nav.back} />

      <Lede>
        Bunlar not değil, sadece fark ettiklerimiz. Kendine karşı nazik ol.
      </Lede>

      <div className="flex flex-1 flex-col gap-3">
        {PATTERNS.map((pattern) => (
          <Card key={pattern.id} className="flex items-start gap-4">
            <p className="shrink-0 text-2xl font-bold leading-8 text-veya-ink">
              {pattern.metric}
            </p>
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                {pattern.title}
              </p>
              <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
                {pattern.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Hint className="leading-[19.5px]">
        Kalıplar en az 5 analizden sonra oluşmaya başlar ve yeni analizlerle
        güncellenir.
      </Hint>
    </Screen>
  );
}

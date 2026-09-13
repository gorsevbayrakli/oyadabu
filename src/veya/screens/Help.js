import React from "react";
import { MessageCircleHeart } from "lucide-react";
import Screen from "../components/Screen";
import { Card, Hint, PrimaryButton, TopBar } from "../components/ui";
import { FAQ } from "../data";

export default function Help({ nav }) {
  return (
    <Screen gap="gap-6">
      <TopBar title="Yardım ve destek" onBack={nav.back} />

      <div className="flex items-start gap-3">
        <MessageCircleHeart
          size={22}
          className="mt-1 shrink-0 text-veya-muted"
          aria-hidden="true"
        />
        <p className="text-base leading-6 text-veya-muted">
          Aklına takılan bir şey mi var? En çok sorulanları aşağıda topladık —
          bulamazsan bize yaz, gerçek insanlar yanıtlar.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {FAQ.map((item) => (
          <Card key={item.id}>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              {item.question}
            </p>
            <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
              {item.answer}
            </p>
          </Card>
        ))}
      </div>

      <div>
        <PrimaryButton>Bize yaz</PrimaryButton>
        <Hint className="pt-3 text-center">
          Genellikle aynı gün içinde dönüş yaparız.
        </Hint>
      </div>
    </Screen>
  );
}

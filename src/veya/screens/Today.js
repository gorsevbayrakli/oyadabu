import React from "react";
import Screen from "../components/Screen";
import {
  Card,
  Chip,
  Hint,
  Lede,
  PrimaryButton,
  SectionTitle,
  Title,
} from "../components/ui";
import { DAILY_PROMPT } from "../data";

export default function Today({ nav, store, tabProps }) {
  const recent = store.state.conversations.slice(0, 3);

  return (
    <Screen {...tabProps}>
      <div>
        <p className="text-sm font-semibold leading-5 text-veya-muted">Merhaba</p>
        <Title className="pt-2">Aklında ne var?</Title>
        <Lede className="pt-2">
          Bir konuşmaya birlikte bakalım ya da günü kısa bir yansımayla kapatalım.
        </Lede>
      </div>

      <div>
        <PrimaryButton onClick={() => nav.go("new-analysis")}>
          Bir konuşmaya birlikte bakalım
        </PrimaryButton>
        <Hint className="pt-2 text-center">
          Yargı yok — paylaştığın her şey sende kalır.
        </Hint>
      </div>

      <Card
        as="button"
        onClick={() => nav.go("daily-reflection")}
        className="w-full text-left transition active:scale-[0.99]"
      >
        <Chip>Günlük yansıma</Chip>
        <p className="pt-2 text-[17px] font-semibold leading-[25px] text-veya-ink">
          {DAILY_PROMPT.question}
        </p>
        <p className="pt-2 text-sm leading-[22.75px] text-veya-muted">
          İki dakika ayır; günü biraz daha hafif bir zihinle kapat.
        </p>
      </Card>

      <Card
        as="button"
        onClick={() => nav.go("patterns")}
        className="w-full text-left transition active:scale-[0.99]"
      >
        <Chip>Bu hafta</Chip>
        <p className="pt-2 text-[17px] font-semibold leading-[25px] text-veya-ink">
          Kısa yanıtları olumsuz okuma eğilimin azalıyor. Güzel gidiyorsun.
        </p>
        <p className="pt-2 text-sm leading-5 text-veya-muted">
          Kalıplarının tamamını gör →
        </p>
      </Card>

      <div>
        <div className="flex items-center justify-between">
          <SectionTitle>Birlikte baktıklarımız</SectionTitle>
          <button
            type="button"
            onClick={() => nav.go("conversations")}
            className="text-sm font-semibold text-veya-muted"
          >
            Tümü
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-3">
          {recent.map((conversation) => (
            <Card
              key={conversation.id}
              as="button"
              onClick={() => nav.go("conversation", { id: conversation.id })}
              className="w-full text-left transition active:scale-[0.99]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                  {conversation.title}
                </p>
                <span className="shrink-0 text-xs text-veya-muted">
                  {conversation.when}
                </span>
              </div>
              <p className="pt-1 text-sm leading-5 text-veya-muted">
                {conversation.person} · {conversation.relation}
              </p>
            </Card>
          ))}
          {recent.length === 0 ? (
            <Card>
              <p className="text-sm leading-5 text-veya-muted">
                Henüz birlikte baktığımız bir konuşma yok.
              </p>
            </Card>
          ) : null}
        </div>
      </div>
    </Screen>
  );
}

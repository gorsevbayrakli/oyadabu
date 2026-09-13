import React from "react";
import { Search } from "lucide-react";
import Screen from "../components/Screen";
import { Card, Chip, Title } from "../components/ui";

export default function Conversations({ nav, store, tabProps }) {
  const { conversations } = store.state;

  return (
    <Screen gap="gap-6" {...tabProps}>
      {/* The design includes a search screen but no entry point to it;
          the conversation list header is the natural home for one. */}
      <div className="flex items-center justify-between gap-4">
        <Title>Sohbetler</Title>
        <button
          type="button"
          onClick={() => nav.go("search")}
          aria-label="Ara"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-veya-surface transition active:scale-95"
        >
          <Search size={18} className="text-veya-ink" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {conversations.map((conversation) => (
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
            <p className="truncate pt-2 text-sm leading-[22.75px] text-veya-ink">
              {conversation.excerpt}
            </p>
            <div className="pt-3">
              <Chip>{conversation.tag}</Chip>
            </div>
          </Card>
        ))}

        {conversations.length === 0 ? (
          <Card>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              Henüz bir sohbet yok
            </p>
            <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
              Alttaki + düğmesiyle ilk konuşmana birlikte bakalım.
            </p>
          </Card>
        ) : null}
      </div>
    </Screen>
  );
}

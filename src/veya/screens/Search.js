import React, { useMemo, useState } from "react";
import Screen from "../components/Screen";
import { Card, GroupLabel, Hint, TopBar } from "../components/ui";
import { SEARCH_INSIGHTS } from "../data";

const normalise = (value) => value.toLocaleLowerCase("tr-TR");

export default function Search({ nav, store }) {
  const [query, setQuery] = useState("");

  const { conversations, insights } = useMemo(() => {
    const q = normalise(query.trim());
    if (!q) {
      return { conversations: store.state.conversations, insights: SEARCH_INSIGHTS };
    }
    return {
      conversations: store.state.conversations.filter((item) =>
        [item.title, item.person, item.relation, item.excerpt]
          .map(normalise)
          .some((field) => field.includes(q))
      ),
      insights: SEARCH_INSIGHTS.filter((item) => normalise(item.title).includes(q)),
    };
  }, [query, store.state.conversations]);

  return (
    <Screen gap="gap-6">
      <TopBar title="Ne arıyorsun?" onBack={nav.back} />

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Bir isim, bir konuşma ya da bir içgörü yaz…"
        aria-label="Arama"
        autoFocus
        className="h-14 w-full rounded-panel bg-veya-surface px-5 text-base text-veya-ink outline-none ring-2 ring-veya-focus"
      />

      <div>
        <GroupLabel>Konuşmalar</GroupLabel>
        <div className="flex flex-col gap-2 pt-2">
          {conversations.map((conversation) => (
            <Card
              key={conversation.id}
              as="button"
              onClick={() => nav.go("conversation", { id: conversation.id })}
              className="w-full text-left transition active:scale-[0.99]"
            >
              <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                {conversation.title}
              </p>
              <p className="text-sm leading-5 text-veya-muted">
                {conversation.person} · {conversation.when}
              </p>
            </Card>
          ))}
          {conversations.length === 0 ? (
            <Card>
              <p className="text-sm leading-5 text-veya-muted">
                Eşleşen bir konuşma bulunamadı.
              </p>
            </Card>
          ) : null}
        </div>
      </div>

      <div>
        <GroupLabel>İçgörüler</GroupLabel>
        <div className="flex flex-col gap-2 pt-2">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              as="button"
              onClick={() => nav.go("patterns")}
              className="w-full text-left transition active:scale-[0.99]"
            >
              <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                {insight.title}
              </p>
            </Card>
          ))}
          {insights.length === 0 ? (
            <Card>
              <p className="text-sm leading-5 text-veya-muted">
                Eşleşen bir içgörü bulunamadı.
              </p>
            </Card>
          ) : null}
        </div>
      </div>

      <Hint className="text-center">Aramaların yalnızca sende kalır.</Hint>
    </Screen>
  );
}

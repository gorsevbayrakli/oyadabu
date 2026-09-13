import React, { useState } from "react";
import Screen from "../components/Screen";
import {
  Card,
  Chip,
  Hint,
  SecondaryButton,
  TextButton,
  TopBar,
} from "../components/ui";
import { CONVERSATION_TABS } from "../data";

/**
 * Only the "Konuşma" tab is specified in the design; the other four tabs are
 * shown with an honest placeholder rather than invented analysis content.
 */
function TabPanel({ tab, conversation }) {
  if (tab === "Konuşma") {
    return (
      <div className="flex flex-col gap-3">
        {conversation.messages.map((message, index) => (
          <div key={index} className={message.mine ? "pl-8" : ""}>
            <div
              className={`rounded-card p-5 ${
                message.mine
                  ? "bg-veya-ink"
                  : "bg-veya-bg shadow-[0_0_0_1px_#1f2a26]"
              }`}
            >
              <p
                className={`text-xs font-semibold leading-4 ${
                  message.mine ? "text-veya-bg/60" : "text-veya-muted"
                }`}
              >
                {message.from} · {message.time}
              </p>
              <p
                className={`pt-1 text-base leading-6 ${
                  message.mine ? "text-veya-bg" : "text-veya-ink"
                }`}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Card>
      <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
        {tab} hazırlanıyor
      </p>
      <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
        Bu bölüm bu konuşma için henüz oluşturulmadı. Analiz tamamlandığında
        burada görünecek.
      </p>
    </Card>
  );
}

export default function Conversation({ nav, store }) {
  const conversation = store.state.conversations.find(
    (item) => item.id === nav.params.id
  );
  const [tab, setTab] = useState(CONVERSATION_TABS[0]);

  if (!conversation) {
    return (
      <Screen gap="gap-6">
        <TopBar title="Konuşma" onBack={nav.back} />
        <Card>
          <p className="text-sm leading-[22.75px] text-veya-muted">
            Bu konuşma silinmiş olabilir.
          </p>
        </Card>
      </Screen>
    );
  }

  const acknowledged = store.state.acknowledgedSensitive.includes(conversation.id);

  const remove = () => {
    store.deleteConversation(conversation.id);
    nav.back();
  };

  return (
    <Screen gap="gap-6">
      <TopBar title={conversation.title} onBack={nav.back} />

      <div className="flex flex-wrap items-center gap-2">
        <Chip>{conversation.person}</Chip>
        <Chip>{conversation.relation}</Chip>
        <Chip>{conversation.when}</Chip>
      </div>

      {conversation.sensitive && !acknowledged ? (
        <div className="rounded-card border border-veya-border bg-veya-bg p-5">
          <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
            Hassas içerik uyarısı
          </p>
          <p className="py-2 text-sm leading-[22.75px] text-veya-muted">
            Bu konuşma kişisel olabilecek ifadeler içeriyor. İçerik yalnızca senin
            hesabında saklanır.
          </p>
          <TextButton onClick={() => store.acknowledgeSensitive(conversation.id)}>
            Anladım
          </TextButton>
        </div>
      ) : null}

      <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-1">
        {CONVERSATION_TABS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            aria-pressed={tab === item}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === item
                ? "bg-veya-ink text-veya-bg"
                : "bg-veya-surface text-veya-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex-1">
        <TabPanel tab={tab} conversation={conversation} />
      </div>

      <div>
        <SecondaryButton danger onClick={remove}>
          Konuşmayı sil
        </SecondaryButton>
        <Hint className="pt-3 leading-[19.5px]">
          Silinen konuşmalar geri alınamaz ve tüm analizleriyle birlikte kaldırılır.
        </Hint>
      </div>
    </Screen>
  );
}

import React, { useState } from "react";
import Screen from "../components/Screen";
import { Lede, PrimaryButton, TopBar } from "../components/ui";
import { DAILY_PROMPT } from "../data";

export default function DailyReflection({ nav, store }) {
  const [body, setBody] = useState("");

  const save = () => {
    store.addReflection(body.trim());
    nav.go("reflection");
  };

  return (
    <Screen gap="gap-6">
      <TopBar title="Günlük yansıma" onBack={nav.back} />

      <div>
        <p className="text-xl font-bold leading-[27.5px] text-veya-ink">
          {DAILY_PROMPT.question}
        </p>
        <Lede className="pt-2">{DAILY_PROMPT.help}</Lede>
      </div>

      <div className="flex-1">
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Aklından geçenleri olduğu gibi yaz…"
          aria-label="Yansıman"
          className="h-[300px] w-full resize-none rounded-card bg-veya-surface p-5 text-base leading-[26px] text-veya-ink outline-none focus:ring-2 focus:ring-veya-focus"
        />
      </div>

      <PrimaryButton disabled={!body.trim()} onClick={save}>
        Kaydet
      </PrimaryButton>
    </Screen>
  );
}

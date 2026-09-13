import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import Screen from "../components/Screen";
import { Lede, TopBar } from "../components/ui";
import { COACH_INTRO_MESSAGES } from "../data";

/**
 * The coach reply is a canned acknowledgement — there is no model behind this
 * build. It is deliberately generic so it never poses as real analysis.
 */
const CANNED_REPLY =
  "Bunu paylaştığın için teşekkürler. Biraz daha anlat: o an tam olarak ne hissettin?";

export default function Coach({ nav, store }) {
  const [draft, setDraft] = useState("");
  const endRef = useRef(null);
  const messages = [...COACH_INTRO_MESSAGES, ...store.state.coachMessages];

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [store.state.coachMessages.length]);

  const send = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    store.addCoachMessage({ id: `m-${Date.now()}`, mine: true, text });
    setDraft("");
    window.setTimeout(
      () =>
        store.addCoachMessage({
          id: `m-${Date.now()}-c`,
          mine: false,
          text: CANNED_REPLY,
        }),
      600
    );
  };

  return (
    <Screen gap="gap-4">
      <TopBar title="Koçun" onBack={nav.back} />
      <Lede className="text-sm leading-5">
        Yargı yok, doğru cevap yok. Konuştuklarınız sende kalır.
      </Lede>

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[308px] rounded-panel px-4 py-3 ${
                message.mine ? "bg-veya-ink" : ""
              }`}
            >
              <p
                className={`text-base leading-[26px] ${
                  message.mine ? "text-veya-bg" : "text-veya-ink"
                }`}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <p className="text-xs leading-[19.5px] text-veya-muted">
        Koçun bir yapay zekâdır ve yanılabilir; terapinin yerini tutmaz.
      </p>

      <form className="flex items-center gap-2" onSubmit={send}>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Aklındakini yaz ya da bir ekran görüntüsü paylaş…"
          aria-label="Mesajın"
          className="h-12 flex-1 rounded-full bg-veya-surface px-5 text-base text-veya-ink outline-none focus:ring-2 focus:ring-veya-focus"
        />
        <button
          type="submit"
          aria-label="Gönder"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-veya-ink transition active:scale-95"
        >
          <Send size={18} className="text-veya-bg" aria-hidden="true" />
        </button>
      </form>
    </Screen>
  );
}

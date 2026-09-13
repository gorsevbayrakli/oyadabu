import React from "react";
import { ChevronRight } from "lucide-react";
import Screen from "../components/Screen";
import { Avatar, Card, GroupLabel, Hint, Title } from "../components/ui";
import { USER } from "../data";

function Row({ title, description, onClick }) {
  return (
    <Card
      as="button"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-4 text-left transition active:scale-[0.99]"
    >
      <span className="min-w-0">
        <span className="block text-[17px] font-semibold leading-[25px] text-veya-ink">
          {title}
        </span>
        <span className="block text-sm leading-5 text-veya-muted">{description}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-veya-muted" aria-hidden="true" />
    </Card>
  );
}

function Group({ label, children }) {
  return (
    <div>
      <GroupLabel>{label}</GroupLabel>
      <div className="flex flex-col gap-2 pt-2">{children}</div>
    </div>
  );
}

export default function Profile({ nav, store, tabProps }) {
  const people = store.state.people
    .slice(0, 2)
    .map((person) => `${person.name} (${person.relation})`)
    .join(", ");

  const signOut = () => {
    store.reset();
    nav.go("splash");
  };

  return (
    <Screen {...tabProps}>
      <div className="flex items-center gap-4">
        <Avatar name={USER.name} size={64} />
        <div className="min-w-0">
          <Title size="md">Merhaba {USER.name}</Title>
          <p className="text-sm leading-5 text-veya-muted">{USER.email}</p>
        </div>
      </div>

      <Group label="Senin dünyan">
        <Row
          title="İlişki profilleri"
          description={people || "Henüz kişi eklemedin"}
          onClick={() => nav.go("people")}
        />
        <Row
          title="Koçunun tarzı"
          description="Üslubu ve detay seviyesi"
          onClick={() => nav.go("coach-style")}
        />
      </Group>

      <Group label="Tercihlerin">
        <Row
          title="Bildirimler"
          description="Doğru anda küçük dokunuşlar"
          onClick={() => nav.go("notifications")}
        />
        <Row
          title="Gizlilik ve veriler"
          description="Verilerin senin, kontrol de"
          onClick={() => nav.go("privacy")}
        />
      </Group>

      <Group label="Diğer">
        <Row
          title="Abonelik"
          description="Şu an ücretsiz plandasın"
          onClick={() => nav.go("subscription")}
        />
        <Row
          title="Yardım ve destek"
          description="Aklına takılan her şey için"
          onClick={() => nav.go("help")}
        />
      </Group>

      <div>
        <Hint className="pb-3 text-center">
          Burada değiştirdiğin her şey yalnızca senin deneyimini etkiler.
        </Hint>
        <button
          type="button"
          onClick={signOut}
          className="w-full text-center text-sm font-semibold text-veya-primary"
        >
          Çıkış yap
        </button>
      </div>
    </Screen>
  );
}

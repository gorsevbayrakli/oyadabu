import React from "react";
import Screen from "../components/Screen";
import { Avatar, Card, Chip, Lede, SecondaryButton, TopBar } from "../components/ui";

export default function People({ nav, store }) {
  const { people } = store.state;

  const addPerson = () => {
    const name = window.prompt("Kişinin adı");
    if (!name || !name.trim()) return;
    const relation = window.prompt("İlişkiniz (ör. Arkadaşım)") || "Başka biri";
    store.addPerson({
      id: `p-${Date.now()}`,
      name: name.trim(),
      relation: relation.trim(),
      analyses: 0,
    });
  };

  return (
    <Screen gap="gap-6">
      <TopBar title="İlişki profilleri" onBack={nav.back} />

      <Lede>
        Kimin kim olduğunu bilirsek analizlerin çok daha isabetli olur. Bu bilgi
        tamamen sende kalır.
      </Lede>

      <div className="flex flex-1 flex-col gap-3">
        {people.map((person) => (
          <Card key={person.id} className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Avatar name={person.name} />
              <div className="min-w-0">
                <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                  {person.name}
                </p>
                <p className="text-sm leading-5 text-veya-muted">
                  {person.analyses} analiz
                </p>
              </div>
            </div>
            <Chip>{person.relation}</Chip>
          </Card>
        ))}
      </div>

      <SecondaryButton onClick={addPerson}>Kişi ekle</SecondaryButton>
    </Screen>
  );
}

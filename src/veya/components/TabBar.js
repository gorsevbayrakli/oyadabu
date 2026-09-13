import React from "react";
import { BookOpen, House, MessageCircle, Plus, User } from "lucide-react";

const TABS = [
  { id: "today", label: "Bugün", Icon: House },
  { id: "conversations", label: "Sohbetler", Icon: MessageCircle },
  { id: "reflection", label: "Yansıma", Icon: BookOpen },
  { id: "profile", label: "Profil", Icon: User },
];

function TabButton({ tab, active, onClick }) {
  const { label, Icon } = tab;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-veya-ink" : "text-veya-muted"
      }`}
    >
      <Icon size={24} strokeWidth={active ? 2.25 : 2} aria-hidden="true" />
      <span className="text-[11px] font-semibold">{label}</span>
    </button>
  );
}

export default function TabBar({ active, onChange, onCompose }) {
  const [left, right] = [TABS.slice(0, 2), TABS.slice(2)];
  return (
    <nav
      aria-label="Alt gezinme"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-veya-border bg-veya-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 w-full max-w-app items-center justify-between px-6">
        {left.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            active={active === tab.id}
            onClick={() => onChange(tab.id)}
          />
        ))}
        <button
          type="button"
          onClick={onCompose}
          aria-label="Yeni analiz"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-veya-primary shadow-lg shadow-black/20 transition active:scale-95"
        >
          <Plus size={28} className="text-veya-onPrimary" aria-hidden="true" />
        </button>
        {right.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            active={active === tab.id}
            onClick={() => onChange(tab.id)}
          />
        ))}
      </div>
    </nav>
  );
}

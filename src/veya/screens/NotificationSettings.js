import React from "react";
import Screen from "../components/Screen";
import { Card, Hint, Lede, Switch, TopBar } from "../components/ui";
import { NOTIFICATION_SETTINGS } from "../data";

export default function NotificationSettings({ nav, store }) {
  return (
    <Screen gap="gap-6">
      <TopBar title="Bildirimler" onBack={nav.back} />

      <Lede>
        Doğru anda küçük bir dokunuş — rahatsız etmeden. Hepsini istediğin an
        kapatabilirsin.
      </Lede>

      <div className="flex flex-col gap-3">
        {NOTIFICATION_SETTINGS.map((item) => (
          <Card key={item.id} className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
                {item.title}
              </p>
              <p className="pt-0.5 text-sm leading-5 text-veya-muted">
                {item.description}
              </p>
            </div>
            <Switch
              label={item.title}
              checked={store.state.notifications[item.id]}
              onChange={(value) => store.setNotification(item.id, value)}
            />
          </Card>
        ))}
      </div>

      <Hint className="text-center">
        Sessiz saatlerde (22:00–08:00) hiçbir şey göndermeyiz.
      </Hint>
    </Screen>
  );
}

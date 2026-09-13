import React from "react";
import { ShieldCheck } from "lucide-react";
import Screen from "../components/Screen";
import { Card, Hint, Lede, SecondaryButton, Switch, TopBar } from "../components/ui";

export default function PrivacySettings({ nav, store }) {
  const deleteEverything = () => {
    store.reset();
    nav.go("splash");
  };

  return (
    <Screen gap="gap-6">
      <TopBar title="Gizlilik ve veriler" onBack={nav.back} />

      <Lede>
        Verilerin senin. Kimseyle paylaşılmaz, istediğin an indirebilir ya da
        silebilirsin.
      </Lede>

      <Card className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
            İsimleri gizle
          </p>
          <p className="pt-0.5 text-sm leading-5 text-veya-muted">
            Analizlerde gerçek isimler yerine takma ad kullan
          </p>
        </div>
        <Switch
          label="İsimleri gizle"
          checked={store.state.hideNames}
          onChange={(value) => store.update({ hideNames: value })}
        />
      </Card>

      <div className="flex items-start gap-3 rounded-panel bg-veya-surface px-4 py-3">
        <ShieldCheck
          size={18}
          className="mt-0.5 shrink-0 text-veya-muted"
          aria-hidden="true"
        />
        <p className="text-sm leading-5 text-veya-muted">
          Konuşmaların yalnızca analiz için işlenir; reklam için asla kullanılmaz.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SecondaryButton>Verilerimi indir</SecondaryButton>
        <SecondaryButton danger onClick={deleteEverything}>
          Tüm verilerimi sil
        </SecondaryButton>
      </div>

      <Hint className="leading-[19.5px]">
        Verilerin silinmesi tüm konuşmalarını, analizlerini, yansımalarını ve
        kalıplarını kalıcı olarak kaldırır.
      </Hint>
    </Screen>
  );
}

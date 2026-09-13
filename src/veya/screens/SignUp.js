import React from "react";
import { CircleEqual } from "lucide-react";
import { AppleLogo, GoogleLogo } from "../components/BrandIcons";
import Screen from "../components/Screen";
import { Chip, Lede, Title } from "../components/ui";

function SocialButton({ Icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-veya-border bg-veya-bg text-base font-semibold text-veya-ink transition active:scale-[0.99]"
    >
      <Icon size={18} />
      {children}
    </button>
  );
}

export default function SignUp({ nav }) {
  const next = () => nav.go("onboarding-goals");

  return (
    <Screen gap="gap-0">
      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-[28px] bg-veya-primary">
          <CircleEqual size={26} className="text-veya-onPrimary" aria-hidden="true" />
        </div>
        <Title className="pt-6">Hadi başlayalım</Title>
        <Lede className="pt-3 leading-[26px]">
          30 saniye sürer — sonra sana özel bir koç seçeceğiz. Konuşmaların
          cihazında güvende kalır.
        </Lede>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <SocialButton Icon={AppleLogo} onClick={next}>
          Apple ile devam et
        </SocialButton>
        <div className="pt-3">
          <SocialButton Icon={GoogleLogo} onClick={next}>
            Google ile devam et
          </SocialButton>
        </div>

        <div className="flex items-center gap-3 pt-5">
          <span className="h-px flex-1 bg-veya-border" />
          <span className="text-xs text-veya-muted">veya</span>
          <span className="h-px flex-1 bg-veya-border" />
        </div>

        <button
          type="button"
          onClick={next}
          className="mt-5 h-12 w-full rounded-full bg-veya-surface/60 text-base font-semibold text-veya-muted transition active:scale-[0.99]"
        >
          E-posta ile devam et
        </button>

        <div className="flex justify-center gap-2 pt-5">
          <Chip>Kart gerekmez</Chip>
          <Chip>30 sn kurulum</Chip>
          <Chip>İstediğinde sil</Chip>
        </div>
      </div>

      <p className="text-center text-xs leading-[19.5px] text-veya-muted">
        Devam ederek{" "}
        <span className="text-sm font-semibold text-veya-ink underline">
          Gizlilik Koşulları
        </span>
        'nı kabul etmiş olursun.
      </p>
    </Screen>
  );
}

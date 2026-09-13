import React from "react";
import OnboardingSelect from "./OnboardingSelect";
import Screen from "../components/Screen";
import {
  Card,
  Checkbox,
  Hint,
  Lede,
  PrimaryButton,
  ProgressBar,
  SegmentedControl,
  TextButton,
  Title,
} from "../components/ui";
import {
  COACH_DIALS,
  GOALS,
  NEEDS,
  NOTIFICATION_INTRO,
  ONBOARDING_STEPS,
  PRIVACY_PROMISES,
  RELATIONSHIPS,
} from "../data";

export function OnboardingGoals({ nav, store }) {
  return (
    <OnboardingSelect
      step={1}
      stepLabel="Adım 1 / 7"
      title="Neyi başarmak istiyorsun?"
      lede="Sana en doğru koçu ve yolu seçebilmemiz için."
      hint="Yanlış cevap yok — birden fazla seçebilirsin."
      options={GOALS}
      selected={store.state.goals}
      onToggle={(id) => store.toggleIn("goals", id)}
      footnote="Bunu istediğin zaman değiştirebilirsin."
      onContinue={() => nav.go("onboarding-relationship")}
    />
  );
}

export function OnboardingRelationship({ nav, store }) {
  return (
    <OnboardingSelect
      step={2}
      stepLabel="Adım 2 / 7"
      title="Kiminle olan iletişimin?"
      lede="Bu bilgi tamamen sende kalır; sadece analizleri isabetli kılmak için."
      options={RELATIONSHIPS}
      selected={store.state.relationships}
      onToggle={(id) => store.toggleIn("relationships", id)}
      extraOption="Başka biri"
      footnote="Sonradan başka ilişkiler de ekleyebilirsin."
      onContinue={() => nav.go("onboarding-needs")}
    />
  );
}

export function OnboardingNeeds({ nav, store }) {
  return (
    <OnboardingSelect
      step={3}
      stepLabel="Adım 3 / 7"
      title="Sana en çok ne iyi gelir?"
      lede="İçinden geçeni seç; buradan sonrasını birlikte kurarız."
      hint="Birden fazlasını seçmen çok normal."
      options={NEEDS}
      selected={store.state.needs}
      onToggle={(id) => store.toggleIn("needs", id)}
      footnote="İstediğin zaman değiştirebilirsin."
      onContinue={() => nav.go("onboarding-coach")}
    />
  );
}

export function OnboardingCoach({ nav, store }) {
  const dials = COACH_DIALS.filter((dial) => !dial.settingsOnly);
  return (
    <Screen>
      <div>
        <ProgressBar step={5} total={ONBOARDING_STEPS} />
        <p className="pt-2 text-xs font-medium text-veya-muted">Adım 5 / 7</p>
      </div>

      <div>
        <Title>Sana nasıl bir koç iyi gelir?</Title>
        <Lede className="pt-3">
          Nasıl konuşulmasını istediğini sen söyle; biz ona göre ayarlayalım.
        </Lede>
      </div>

      <div className="flex flex-1 flex-col gap-8">
        {dials.map((dial) => (
          <div key={dial.id}>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              {dial.onboardingTitle}
            </p>
            <p className="text-sm leading-5 text-veya-muted">
              {dial.onboardingDescription}
            </p>
            <div className="pt-3">
              <SegmentedControl
                label={dial.onboardingTitle}
                options={dial.onboardingOptions || dial.options}
                value={store.state.coachStyle[dial.id]}
                onChange={(value) => store.setCoachDial(dial.id, value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <PrimaryButton onClick={() => nav.go("onboarding-privacy")}>
          Devam et
        </PrimaryButton>
        <Hint className="pt-3 text-center">
          İstediğin zaman ayarlardan değiştirebilirsin.
        </Hint>
      </div>
    </Screen>
  );
}

export function OnboardingPrivacy({ nav, store }) {
  const { dataConsent } = store.state;
  return (
    <Screen>
      <div>
        <ProgressBar step={6} total={ONBOARDING_STEPS} />
        <p className="pt-2 text-xs font-medium text-veya-muted">Adım 6 / 7</p>
      </div>

      <div>
        <Title>Anlattıkların burada kalır</Title>
        <Lede className="pt-3">
          Açılabilmek için güven gerekir. Sana söz verdiklerimiz şunlar:
        </Lede>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {PRIVACY_PROMISES.map((promise) => (
          <Card key={promise.id}>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              {promise.title}
            </p>
            <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
              {promise.description}
            </p>
          </Card>
        ))}

        <Checkbox
          checked={dataConsent}
          onChange={(value) => store.update({ dataConsent: value })}
        >
          Konuşmalarımın bana yardımcı olmak için işlenmesini kabul ediyorum.
        </Checkbox>

        <p className="text-xs leading-[19.5px] text-veya-muted">
          VeYa bir terapi ya da tıbbi tavsiye aracı değildir. Analizler
          olasılıklara dayanır ve hatalı olabilir.
        </p>
      </div>

      <div>
        <PrimaryButton
          disabled={!dataConsent}
          onClick={() => nav.go("onboarding-notifications")}
        >
          Kabul ediyorum
        </PrimaryButton>
        <Hint className="pt-3 text-center">
          Kararını sonradan ayarlardan geri alabilirsin.
        </Hint>
      </div>
    </Screen>
  );
}

export function OnboardingNotifications({ nav, store }) {
  const finish = (allowed) => {
    store.update({ onboarded: true, notificationsAllowed: allowed });
    nav.go("today");
  };

  return (
    <Screen>
      <div>
        <ProgressBar step={7} total={ONBOARDING_STEPS} />
        <p className="pt-2 text-xs font-medium text-veya-muted">Son adım</p>
      </div>

      <div>
        <Title>Her şey hazır. Hadi başlayalım.</Title>
        <Lede className="pt-3">
          Doğru anda küçük bir dokunuş — istediğin zaman kapatabilirsin.
        </Lede>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {NOTIFICATION_INTRO.map((item) => (
          <Card key={item.id}>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              {item.title}
            </p>
            <p className="pt-1 text-sm leading-[22.75px] text-veya-muted">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <div>
        <PrimaryButton onClick={() => finish(true)}>
          Bildirimlere izin ver
        </PrimaryButton>
        <div className="pt-5 text-center">
          <TextButton onClick={() => finish(false)}>Şimdilik geç</TextButton>
        </div>
      </div>
    </Screen>
  );
}

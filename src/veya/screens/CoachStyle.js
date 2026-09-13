import React from "react";
import Screen from "../components/Screen";
import { Lede, PrimaryButton, SegmentedControl, TopBar } from "../components/ui";
import { COACH_DIALS } from "../data";

export default function CoachStyle({ nav, store }) {
  return (
    <Screen gap="gap-6">
      <TopBar title="Koçunun tarzı" onBack={nav.back} />

      <Lede>
        Koçun sana nasıl konuşsun? Burada seçtiklerin tüm analizlere ve sohbetlere
        yansır — istediğin an değiştirebilirsin.
      </Lede>

      <div className="flex flex-1 flex-col gap-8">
        {COACH_DIALS.map((dial) => (
          <div key={dial.id}>
            <p className="text-[17px] font-semibold leading-[25px] text-veya-ink">
              {dial.title}
            </p>
            <p className="text-sm leading-5 text-veya-muted">{dial.description}</p>
            <div className="pt-3">
              <SegmentedControl
                label={dial.title}
                options={dial.options}
                value={store.state.coachStyle[dial.id]}
                onChange={(value) => store.setCoachDial(dial.id, value)}
              />
            </div>
          </div>
        ))}
      </div>

      <PrimaryButton onClick={nav.back}>Kaydet</PrimaryButton>
    </Screen>
  );
}

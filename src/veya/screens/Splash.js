import React from "react";
import { CircleEqual } from "lucide-react";
import Screen from "../components/Screen";
import { Lede, PrimaryButton, TextButton, Title } from "../components/ui";

export default function Splash({ nav }) {
  return (
    <Screen gap="gap-0">
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-veya-primary">
          <CircleEqual size={36} strokeWidth={2.25} className="text-veya-onPrimary" aria-hidden="true" />
        </div>
        <div className="flex w-full flex-col items-center">
          {/* Sits on one line at design width; still wraps on narrow phones. */}
          <Title size="xl" className="text-center">
            Netlik burada başlar.
          </Title>
          <Lede className="mt-4 max-w-[320px] text-center leading-[26px]">
            VeYa, kafa karıştıran konuşmaları anlamana ve ne söyleyeceğini bulmana
            yardımcı olan yapay zekâ koçundur.
          </Lede>
        </div>
      </div>
      <div>
        <PrimaryButton onClick={() => nav.go("signup")}>Başla</PrimaryButton>
        <div className="pt-5 text-center">
          <TextButton onClick={() => nav.go("today")}>Zaten bir hesabım var</TextButton>
        </div>
      </div>
    </Screen>
  );
}

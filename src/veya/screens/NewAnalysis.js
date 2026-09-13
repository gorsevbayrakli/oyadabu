import React, { useState } from "react";
import Screen from "../components/Screen";
import { OptionCard, PrimaryButton, TopBar } from "../components/ui";
import { ANALYSIS_SOURCES } from "../data";

export default function NewAnalysis({ nav, tabProps }) {
  const [source, setSource] = useState(null);

  return (
    <Screen {...tabProps}>
      <TopBar title="Ne analiz edelim?" onBack={nav.back} />

      <div className="flex flex-1 flex-col gap-3">
        {ANALYSIS_SOURCES.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
            selected={source === option.id}
            onClick={() => setSource(option.id)}
          />
        ))}
      </div>

      <PrimaryButton disabled={!source} onClick={() => nav.go("coach")}>
        Devam et
      </PrimaryButton>
    </Screen>
  );
}

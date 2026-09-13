import React from "react";
import Ambient from "./Ambient";
import TabBar from "./TabBar";

/**
 * Page frame shared by every screen: dark ground, ambient glow, and a centred
 * 448px column with the design's 56px top inset. `tab` renders the bottom
 * navigation and reserves room for it.
 */
export default function Screen({ children, tab, onTabChange, onCompose, gap = "gap-8" }) {
  return (
    <div className="relative flex min-h-screen min-h-[100dvh] w-full justify-center bg-veya-bg">
      <Ambient />
      <div
        className={`relative flex w-full max-w-app flex-col ${gap} px-6 pt-14 ${
          tab
            ? "pb-[calc(8rem+env(safe-area-inset-bottom))]"
            : "pb-[calc(2.5rem+env(safe-area-inset-bottom))]"
        }`}
      >
        {children}
      </div>
      {tab ? (
        <TabBar active={tab} onChange={onTabChange} onCompose={onCompose} />
      ) : null}
    </div>
  );
}

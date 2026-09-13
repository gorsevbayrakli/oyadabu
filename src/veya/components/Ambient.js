import React from "react";

/**
 * The three blurred colour blobs that sit behind every VeYa screen.
 * Positions/sizes drift a little frame to frame in Figma; these are the
 * averaged values, expressed relative to the 448px content column.
 */
export default function Ambient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-[338px] -top-[109px] h-[391px] w-[587px] rounded-full bg-veya-primary/15 blur-[100px]" />
      <div className="absolute left-[277px] top-[312px] h-[349px] w-[349px] rounded-full bg-veya-blue/10 blur-[98px]" />
      <div className="absolute -left-[133px] top-[515px] h-[385px] w-[385px] rounded-full bg-veya-primary/10 blur-[110px]" />
    </div>
  );
}

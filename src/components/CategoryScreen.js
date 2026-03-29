import React from "react";
import { CATEGORIES } from "../data/questions";
import Logo from "./Logo";

export default function CategoryScreen({ onSelect }) {
  return (
    <div className="flex flex-col h-screen bg-white font-outfit overflow-hidden">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center pt-10 pb-6 px-6">
        <Logo size={72} />
        <span className="text-2xl font-semibold text-brand-dark mt-2">oyadabu</span>
        <p className="text-brand-dark text-lg font-semibold mt-4">kategorini seç</p>
      </div>

      {/* Category list — staggered layout */}
      <div className="flex flex-col gap-3 px-4 flex-1 overflow-y-auto pb-8">
        {CATEGORIES.map((cat, i) => {
          const width = 100 - i * 3;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              style={{ backgroundColor: cat.color, width: `${width}%` }}
              className="flex items-center justify-between px-6 py-6 rounded-2xl text-white font-semibold text-2xl transition-transform active:scale-95"
            >
              <span>{cat.emoji} {cat.label}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}

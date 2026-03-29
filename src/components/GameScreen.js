import React, { useState, useRef } from "react";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebase/config";
import { ITEMS, CATEGORIES } from "../data/questions";

export default function GameScreen({ categoryId, onDone, onBack }) {
  const items = ITEMS[categoryId];
  const totalRounds = items.length - 1;
  const category = CATEGORIES.find((c) => c.id === categoryId);

  const [top, setTop] = useState(items[0]);
  const [bottom, setBottom] = useState(items[1]);
  const [nextIndex, setNextIndex] = useState(2);
  const [round, setRound] = useState(1);
  const [locked, setLocked] = useState(false);

  // Animation state
  const [chosenCard, setChosenCard] = useState(null); // 'top' | 'bottom'
  const [exitDir, setExitDir] = useState(0); // -1 left, 1 right

  const touchStart = useRef(null);

  const progress = ((round - 1) / totalRounds) * 100;

  async function choose(card, direction) {
    if (locked) return;
    setLocked(true);
    setChosenCard(card);
    setExitDir(direction);

    const chosenText = card === "top" ? top : bottom;
    const lostText   = card === "top" ? bottom : top;

    try {
      const matchId = `${categoryId}__${chosenText.slice(0, 25)}__vs__${lostText.slice(0, 25)}`;
      await setDoc(doc(db, "votes", matchId), { wins: increment(1) }, { merge: true });
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      if (nextIndex >= items.length) {
        onDone(chosenText);
        return;
      }
      const challenger = items[nextIndex];
      if (card === "top") setBottom(challenger);
      else setTop(challenger);
      setNextIndex(i => i + 1);
      setRound(r => r + 1);
      setChosenCard(null);
      setExitDir(0);
      setLocked(false);
    }, 480);
  }

  // top → sağa swipe (dx > 0), bottom → sola swipe (dx < 0)
  function makeSwipeHandlers(card) {
    const validSwipe = (dx, dy) => {
      if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return false;
      if (card === "top" && dx > 0) return true;
      if (card === "bottom" && dx < 0) return true;
      return false;
    };
    const dir = card === "top" ? 1 : -1;
    return {
      onTouchStart(e) {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      },
      onTouchEnd(e) {
        if (!touchStart.current) return;
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        touchStart.current = null;
        if (validSwipe(dx, dy)) choose(card, dir);
      },
      onMouseDown(e) {
        touchStart.current = { x: e.clientX, y: e.clientY };
      },
      onMouseUp(e) {
        if (!touchStart.current) return;
        const dx = e.clientX - touchStart.current.x;
        const dy = e.clientY - touchStart.current.y;
        touchStart.current = null;
        if (validSwipe(dx, dy)) choose(card, dir);
      },
      onMouseLeave() {
        touchStart.current = null;
      },
    };
  }

  function cardStyle(card) {
    const isChosen   = chosenCard === card;
    const isRejected = chosenCard !== null && !isChosen;
    return {
      transition: "transform 0.42s ease-in, opacity 0.38s ease",
      transform: isChosen
        ? `translateX(${exitDir * 120}%)`
        : "translateX(0)",
      opacity: isRejected ? 0 : 1,
      backgroundColor: card === "top" ? "#4dd395" : "#f8be3d",
    };
  }

  return (
    <div className="flex flex-col h-screen bg-white font-outfit select-none overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 shrink-0">
        <button onClick={onBack} className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-brand-dark font-semibold">{category?.emoji} {category?.label}</span>
        <span className="text-brand-dark font-semibold text-sm">{round}/{totalRounds}</span>
      </div>

      {/* Top card */}
      <div
        className="flex-1 mx-4 rounded-3xl flex flex-col items-start justify-between p-6"
        style={cardStyle("top")}
        {...makeSwipeHandlers("top")}
      >
        <p className="text-white font-semibold text-2xl leading-snug">{top}</p>
        {/* Sağ ok — sağa swipe */}
        <div className="self-end flex items-center gap-2 opacity-70">
          <span className="text-white text-sm font-semibold">swipe</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M14 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center justify-center py-3 shrink-0">
        <span className="text-brand-dark font-semibold text-3xl">hangisi?</span>
      </div>

      {/* Bottom card */}
      <div
        className="flex-1 mx-4 rounded-3xl flex flex-col items-start justify-between p-6"
        style={cardStyle("bottom")}
        {...makeSwipeHandlers("bottom")}
      >
        <p className="text-white font-semibold text-2xl leading-snug">{bottom}</p>
        {/* Sol ok — sola swipe */}
        <div className="self-start flex items-center gap-2 opacity-70">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white text-sm font-semibold">swipe</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-4 my-4 h-3 bg-gray-100 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: "#79b9e9" }}
        />
      </div>
    </div>
  );
}

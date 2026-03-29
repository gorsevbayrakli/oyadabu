import React, { useState } from "react";
import CategoryScreen from "./components/CategoryScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import { CATEGORIES } from "./data/questions";

export default function App() {
  const [screen, setScreen] = useState("category");
  const [category, setCategory] = useState(null);
  const [winner, setWinner] = useState(null);

  function handleSelectCategory(id) {
    setCategory(id);
    setWinner(null);
    setScreen("game");
  }

  function handleDone(winnerItem) {
    setWinner(winnerItem);
    setScreen("result");
  }

  function handleRestart() {
    setWinner(null);
    setScreen("category");
  }

  const categoryLabel = CATEGORIES.find((c) => c.id === category)?.label || "";

  if (screen === "category") {
    return <CategoryScreen onSelect={handleSelectCategory} />;
  }

  if (screen === "game") {
    return (
      <GameScreen
        key={category}
        categoryId={category}
        onDone={handleDone}
        onBack={handleRestart}
      />
    );
  }

  if (screen === "result") {
    return (
      <ResultScreen
        winner={winner}
        categoryLabel={categoryLabel}
        onRestart={handleRestart}
      />
    );
  }
}

import { render, screen } from "@testing-library/react";
import App from "./App";

test("ilk açılışta karşılama ekranını gösterir", () => {
  window.localStorage.clear();
  render(<App />);
  expect(screen.getByText("Netlik burada başlar.")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Başla" })).toBeInTheDocument();
});

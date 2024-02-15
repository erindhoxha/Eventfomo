import React from "react";
import ThemeToggle from "./ThemeToggle";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("loads and displays greeting", async () => {
  render(<ThemeToggle />);

  await userEvent.click(screen.getByText("Toggle theme"));

  expect(screen.getByText("Dark")).toBeInTheDocument();
  expect(screen.getByText("Light")).toBeInTheDocument();
  expect(screen.getByText("System")).toBeInTheDocument();
});

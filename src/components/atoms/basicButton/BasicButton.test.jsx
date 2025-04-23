import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BasicButton from "./BasicButton";
import "@testing-library/jest-dom/vitest";

describe("BasicButton", () => {
  it("renders with the correct label", () => {
    render(<BasicButton label="1" />);
    //test label prop
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    let clickedLabel = null;

    const handleClick = (label) => {
      clickedLabel = label;
    };
    render(<BasicButton label="1" onClick={handleClick} />);
    const button = screen.getByText("1");
    fireEvent.click(button);
    expect(clickedLabel).toBe("1");
  });
});

import React from "react";
//render - mounts the component in a virtual DOM
//screen - provides access to the rendered component
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BasicButton from "../basicButton";
import "@testing-library/jest-dom/vitest";

describe("BasicButton", () => {
  
  // Test case 1
  it("renders with the correct label", () => {
    render(<BasicButton label="1" />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  //Test case 2
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

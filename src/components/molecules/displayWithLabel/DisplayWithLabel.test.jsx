import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import DisplayWithLabel from "./DisplayWithLabel";

describe("DisplayWithLabel", () => {
  it("renders label and value correctly", () => {
    render(<DisplayWithLabel label="Result" value="123" />);

    const label = screen.getByText("Result:");
    expect(label).toBeInTheDocument();

    const input = screen.getByDisplayValue("123");
    expect(input).toBeInTheDocument();
  });
});

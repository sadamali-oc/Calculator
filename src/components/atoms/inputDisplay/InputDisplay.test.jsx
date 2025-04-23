import React from "react";
import { render, screen } from "@testing-library/react";
import InputDisplay from "../inputDisplay/InputDisplay";
import "@testing-library/jest-dom/vitest"; 

describe("InputDisplay", () => {
  it("renders input with correct value", () => {
    render(<InputDisplay value="1" disabled={false} />);
    const inputElement = screen.getByDisplayValue("1");
    expect(inputElement).toBeInTheDocument(); 
  });
});

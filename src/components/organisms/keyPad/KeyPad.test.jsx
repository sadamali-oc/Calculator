import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Keypad from "./KeyPad"; 
import { vi } from "vitest"; 
import '@testing-library/jest-dom'; 


describe("Keypad Component", () => {
  it("renders number buttons correctly", () => {
    render(<Keypad onButtonClick={() => {}} onOperation={() => {}} />);
    const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "C"];
    buttons.forEach((button) => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  it("operation button clicks trigger the onOperation correctly", () => {
    const onOperation = vi.fn();
    render(<Keypad onButtonClick={() => {}} onOperation={onOperation} />);
    fireEvent.click(screen.getByText("+"));
    expect(onOperation).toHaveBeenCalledWith("+");
  });

});

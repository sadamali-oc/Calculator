import React from "react";
import { render, screen } from "@testing-library/react";
import InputDisplay from "../inputDisplay";
import "@testing-library/jest-dom/vitest";

describe("InputDisplay", () => {

  //Test case 1
  it("renders input with correct value", () => {
    render(<InputDisplay value="1" disabled={false} />);
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
});

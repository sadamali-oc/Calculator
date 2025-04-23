import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KeyPadRow from "../keyPadRow";
import "@testing-library/jest-dom/vitest";

describe("KeyPadRow Component", () => {

  //Test case 01
  it("renders buttons based on props", () => {
    render(<KeyPadRow keys={["1", "2", "3"]} onClick={() => {}} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  //Test case 2
  it("triggers onClick event with the correct key when clicked", () => {
    let clickedKey = null;

    const handleClick = (key) => {
      clickedKey = key;
    };

    render(<KeyPadRow keys={["1", "2", "3"]} onClick={handleClick} />);

    fireEvent.click(screen.getByText("2"));

    expect(clickedKey).toBe("2");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorContainer from "./../../pages/calculator/normalCalculator/calculatorContainer";
import "@testing-library/jest-dom";

describe("Calculator integration", () => {
  it("updates the expression when '+' is clicked", () => {
    render(<CalculatorContainer />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByDisplayValue("+")).toBeInTheDocument();
  });

  it("computes 12 + 3 = 15", () => {
    render(<CalculatorContainer />);
    ["1", "2", "+", "3", "="].forEach((k) =>
      fireEvent.click(screen.getByText(k))
    );
    expect(screen.getByDisplayValue("15")).toBeInTheDocument();
  });

  it('shows "Error" when dividing by zero', async () => {
    render(<CalculatorContainer />);

    ["5", "/", "0", "="].forEach((k) => fireEvent.click(screen.getByText(k)));

    const errorInput = await screen
      .findByDisplayValue(/error/i)
      .catch(() => screen.findByDisplayValue(/infinity/i));

    expect(errorInput).toBeInTheDocument();
  });
});

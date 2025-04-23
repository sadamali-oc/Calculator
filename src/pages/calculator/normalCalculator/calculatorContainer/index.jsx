import React, { useState } from "react";
import Keypad from "../../../../components/organisms/keypad";
import DisplayWithLabel from "../../../../components/molecules/displayWithLabel";
import CalculatorTemplate from "../../../../components/templates/calculatorTemplate";
import { evaluate } from "mathjs";

const CalculatorContainer = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (key) => {
    if (key === "C") {
      setExpression("");
      setResult("");
    } else if (key === "=") {
      try {
        const safeResult = evaluate(expression);
        setResult(safeResult);
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + key);
    }
  };

  const expressionDisplay = (
    <DisplayWithLabel
      label="Expression"
      value={expression}
      testId="Expression"
    />
  );

  const resultDisplay = (
    <DisplayWithLabel label="Output" value={result} testId="Result" 
  
    />
  );

  const keypad = (
    <Keypad onButtonClick={handleButtonClick} onOperation={handleButtonClick} />
  );

  return (
    <CalculatorTemplate
      title="Calculator"
      expressionDisplay={expressionDisplay}
      resultDisplay={resultDisplay}
      keypad={keypad}
    />
  );
};

export default CalculatorContainer;

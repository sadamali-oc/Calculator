import React, { useState } from "react";
import Keypad from "../keypad";
import DisplayWithLabel from "../../molecules/displayWithLabel";
import CalculatorTemplate from "../../templates/calculatorTemplate";
import { evaluate } from "mathjs";

const CalculatorContainer = () => {
  const [expression, setExpression] = useState(""); 
  const [result, setResult] = useState("");        

  const handleButtonClick = (key) => {
    if (key === "C") {
      setExpression("");  
      setResult("");      
    } else if (key === "CE") {
      setExpression((prev) => prev.slice(0, -1));  
    } else if (key === "=") {
      try {
        const safeResult = evaluate(expression);
        setResult(safeResult);
        setExpression("");    
      } catch (error) {
        setResult("Error");   
        setExpression("");    
      }
    } else {
      setExpression((prev) => prev + key); 
    }
  };

  const displayValue = `${expression} ${result ?  result : ""}`;

  // Keypad for all the buttons
  const keypad = (
    <Keypad onButtonClick={handleButtonClick} onOperation={handleButtonClick} />
  );

  return (
    <CalculatorTemplate
      title="Calculator"
      expressionDisplay={
        <DisplayWithLabel label="Expression & Calculator" value={displayValue} testId="Calculator" />
      }
      keypad={keypad}
    />
  );
};

export default CalculatorContainer;

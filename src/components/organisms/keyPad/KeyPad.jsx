import React from "react";
import KeyPadRow from "../../molecules/keyPadRow/KeyPadRow";
import AddOperation from "../../../pages/calculator/normal-calculator/normalCalAtoms/AddOperation";
import SubtractOperation from "../../../pages/calculator/normal-calculator/normalCalAtoms/SubtractOperation";
import MultiplyOperation from "../../../pages/calculator/normal-calculator/normalCalAtoms/MultiplyOperation";
import DivideOperation from "../../../pages/calculator/normal-calculator/normalCalAtoms/DivideOperation";

const Keypad = ({ onButtonClick, onOperation }) => {
  const keypadRows = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "=", "C"],
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
        alignItems: "flex-start",
      }}
    >
     
      <div>
        {keypadRows.map((row, index) => (
          <KeyPadRow key={index} keys={row} onClick={onButtonClick} />
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <AddOperation onOperation={onOperation} />
        <SubtractOperation onOperation={onOperation} />
        <MultiplyOperation onOperation={onOperation} />
        <DivideOperation onOperation={onOperation} />
      </div>
    </div>
  );
};

export default Keypad;

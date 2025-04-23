import React from "react";
import KeyPadRow from "../../molecules/keyPadRow";
import AddOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/addOperation";
import SubtractOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/subtractOperation";
import MultiplyOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/multiplyOperation";
import DivideOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/divideOperation";
import PercentOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/PercentOperation";

const Keypad = ({ onButtonClick, onOperation }) => {
  const keypadRows = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "c"],
    ["="],
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
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
        {/* Add custom height for "=" button */}
        <div >
          <KeyPadRow keys={["="]} onClick={onButtonClick} sx={{ height: "90px" }} />
        </div>
        
        <AddOperation onOperation={onOperation} />
        <SubtractOperation onOperation={onOperation} />
        <MultiplyOperation onOperation={onOperation} />
        <DivideOperation onOperation={onOperation} />
        <PercentOperation onOperation={onOperation} />
      </div>
    </div>
  );
};

export default Keypad;

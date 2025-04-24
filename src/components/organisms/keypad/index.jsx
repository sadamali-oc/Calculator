// Keypad.jsx
import React from "react";
import BasicButton from "../../atoms/basicButton";
import AddOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/addOperation";
import SubtractOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/subtractOperation";
import MultiplyOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/multiplyOperation";
import DivideOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/divideOperation";
import PercentOperation from "../../../pages/calculator/normalCalculator/normalCalAtoms/PercentOperation";
import Box from "@mui/material/Box";

const Keypad = ({ onButtonClick, onOperation }) => {
  /* 3 columns of digits (left) + 1 column of operators (right) */
  const digitKeys = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "C",
    "CE"
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 90px)",
        gridAutoRows: "40px",
        gap: 1,
        mt: 1,
      }}
    >
      {digitKeys.map((k) => (
        <BasicButton key={k} label={k} onClick={onButtonClick} />
      ))}

      <SubtractOperation onOperation={onOperation} />
      <MultiplyOperation onOperation={onOperation} />
      <DivideOperation onOperation={onOperation} />
      
      <AddOperation
        onOperation={onOperation}
        sx={{
          gridColumn: "4 / span 1",
          gridRow: "4 / span 2",
          width: "170px",
        }}
      />
      
      <PercentOperation onOperation={onOperation} />

      <BasicButton
        label="="
        onClick={onButtonClick}
        sx={{
          gridColumn: "4 / span 1",
          gridRow: "4 / span 2",
          width: "190px",
        }}
      />

      
    </Box>
  );
};

export default Keypad;

import React from "react";
import BasicButton from "../../../../../components/atoms/basicButton";

const MultiplyOperation = ({ onOperation }) => {
  const handleMultiply = () => {
    onOperation("*");
  };

  return <BasicButton label="*" onClick={handleMultiply} />;
};

export default MultiplyOperation;

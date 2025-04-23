import React from "react";
import BasicButton from "../../../../components/atoms/basic-button/BasicButton";

const MultiplyOperation = ({ onOperation }) => {
  const handleMultiply = () => {
    onOperation("*"); // Add the "*" sign to the expression
  };

  return <BasicButton label="*" onClick={handleMultiply} />;
};

export default MultiplyOperation;

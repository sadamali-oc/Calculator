import React from "react";
import BasicButton from "../../../../components/atoms/basic-button/BasicButton";

const SubtractOperation = ({ onOperation }) => {
  const handleSubtract = () => {
    onOperation("-"); // Add the "-" sign to the expression
  };

  return <BasicButton label="-" onClick={handleSubtract} />;
};

export default SubtractOperation;

import React from "react";
import BasicButton from "../../../../components/atoms/basic-button/BasicButton";
const DivideOperation = ({ onOperation }) => {
  const handleDivide = () => {
    onOperation("/"); // Add the "/" sign to the expression
  };

  return <BasicButton label="/" onClick={handleDivide} />;
};

export default DivideOperation;

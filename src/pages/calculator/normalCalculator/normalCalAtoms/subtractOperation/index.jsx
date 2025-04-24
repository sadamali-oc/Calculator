import React from "react";
import BasicButton from "../../../../../components/atoms/basicButton";

const SubtractOperation = ({ onOperation }) => {
  const handleSubtract = () => {
    onOperation("-"); 
  };

  return <BasicButton label="-" onClick={handleSubtract} />;
};

export default SubtractOperation;

import React from "react";
import BasicButton from "../../../../../components/atoms/basicButton";

const PercentOperation = ({ onOperation }) => {
  const handlePercent = () => {
    onOperation("%");
  };

  return <BasicButton label="%" onClick={handlePercent} />;
};

export default PercentOperation;

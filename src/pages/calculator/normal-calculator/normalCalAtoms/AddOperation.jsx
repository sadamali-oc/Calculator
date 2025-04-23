import React from "react";
import BasicButton from "../../../../components/atoms/basic-button/BasicButton";

const AddOperation = ({ onOperation }) => {
  const handleAdd = () => {
    onOperation("+");
  };

  return <BasicButton label="+" onClick={handleAdd} />;
};

export default AddOperation;


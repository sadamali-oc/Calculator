import React from "react";
import BasicButton from "../../../../../components/atoms/basicButton";


const AddOperation = ({ onOperation }) => {
  const handleAdd = () => {
    onOperation("+");
  };

  return <BasicButton label="+" onClick={handleAdd} />;
};

export default AddOperation;

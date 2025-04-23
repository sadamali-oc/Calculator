import React from "react";
import BasicButton from "../../../../../components/atoms/basicButton";


const AddOperation = ({ onOperation }) => {
  const handleAdd = () => {
    onOperation("+");
  };

  return <BasicButton label="+" onClick={handleAdd} sx={{   height: "90px",}} />;
};

export default AddOperation;

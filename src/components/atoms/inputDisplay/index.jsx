import React from "react";
import TextField from "@mui/material/TextField";

const InputDisplay = ({ value, ...props }) => {
  return (
    <TextField
      value={value}
      variant="outlined"
      disabled
      sx={{ marginBottom: "10px", height: "60px", width: "400px" }}
      {...props}
    />
  );
};

export default InputDisplay;

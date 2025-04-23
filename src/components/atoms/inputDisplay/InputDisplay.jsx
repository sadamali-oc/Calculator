import React from "react";
import TextField from "@mui/material/TextField";

const InputDisplay = ({ value, ...props }) => {
  return (
    <TextField
      value={value}
      variant="outlined"
      fullWidth
      disabled
      sx={{ marginBottom: "10px", height: "60px" }}
      {...props}
    />
  );
};

export default InputDisplay;

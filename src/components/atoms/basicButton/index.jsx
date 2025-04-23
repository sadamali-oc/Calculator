import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ label, onClick ,sx={}}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ minWidth: "70px", height: "40px", margin: "2px",
          ...sx }}
        onClick={() => {
          onClick(label);
        }}
      >
        {label}
      </Button>
    </div>
  );
}

export default BasicButton;

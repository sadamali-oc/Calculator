import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ label, onClick }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ minWidth: "50px", height: "40px", margin: "2px" }}
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

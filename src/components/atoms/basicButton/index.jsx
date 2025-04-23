import React from "react";
import Button from "@mui/material/Button";


// label - displayed on the button
// onClick - function to be called when the button is clicked
const BasicButton = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={()=> onClick(label)}
      sx={{  minWidth: "50px", height: "40px", margin: "3px" }}
    >
      {label}
    </Button>
  );
};

export default BasicButton;

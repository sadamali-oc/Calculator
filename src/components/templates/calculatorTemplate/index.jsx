import React from "react";
import { Box, Typography } from "@mui/material";  

const CalculatorTemplate = ({ title, expressionDisplay, resultDisplay, keypad }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Box
        sx={{
          padding: "20px",
          maxWidth: "390px",
          margin: "0 auto",
          boxShadow: 3,
          borderRadius: "8px",
          bgcolor: "#aba1d552"
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "16px", textAlign: "center" }}>
          {title}
        </Typography>
        
        {expressionDisplay}
        {resultDisplay}
        {keypad}
      </Box>
    </div>
  );
};

export default CalculatorTemplate;

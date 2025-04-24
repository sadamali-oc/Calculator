import React from "react";
import InputDisplay from "../../atoms/inputDisplay";
import { Typography, Box } from "@mui/material";

const DisplayWithLabel = ({ label, value, testId }) => (
  <Box
    data-testid={testId}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      mb: 0.5,
    }}
  >
    <Typography variant="body2" sx={{ minWidth: 90 }}>
      {label}:
    </Typography>

    <InputDisplay value={value} />
  </Box>
);

export default DisplayWithLabel;

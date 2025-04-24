import React from "react";
import BasicButton from "../../atoms/basicButton";
import { Stack } from "@mui/material";

const KeyPadRow = ({ keys = [], onClick }) => (
  <Stack direction="row" spacing={4} justifyContent="center">

    {keys.map((key) => (

      <BasicButton key={key} label={key} onClick={onClick} />
      

    ))}


  </Stack>
);

export default KeyPadRow;

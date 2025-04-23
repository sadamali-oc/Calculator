import React from "react";
import BasicButton from "../../atoms/basic-button/BasicButton";

//Rows of buttons for the keypad
//Arrays of button labels
function KeyPadRow({ keys = [], onClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      {/* render row of buttons */}
      {keys.map((key) => (
        <BasicButton key={key} label={key} onClick={() => onClick(key)} />
      ))}
    </div>
  );
}

export default KeyPadRow;

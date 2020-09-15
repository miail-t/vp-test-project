import React from "react";

const InputText = ({ input, disabled }) => {
  return <input type="number" min="0" {...input} disabled={disabled} />;
};
export default InputText;

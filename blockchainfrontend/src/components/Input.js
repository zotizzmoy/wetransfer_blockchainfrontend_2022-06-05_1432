import React from "react";

const Input = ({ classname, label, name, type, isRequired }) => {
  return (
    <div className={classname || "input-field"}>
      <label htmlFor={name || "input"}>{label || "Input"}</label>
      <input
        type={type || "text"}
        name={name || "input"}
        required={isRequired || false}
      />
    </div>
  );
};

export default Input;

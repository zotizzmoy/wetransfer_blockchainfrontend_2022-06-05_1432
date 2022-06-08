import { React, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PasswordInput = ({ classname, label, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordBorderColor, setPasswordBorderColor] = useState(false);

  return (
    <div className={classname || "input-field"}>
      <label htmlFor={name || "pass"}>{label || "Password"}</label>
      <div
        className={`password-container
            ${passwordBorderColor ? "password-border" : ""}
          `}
      >
        <input
          type={showPassword ? "text" : "password"}
          name={name || "pass"}
          onFocus={() => setPasswordBorderColor(true)}
          onBlur={() => setPasswordBorderColor(false)}
          required
        />
        <button
          type="button"
          className="btn password-show-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;

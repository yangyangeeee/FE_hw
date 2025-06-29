import React from "react";

function TextInput({ value, onChange, className = "", style }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`text-input ${className}`}
      style={style}
    />
  );
}

export default TextInput;

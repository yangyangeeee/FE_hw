import React from "react";

function Button({ onClick, children, className = "", style }) {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;

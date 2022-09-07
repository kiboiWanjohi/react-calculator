import "./button.css";
import React from "react";

const Button = ({ symbol, handleClick }) => {
  return (
    <div onClick={() => handleClick(symbol)} className="btn-wrapper">
      {symbol}
    </div>
  );
};

export default Button;

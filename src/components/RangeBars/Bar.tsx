import React from "react";
import { BarProps } from "./types";

const Bar: React.FC<BarProps> = ({ onClick, isActive, size }) => {
  return (
    <span
      onClick={onClick}
      className={`bar ${isActive ? "active" : ""}`}
      style={{ width: `${size || 100}%` }}
    ></span>
  );
};

export default Bar;

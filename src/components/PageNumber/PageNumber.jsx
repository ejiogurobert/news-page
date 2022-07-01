import React from "react";
import "./PageNumber.css";

export const PageNumber = ({ number, active, changePage }) => {
  return (
    <div
      onClick={() => changePage(number)}
      className={`pageNumberContainer ${active ? "pageNumberActive" : ""}`}
    >
      <span>{number}</span>
    </div>
  );
};

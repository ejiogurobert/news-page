import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className='loader'>
      <ScaleLoader size={15} color={"#03009e"} />
    </div>
  );
};

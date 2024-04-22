import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {
  const { error, errortext } = props;
  return (
    <div className="customInput">
      <p className="labledisplay">{props.placeholder}</p>
      <input {...props} />
      <p className="errordisplay">{error ? errortext : ""}</p>
    </div>
  );
};

export default CustomInput;

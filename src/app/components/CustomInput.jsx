import React from "react";

const CustomInput = (props) => {
  const { error, errortext } = props;
  return (
    <div className="customInput">
      <input {...props} />
      <p className="errordisplay">{error ? errortext : ""}</p>
    </div>
  );
};

export default CustomInput;

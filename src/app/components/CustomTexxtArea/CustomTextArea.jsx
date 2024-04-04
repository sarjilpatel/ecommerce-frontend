import React from "react";
import "./CustomTextArea.css";

const CustomTextArea = (props) => {
  const { error, errortext } = props;
  return (
    <div className="customTextarea">
      <textarea {...props} />
      <p className="errordisplay">{error ? errortext : ""}</p>
    </div>
  );
};

export default CustomTextArea;

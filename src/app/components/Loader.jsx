import Lottie from "lottie-react";
import React from "react";
import bird from "../../assets/animations/birdLoader.json";

const Loader = () => {
  return (
    <div className="loadermain">
      <Lottie animationData={bird} height="50px" className="loaderbird" />
    </div>
  );
};

export default Loader;

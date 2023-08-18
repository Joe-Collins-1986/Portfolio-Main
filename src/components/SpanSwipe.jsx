import React from "react";
import uStyles from "../styles/MultiUse.module.css";

const SpanSwipe = (props) => {
  const { activeSection, colour, delay, image } = props;

  return (
    <>
      {activeSection ? (
        <span
          className={`${uStyles[colour]} ${uStyles.animate1} ${
            image && uStyles.animateImage
          }`}
          style={{ "--i": delay }}
        ></span>
      ) : (
        <span className={uStyles[colour]}></span>
      )}
    </>
  );
};

export default SpanSwipe;

import React from "react";

const Img = ({ src, openFunc }) => {
  return (
    <>
      <img src={src} alt="" onClick={(e) => openFunc(e.target.src)} />
    </>
  );
};

export default Img;

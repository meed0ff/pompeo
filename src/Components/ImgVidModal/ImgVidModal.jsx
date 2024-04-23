import Img from "./Img";
import "./ImgVidModal.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.png";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import { useState } from "react";

export default function ImgVidModal({ img }) {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalState, setModalState] = useState(false);

  const openModal = function (img) {
    setModalSrc(img);
    setModalState(true);
  };

  const closeModal = function () {
    setModalSrc(null);
    setModalState(false);
  };

  return (
    <>
      <div
        className={"img-modal " + (modalState ? "opened-modal" : "")}
        onClick={() => closeModal()}
      >
        <img src={modalSrc} alt="" />
      </div>

      <div className="images">
        <div className="container">
          <Img src={img1} openFunc={openModal} />
          <Img src={img2} openFunc={openModal} />
          <Img src={img3} openFunc={openModal} />
          <Img src={img4} openFunc={openModal} />
          <Img src={img5} openFunc={openModal} />
          <Img src={img6} openFunc={openModal} />
          <Img src={img7} openFunc={openModal} />
          <Img src={img8} openFunc={openModal} />
          <Img src={img9} openFunc={openModal} />
        </div>
      </div>
    </>
  );
}

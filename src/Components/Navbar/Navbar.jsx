import { useState } from "react";
import Button from "./Button/Button";
import "./Navbar.css";

export default function Navbar() {
  const [menuState, setMenuState] = useState("");

  return (
    <>
      <header>
        <div className="container">
          <a href="/" className="logo">
            Pompeo
          </a>
          <div className="open-menu">
            <button onClick={() => setMenuState("opened")}>
              <i className="fa-solid fa-bars fa-2xl"></i>
            </button>
          </div>
          <div className={"menu " + menuState} onClick={() => setMenuState("")}>
            <button className="close-menu">
              {/* <i className="fa-solid fa-circle-xmark fa-xl"></i> */}
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
            <div className="links">
              <Button btntext={"home"} href={"https://meedweff.netlify.app"} />
              <Button btntext={"about"} />
              <Button btntext={"shop"} />
              <Button btntext={"contact"} />
            </div>
            <div className="cart-div">
              <Button
                btntext={"cart"}
                btntype={"cart"}
                clickFunc={() => console.log("btn clicked")}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

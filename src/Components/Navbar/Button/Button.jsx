import "./Button.css";

export default function Button({ btntext, btntype, href, clickFunc }) {
  if (btntype == "cart") {
    return (
      <>
        <button className="nav-link cart" onClick={clickFunc}>
          <i className="fa-solid fa-cart-shopping"></i> {btntext}
        </button>
      </>
    );
  } else {
    return (
      <>
        <a href={href} className="nav-link">
          {btntext}
        </a>
      </>
    );
  }
}

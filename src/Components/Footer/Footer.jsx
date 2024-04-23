import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-1">
        <div className="container">
          <a href="#">Pompeo</a>
          <p>I have always striven to fix beauty in wood, stone,</p>
          <p>glass or pottery, that has been my creed.</p>
          <div className="cards">
            <div className="email">
              <i className="fa-regular fa-envelope"></i>
              <b>EMAIL</b>
              <p>pompeopotery@gmail.com</p>
            </div>
            <div className="find">
              <i className="fa-solid fa-location-dot"></i>
              <b>FIND</b>
              <p>
                Central Park, Manhattan
                <br />
                New York, 1101
              </p>
            </div>
            <div className="call">
              <i className="fa-solid fa-phone-volume"></i>
              <b>CALL</b>
              <p>+1 292 345 678</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <p>
          Template design by <a href="#">Dorian Hoxha</a> -{" "}
          <a href="#">Image License Info</a> Powered by <a href="#">Webflow</a>
        </p>
      </div>
    </>
  );
}

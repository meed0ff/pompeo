import vases from "./images/vases.png";
import mugs from "./images/mugs.png";
import plates from "./images/plates.png";
import "./Content1.css";

export default function Content1() {
  return (
    <>
      <div className="content-1">
        <div className="container">
          <div className="types">
            <div className="vase">
              <img src={vases} alt="" />
              <p>vases</p>
            </div>
            <div className="mug">
              <img src={mugs} alt="" />
              <p>mugs</p>
            </div>
            <div className="plate">
              <img src={plates} alt="" />
              <p>plates</p>
            </div>
          </div>
          <div className="content">
            <div>
              <h1>Hand Grafted</h1>
              <h1>Pottery since 1990</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
            </div>
            <div>
              <h1>We Provide Premium</h1>
              <h1>Pottery Produts</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

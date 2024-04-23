import vaseImg from "/src/images/showcase-vase.png";
import Button from "/src/Components/Button/Button";
import "./Showcase.css";

export default function Showcase() {
  return (
    <>
      <div className="showcase">
        <div className="container">
          <div className="content">
            <b>Pompeo POttery</b>
            <br />
            <h1>
              Unique Porcelain<span className="andSbl">&</span>
            </h1>
            <h1>Stone Collection</h1>
            <p>
              Unique & modern pottery made by our master in porcelain & stones
            </p>
            <Button btnContent={"Shop Collection"} />
          </div>
          <img src={vaseImg} alt="" />
        </div>
      </div>
    </>
  );
}

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import Product from "./Product/Product";
import Button from "/src/Components/Button/Button";
import "./Content3.css";

export default function Content3() {
  return (
    <>
      <div className="content-3">
        <div className="container">
          <Product img={img1} name={"Decor Plate"} price={"65.00"} />
          <Product img={img2} name={"Mint Pottery"} price={"75.00"} />
          <Product img={img3} name={"Set Of Potterys"} price={"125.00"} />
          <Product img={img4} name={"Orange Ceramic"} price={"55.00"} />
          <Product img={img5} name={"Dark Bowl"} price={"115.00"} />
          <Product img={img6} name={"Square Pottery"} price={"75.00"} />
        </div>
        <Button btnContent={"View All Products"} />
      </div>
    </>
  );
}

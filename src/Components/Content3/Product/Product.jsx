import "./Product.css";

export default function Product({ img, name, price, clickFunc }) {
  return (
    <>
      <div className="product">
        <img src={img} alt="" />
        <div className="content">
          <h5>{name}</h5>
          <p>$ {price} USD</p>
        </div>
      </div>
    </>
  );
}

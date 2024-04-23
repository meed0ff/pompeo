import "./cnt.css";

export default function Cnt({ img, title, dsc, link, reverse }) {
  return (
    <>
      <div className={"cnt " + (reverse ? "reverse" : "")}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p>{dsc}</p>
          <a href={link}>View Details</a>
        </div>
      </div>
    </>
  );
}

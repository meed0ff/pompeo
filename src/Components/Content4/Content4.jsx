import "./Content4.css";
import Button from "/src/Components/Button/Button";

export default function Content4() {
  return (
    <>
      <div className="content-4">
        <div className="container">
          <b>Pompeo POttery</b>
          <h1>Ready to start shopping?</h1>
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <a href="#">consectetur adipiscing elit</a>.
            <br /> Suspendisse varius enim in eros elementum.
          </p>
          <Button btnContent={"New Collection"} />
        </div>
      </div>
    </>
  );
}

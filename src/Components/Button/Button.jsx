import "./Button.css";

export default function Button({ btnContent, clickFnc }) {
  return (
    <>
      <button className="btn" onClick={clickFnc}>
        {btnContent}
      </button>
    </>
  );
}

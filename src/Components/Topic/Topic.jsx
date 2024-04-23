import "./Topic.css";

export default function Topic({ smallCnt, mainCnt, andSbl }) {
  if (andSbl) {
    return (
      <>
        <div className="topic">
          <div className="container">
            <p>{smallCnt}</p>
            <h1>
              {mainCnt.split("&")[0]} <span className="andSbl">&</span>{" "}
              {mainCnt.split("&")[1]}
            </h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="topic">
          <div className="container">
            <p>{smallCnt}</p>
            <h1>{mainCnt}</h1>
          </div>
        </div>
      </>
    );
  }
}

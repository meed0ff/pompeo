import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Topic from "./Components/Topic/Topic";
import Content1 from "./Components/Content1/Content1";
import Content2 from "./Components/Content2/Content2";
import Content3 from "./Components/Content3/Content3";
import Content4 from "./Components/Content4/Content4";
import LogReg from "./Components/LogReg/LogReg";
import Footer from "./Components/Footer/Footer";
import ImgVidModal from "./Components/ImgVidModal/ImgVidModal";
import tgImg from "./images/telegram.png";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Showcase />

      <Topic
        smallCnt={"Product Categories"}
        mainCnt={`Porcelain & Pottery`}
        andSbl
      />

      <Content1 />
      <Content2 />

      <Topic smallCnt={"Our online store"} mainCnt={`Pottery Collection`} />

      <Content3 />
      <Content4 />

      <div className="container tgImgC">
        <img src={tgImg} alt="" className="tgImg" />
      </div>

      <Topic
        smallCnt={"Latest news"}
        mainCnt={`Latest news & New updates`}
        andSbl
      />

      <LogReg />
      <Footer />

{/*       <ImgVidModal /> */}
    </>
  );
}

export default App;

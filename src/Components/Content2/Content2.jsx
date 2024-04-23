import Cnt from "./Cnt/Cnt";
import vase1 from "./images/vase1.png";
import vase2 from "./images/vase2.png";
import "./Content2.css";

export default function Content2() {
  return (
    <>
      <div className="content-2">
        <div className="container">
          <Cnt
            img={vase1}
            title={"Gold & Black Pottery"}
            dsc={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
            }
            link={"https://meedweff.netlify.app"}
          />
          <Cnt
            img={vase2}
            title={"Orange Ceramic"}
            dsc={
              "Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."
            }
            reverse
            link={"https://meedweff.netlify.app"}
          />
        </div>
      </div>
    </>
  );
}

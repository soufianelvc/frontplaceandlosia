
import "./featured.css"; 
import img1 from "../../../images/09012023045912-900x700-12-room.jpg" ; 
import img2 from "../../../images/07012023091827-blog-5.jpg" ; 
import img3 from "../../../images/10012023084447-900x700-Rectangle 4-2.jpg" ; 
import { Fade } from "react-awesome-reveal";
const Featured = () => {

  return (
    <div className="featured bor">
      <Fade direction="left">
      <div className="featuredItem">
      <img src={img1} alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Fes</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      </Fade>
      
      <Fade direction="down">
        <div className="featuredItem">
        <img src={img2} alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Agadir</h1>
            <h2>533 properties</h2>
          </div>
        </div>
      </Fade>

      <Fade direction="right" >
      <div className="featuredItem">
      <img src={img3}alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Marrakesh</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      </Fade>
      
    </div>
  );
};

export default Featured;

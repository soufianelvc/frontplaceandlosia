
import "./featuredMenu.css"; 
import Breakfast from "../../../images/Breakfast.jpg" ; 
import Lunch from "../../../images/Lunch.jpg" ; 
import Dinner from "../../../images/Dinner.jpg" ; 
import { Fade } from "react-awesome-reveal";
const FeaturedMenu = () => {

  return (
    <div className="featuredMenu">
      <Fade direction="left">
      <div className="featuredItemMenu" >
      <img src={Breakfast} alt="" className="featuredImg "/>
        <div className="featuredTitlesMenu">
          <h1>Breakfast</h1>
          <h3>12 properties </h3>
        </div>
      </div>
      </Fade>
      
      <Fade direction="right">

        <div className="featuredItemMenu">
          <img src={Lunch} alt="" className="featuredImg "/>
            <div className=" featuredTitlesMenu">
              <h1>Lunch</h1>
              <h3>25 properties</h3>
            </div>
        </div>
    
      </Fade>

      <Fade direction="left" >
      <div className="featuredItemMenu">
      <img src={Dinner}alt="" className="featuredImg"/>
        <div className="featuredTitlesMenu">
          <h1>Dinner</h1>
          <h3>32 properties</h3>
        </div>
      </div>
      </Fade>
      
    </div>
  );
};

export default FeaturedMenu;

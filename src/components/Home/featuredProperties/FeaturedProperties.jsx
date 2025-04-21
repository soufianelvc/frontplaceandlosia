import "./featuredProperties.css";
import { Fade } from "react-awesome-reveal";
const FeaturedProperties = () => {
  return (
<div className="fp">
<Fade direction="left">
        <div direction="left" className="fpItem border  ">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">  Serene Oasis Suite </span>
          <span className="fpCity">Standard</span>
          <span className="fpPrice">Starting from 120.00 dh </span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
</Fade>

<Fade direction="right">
        <div className="fpItem border">
          <img
            src="http://localhost:8000/images/room1.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Tranquil Garden Room </span>
          <span className="fpCity">Deluxe</span>
          <span className="fpPrice">Starting from 150.00 dh</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
</Fade>

<Fade direction="left">
        <div className="fpItem border">
          <img
            src="http://localhost:8000/images/room2.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Peaceful Retreat Cabin</span>
          <span className="fpCity">Suite</span>
          <span className="fpPrice">tarting from 200.00 dh </span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
</Fade>

<Fade direction="right">
        <div className="fpItem">
          <img
            src="http://localhost:8000/images/room3.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Calm Horizon Loft </span>
          <span className="fpCity">Premium</span>
          <span className="fpPrice">Starting from 180.00 dh</span>
      
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
</Fade>

</div>
  );
};

export default FeaturedProperties;

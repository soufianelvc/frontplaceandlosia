// import { Fade } from "react-awesome-reveal";
// import "./searchItemHotel.css";
// import { useNavigate } from "react-router-dom";
// const SearchItemhotle = ({room,date}) => {
//   console.log(date)
//   const dataRoom = room ;
//   console.log(dataRoom.TitleR);
//   const navigate = useNavigate();
//   const handleDetails = (elm,date) => {
//     navigate("/hotels/hotelsRom", { state: { elm ,date } });
//   };

//   return (
//   <Fade direction="up">
//       <div className="hsearchItemhotle">
//         <img
//         src={`http://localhost:8000/images/${room.image}`}         
//           alt=""
//           className="hsiImg"
//         />
//         <div className="hsiDesc">
//           <h1 className="hsiTitle"> {room.TitleR}</h1>
//           <span className="hsiTaxiOp">  Includes taxes and fees</span>
//           <span className="hsiSubtitle">
//           {room.detailsR1}
//           </span>
//           <span className="hsiFeatures">
//           {room.detailsR2}
//           </span>
//           <span className="hsiCancelOp">Free cancellation </span>
//           <span className="hsiCancelOpSubtitle">
//             You can cancel later, so lock in this great price today!
//           </span>
//         </div>
//         <div className="hsiDetails">
//           <div className="hsiRating">
//             <span>{room.typech}</span>
//             <button>{room.rating}.5</button>
//           </div>
//           <div className="hsiDetailTexts">
//             <span className="hsiPrice">  {room.price}  dh</span>
//             <button className="hsiCheckButton" onClick={()=>{handleDetails(room,date)}}>See availability</button>
//           </div>
//         </div>
//       </div>
// </Fade>
    
//   );
// };

// export default SearchItemhotle;


import { Fade } from "react-awesome-reveal";
import "./searchItemHotel.css";
import { useNavigate } from "react-router-dom";

const SearchItemhotle = ({ room, date }) => {
  const navigate = useNavigate();
  
  const handleDetails = (elm, date) => {
    navigate("/hotels/hotelsRom", { state: { elm, date } });
  };

  return (
    <Fade direction="up">
    <div className="search-item-hotel">
      <img
        src={`http://localhost:8000/images/${room.image}`}
        alt=""
        className="search-item-img"
      />
      <div className="search-item-desc">
        <h1 className="search-item-title">{room.TitleR}</h1>
        <span className="search-item-taxi">Includes taxes and fees</span>
        <span className="search-item-subtitle">
          {room.numberAdult} Adult(s) and {room.numberChildren} Children(s)
        </span>
        <span className="search-item-features">
          {room.features}
        </span>
        <span className="search-item-cancel">Free cancellation</span>
        <span className="search-item-cancel-subtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="search-item-details">
        <div className="search-item-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search-item-texts">
          <span className="search-item-price">{room.price}$</span>
          <button className="search-item-check-button" onClick={() => handleDetails(room, date)}>
            See availability
          </button>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default SearchItemhotle;

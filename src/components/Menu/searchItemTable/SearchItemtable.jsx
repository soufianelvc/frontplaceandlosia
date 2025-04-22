import { Fade } from "react-awesome-reveal";
import './searchItemtabell.css';
import { useNavigate } from "react-router-dom";
const SearchItemtable = ({tables,date,hour}) => {
  console.log(hour)
  console.log(date)
  console.log(tables)
  const navigate = useNavigate();
  const handleDetails = (elm) => {
    navigate("/menu/table", { state: { elm ,date,hour} });
  };

  return (
  <Fade direction="up">
      <div className="searchItemtable border p-3 m-3" >

        <img
        src={`http://placeandalosia.free.nf/images/${tables.images}`}        
          alt=""
          className="siImgT mx-auto"
        />
        <div className="siDescT">
          <h1 className="siTitleT"> {tables.TitleT}</h1>
          <span className="siTaxiOpT">  Includes taxes and fees</span>
          <span className="siSubtitleT">
          {tables.detailsT1}
          </span>
          <span className="siFeaturesT">
          {tables.detailsT2}
          </span>
          <span className="siCancelOpT">Free cancellation </span>
          <span className="siCancelOpSubtitleT">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetailsT">
          <div className="siRatingT">
            <span>{tables.types}</span>
            <button>{tables.rating}.5</button>
          </div>
          <div className="siDetailTextsT">
            <span className="siPriceT">  {tables.PriceR}  </span>
            <button className="siCheckButtonT" onClick={()=>{handleDetails(tables)}}>See availability</button>
          </div>
        </div>
      </div>
</Fade>
    
  );
};

export default SearchItemtable;

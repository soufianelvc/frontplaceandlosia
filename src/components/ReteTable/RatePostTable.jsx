
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { addCommentaireTable } from "../../redux/reducers/CmtTableSlice";

const RatePostTable = ({ user, table_id, elm, dd }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [commantaire, setCommantaire] = useState('');
  const [rating, setrating] = useState();

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      setrating(newValue);
      console.log(`Example 2: new value is ${newValue}`);
    }
  };

  const saveCmt2 = async (elm) => {
    try {
      await dispatch(addCommentaireTable({
        comment: commantaire,
        user_id: user.id,
        restaurant_table_id: table_id,
        rating: rating,
      }));
      setCommantaire('');
      console.log('dd:', dd);

      if (!dd.elm || !dd.elm.img1) {
        console.error('Invalid dd structure:', dd);
        return;
      }

      await navigate("/menu/table", { state: dd });
    } catch (error) {
      console.error('Error saving comment or navigating:', error);
    }
  };

  return (
    <div className="border border-light mb-2" style={{width:"97%"}}>
      <div>
        <div className="row mt-3">
          <div className="sm-12 col me-5 d-flex">
            <div className="rate-name d-inline ms-3 mt-2 me-2">
              {user.name} {user.name2}
            </div>
            <ReactStars {...setting} />
          </div>
        </div>
        <div className="row border-bottom mx-2">
          <div className="col d-block me-4 pb-2">
           <textarea
              className="input-form-area p-2 mt-3"
               rows="5"
              cols="20"
              placeholder="add commantaire...."
               value={commantaire}
               onChange={(e)=>{setCommantaire(e.target.value)}}
             />
           <div className=" d-flex justify-content-end">
             <div className="product-cart-add px-3    py-2 text-center d-inline" onClick={()=>{saveCmt2(elm)}}>add  comment </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatePostTable;

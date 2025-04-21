// import { useState } from "react";
// import ReactStars from "react-rating-stars-component";
// import { ClientApi } from "../../service/Api/Client/ClientApi";
// import { axiosClient } from "../../redux/axios";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addCommentaireRoom } from "../../redux/reducers/CmtRSlice";
// const RatePost = ({user,chambre_id,elm,dd}) => {
//   console.log(dd)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//     const setting = {
//         size: 20,
//         count: 5,
//         color: "#979797",
//         activeColor: "#ffc107",
//         value: 7.5,
//         a11y: true,
//         isHalf: true,
//         emptyIcon: <i className="far fa-star" />,
//         halfIcon: <i className="fa fa-star-half-alt" />,
//         filledIcon: <i className="fa fa-star" />,
//         onChange: newValue => {
//           setrating(newValue)
//             console.log(`Example 2: new value is ${newValue}`);
//         }
//     };
//     const [commantaire, setCommantaire] = useState();
//         const [rating, setrating] = useState();
//     // const saveCmt = async() => {
//     //   try {
//     //     await  ClientApi.getCsrfToken();
//     //     const response = await axiosClient.post('http://localhost:8000/api/commentaires', {
//     //       cCmtt: commantaire,
//     //       user_id: user.id,
//     //       chambre_id: chambre_id,
//     //       rating: rating,
//     //     });
//     //     navigate("/")
//     //     // window.location.reload();
//     //     return response.data;
//     //   } catch (error) {
//     //     alert("you have problem !!! ")
//     //     console.error('There was a problem with the request:', error);
//     //     throw error;
//     //   }
//     // }
//     const saveCmt2 =async (elm)=>{
//       await   dispatch(addCommentaireRoom(
//         {cCmtt: commantaire,user_id: user.id,chambre_id: chambre_id,rating: rating,}
//       ));
//       setCommantaire('');
//       await navigate("/hotels/hotelsRom", { state: dd });
//     }
//   return (
//     <div className=" border border-light mb-2">
//              <div>
//         <div className="row mt-3 ">
//           <div className="sm-12 col me-5  d-flex">
//             <div className="rate-name  d-inline ms-3 mt-2 me-2 "> {user.name} {user.name2} </div>
//             <ReactStars {...setting} />
//           </div>
//         </div>
//         <div className="row border-bottom mx-2">
//           <div className="col d-felx me-4 pb-2">
//             <textarea
//               className="input-form-area p-2 mt-3"
//               rows="5"
//               cols="20"
//               placeholder="add commantaire...."
//               value={commantaire}
//               onChange={(e)=>{setCommantaire(e.target.value)}}
//             />
//             <div className=" d-flex justify-content-end al">
//               <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={()=>{saveCmt2(elm)}}>add  comment </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RatePost
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ClientApi } from "../../service/Api/Client/ClientApi";
import { axiosClient } from "../../redux/axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCommentaireRoom } from "../../redux/reducers/CmtRSlice";
const RatePost = ({user,chambre_id,elm,dd}) => {
  console.log(dd)
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          setrating(newValue)
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    const [commantaire, setCommantaire] = useState();
        const [rating, setrating] = useState();
    // const saveCmt = async() => {
    //   try {
    //     await  ClientApi.getCsrfToken();
    //     const response = await axiosClient.post('http://localhost:8000/api/commentaires', {
    //       cCmtt: commantaire,
    //       user_id: user.id,
    //       chambre_id: chambre_id,
    //       rating: rating,
    //     });
    //     navigate("/")
    //     // window.location.reload();
    //     return response.data;
    //   } catch (error) {
    //     alert("you have problem !!! ")
    //     console.error('There was a problem with the request:', error);
    //     throw error;
    //   }
    // }
    const saveCmt2 =async (elm)=>{
      await   dispatch(addCommentaireRoom(
        {cCmtt: commantaire,user_id: user.id,chambre_id: chambre_id,rating: rating,}
      ));
      setCommantaire('');
      await navigate("/hotels/hotelsRom", { state: dd });
    }
  return (
    <div className=" border border-light mb-2">
             <div>
        <div className="row mt-3 ">
          <div className="sm-12 col me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-2 me-2 "> {user.name} {user.name2} </div>
            <ReactStars {...setting} />
          </div>
        </div>
        <div className="row border-bottom mx-2">
          <div className="col d-felx me-4 pb-2">
            <textarea
              className="input-form-area p-2 mt-3"
              rows="5"
              cols="20"
              placeholder="add commantaire...."
              value={commantaire}
              onChange={(e)=>{setCommantaire(e.target.value)}}
            />
            <div className=" d-flex justify-content-end al">
              <div className="product-cart-add px-3  py-2 text-center d-inline" onClick={()=>{saveCmt2(elm)}}>add  comment </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatePost

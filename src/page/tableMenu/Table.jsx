// import "./table.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import MailList from "../../components/Uitily/mailList/MailList";
// import { useUserContext } from "../../context/UserContext";
// import ReteContainerTable from "../../components/ReteTable/ReteContainerTable";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCommentairesTable } from "../../redux/reducers/CmtTableSlice";
// import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

// const TableRestaunent = () => {
//   const { user } = useUserContext();
//   const location = useLocation();
//   const state = location.state || {};
//   console.log(state);
//   const [slideNumber, setSlideNumber] = useState(0);
//   const [open, setOpen] = useState(false);
//   const photos = [
//     `http://localhost:8000/images/${state.elm.img1}.jpg`,
//     `http://localhost:8000/images/${state.elm.img2}.jpg`,
//     `http://localhost:8000/images/${state.elm.img3}.jpg`,
//     `http://localhost:8000/images/${state.elm.img4}.jpg`,
//     `http://localhost:8000/images/${state.elm.img5}.jpg`,
//     `http://localhost:8000/images/${state.elm.img6}.jpg`,
//   ];

//   const handleOpen = (i) => {
//     setSlideNumber(i);
//     setOpen(true);
//   };

//   const handleMove = (direction) => {
//     let newSlideNumber;

//     if (direction === "l") {
//       newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
//     } else {
//       newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
//     }

//     setSlideNumber(newSlideNumber);
//   };

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllCommentairesTable(state.elm.id));
//   }, [dispatch]);

//   const allcmt = useSelector((state) => state.allCommentairesTable.CommentairesTable);
//   console.log(allcmt);

//   const [openAlert, setOpenAlert] = useState(false);
//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   const confimationReservation = () => {
//     setOpenAlert(true);
//   };

//   const CustomAlert = ({ open, handleClose }) => (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent style={{ backgroundColor: "rgba(51, 230, 15, 0.838)" }}>
//         <div style={{ backgroundColor: "rgb(17, 199, 26)" }} className="text-light">
//           <div style={{ backgroundColor: "rgba(17, 199, 41, 0.838)" }}>
//             <div className="modal-header">
//               <h5>Reservation Confirmation</h5>
//             </div>
//             <div className="modal-body">
//               <p>You are one step away from completing your reservation room:</p>
//               {/* <ul>
//                 <li><strong className="me-2">Room Type:</strong> {state.elm.typech} </li>
//                 <li><strong>Check-in Date :</strong> {state.date[0].startDate.toLocaleString()}</li>
//                 <li><strong>Check-out Date:</strong> {state.date[0].endDate.toLocaleString()}</li>
//                 <li><strong> price total :</strong> {state.elm.price} dh </li>
//               </ul> */}
//               <p style={{ color: "yellow" }}>In case of failure to attend at the specified time, the reservation will be canceled!!</p>
//             </div>
//             <div className="modal-footer">
//               @PlaceAndalusia
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//       <DialogActions style={{ backgroundColor: "rgba(51, 230, 15, 0.838)" }}>
//         {/* <Button className="text-light" onClick={addR}><b>Confirm</b></Button> */}
//         <Button className="text-light" onClick={handleClose}><b>cancel</b></Button>
//       </DialogActions>
//     </Dialog>
//   );
//   const cmtCount = allcmt?.length || 0;
//   const ratingTotal = allcmt?.reduce((acc, curr) => acc + Number(curr.rating), 0) || 0;
//   const avgRating = cmtCount > 0 ? (ratingTotal / cmtCount).toFixed(1) : 0;

//   return (
//     <div>
//       <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
//       <div className="ttableContainer border border-primary ">
//         {open && (
//           <div className="tslider">
//             <FontAwesomeIcon
//               icon={faCircleXmark}
//               className="tclose"
//               onClick={() => setOpen(false)}
//             />
//             <FontAwesomeIcon
//               icon={faCircleArrowLeft}
//               className="tarrow"
//               onClick={() => handleMove("l")}
//             />
//             <div className="tsliderWrapper">
//               <img src={`${photos[slideNumber]}`} className="w-75" />
//             </div>
//             <FontAwesomeIcon
//               icon={faCircleArrowRight}
//               className="tarrow"
//               onClick={() => handleMove("r")}
//             />
//           </div>
//         )}
//         <div className="ttableWrapper">
//           {user.id ? (
//             <button className="tbookNow"  onClick={confimationReservation}>
//               Reserve or Book Now!
//             </button>
//           ) : (
//             <button>
//               <Link to="/login" className="tbookNow">
//                 Login is required
//               </Link>
//             </button>
//           )}

//           <h1 className="ttableTitle">{state.elm.TitleT}</h1>
//           <span className="ttableDistance">Excellent location – 500m from center</span>
//           <span className="ttablePriceHighlight">{state.elm.detailsT2}</span>
//           <div className="ttableImages">
//             {photos.map((photo, i) => (
//               <div className="ttableImgWrapper" key={i}>
//                 <img src={photos[i]} alt="fes" className="ttableImg" onClick={() => handleOpen(i)} />
//               </div>
//             ))}
//           </div>
//           <div className="ttableDetails">
//             <div className="ttableDetailsTexts">
//               <h3 className="ttableTitle">
//                 Welcome to <b className="text-success">Restaurant placeAndalusia Hotel!</b>
//               </h3>
//               <p className="ttableDesc">{state.elm.detailsT3}</p>
//             </div>
//             <div className="ttableDetailsPrice">
//               <h1>Perfect for a night stay!</h1>
//               <span>{state.elm.detailsT2}</span>
//               {user.id ? (
//                 <button onClick={confimationReservation}>Reserve or table Now!</button>
//               ) : (
//                 <button>
//                   <Link to="/login" className="text-light">
//                     Login is required
//                   </Link>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="mx-auto mt-4" style={{ height: '20px', opacity: "0.1" }} />
//       <ReteContainerTable cmt={allcmt} table_id={state.elm.id} avgRating={avgRating} cmtCount={cmtCount} table />
//       <MailList />
//     </div>
//   );
// };

// export default TableRestaunent;

import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MailList from "../../components/Uitily/mailList/MailList";
import { useUserContext } from "../../context/UserContext";
import ReteContainerTable from "../../components/ReteTable/ReteContainerTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentairesTable } from "../../redux/reducers/CmtTableSlice";

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { addReservationTable } from "../../redux/reducers/ReservationsTableSlice";


const TableRestaunent = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  console.log(state)
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const photos = [
    `http://localhost:8000/images/${state.elm.img1}.jpg`,
    `http://localhost:8000/images/${state.elm.img2}.jpg`,
    `http://localhost:8000/images/${state.elm.img3}.jpg`,
    `http://localhost:8000/images/${state.elm.img4}.jpg`,
    `http://localhost:8000/images/${state.elm.img5}.jpg`,
    `http://localhost:8000/images/${state.elm.img6}.jpg`,
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  useEffect(() => {
    dispatch(getAllCommentairesTable(state.elm.id));
  }, [dispatch]);

  const allcmt = useSelector((state) => state.allCommentairesTable.CommentairesTable);

  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const confimationReservation = () => {
    setOpenAlert(true);
  };

  const addTableReservation = () => {

    const reservationDate = new Date(state.date);
    const formattedReservationDate = reservationDate.toISOString().slice(0, 10); // Get the date in YYYY-MM-DD format
    
    // Ensure state.hour is in HH:MM format
    const formattedHour = state.hour; // Assuming state.hour is already in HH:MM format
    
    // Combine date and hour to create the reservation_time in the desired format
    const reservationTime = `${formattedReservationDate} ${state.hour}:00`;
    console.log(reservationTime);
    
    // Now dispatch the reservation
    dispatch(addReservationTable({
      table_id: state.elm.id,
      clientId: user.id,
      reservation_time: reservationTime
    }));
    
    

    setOpenAlert(false);
    navigate('/reservationsTableClient');
  };

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ backgroundColor: "rgba(51, 230, 15, 0.838)" }}>
        <div style={{ backgroundColor: "rgb(17, 199, 26)" }} className="text-light">
          <div style={{ backgroundColor: "rgba(17, 199, 41, 0.838)" }}>
            <div className="modal-header">
              <h5>Reservation Confirmation</h5>
            </div>
            <div className="modal-body">
              <p>You are one step away from completing your table reservation:</p>
              <ul>
                <li><strong className="me-2">Table Type:</strong> {state.elm.typeTable} </li>
                <li><strong>Reservation Date :</strong> {state.date} {state.hour}</li>
                <li><strong>Price:</strong> {state.elm.price} dh</li>
              </ul>
              <p style={{ color: "yellow" }}>In case of failure to attend at the specified time, the reservation will be canceled!!</p>
            </div>
            <div className="modal-footer">
              @PlaceAndalusia
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "rgba(51, 230, 15, 0.838)" }}>
        <Button className="text-light" onClick={addTableReservation}><b>Confirm</b></Button>
        <Button className="text-light" onClick={handleClose}><b>Cancel</b></Button>
      </DialogActions>
    </Dialog>
  );

  const cmtCount = allcmt?.length || 0;
  const ratingTotal = allcmt?.reduce((acc, curr) => acc + Number(curr.rating), 0) || 0;
  const avgRating = cmtCount > 0 ? (ratingTotal / cmtCount).toFixed(1) : 0;

  return (
    <div>
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="ttableContainer">
        {open && (
          <div className="tslider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="tclose"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="tarrow"
              onClick={() => handleMove("l")}
            />
            <div className="tsliderWrapper">
              <img src={`${photos[slideNumber]}`} className="w-75" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="tarrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="ttableWrapper">
          {user.id ? (
            <button className="tbookNow" onClick={confimationReservation}>
              Reserve or Book Now!
            </button>
          ) : (
            <button>
              <Link to="/login" className="tbookNow">
                Login is required
              </Link>
            </button>
          )}
          <h1 className="ttableTitle">{state.elm.TitleT}</h1>
          <span className="ttableDistance">Excellent location – 500m from center</span>
          <span className="ttablePriceHighlight ">{state.elm.detailsT2}</span>
          <div className="ttableImages">
            {photos.map((photo, i) => (
              <div className="ttableImgWrapper" key={i}>
                <img src={photos[i]} alt="fes" className="ttableImg" onClick={() => handleOpen(i)} />
              </div>
            ))}
          </div>
          <div className="ttableDetails">
            <div className="ttableDetailsTexts">
              <h3 className="ttableTitle">
                Welcome to <b className="text-success">Restaurant placeAndalusia Hotel!</b>
              </h3>
              <p className="ttableDesc">{state.elm.detailsT3}</p>
            </div>
            <div className="ttableDetailsPrice">
              <h1>Perfect for a night stay!</h1>
              <span>{state.elm.detailsT2}</span>
              {user.id ? (
                <button onClick={confimationReservation}>Reserve or Book Now!</button>
              ) : (
                <button>
                  <Link to="/login" className="text-light">
                    Login is required
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-4" style={{ height: '20px', opacity: "0.1" }} />
      <ReteContainerTable cmt={allcmt} table_id={state.elm.id} avgRating={avgRating} cmtCount={cmtCount} />
      <MailList />
    </div>
  );
};

export default TableRestaunent;

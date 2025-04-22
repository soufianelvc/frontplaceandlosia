

import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MailList from "../../components/Uitily/mailList/MailList";
import ReteContainer from "../../components/Rete/ReteContainer";
import { useUserContext } from "../../context/UserContext";
import { useDispatch,  } from "react-redux";
import { getAllCommentairesRoom } from "../../redux/reducers/CmtRSlice";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { addReservation } from "../../redux/reducers/ReservationsRoomsSlice";

const HotelRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const { user } = useUserContext();
  const dispatch = useDispatch();

  const photos = [
    `http://placeandalosia.free.nf/images/${state.elm.img1}`,
    `http://placeandalosia.free.nf/images/${state.elm.img2}`,
    `http://placeandalosia.free.nf/images/${state.elm.img3}`,
    `http://placeandalosia.free.nf/images/${state.elm.img4}`,
    `http://placeandalosia.free.nf/images/${state.elm.img5}`,
    `http://placeandalosia.free.nf/images/${state.elm.img6}`,
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
    dispatch(getAllCommentairesRoom(state.elm.id)).then((response) => {
      setAllComments(response.payload || []);  // Assuming payload contains the comments
    });
  }, [dispatch, state.elm.id]);

  const addR = () => {
    const startDate = new Date(state.date[0].startDate);
    startDate.setHours(23, 59, 59);
    const formattedStartDate = startDate.toISOString().slice(0, 19).replace('T', ' ');
    
    const endDate = new Date(state.date[0].endDate);
    endDate.setHours(23, 59, 59);
    const formattedEndDate = endDate.toISOString().slice(0, 19).replace('T', ' ');
    console.log( user.id);
    dispatch(addReservation({
      clientId: user.id,
      roomNumber: state.elm.id,
      startDate: formattedStartDate,
      endDate: formattedEndDate
    }));

    setOpenAlert(false);
    navigate('/reservationsClient');
  };

  const [openAlert, setOpenAlert] = useState(false);
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const confimationReservation = () => {
    setOpenAlert(true);
  };

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ backgroundColor: "rgba(141, 17, 199, 0.838)" }}>
        <div style={{ backgroundColor: "rgba(141, 17, 199,)" }} className="text-light">
          <div style={{ backgroundColor: "rgba(141, 17, 199, 0.838)" }}>
            <div className="modal-header">
              <h5>Reservation Confirmation</h5>
            </div>
            <div className="modal-body">
              <p>You are one step away from completing your reservation room:</p>
              <ul>
                <li><strong className="me-2">Room Type:</strong> {state.elm.typech} </li>
                <li><strong>Check-in Date :</strong> {state.date[0].startDate.toLocaleString()}</li>
                <li><strong>Check-out Date:</strong> {state.date[0].endDate.toLocaleString()}</li>
                <li><strong> price total :</strong> {state.elm.price} dh </li>
              </ul>
              <p style={{ color: "yellow" }}>In case of failure to attend at the specified time, the reservation will be canceled!!</p>
            </div>
            <div className="modal-footer">
              @PlaceAndalusia
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "rgba(141, 17, 199, 0.838)" }}>
        <Button className="text-light" onClick={addR}><b>Confirm</b></Button>
        <Button className="text-light" onClick={handleClose}><b>cancel</b></Button>
      </DialogActions>
    </Dialog>
  );

  const cmtCount = allComments?.length || 0;
  const ratingTotal = allComments?.reduce((acc, curr) => acc + Number(curr.rating), 0) || 0;
  const avgRating = cmtCount > 0 ? (ratingTotal / cmtCount).toFixed(1) : 0;

  return (
    <div>
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={`${photos[slideNumber]}`} className="w-75" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          {user.id ? (<><button className="bookNow" onClick={confimationReservation}>Reserve or Book Now!</button> </>) : <button><Link to="/login" className="bookNow">Login is requird </Link></button>}
          <h1 className="hotelTitle">{state.elm.TitleR}</h1>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            {state.elm.detailsR2}
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img src={photos[i]} alt="fes" className="hotelImg" onClick={() => handleOpen(i)} />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h3 className="hotelTitle">Welcome to <b className="text-success">
                {state.elm.hotelId === 1 ? " Fes " : " Marrakesh "}</b>
                placeAndalusia Hotel!</h3>
              <p className="hotelDesc">
                {state.elm.detailsR3}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a night stay!</h1>
              <span>
                {state.elm.detailsR3}
              </span>
              <h2>
                <b>{state.elm.price} dh.</b>
              </h2>
              {
                user.id ? (<><button onClick={confimationReservation} >Reserve or Book Now!</button> </>) : <button><Link to="/login" className="text-light ">Login is requird </Link></button>
              }
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-4" style={{ height: '20px', opacity: "0.1" }} />
      <ReteContainer cmt={allComments} chambre_id={state.elm.id} avgRating={avgRating} cmtCount={cmtCount} />
      <MailList />
    </div>
  );
};

export default HotelRoom;

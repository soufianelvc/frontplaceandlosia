import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { MdFreeCancellation } from 'react-icons/md';
import { differenceInDays, parseISO } from 'date-fns';
import './ReservationInfo.css'
const ReservationInfo = ({ reservation, i, onDelete }) => {
  const { id, roomNumber, startDate, endDate, room, created_at } = reservation;

  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className="bg-primary">
        <span className="text-light">Are you sure you want to cancel this reservation?     </span>
      </DialogContent>
      <DialogActions className="bg-primary">
        <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
        <Button className="text-light" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );

  const currentDate = new Date();
  const createdAtDate = parseISO(created_at);
  const daysDifference = differenceInDays(currentDate, createdAtDate);

  return (
    <div className="reservation-info bg-light my-5 rounded mt-5 mx-auto" style={{width:"89%"}}>
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="ms-3">
        <h5 className="text-primary d-flex align-items-center w-100">
          <div className="me-4 mt-1">Reservation: {id}</div>
          {daysDifference <= 1 && (
            <MdFreeCancellation className="mt-2 ms-5 me-0" onClick={handleDelete} />
          )}
        </h5>
        <p className="mb-1">Number: {i + 1}</p>
        <p className="mb-1">Room Number: {roomNumber}</p>
        <p className="mb-1">Start Date: {startDate}</p>
        <p className="mb-1">End Date: {endDate}</p>
      </div>
      <div className="room-info mx-3">
        <img 
          src={`http://placeandalosia.free.nf/images/${room.image}`} 
          alt="" 
          className="w-100 mt-2" 
          style={{width:"50px",height:"150px"}}
        />
      </div>
    </div>
  );
};

export default ReservationInfo;

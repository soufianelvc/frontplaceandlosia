import  { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { MdFreeCancellation } from 'react-icons/md';
import { differenceInDays, parseISO } from 'date-fns';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import './RoomInfo.css'
const RoomInfo = ({ room, i, onDelete }) => {

  const { id, typech, startDate, price, image, TitleR ,dispo} = room;

  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };



  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent  style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <span className="text-light">Are you sure you want to delete this room  ?     </span>
      </DialogContent>
      <DialogActions style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}}>
        <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
        <Button className="text-light" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );

  const navigate = useNavigate();
  const handleEdite = () => {
    navigate('/admin_update_room', { state: { rm: room} });
  };
  const handleDetails = () => {
    navigate('/admin_details_room', { state: { rm: room} });
  };


  return (
    <div className="reservation-info bg-light my-5 rounded mt-5">
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="ms-3">
        <h5 className="text-primary d-flex align-items-center w-100">
          <div className="me-4 mt-1">Room : {id}</div>
          <FaEdit className='mt-3 ms-5 text-success' onClick={handleEdite}/>
          {dispo == 1 && (
            // <MdFreeCancellation className="mt-2 ms-5 me-0" onClick={handleDelete} />
            <>
                <RiDeleteBin2Fill className='mt-3 ms-2 text-danger' onClick={handleDelete}/>
            </>
          )} 
          <TbListDetails className='mt-3  ms-2 text-primary' onClick={handleDetails}/>
        </h5>
        <p className="mb-1">Number: {i + 1}</p>

        <p className="mb-1"> condition : {dispo}</p>
        <p className="mb-1">price: {price} dh</p>
        <p className="mb-1">Room Title : {TitleR}</p>
      </div>
      <div className="room-info mx-3">
        <img 
          src={`http://localhost:8000/images/${image}`} 
          alt="" 
          className="w-100 mt-2" 
          style={{width:"50px",height:"150px"}}
        />
      </div>
    </div>
  );
};

export default RoomInfo;

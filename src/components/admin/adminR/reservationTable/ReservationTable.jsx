import { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { MdFreeCancellation } from 'react-icons/md';
import { differenceInDays, parseISO } from 'date-fns';

const ReservationTable = ({ reservation, i, onDelete }) => {
  console.log(reservation);
  const { id, tableNumber, startDate, endDate, created_at, clientId } = reservation;

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
        <span className="text-light">Are you sure you want to cancel this reservation?</span>
      </DialogContent>
      <DialogActions className="bg-primary">
        <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
        <Button className="text-light" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );

  // Check if created_at is not null before parsing it
  const currentDate = new Date();
  const createdAtDate = created_at ? parseISO(created_at) : null;
  const daysDifference = createdAtDate ? differenceInDays(currentDate, createdAtDate) : null;

  return (
    <div className="reservation-info bg-light my-5 rounded mt-5">
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="ms-3">
        <h5 className="text-primary d-flex align-items-center w-100">
          <div className="mt-1 mx-auto">Reservation: {id}</div>
          {daysDifference !== null && daysDifference <= 1 && (
            <MdFreeCancellation className="mt-2 ms-5 me-0" onClick={handleDelete} />
          )}
        </h5>
        <p className="mb-1">Number: {i + 1}</p>
        <p className="mb-1">Table Number: {tableNumber}</p>
        <p className="mb-1">Start Date: {startDate}</p>
        <p className="mb-1">End Date: {endDate}</p>
        <p className="mb-1">Client ID: {clientId}</p>
      </div>
    </div>
  );
};

export default ReservationTable;


// import { useState } from 'react';
// import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
// import { MdFreeCancellation } from 'react-icons/md';
// import { differenceInDays, parseISO, addMinutes, format } from 'date-fns';

// const ReservationTable = ({ reservation, i, onDelete }) => {
//   console.log(reservation);
//   const { id, table_id, reservation_time, clientId } = reservation;

//   const [openAlert, setOpenAlert] = useState(false);

//   const handleDelete = () => {
//     setOpenAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   const CustomAlert = ({ open, handleClose }) => (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent className="bg-primary">
//         <span className="text-light">Are you sure you want to cancel this reservation?</span>
//       </DialogContent>
//       <DialogActions className="bg-primary">
//         <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
//         <Button className="text-light" onClick={handleClose}><b>No</b></Button>
//       </DialogActions>
//     </Dialog>
//   );

//   const startDate = parseISO(reservation_time);
//   const endDate = addMinutes(startDate, 59);
//   const createdAtDate = parseISO(reservation.created_at);
//   const currentDate = new Date();
//   const daysDifference = createdAtDate ? differenceInDays(currentDate, createdAtDate) : null;

//   return (
//     <div className="reservation-info bg-light my-5 rounded mt-5">
//       <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
//       <div className="ms-3">
//         <h5 className=" d-flex align-items-center w-100" style={{color:"green"}}>
//           <div className="me-4 mt-1">Reservation: {id}</div>
//           {daysDifference !== null && daysDifference <= 1 && (
//             <MdFreeCancellation className="mt-2 ms-5 me-0" onClick={handleDelete} />
//           )}
//         </h5>
//         <p className="mb-1">Number: {i + 1}</p>
//         <p className="mb-1">Table Number: {table_id}</p>
//         <p className="mb-1">Start Date: {format(startDate, 'yyyy-MM-dd HH:mm')}</p>
//         <p className="mb-1">End Date: {format(endDate, 'yyyy-MM-dd HH:mm')}</p>
//         <p className="mb-1">Client ID: {clientId}</p>
//       </div>
//     </div>
//   );
// };

// export default ReservationTable;




// import { MdDelete } from "react-icons/md";
// import img from "../../../images/Breakfast.jpg";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const ReservationInfoTable = ({ info }) => {
//   const [immg, setimmg] = useState();

//   console.log(info);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/tables/${info.table_id}`);
//         setimmg(`http://localhost:8000/images/${res.data.images}`);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchData();
//   }, [info.table_id]);

//   return (
//     <div className="reservation-info bg-light my-5 rounded mt-5">
//       <div className="mx-3">
//         <h4 className="text-primary d-flex align-items-center w-100">
//           Reservation {info.id}
//           <MdDelete className="mt-2 ms-5 me-0" /> 
//         </h4>
//         <p className="mb-1">table Number: {info.table_id}</p>
//         <p className="mb-1">Date-time: {info.reservation_time}</p>
//       </div>

//       <div className="room-info mx-3">
//         {immg ? (
//           <img src={immg} alt="" className="w-100 mt-2" />
//         ) : (
//           <>don't have img h</>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReservationInfoTable;



// import { MdDelete } from "react-icons/md";
// import img from "../../../images/Breakfast.jpg";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const ReservationInfoTable = ({ info }) => {
//   const [immg, setimmg] = useState();
//   const [showDeleteIcon, setShowDeleteIcon] = useState(true);

//   console.log(info);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/tables/${info.table_id}`);
//         setimmg(`http://localhost:8000/images/${res.data.images}`);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchData();
//   }, [info.table_id]);

//   useEffect(() => {
//     // Convert reservation_time to a Date object
//     const reservationDate = new Date(info.reservation_time);
//     // Get current date
//     const currentDate = new Date();
//     // Calculate the difference in time
//     const timeDifference = currentDate - reservationDate;
//     // Convert time difference to days
//     const daysDifference = timeDifference / (1000 * 3600 * 24);

//     // Hide the delete icon if the reservation is older than 1 day
//     if (daysDifference > 1) {
//       setShowDeleteIcon(false);
//     }
//   }, [info.reservation_time]);

//   return (
//     <div className="reservation-info bg-light my-5 rounded mt-5">
//       <div className="mx-3">
//         <h4 className="text-primary d-flex align-items-center w-100">
//           Reservation {info.id}
//           {showDeleteIcon && <MdDelete className="mt-2 ms-5 me-0" />}
//         </h4>
//         <p className="mb-1">table Number: {info.table_id}</p>
//         <p className="mb-1">Date-time: {info.reservation_time}</p>
//       </div>

//       <div className="room-info mx-3">
//         {immg ? (
//           <img src={immg} alt="" className="w-100 mt-2" />
//         ) : (
//           <>don't have img h</>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReservationInfoTable;


// import { MdDelete } from "react-icons/md";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteReservationTable, getAllReservationsTable } from "../../../redux/reducers/ReservationsTableSlice";
// import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";


// const ReservationInfoTable = ({ info }) => {
//   const [immg, setimmg] = useState();
//   const [showDeleteIcon, setShowDeleteIcon] = useState(true);
//   const dispatch = useDispatch();

//   console.log(info);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/tables/${info.table_id}`);
//         setimmg(`http://localhost:8000/images/${res.data.images}`);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchData();
//   }, [info.table_id]);

//   useEffect(() => {
//     const reservationDate = new Date(info.reservation_time);
//     const currentDate = new Date();
//     const timeDifference = currentDate - reservationDate;
//     const daysDifference = timeDifference / (1000 * 3600 * 24);
//     if (daysDifference > 1) {
//       setShowDeleteIcon(false);
//     }
//   }, [info.reservation_time]);


  
//   const handleDelete = () => {
//     dispatch(deleteReservationTable(info.id));

//   };


//   return (
//     <div className="reservation-info bg-light my-5 rounded mt-5">
//       <div className="mx-3">
//         <h4 className="text-primary d-flex align-items-center w-100">
//           Reservation {info.id}
//           {showDeleteIcon && <MdDelete className="mt-2 ms-5 me-0" onClick={handleDelete} />}
//         </h4>
//         <p className="mb-1">table Number: {info.table_id}</p>
//         <p className="mb-1">Date-time: {info.reservation_time}</p>
//       </div>

//       <div className="room-info mx-3">
//         {immg ? (
//           <img src={immg} alt="" className="w-100 mt-2" />
//         ) : (
//           <>don't have img h</>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReservationInfoTable;


// import { MdDelete } from "react-icons/md";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteReservationTable, getAllReservationsTable } from "../../../redux/reducers/ReservationsTableSlice";
// import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

// const ReservationInfoTable = ({ info }) => {
//   const [immg, setimmg] = useState();
//   const [showDeleteIcon, setShowDeleteIcon] = useState(true);
//   const [openAlert, setOpenAlert] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/tables/${info.table_id}`);
//         setimmg(`http://localhost:8000/images/${res.data.images}`);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchData();
//   }, [info.table_id]);

//   useEffect(() => {
//     const reservationDate = new Date(info.reservation_time);
//     const currentDate = new Date();
//     const timeDifference = currentDate - reservationDate;
//     const daysDifference = timeDifference / (1000 * 3600 * 24);
//     if (daysDifference > 1) {
//       setShowDeleteIcon(false);
//     }
//   }, [info.reservation_time]);

//   const handleDelete = () => {
//     dispatch(deleteReservationTable(info.id));
//     setOpenAlert(false);
//   };

//   const handleOpenAlert = () => {
//     setOpenAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   return (
//     <div className="reservation-info bg-light my-5 rounded mt-5">
//       <Dialog open={openAlert} onClose={handleCloseAlert}>
//         <DialogContent style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//           <span className="text-light">Are you sure you want to delete this reservation?</span>
//         </DialogContent>
//         <DialogActions style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//           <Button className="text-light" onClick={handleDelete}><b>Yes</b></Button>
//           <Button className="text-light" onClick={handleCloseAlert}><b>No</b></Button>
//         </DialogActions>
//       </Dialog>

//       <div className="mx-3">
//         <h4 className="text-primary d-flex align-items-center w-100">
//           Reservation {info.id}
//           {showDeleteIcon && <MdDelete className="mt-2 ms-5 me-0" onClick={handleOpenAlert} />}
//         </h4>
//         <p className="mb-1">Table Number: {info.table_id}</p>
//         <p className="mb-1">Date-time: {info.reservation_time}</p>
//       </div>

//       <div className="room-info mx-3">
//         {immg ? (
//           <img src={immg} alt="" className="w-100 mt-2" />
//         ) : (
//           <>Don't have an image</>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReservationInfoTable;


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReservationTable } from "../../../redux/reducers/ReservationsTableSlice";
import { MdDelete } from "react-icons/md";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import axios from "axios";
import './ReservationInfoTable.css'; // Import the CSS file

const ReservationInfoTable = ({ info }) => {
  const [image, setImage] = useState();
  const [showDeleteIcon, setShowDeleteIcon] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/tables/${info.table_id}`);
        setImage(`http://localhost:8000/images/${res.data.images}`);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [info.table_id]);

  useEffect(() => {
    const reservationDate = new Date(info.reservation_time);
    const currentDate = new Date();
    const timeDifference = currentDate - reservationDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    if (daysDifference > 1) {
      setShowDeleteIcon(false);
    }
  }, [info.reservation_time]);

  const handleDelete = () => {
    dispatch(deleteReservationTable(info.id));
    setOpenAlert(false);
  };

  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

  return (
    <div className="reservation-info   my-5 rounded">
      <Dialog open={openAlert} onClose={handleCloseAlert}>
        <DialogContent style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
          <span className="text-light">Are you sure you want to delete this reservation?</span>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
          <Button className="text-light" onClick={handleDelete}><b>Yes</b></Button>
          <Button className="text-light" onClick={handleCloseAlert}><b>No</b></Button>
        </DialogActions>
      </Dialog>

      <div className="reservation-details mx-3">
        <h4 className="text-primary d-flex align-items-center">
          Reservation {info.id}
          {showDeleteIcon && <MdDelete className="delete-icon" onClick={handleOpenAlert} />}
        </h4>
        <p className="mb-1">Table Number: {info.table_id}</p>
        <p className="mb-1">Date-time: {info.reservation_time}</p>
      </div>

      <div className="image-container mx-3">
        {image ? (
          <img src={image} alt="Table" className="w-100 mt-2" />
        ) : (
          <p>Don't have an image</p>
        )}
      </div>
    </div>
  );
};

export default ReservationInfoTable;

// import { MdDelete } from "react-icons/md";
// import img from "../../../images/Breakfast.jpg";

// const RepasClient = ({ cmmds ,i}) => {
//   const { id, Qte, repas } = cmmds;

//   return (
//     <div className="reservation-success pb-3 my-5 rounded mt-4 mb-2 "  style={{backgroundColor:'#fffb1e2c'}}>
//       <div className="mx-3">
//       <h5 className=" d-flex align-items-center w-100  " style={{color:"orange"}}>
//       <div className='me-4 mt-1'>Commande {id}</div>
//           <MdDelete className="mt-2 ms-5 me-0 " /> 
//         </h5>
//         <p className="mb-1"> Number: {i+ 1} </p>
//         <p className="mb-1">Repas name: {repas.title} </p>
//         <p className="mb-1">Repas price : <b style={{backgroundColor:'yellow'}} className="p-1">{repas.price} dh</b></p>
//       </div>

//       <div className="room-info mx-3">
//         <img 
//             src={`http://localhost:8000/images/${repas.image}`}   
//             alt="" className="w-100 mt-2 " style={{maxHeight:'150px'}} />
//       </div>
//     </div>
//   );
// };

// export default RepasClient;


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { deleteCmd } from "../../../redux/reducers/CmdRClientSlice";
// import { MdDelete } from "react-icons/md";
// import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
// import "./RepasClient.css"
// const RepasClient = ({ cmmds, i }) => {
//   const { id, Qte, repas } = cmmds;

//   if (!repas) {
//     return <div>Repas data is missing for Commande {id}</div>;
//   }
//   const dispatch = useDispatch();
//   const [openAlert, setOpenAlert] = useState(false);

//   const handleOpenAlert = () => {
//     setOpenAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   const handleDelete = () => {
//     dispatch(deleteCmd(id));
//     setOpenAlert(false);
//   };

//   return (
//     <div className="reservation-success pb-3 my-5 rounded mt-4 mb-2" style={{ backgroundColor: '#fffb1e2c' }}>
//       <Dialog open={openAlert} onClose={handleCloseAlert}>
//         <DialogContent style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//           <span className="text-light">Are you sure you want to delete this repas?</span>
//         </DialogContent>
//         <DialogActions style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//           <Button className="text-light" onClick={handleDelete}><b>Yes</b></Button>
//           <Button className="text-light" onClick={handleCloseAlert}><b>No</b></Button>
//         </DialogActions>
//       </Dialog>

//       <div className="mx-3">
//         <h5 className="d-flex align-items-center w-100" style={{ color: "orange" }}>
//           <div className='me-4 mt-1'>Commande {id}</div>
//           <MdDelete className="mt-2 ms-5 me-0" onClick={handleOpenAlert} />
//         </h5>
//         <p className="mb-1">Number: {i + 1}</p>
//         <p className="mb-1">Repas name: {repas.title?(repas.title):null}</p>
//         <p className="mb-1">Repas price: <b style={{ backgroundColor: 'yellow' }} className="p-1">{repas.price?(repas.price):null} dh</b></p>
//       </div>

//       <div className="room-info mx-3">
//         <img
//           src={`http://localhost:8000/images/${repas.image}`}
//           alt="" className="w-100 mt-2" style={{ maxHeight: '150px' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default RepasClient;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCmd } from "../../../redux/reducers/CmdRClientSlice";
import { MdDelete } from "react-icons/md";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import "./RepasClient.css";

const RepasClient = ({ cmmds, i }) => {
  const { id, Qte, repas } = cmmds;

  if (!repas) {
    return <div>Repas data is missing for Commande {id}</div>;
  }
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

  const handleDelete = () => {
    dispatch(deleteCmd(id));
    setOpenAlert(false);
  };

  return (
    <div className="reservation-success">
      <Dialog open={openAlert} onClose={handleCloseAlert} className="">
        <DialogContent className="bg-primary">
          <span className="text-light">Are you sure you want to delete this repas?</span>
        </DialogContent>
        <DialogActions className="bg-primary">
          <Button className="text-light" onClick={handleDelete}><b>Yes</b></Button>
          <Button className="text-light" onClick={handleCloseAlert}><b>No</b></Button>
        </DialogActions>
      </Dialog>

      <div className="reservation-details">
        <h5 className="d-flex align-items-center">
          <span>Commande {id}</span>
          <MdDelete className="delete-icon" onClick={handleOpenAlert} />
        </h5>
        <p className="detail">Number: {i + 1}</p>
        <p className="detail">Repas name: {repas.title ? repas.title : "N/A"}</p>
        <p className="detail">
          Repas price: <b className="price">{repas.price ? `${repas.price} dh` : "N/A"}</b>
        </p>
      </div>

      <div className="image-container">
        <img
          src={`http://localhost:8000/images/${repas.image}`}
          alt={repas.title || "Repas Image"}
          className="image"
        />
      </div>
    </div>
  );
};

export default RepasClient;

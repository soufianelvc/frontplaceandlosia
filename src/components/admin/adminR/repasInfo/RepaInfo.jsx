// import { useState } from 'react';
// import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
// import { RiDeleteBin2Fill } from 'react-icons/ri';
// import { FaEdit } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { TbListDetails } from 'react-icons/tb';

// const RepaInfo = ({ repa, i, onDelete }) => {
//   const { id, title, price, image, name, category, stock, details1 } = repa;
//   const [openAlert, setOpenAlert] = useState(false);

//   const handleDelete = () => {
//     setOpenAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   const CustomAlert = ({ open, handleClose }) => (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//         <span className="text-light">Are you sure you want to delete this meal?</span>
//       </DialogContent>
//       <DialogActions style={{ backgroundColor: "rgba(141, 17, 199, 0.938)" }}>
//         <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
//         <Button className="text-light" onClick={handleClose}><b>No</b></Button>
//       </DialogActions>
//     </Dialog>
//   );

//   const navigate = useNavigate();
//   const handleEdit = () => {
//     navigate('/admin_update_repa', { state: { repa } });
//   };

//   const handleDetails = () => {
//     navigate('/admin_details_repa', { state: { repa } });
//   };

//   return (
//     <div className="repa-info bg-light my-5 rounded mt-5">
//       <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
//       <div className="ms-3">
//         <h5 className="text-primary d-flex align-items-center w-100">
//           <div className="me-4 mt-1">Meal: {id}</div>
//           <FaEdit className='mt-3 ms-5 text-success' onClick={handleEdit} />
//           <RiDeleteBin2Fill className='mt-3 ms-2 text-danger' onClick={handleDelete} />
//           <TbListDetails className='mt-3 ms-2 text-primary' onClick={handleDetails} />
//         </h5>
//         <p className="mb-1">Number: {i + 1}</p>
//         <p className="mb-1">Title: {title}</p>
//         <p className="mb-1">Price: {price} dh</p>
//         <p className="mb-1">Name: {name}</p>
//         <p className="mb-1">Category: {category}</p>
//         <p className="mb-1">Stock: {stock}</p>
//       </div>
//       <div className="repa-image mx-3">
//         <img 
//           src={`http://placeandalosia.free.nf/images/${image}`} 
//           alt="" 
//           className="w-100 mt-2" 
//           style={{ width: "50px", height: "150px" }} 
//         />
//       </div>
//     </div>
//   );
// };

// export default RepaInfo;

import { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import './RepaInfo.css'; // Import your custom CSS

const RepaInfo = ({ repa, i, onDelete }) => {
  const { id, title, price, image, name, category, stock } = repa;
  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className="alert-content">
        <span className="alert-text">Are you sure you want to delete this meal?</span>
      </DialogContent>
      <DialogActions className="alert-actions">
        <Button className="alert-button" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
        <Button className="alert-button" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/admin_update_repa', { state: { repa } });
  };

  const handleDetails = () => {
    navigate('/admin_details_repa', { state: { repa } });
  };

  return (
    <div className="repa-info">
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div className="repa-header">
        <h5 className="repa-title">
          <span className="meal-id">Meal: {id}</span>
          <FaEdit className='icon edit-icon' onClick={handleEdit} />
          <RiDeleteBin2Fill className='icon delete-icon' onClick={handleDelete} />
          <TbListDetails className='icon details-icon' onClick={handleDetails} />
        </h5>
        <p className="repa-info-item">Number: {i + 1}</p>
        <p className="repa-info-item">Title: {title}</p>
        <p className="repa-info-item">Price: {price} dh</p>
        <p className="repa-info-item">Name: {name}</p>
        <p className="repa-info-item">Category: {category}</p>
        <p className="repa-info-item">Stock: {stock}</p>
      </div>
      <div className="repa-image">
        <img 
          src={`http://placeandalosia.free.nf/images/${image}`} 
          alt="" 
          className="repa-image-img"
        />
      </div>
    </div>
  );
};

export default RepaInfo;

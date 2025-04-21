// import { useState } from 'react';
// import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
// import { RiDeleteBin2Fill } from 'react-icons/ri';
// import { FaEdit } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { TbListDetails } from 'react-icons/tb';
// import './TableInfo.css'
// const TableInfo = ({ table, i, onDelete }) => {
//   const { id, number, numberChildren , numberAdult , types, status,images ,dispo} = table;
//   const [openAlert, setOpenAlert] = useState(false);

//   const handleDelete = () => {
//     setOpenAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setOpenAlert(false);
//   };

//   const CustomAlert = ({ open, handleClose }) => (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent style={{ backgroundColor: "rgba(0, 128, 0, 0.8)" }}>
//         <span className="text-light">Are you sure you want to delete this table?</span>
//       </DialogContent>
//       <DialogActions style={{ backgroundColor: "rgba(0, 128, 0, 0.8)" }}>
//         <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
//         <Button className="text-light" onClick={handleClose}><b>No</b></Button>
//       </DialogActions>
//     </Dialog>
//   );

//   const navigate = useNavigate();
//   const handleEdit = () => {
//     navigate('/admin_update_table', { state: { tbl: table } });
//   };
//   const handleDetails = () => {
//     navigate('/admin_details_table', { state: { tbl: table } });
//   };

//   return (
//     <div className="table-info bg-light my-5 rounded mt-5">
//       <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
//       <div className="ms-3">
//         <h5 className="text-primary d-flex align-items-center w-100">
//           <div className="me-4 mt-1">Table: {id}</div>
//           <FaEdit className='mt-3 ms-5 text-success' onClick={handleEdit} />
//           {dispo === 1 && (
//             <>
//               <RiDeleteBin2Fill className='mt-3 ms-2 text-danger' onClick={handleDelete} />
//             </>
//           )}
//           <TbListDetails className='mt-3 ms-2 text-primary' onClick={handleDetails} />
//         </h5>
//         <p className="mb-1">Number: {i + 1}</p>
//         <p className="mb-1">Capacity: {numberAdult + numberChildren}</p>
//         <p className="mb-1">Type: {types}</p>
//         <div className="room-info mx-3">
//         <img 
//           src={`http://localhost:8000/images/${images}`} 
//           alt="" 
//           className="w-100 mt-2" 
//           style={{width:"50px",height:"150px"}}
//         />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default TableInfo;


import { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TbListDetails } from 'react-icons/tb';
import './TableInfo.css'; // Import the CSS file

const TableInfo = ({ table, i, onDelete }) => {
  const { id, number, numberChildren, numberAdult, types, status, images, dispo } = table;
  const [openAlert, setOpenAlert] = useState(false);

  const handleDelete = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const CustomAlert = ({ open, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ backgroundColor: "rgba(0, 128, 0, 0.8)" }}>
        <span className="text-light">Are you sure you want to delete this table?</span>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "rgba(0, 128, 0, 0.8)" }}>
        <Button className="text-light" onClick={() => { onDelete(id); handleClose(); }}><b>Yes</b></Button>
        <Button className="text-light" onClick={handleClose}><b>No</b></Button>
      </DialogActions>
    </Dialog>
  );

  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/admin_update_table', { state: { tbl: table } });
  };
  const handleDetails = () => {
    navigate('/admin_details_table', { state: { tbl: table } });
  };

  return (
    <div className="table-info">
      <CustomAlert open={openAlert} handleClose={handleCloseAlert} />
      <div>
        <h5>
          <div>Table: {id}</div>
          <FaEdit className='icon text-success' onClick={handleEdit} />
          {dispo === 1 && (
            <>
              <RiDeleteBin2Fill className='icon text-danger' onClick={handleDelete} />
            </>
          )}
          <TbListDetails className='icon text-primary' onClick={handleDetails} />
        </h5>
        <p>Number: {i + 1}</p>
        <p>Capacity: {numberAdult + numberChildren}</p>
        <p>Type: {types}</p>
        <div>
          <img 
            src={`http://localhost:8000/images/${images}`} 
            alt="" 
          />
        </div>
      </div>
    </div>
  );
};

export default TableInfo;

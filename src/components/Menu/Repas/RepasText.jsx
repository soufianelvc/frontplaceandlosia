


// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useUserContext } from '../../../context/UserContext';
// import { addCmd } from '../../../redux/reducers/CmdRClientSlice';
// import { Link, useNavigate } from 'react-router-dom';

// const RepasText = ({ dataR }) => {
//   const navigate = useNavigate();
//   const [cid, setCid] = useState(0);
//   const { user } = useUserContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (user && user.id) {
//       setCid(Number(user.id));
//     }
//   }, [user]);

//   const handleCommanderClick = async () => {
//     const commandData = {
//       Qte: 1, // Set a default quantity, you can modify this based on your requirement
//       mealId: dataR.id, // Assuming dataR.id is the meal ID
//       clientId: cid,
//     };

//     // Dispatch the action to add the command
//     await dispatch(addCmd(commandData));
//     await navigate('/repasClient');
//   };

//   return (
//     <div className="container mt-2">
//       <div className="row">
//         <div className="col-12">
//           <div className="text-muted">{dataR.title}:</div>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-md-8">
//           <div>
//             <span className="fw-bold">{dataR.details1}</span>
//             <span className="badge bg-secondary mx-3">{dataR.rating}.5</span>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-md-8">
//           <div>
//             <span className="text-muted">Category:</span>
//             <span className="mx-2">{dataR.category}</span>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-1">
//         <div className="col-md-8">
//           <div className="text-muted">Details:</div>
//         </div>
//       </div>

//       <div className="row mt-2">
//         <div className="col-md-12">
//           <div className="p-3 border bg-light">
//             {dataR.details2}
//           </div>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-md-12">
//           <div className="d-inline-block px-3 py-3 my-3" style={{backgroundColor:"green",color:"wheat"}}>
//             {dataR.price} dh
//           </div>
//           {user && user.id ? (
//             <button className="btn btn-primary mx-3" onClick={handleCommanderClick}>
//               Commander
//             </button>
//           ) : (
//             <button className="btn btn-primary mx-3">
//               <Link to="/login" className="text-light">Login is required</Link>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RepasText;
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUserContext } from '../../../context/UserContext';
import { addCmd } from '../../../redux/reducers/CmdRClientSlice';
import { Link, useNavigate } from 'react-router-dom';
import './RepasText.css';

const RepasText = ({ dataR }) => {
  const navigate = useNavigate();
  const [cid, setCid] = useState(0);
  const { user } = useUserContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      setCid(Number(user.id));
    }
  }, [user]);

  const handleCommanderClick = async () => {
    const commandData = {
      Qte: 1,
      mealId: dataR.id,
      clientId: cid,
    };

    await dispatch(addCmd(commandData));
    await navigate('/repasClient');
  };

  return (
    <div className="repas-container">
      <div className="repas-title">
        {dataR.title}:
      </div>

      <div className="repas-details">
        <span className="repas-detail-bold">{dataR.details1}</span>
        <span className="repas-rating">{dataR.rating}.5</span>
      </div>

      <div className="repas-category">
        <span className="repas-category-label">Category:</span>
        <span className="repas-category-value">{dataR.category}</span>
      </div>

      <div className="repas-details-header">Details:</div>

      <div className="repas-details-body">
        {dataR.details2}
      </div>

      <div className="repas-price-container">
        <div className="repas-price">{dataR.price} dh</div>
        {user && user.id ? (
          <button className="repas-button" onClick={handleCommanderClick}>
            Commander
          </button>
        ) : (
          <button className="repas-button">
            <Link to="/login" className="repas-link">Login is required</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default RepasText;

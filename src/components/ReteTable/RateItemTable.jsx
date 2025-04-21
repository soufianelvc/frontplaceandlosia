// import { useDispatch, useSelector } from 'react-redux';
// import rate from '../../images/rate.png'
// import { useEffect } from 'react';
// import { getClientById } from '../../redux/reducers/ClientSlice';
// import './RateItemTable.css'
// const RateItemTable = ({cmmts}) => {
//   const dispatch = useDispatch();
//     useEffect(() => {

//       dispatch(getClientById(cmmts.user_id));
//     }, [dispatch]);
//     const userInfo = useSelector(state => state.infoClient.Client);
//     return (
//         <div>
//             <div className="row mt-3">
//                 <div className="col d-felx me-5">
//                 <img alt="" height="60px" width="50px"  src={`http://localhost:8000/images/${userInfo.image}`}/>
//                     <div className="rate-name  d-inline ms-2"> {userInfo.name} {userInfo.name2} </div>
//                     <div className="cat-rate  d-inline  p-1 pt-2">{cmmts.rating}</div>
//                     <img className="" src={rate} alt="" height="16px" width="16px" />
//                 </div>
//             </div>
//             <div className="row border-bottom mx-2">
//                 <div className="col d-felx pb-2">
//                     <div className="rate-description  d-inline ms-5 ">
//                       {cmmts.comment}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RateItemTable
import { useDispatch, useSelector } from 'react-redux';
import rate from '../../images/rate.png';
import { useEffect } from 'react';
import { getClientById } from '../../redux/reducers/ClientSlice';
import './RateItemTable.css';

const RateItemTable = ({ cmmts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientById(cmmts.user_id));
  }, [dispatch, cmmts.user_id]);

  const userInfo = useSelector((state) => state.infoClient.Client);

  return (
    <div className="rate-item-container">
      <div className="rate-item-header">
<div className='d-flex'>
          <img
            alt=""
            className="rate-item-image"
            src={`http://localhost:8000/images/${userInfo.image}`}
          />
          <div className="rate-item-name">
            {userInfo.name} {userInfo.name2}
          </div>
          <div className="rate-item-rating">
          {cmmts.rating}
          <img className="rate-item-icon" src={rate} alt="" />
        </div>
</div>

      </div>
      <div className="rate-item-description">
        {cmmts.comment}
      </div>
    </div>
  );
};

export default RateItemTable;

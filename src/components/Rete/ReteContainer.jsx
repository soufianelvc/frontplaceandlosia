
// import rate from '../../images/rate.png'
// import RateItem from './RateItem';
// import RatePost from './RatePost';
// import { useUserContext } from '../../context/UserContext';
// const ReteContainer = ({cmt,chambre_id,chambre,dd}) => {
//   console.log(cmt.length)
//   cmt.forEach(el => {
//     console.log(el.chambre_id);
//   });
//   // console.log(cmt.chambre_id)
//   // console.log(cmt)
//   const {user}=useUserContext();
//   // console.log("use is : ");
//   // console.log(user.id);
//   // console.log(cmt.length);
//   var count = 0 ; 
//   const ratingTotale = (params) => {
//     cmt.map((item)=>{
//       count += Number(item.rating);
//     }
//   )
//   }
//   ratingTotale();
//   // console.log(count/cmt.length);
//   return (
//     <div className='container rate-container'>
//       <div className='row'>
//         <div className="col d-flex">
//           <div className="sub-tile d-inline p-1 ">Feedbacks</div>
//           <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
//           <div className="cat-rate d-inline p-1 pt-2">{isNaN(count / cmt.length) ? 0 : (count / cmt.length).toFixed(1)}</div>
//           <div className="rate-count d-inline p-1 pt-2">({cmt.length} evaluation)</div>
//         </div>
//       </div>
//       {user.id? (
//         <RatePost user={user} chambre_id={chambre_id} elm={chambre} dd={dd}/>
//       ) : (
//         <></>
//       )}
  
//   { cmt ? (
//     cmt.map((cmt, index) => (
//         cmt.chambre_id === chambre_id && (
//             <div key={index}>
//                 <RateItem cmmts={cmt} dd={dd} />
//             </div>
//         )
//     ))
// ) : (
//     <></>
// )}
//     </div>
//   )
// }

// export default ReteContainer

import rate from '../../images/rate.png'
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useUserContext } from '../../context/UserContext';
const ReteContainer = ({cmt,chambre_id,chambre,dd}) => {
  console.log(chambre)
  cmt.forEach(el => {
    console.log(el.chambre_id);
  });
  // console.log(cmt.chambre_id)
  // console.log(cmt)
  const {user}=useUserContext();
  // console.log("use is : ");
  // console.log(user.id);
  // console.log(cmt.length);
  var count = 0 ; 
  const ratingTotale = (params) => {
    cmt.map((item)=>{
      count += Number(item.rating);
    }
  )
  }
  ratingTotale();
  // console.log(count/cmt.length);
  return (
    <div className='container rate-container ' style={{width:"90%"}}>
      <div className='row'>
        <div className="col d-flex">
          <div className="sub-tile d-inline p-1 ">Feedbacks</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate d-inline p-1 pt-2">
  {isNaN(count / cmt.length) ? 0 : (count / cmt.length).toFixed(1)}
</div>

          <div className="rate-count d-inline w-75 pt-2 ">({cmt.length} evaluation)</div>
        </div>
      </div>
      {user.id? (
        <RatePost user={user} chambre_id={chambre_id} elm={chambre} dd={dd}/>
      ) : (
        <></>
      )}
  
  { cmt ? (
    cmt.map((cmt, index) => (
        cmt.chambre_id === chambre_id && (
            <div key={index}>
                <RateItem cmmts={cmt} dd={dd} />
            </div>
        )
    ))
) : (
    <></>
)}
    </div>
  )
}

export default ReteContainer

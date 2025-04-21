// import rate from "../../images/rate.png";

// import { useUserContext } from "../../context/UserContext";
// import RatePostTable from "./RatePostTable";
// import RateItemTable from "./RateItemTable";
// const ReteContainerTable = ({ cmt, table_id, chambre, dd }) => {
//     console.log(chambre)
//     console.log(table_id)
//     console.log(cmt)
//     // cmt.forEach((el) => {
//     //     console.log(el.table_id);
//     // });
//     // console.log(cmt.table_id)
//     // console.log(cmt)
//     const { user } = useUserContext();
//     // console.log("use is : ");
//     // console.log(user.id);
//     // console.log(cmt.length);
//     var count = 0;
//     const ratingTotale = (params) => {
//         cmt.map((item) => {
//             count += Number(item.rating);
//         });
//     };
//     ratingTotale();
//     // console.log(count/cmt.length);
//     return (
//         <div className="container rate-container">
//             <div className="row">
//                 <div className="col d-flex">
//                     <div className="sub-tile d-inline p-1 ">Feedbacks</div>
//                     <img
//                         className="mt-2"
//                         src={rate}
//                         alt=""
//                         height="16px"
//                         width="16px"
//                     />
//                     <div className="cat-rate d-inline p-1 pt-2">
//                         {isNaN(count / cmt.length)
//                             ? 0
//                             : (count / cmt.length).toFixed(1)}
//                     </div>

//                     <div className="rate-count d-inline p-1 pt-2">
//                         ({cmt.length} evaluation)
//                     </div>
//                 </div>
//             </div>
//             {user.id ? (
//                 <RatePostTable user={user} table_id={table_id} elm={chambre} dd={dd}
//                 />
//             ) : (
//                 <></>
//             )}

//             {cmt ? (
//                 cmt.map(
//                     (cmt, index) =>
//                         cmt.restaurant_table_id === table_id && (
//                             <div key={index}>
//                                 <RateItemTable cmmts={cmt} dd={dd} />
//                             </div>
//                         )
//                 )
//             ) : (
//                 <></>
//             )}
//         </div>
//     );
// };

// export default ReteContainerTable;


import { useUserContext } from "../../context/UserContext";
import RatePostTable from "./RatePostTable";
import RateItemTable from "./RateItemTable";
import rate from "../../images/rate.png";

const ReteContainerTable = ({ cmt, table_id, table, dd }) => {
  console.log(table);
  console.log(table_id);
  console.log(cmt);
  
  const { user } = useUserContext();
  let count = 0;
  cmt.forEach((item) => {
    count += Number(item.rating);
  });

  return (
    <div className="container rate-container">
      <div className="row" style={{width:"96%"}}>
        <div className="col d-flex">
          <div className="sub-tile d-inline p-1">Feedbacks</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate d-inline p-1 pt-2">
            {isNaN(count / cmt.length) ? 0 : (count / cmt.length).toFixed(1)}
          </div>
          <div className="rate-count d-inline p-1 pt-2">({cmt.length} evaluations)</div>
        </div>
      </div>
      {user.id ? (
        <RatePostTable user={user} table_id={table_id} elm={table} dd={dd} /> 
      ) : null}

      {cmt ? (
        cmt.map((cmt, index) => (
          cmt.restaurant_table_id === table_id && (
            <div key={index}>
              <RateItemTable cmmts={cmt} dd={dd} /> 
            </div>
          )
        ))
      ) : null}
    </div>
  );
};

export default ReteContainerTable;

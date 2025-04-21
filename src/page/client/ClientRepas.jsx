// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import RepasClient from "../../components/client/RepasClient/RepasClient";
// import { useUserContext } from "../../context/UserContext";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCmdClient } from "../../redux/reducers/CmdRClientSlice";

// export default function ClientRepas() {
//   const [cid, setcid] = useState(0);
//   console.log(cid)
//   const { user } = useUserContext();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     console.log(cid);
//     dispatch(getAllCmdClient(cid));
//   }, [dispatch,cid]);
//   const allcmds = useSelector(state => state.allCmdRClient.Cmds);
//     return (
//         <div style={{ marginTop: "10px" }}>
//             <div className="container">
//                 <div className="py-3 row">
//                     <div className="col-md-2 col-3">
//                         <ClientSideBar />
//                     </div>
//                     <div className=" col-md-4 col-9 mt-5  w-75">
//                         <div className="row">
//                             {allcmds.map((cmds, index) => (
//                                 <div key={index} className="col-4">
//                                   <RepasClient cmmds={cmds} i={index} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }






// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import RepasClient from "../../components/client/RepasClient/RepasClient";
// import { useUserContext } from "../../context/UserContext";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCmdClient } from "../../redux/reducers/CmdRClientSlice";
// import './ClientRepas.css'; // Import the CSS file

// export default function ClientRepas() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     if (cid !== 0) {
//       dispatch(getAllCmdClient(cid));
//     }
//   }, [dispatch, cid]);

//   const allcmds = useSelector(state => state.allCmdRClient.Cmds);

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <div className="sidebarDC">
//           <ClientSideBar />
//         </div>
//         <div className="repas-list mt-5 w-75">
//           <div className="row">
//             {allcmds.length > 0 ? (
//               allcmds.map((cmds, index) => (
//                 <div key={index} className="col-4">
//                   <RepasClient cmmds={cmds} i={index} />
//                 </div>
//               ))
//             ) : (
//               <p>No commands found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import RepasClient from "../../components/client/RepasClient/RepasClient";
// import { useUserContext } from "../../context/UserContext";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCmdClient } from "../../redux/reducers/CmdRClientSlice";
// import './ClientRepas.css'; // Import the CSS file
// import ReactPaginate from 'react-paginate';

// export default function ClientRepas() {
//   const [cid, setcid] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
//   const commandesPerPage = 6; 
//   const { user } = useUserContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     if (cid !== 0) {
//       dispatch(getAllCmdClient(cid));
//     }
//   }, [dispatch, cid]);

//   const allcmds = useSelector(state => state.allCmdRClient.Cmds);

//   // Calculate the commands to display based on the current page
//   const indexOfLastCommand = (currentPage + 1) * commandesPerPage;
//   const indexOfFirstCommand = indexOfLastCommand - commandesPerPage;
//   const currentCommands = allcmds.slice(indexOfFirstCommand, indexOfLastCommand);

//   // Calculate the total number of pages
//   const pageCount = Math.ceil(allcmds.length / commandesPerPage);

//   // Handle page change
//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <div className="sidebarDC">
//           <ClientSideBar />
//         </div>
//         <div className="repas-list mt-5 w-75">
//           <div className="row">
//             {allcmds.length > 0 ? (
//                allcmds.map((cmds, index) => (
//                 <div key={index} className="col-4">
//                   <RepasClient cmmds={cmds} i={index} />
//                 </div>
//               ))
//             ) : (
//               <p>No commands found</p>
//             )}
//           </div>
//           <ReactPaginate
//             previousLabel={'< previous'}
//             nextLabel={'next >'}
//             breakLabel={'...'}
//             pageCount={pageCount}
//             marginPagesDisplayed={1}
//             pageRangeDisplayed={1}
//             onPageChange={handlePageClick}
//             containerClassName={'pagination'}
//             activeClassName={'active'}
//             previousClassName={'page-item'}
//             nextClassName={'page-item'}
//             breakClassName={'page-item'}
//             pageClassName={'page-item'}
//             pageLinkClassName={'page-link'}
//             previousLinkClassName={'page-link'}
//             nextLinkClassName={'page-link'}
//             breakLinkClassName={'page-link'}
//             activeLinkClassName={'active'}
//             renderOnZeroPageCount={null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import ClientSideBar from "../../components/client/ClientSideBar";
import RepasClient from "../../components/client/RepasClient/RepasClient";
import { useUserContext } from "../../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllCmdClient } from "../../redux/reducers/CmdRClientSlice";
import './ClientRepas.css'; // Import the CSS file
import ReactPaginate from 'react-paginate';

export default function ClientRepas() {
  const [cid, setcid] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const commandesPerPage = 8; 
  const { user } = useUserContext();
  const dispatch = useDispatch();

  useEffect(() => {
    setcid(Number(user.id));
  }, [user]);

  useEffect(() => {
    if (cid !== 0) {
      dispatch(getAllCmdClient(cid));
    }
  }, [dispatch, cid]);

  const allcmds = useSelector(state => state.allCmdRClient.Cmds);

  // Calculate the commands to display based on the current page
  const indexOfLastCommand = (currentPage + 1) * commandesPerPage;
  const indexOfFirstCommand = indexOfLastCommand - commandesPerPage;
  const currentCommands = allcmds.slice(indexOfFirstCommand, indexOfLastCommand);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allcmds.length / commandesPerPage);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="sidebarDC">
          <ClientSideBar />
        </div>
        <div className="repas-list mt-5">
          <div className="grid-container">
            {allcmds.length > 0 ? (
              currentCommands.map((cmds, index) => (
                <div key={index} className="grid-item">
                  <RepasClient cmmds={cmds} i={index} />
                </div>
              ))
            ) : (
              <p>No commands found</p>
            )}
          </div>
          <ReactPaginate
            previousLabel={'< previous'}
            nextLabel={'next >'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            breakClassName={'page-item'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakLinkClassName={'page-link'}
            activeLinkClassName={'active'}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

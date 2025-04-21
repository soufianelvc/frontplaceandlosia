// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import ReservationInfoTable from "../../components/client/ReservationInfoTable/ReservationInfoTable";
// import { useUserContext } from "../../context/UserContext";
// import { axiosClient } from "../../redux/axios";
// export default function ClientReservationsTable() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   console.log(user)
//   const [AllRTable, setAllRTable] = useState();
//   console.log(AllRTable)
//   useEffect(() => {
//     setcid(Number(user.id));
//     axiosClient.get('http://localhost:8000/api/reservationstables')
//     .then(res => {setAllRTable(res.data.filter(item => item.clientId === cid))})
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }, [cid]);
//     return (
//         <div style={{ marginTop: "10px" }}>
//             <div className="container">
//                 <div className="py-3 row">
//                     <div className="col-md-2 col-3">
//                         <ClientSideBar />
//                     </div>
//                     <div className=" col-md-4 col-9 mt-5  w-75">
//                         <div className="row">
//                         {AllRTable?(AllRTable.map(item => (
//                           <div className="col-4" key={item.id}>
//                             <ReservationInfoTable info={item} />
//                           </div>
//                           ))):(<>no</>)}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import ReservationInfoTable from "../../components/client/ReservationInfoTable/ReservationInfoTable";
// import { useUserContext } from "../../context/UserContext";
// import { axiosClient } from "../../redux/axios";
// import './ClientReservationsTable.css'; // Import the CSS file

// export default function ClientReservationsTable() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   const [AllRTable, setAllRTable] = useState([]);

//   useEffect(() => {
//     setcid(Number(user.id));
//     axiosClient.get('http://localhost:8000/api/reservationstables')
//       .then(res => { setAllRTable(res.data.filter(item => item.clientId === cid)) })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [cid, user.id]);

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <div className="sidebarDC">
//           <ClientSideBar />
//         </div>
//         <div className="reservation-list mt-5 w-75">
//           <div className="row">
//             {AllRTable.length > 0 ? (
//               AllRTable.map(item => (
//                 <div className="col-4" key={item.id}>
//                   <ReservationInfoTable info={item} />
//                 </div>
//               ))
//             ) : (
//               <p>No reservations found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import ReservationInfoTable from "../../components/client/ReservationInfoTable/ReservationInfoTable";
// import { useUserContext } from "../../context/UserContext";
// import { axiosClient } from "../../redux/axios";
// import './ClientReservationsTable.css'; // Import the CSS file
// import ReactPaginate from 'react-paginate';

// export default function ClientReservationsTable() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   const [AllRTable, setAllRTable] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
//   const reservationsPerPage = 6; 

//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     if (cid !== 0) {
//       axiosClient.get('http://localhost:8000/api/reservationstables')
//         .then(res => { 
//           setAllRTable(res.data.filter(item => item.clientId === cid)); 
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }
//   }, [cid]);

//   // Calculate the reservations to display based on the current page
//   const indexOfLastReservation = (currentPage + 1) * reservationsPerPage;
//   const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
//   const currentReservations = AllRTable.slice(indexOfFirstReservation, indexOfLastReservation);

//   // Calculate the total number of pages
//   const pageCount = Math.ceil(AllRTable.length / reservationsPerPage);

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
//         <div className="reservation-list mt-5 w-75">
//           <div className="row">
//             {currentReservations.length > 0 ? (
//               currentReservations.map(item => (
//                 <div className="col-4" key={item.id}>
//                   <ReservationInfoTable info={item} />
//                 </div>
//               ))
//             ) : (
//               <p>No reservations found</p>
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
import ReservationInfoTable from "../../components/client/ReservationInfoTable/ReservationInfoTable";
import { useUserContext } from "../../context/UserContext";
import { axiosClient } from "../../redux/axios";
import './ClientReservationsTable.css'; // Import the CSS file
import ReactPaginate from 'react-paginate';

export default function ClientReservationsTable() {
  const [cid, setCid] = useState(0);
  const { user } = useUserContext();
  const [allReservations, setAllReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const reservationsPerPage = 6; 

  useEffect(() => {
    setCid(Number(user.id));
  }, [user]);

  useEffect(() => {
    if (cid !== 0) {
      axiosClient.get('http://localhost:8000/api/reservationstables')
        .then(res => { 
          setAllReservations(res.data.filter(item => item.clientId === cid)); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [cid]);

  // Calculate the reservations to display based on the current page
  const indexOfLastReservation = (currentPage + 1) * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = allReservations.slice(indexOfFirstReservation, indexOfLastReservation);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allReservations.length / reservationsPerPage);

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
        <div className="reservation-list mt-5">
          <div className="row">
            {currentReservations.length > 0 ? (
              currentReservations.map(item => (
                <div className="col-md-4 col-sm-6" key={item.id}>
                  <ReservationInfoTable info={item} />
                </div>
              ))
            ) : (
              <p>No reservations found</p>
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

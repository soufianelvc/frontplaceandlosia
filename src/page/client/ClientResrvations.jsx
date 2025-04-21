// import { useDispatch, useSelector } from "react-redux";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import ReservationInfo from "../../components/client/ReservationInfo/ReservationInfo";
// import { useEffect, useState } from "react";
// import { getAllReservationClient, deleteReservation } from "../../redux/reducers/RoomsClientSlice";
// import { useUserContext } from "../../context/UserContext";
// import './ClientReservations.css'; // Import the CSS file
// export default function ClientReservations() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     if (cid !== 0) {
//       dispatch(getAllReservationClient(cid));
//     }
//   }, [dispatch, cid]);

//   const allRCR = useSelector(state => state.allReservationsRoomClient.Reservations);

//   const handleDelete = async (id) => {
//     try {
//       console.log('Deleting reservation with id:', id); // Log reservation id
//       await dispatch(deleteReservation(id));
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//     }
//   };

//   return (

//       <div className="dashboard-container">
//         <div className="dashboard-content">
//           <div className="sidebarDC ">
//             <ClientSideBar />
//           </div>
//           <div className="col-md-4 col-9 mt-5 w-75">
//             <div className="row">
//               {allRCR.map((reservation, index) => (
//                 <div key={index} className="col-4">
//                   <ReservationInfo reservation={reservation} i={index} onDelete={handleDelete} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// }



//------------------------------------------------

// import { useDispatch, useSelector } from "react-redux";
// import ClientSideBar from "../../components/client/ClientSideBar";
// import ReservationInfo from "../../components/client/ReservationInfo/ReservationInfo";
// import { useEffect, useState } from "react";
// import { getAllReservationClient, deleteReservation } from "../../redux/reducers/RoomsClientSlice";
// import { useUserContext } from "../../context/UserContext";
// import './ClientReservations.css'; // Import the CSS file

// export default function ClientReservations() {
//   const [cid, setcid] = useState(0);
//   const { user } = useUserContext();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setcid(Number(user.id));
//   }, [user]);

//   useEffect(() => {
//     if (cid !== 0) {
//       dispatch(getAllReservationClient(cid));
//     }
//   }, [dispatch, cid]);

//   const allRCR = useSelector(state => state.allReservationsRoomClient.Reservations);

//   const handleDelete = async (id) => {
//     try {
//       console.log('Deleting reservation with id:', id); // Log reservation id
//       await dispatch(deleteReservation(id));
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <div className="sidebarDC">
//           <ClientSideBar />
//         </div>
//         <div className="reservation-list mt-5 w-75">
//           <div className="row">
//             {allRCR.map((reservation, index) => (
//               <div key={index} className="reservation-item col-4">
//                 <ReservationInfo reservation={reservation} i={index} onDelete={handleDelete} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//---------------------------------------


import { useDispatch, useSelector } from "react-redux";
import ClientSideBar from "../../components/client/ClientSideBar";
import ReservationInfo from "../../components/client/ReservationInfo/ReservationInfo";
import { useEffect, useState } from "react";
import { getAllReservationClient, deleteReservation } from "../../redux/reducers/RoomsClientSlice";
import { useUserContext } from "../../context/UserContext";
import ReactPaginate from "react-paginate";
import './ClientReservations.css'; // Import the CSS file

export default function ClientReservations() {
  const [cid, setcid] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const reservationsPerPage = 6; 
  const { user } = useUserContext();
  const dispatch = useDispatch();

  useEffect(() => {
    setcid(Number(user.id));
  }, [user]);

  useEffect(() => {
    if (cid !== 0) {
      dispatch(getAllReservationClient(cid));
    }
  }, [dispatch, cid]);

  const allRCR = useSelector(state => state.allReservationsRoomClient.Reservations);

  const handleDelete = async (id) => {
    try {
      console.log('Deleting reservation with id:', id); // Log reservation id
      await dispatch(deleteReservation(id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  // Calculate the reservations to display based on the current page
  const indexOfLastReservation = (currentPage + 1) * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = allRCR.slice(indexOfFirstReservation, indexOfLastReservation);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allRCR.length / reservationsPerPage);

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
        <div className="reservation-list mt-5 " >
          <div className="row">
            {currentReservations.length > 0 ? (
              currentReservations.map((reservation, index) => (
                <div key={index} className="reservation-item col-4" >
                  <ReservationInfo reservation={reservation} i={index} onDelete={handleDelete} />

                </div>
              ))
            ) : (
              <>No reservations available!</>
            )}
          </div>
          <ReactPaginate
            previousLabel={'< previous'}
            nextLabel={'next >'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
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

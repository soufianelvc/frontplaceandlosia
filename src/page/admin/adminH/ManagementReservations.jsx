// import { useDispatch, useSelector } from "react-redux";
// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
// import { useEffect, useState } from "react";
// // import { deleteRoom } from "../../../redux/reducers/RoomsSlice";
// import ReactPaginate from 'react-paginate';
// import './pagination.css'
// import { getAllReservations } from "../../../redux/reducers/ReservationsRoomsSlice";
// import Reservation from "../../../components/admin/adminH/reservation/Reservation";
// // import { deleteRoom } from "../../../redux/reducers/RoomsSlice";
// import { deleteReservation } from "../../../redux/reducers/RoomsClientSlice";
// export default function ManagementReservations() {
//   const [dele, setdele] = useState(1);
//   const [currentPage, setCurrentPage] = useState(0); 
//   const reservationPerPage = 6; 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllReservations());
//   }, [dispatch, dele]);

//   const allReservationsRoomsss = useSelector(state => state.allReservationsRooms.ReservationsRooms);
//   console.log(allReservationsRoomsss);

//   const handleDelete = async (id) => {
//     try {
//       setdele(0);
//       console.log('Deleting room with id:', id);
//       await dispatch(deleteReservation(id));
//       setdele(1);
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//     }
//   };

//   // Calculate the rooms to display based on the current page
//   const indexOfLastRoom = (currentPage + 1) * reservationPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - reservationPerPage;
//   const currentReservation = allReservationsRoomsss.slice(indexOfFirstRoom, indexOfLastRoom);

//   // Calculate the total number of pages
//   const pageCount = Math.ceil(allReservationsRoomsss.length / reservationPerPage);

//   // Handle page change
//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   return (
//     <div style={{ marginTop: "10px" }}>
//       <div className="container">
//         <div className="py-3 row">
//           <div className="col-md-2 col-3">
//             <AdminHotelSideBar />
//           </div>
//           <div className="col-md-4 col-9 mt-5 w-75 ">
//             <div className="mt-5"></div>
//             <div className="row">
//               {currentReservation.length > 0 ? (
//                 currentReservation.map((reservation, index) => (
//                   <div key={index} className="col-4">
//                     {/* <RoomInfo room={room} i={index} onDelete={handleDelete} /> */}
//                     <Reservation reservation={reservation} i={index} onDelete={handleDelete}/>
//                   </div>
//                 ))
//               ) : (
//                 <>data vide !!!</>
//               )}
//             </div>
//             <ReactPaginate
//               previousLabel={'< previous'}
//               nextLabel={'next >'}
//               breakLabel={'...'}
//               pageCount={pageCount}
//               marginPagesDisplayed={2}
//               pageRangeDisplayed={3}
//               onPageChange={handlePageClick}
//               containerClassName={'pagination'}
//               activeClassName={'active'}
//               previousClassName={'page-item'}
//               nextClassName={'page-item'}
//               breakClassName={'page-item'}
//               pageClassName={'page-item'}
//               pageLinkClassName={'page-link'}
//               previousLinkClassName={'page-link'}
//               nextLinkClassName={'page-link'}
//               breakLinkClassName={'page-link'}
//               activeLinkClassName={'active'}
//               renderOnZeroPageCount={null}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useDispatch, useSelector } from "react-redux";
import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import './ManagementReservations.css'; // Custom CSS file
import { getAllReservations } from "../../../redux/reducers/ReservationsRoomsSlice";
import Reservation from "../../../components/admin/adminH/reservation/Reservation";
import { deleteReservation } from "../../../redux/reducers/RoomsClientSlice";

export default function ManagementReservations() {
  const [dele, setdele] = useState(1);
  const [currentPage, setCurrentPage] = useState(0); 
  const reservationPerPage = 6; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch, dele]);

  const allReservations = useSelector(state => state.allReservationsRooms.ReservationsRooms);

  const handleDelete = async (id) => {
    try {
      setdele(0);
      await dispatch(deleteReservation(id));
      setdele(1);
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  // Calculate reservations to display based on the current page
  const indexOfLastReservation = (currentPage + 1) * reservationPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationPerPage;
  const currentReservations = allReservations.slice(indexOfFirstReservation, indexOfLastReservation);

  // Calculate total number of pages
  const pageCount = Math.ceil(allReservations.length / reservationPerPage);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="containerr_res">
      <div className="dashboard-content_res">
        <div className="sidebarAH_res">
          <AdminHotelSideBar />
        </div>
        <div className="reservations_res">
          <div className="reservations_res-list">
            {currentReservations.length > 0 ? (
              currentReservations.map((reservation, index) => (
                <div key={index} className="reservation-item">
                  <Reservation reservation={reservation} i={index} onDelete={handleDelete} />
                </div>
              ))
            ) : (
              <div>No data available!</div>
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
          />
        </div>
      </div>
    </div>
  );
}

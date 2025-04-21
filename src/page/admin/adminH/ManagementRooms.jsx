// import { useDispatch, useSelector } from "react-redux";
// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
// import { useEffect, useState } from "react";
// import { deleteRoom, getAllRoom } from "../../../redux/reducers/RoomsSlice";
// import RoomInfo from "../../../components/admin/adminH/roominfo/RoomInfo";
// import ReactPaginate from 'react-paginate';
// import './pagination.css'
// export default function ManagementRooms() {
//   const [dele, setdele] = useState(1);
//   const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
//   const roomsPerPage = 6; 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllRoom());
//   }, [dispatch, dele]);

//   const allRoomss = useSelector(state => state.allRooms.Rooms);
//   console.log(allRoomss);

//   const handleDelete = async (id) => {
//     try {
//       setdele(0);
//       console.log('Deleting room with id:', id);
//       await dispatch(deleteRoom(id));
//       setdele(1);
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//     }
//   };

//   // Calculate the rooms to display based on the current page
//   const indexOfLastRoom = (currentPage + 1) * roomsPerPage;
//   const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
//   const currentRooms = allRoomss.slice(indexOfFirstRoom, indexOfLastRoom);

//   // Calculate the total number of pages
//   const pageCount = Math.ceil(allRoomss.length / roomsPerPage);

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
//           <div className="col-md-4 col-9 mt-5 w-75">
//             <div className="row">
//               {currentRooms.length > 0 ? (
//                 currentRooms.map((room, index) => (
//                   <div key={index} className="col-4">
//                     <RoomInfo room={room} i={index} onDelete={handleDelete} />
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
//           <hr className='pt-1' style={{backgroundColor:"rgba(141, 17, 199, 0.938)"}} />
//         </div>
//       </div>
//     </div>
//   );
// }



import { useDispatch, useSelector } from "react-redux";
import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
import { useEffect, useState } from "react";
import { deleteRoom, getAllRoom } from "../../../redux/reducers/RoomsSlice";
import RoomInfo from "../../../components/admin/adminH/roominfo/RoomInfo";
import ReactPaginate from 'react-paginate';
import './ManagementRooms.css'; // Custom CSS file

export default function ManagementRooms() {
  const [dele, setdele] = useState(1);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const roomsPerPage = 6; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoom());
  }, [dispatch, dele]);

  const allRoomss = useSelector(state => state.allRooms.Rooms);

  const handleDelete = async (id) => {
    try {
      setdele(0);
      await dispatch(deleteRoom(id));
      setdele(1);
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  // Calculate the rooms to display based on the current page
  const indexOfLastRoom = (currentPage + 1) * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = allRoomss.slice(indexOfFirstRoom, indexOfLastRoom);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allRoomss.length / roomsPerPage);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container_r">
      <div className="management-rooms-content">
        <div className="sidebarAH">
          <AdminHotelSideBar />
        </div>
        <div className="rooms">
          <div className="rooms-list">
            {currentRooms.length > 0 ? (
              currentRooms.map((room, index) => (
                <div key={index} className="room-item">
                  <RoomInfo room={room} i={index} onDelete={handleDelete} />
                </div>
              ))
            ) : (
              <>Data is empty!</>
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
      <hr className='divider' />
    </div>
  );
}

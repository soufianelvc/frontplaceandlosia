

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import ReactPaginate from 'react-paginate';
import './pagination_table.css'
import { deleteReservationTable, getAllReservationsTable } from "../../../redux/reducers/ReservationsTableSlice";
import ReservationTable from "../../../components/admin/adminR/reservationTable/ReservationTable";
// import { getAllReservationsTable, deleteReservationTable } from "../../../redux/reducers/ReservationsTableSlice";
// import ReservationTable from "../../../components/admin/adminR/reservation/ReservationTable";
import "./ManagementReservationsTablesPage.css"
const ManagementReservationsTablesPage = () => {
  const [dele, setDele] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const reservationsPerPage = 6;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservationsTable());
  }, [dispatch, dele]);

  const allReservationsTables = useSelector(state => state.allReservationsTables.ReservationsTables);
  console.log(allReservationsTables);

  const handleDelete = async (id) => {
    try {
      setDele(0);
      console.log('Deleting reservation with id:', id);
      await dispatch(deleteReservationTable(id));
      setDele(1);
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const indexOfLastReservation = (currentPage + 1) * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = allReservationsTables.slice(indexOfFirstReservation, indexOfLastReservation);

  const pageCount = Math.ceil(allReservationsTables.length / reservationsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (

      <div className="profile-container-res-mrt">
        <div className="profile-content-res-mrt">
          <div className="sidebar-res-mrt">
            <AdminRestaurantSideBar />
          </div>
          <div className="profile-res-mrt">
            <div className="row">
              {currentReservations.length > 0 ? (
                currentReservations.map((reservation, index) => (
                  <>  <ReservationTable reservation={reservation} i={index} onDelete={handleDelete}/></>
                ))
              ) : (
                <>No data available!</>
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

export default ManagementReservationsTablesPage;

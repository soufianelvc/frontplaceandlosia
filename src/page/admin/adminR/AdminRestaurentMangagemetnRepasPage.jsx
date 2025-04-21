import { useEffect, useState } from "react";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteRepa, getAllRepas } from "../../../redux/reducers/RepasSlice";
import ReactPaginate from "react-paginate";
import RepaInfo from "../../../components/admin/adminR/repasInfo/RepaInfo";
import './AdminRestaurentMangagemetnRepasPage.css'
const AdminRestaurentMangagemetnRepasPage = () => {
  const [dele, setDele] = useState(1);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const repasPerPage = 6; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRepas());
  }, [dispatch, dele]);

  const allRepas = useSelector(state => state.allRepas.repas);
  console.log(allRepas);

  const handleDelete = async (id) => {
    try {
      setDele(0);
      console.log('Deleting repa with id:', id);
      await dispatch(deleteRepa(id));
      setDele(1);
    } catch (error) {
      console.error('Error deleting repa:', error);
    }
  };

  // Calculate the repas to display based on the current page
  const indexOfLastRepa = (currentPage + 1) * repasPerPage;
  const indexOfFirstRepa = indexOfLastRepa - repasPerPage;
  const currentRepas = allRepas.slice(indexOfFirstRepa, indexOfLastRepa);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allRepas.length / repasPerPage);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (

      <div className="profile-container-res-mar">
        <div className="profile-content-res-mar">
          <div className="sidebar-res-mar">
            <AdminRestaurantSideBar />
          </div>
          <div className="profile-res-mar">
            <div className="row">
              {currentRepas.length > 0 ? (
                currentRepas.map((repa, index) => (
                  <div key={index} className="">
                    <RepaInfo repa={repa} i={index} onDelete={handleDelete} />
                  </div>
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

  )
}

export default AdminRestaurentMangagemetnRepasPage ; 
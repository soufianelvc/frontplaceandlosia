// import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";

// const AdminRestaurentMangagemetTablesPage = () => {
//   return (
//     <div className='container'>
//     <div className='py-3 row'>
//         <div className='col-md-2 col-3'> {/* Changed from 'col sm-3 xs-2 md-2' */}
//             <AdminRestaurantSideBar />
//         </div>
//         <div className='col-md-10 col-9'> {/* Changed from 'col sm-9 xs-10 md-10' */}
//           <div className="mt-5 pt-5"></div>
//           AdminRestaurentMangagemetTables
          
//         {/* <AdminRestaurantAddRepa/> */}
//         </div>
//     </div>
// </div>
//   )
// }

// export default AdminRestaurentMangagemetTablesPage ; 



// import { useDispatch, useSelector } from "react-redux";
// import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
// import { useEffect, useState } from "react";
// // import { deleteTable, getAllTables } from "../../../redux/reducers/TablesSlice";
// // import TableInfo from "../../../components/admin/adminR/tableinfo/TableInfo";
// import ReactPaginate from 'react-paginate';
// import './pagination_table.css';
// import { deleteTable, getAllTable } from "../../../redux/reducers/TablesSlice";
// import TableInfo from "../../../components/admin/adminR/tableinfo/TableInfo";

// export default function AdminRestaurantManagementTablesPage() {
//   const [dele, setdele] = useState(1);
//   const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
//   const tablesPerPage = 6; 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllTable());
//   }, [dispatch, dele]);

//   const allTables = useSelector(state => state.allTables.Tables);
//   console.log(allTables);

//   const handleDelete = async (id) => {
//     try {
//       setdele(0);
//       console.log('Deleting table with id:', id);
//       await dispatch(deleteTable(id));
//       setdele(1);
//     } catch (error) {
//       console.error('Error deleting table:', error);
//     }
//   };

//   // Calculate the tables to display based on the current page
//   const indexOfLastTable = (currentPage + 1) * tablesPerPage;
//   const indexOfFirstTable = indexOfLastTable - tablesPerPage;
//   const currentTables = allTables.slice(indexOfFirstTable, indexOfLastTable);

//   // Calculate the total number of pages
//   const pageCount = Math.ceil(allTables.length / tablesPerPage);

//   // Handle page change
//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   return (
//     <div style={{ marginTop: "10px" }}>
//       <div className="container">
//         <div className="py-3 row">
//           <div className="col-md-2 col-3">
//             <AdminRestaurantSideBar />
//           </div>
//           <div className="col-md-4 col-9 mt-5 w-75">
//             <div className="row">
//               {currentTables.length > 0 ? (
//                 currentTables.map((table, index) => (
//                   <div key={index} className="col-4">
//                     <TableInfo table={table} i={index} onDelete={handleDelete} />
//                   </div>
//                 ))
//               ) : (
//                 <>No data available</>
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
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import { useEffect, useState } from "react";
// import { deleteTable, getAllTables } from "../../../redux/reducers/TablesSlice";
// import TableInfo from "../../../components/admin/adminR/tableinfo/TableInfo";
import ReactPaginate from 'react-paginate';
import './pagination_table.css';
import { deleteTable, getAllTable,  } from "../../../redux/reducers/TablesSlice";
import TableInfo from "../../../components/admin/adminR/tableinfo/TableInfo";
// import { deleteTable, getAllTables } from "../../../redux/reducers/TablesSlice";
import "./AdminRestaurantManagementTablesPage.css"
export default function AdminRestaurantManagementTablesPage() {
  const [dele, setdele] = useState(1);
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses 0-based indexing
  const tablesPerPage = 6; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTable());
  }, [dispatch]);
  const allTables = useSelector(state => state.allTabls.Tables);
  console.log(allTables);

  const handleDelete = async (id) => {
    try {
      setdele(0);
      console.log('Deleting table with id:', id);
      await dispatch(deleteTable(id));
      setdele(1);
    } catch (error) {
      console.error('Error deleting table:', error);
    }
  };

  // Calculate the tables to display based on the current page
  const indexOfLastTable = (currentPage + 1) * tablesPerPage;
  const indexOfFirstTable = indexOfLastTable - tablesPerPage;
  const currentTables = allTables.slice(indexOfFirstTable, indexOfLastTable);

  // Calculate the total number of pages
  const pageCount = Math.ceil(allTables.length / tablesPerPage);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
      <div className="profile-container-res-mat">
        <div className="profile-content-res-mat">
          <div className="sidebar-res-mat">
            <AdminRestaurantSideBar />
          </div>
          <div className="profile-res-mat">
            <div className="row">
              {currentTables.length > 0 ? (
                currentTables.map((table, index) => (
              <><TableInfo table={table} i={index} onDelete={handleDelete} /></>  
            
                ))
              ) : (
                <>No data available</>
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

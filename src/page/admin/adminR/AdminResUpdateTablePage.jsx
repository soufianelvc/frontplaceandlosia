// AdminRestaurantAddRepa



// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
// import ProfileHotel from "../../../components/admin/adminH/adminHotelProfile/adminHotelProfile";


import { useLocation } from "react-router-dom";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import AdminResUpdateTable from "../../../components/admin/adminR/adminResUpdateTable/AdminResUpdateTable";
import './AdminResUpdateTablePage.css'
const AdminResUpdateTablePage = () => {
  const location = useLocation();
  const { tbl } = location.state;
    return (
      <div className='profile-container-res-utab'>
      <div className='profile-content-res-utab'>
          <div className='sidebar-res-utab'> {/* Changed from 'col sm-3 xs-2 md-2' */}
              <AdminRestaurantSideBar />
          </div>
          <div className='profile-res-utab'> {/* Changed from 'col sm-9 xs-10 md-10' */}

          <AdminResUpdateTable tbl={tbl} />
          
          </div>
      </div>
  </div>
    )
}

export default AdminResUpdateTablePage ; 
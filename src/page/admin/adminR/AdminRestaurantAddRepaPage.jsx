// AdminRestaurantAddRepa



// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
// import ProfileHotel from "../../../components/admin/adminH/adminHotelProfile/adminHotelProfile";


import AdminRestaurantAddRepa from "../../../components/admin/adminR/adminRestaurantAddRepa/AdminRestaurantAddRepa";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import "./AdminRestaurantAddRepaPage.css"
const AdminRestaurantAddRepaPage = () => {
    return (
      <div className='profile-container-res-ar'>
      <div className='profile-content-res-ar'>
          <div className='sidebar-res-ar'> 
              <AdminRestaurantSideBar />
          </div>
          <div className='profile-res-ar'> 
          <AdminRestaurantAddRepa/>
          </div>
      </div>
  </div>
    )
}

export default AdminRestaurantAddRepaPage ; 
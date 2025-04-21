

// import AdminRestaurantProfile from "../../../components/admin/adminR/adminRestaurantProfile/AdminRestaurantProfile";
// import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";

// const AdminRestaurantProfilePage = () => {
//     return (
//       <div className='container'>
//       <div className='py-3 row'>
//           <div className='col-md-2 col-3'>
//               <AdminRestaurantSideBar />
//           </div>
//           <div className='col-md-10 col-9'> 
//               <AdminRestaurantProfile/>

      
//           </div>
//       </div>
//   </div>
//     )
// }

// export default AdminRestaurantProfilePage ; 
import AdminRestaurantProfile from "../../../components/admin/adminR/adminRestaurantProfile/AdminRestaurantProfile";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import './AdminRestaurantProfilePage.css'

const AdminRestaurantProfilePage = () => {
    return (
        <div className='profile-container-res-p'>
            <div className='profile-content-res-p'>
                <div className='sidebar-res-p'>
                    <AdminRestaurantSideBar />
                </div>
                <div className='profile-res-p'>
                    <AdminRestaurantProfile />
                </div>
            </div>
        </div>
    );
}

export default AdminRestaurantProfilePage;

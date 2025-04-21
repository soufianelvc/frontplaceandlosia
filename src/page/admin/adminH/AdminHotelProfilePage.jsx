
// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
// import ProfileHotel from "../../../components/admin/adminH/adminHotelProfile/adminHotelProfile";

// const AdminHotelProfilePage = () => {
//     return (
//       <div className='container'>
//       <div className='py-3 row'>
//           <div className='col-md-2 col-3'> {/* Changed from 'col sm-3 xs-2 md-2' */}
//               <AdminHotelSideBar />
//           </div>
//           <div className='col-md-10 col-9'> {/* Changed from 'col sm-9 xs-10 md-10' */}
//               <ProfileHotel/>
//           </div>
//       </div>
//   </div>
//     )
// }

// export default AdminHotelProfilePage ; 


import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
import ProfileHotel from "../../../components/admin/adminH/adminHotelProfile/adminHotelProfile";
import './AdminHotelProfilePage.css'; 

const AdminHotelProfilePage = () => {
    return (
        <div className="container_p">
            <div className="dashboard-content_p">
                <div className="sidebarAH_p">
                    <AdminHotelSideBar />
                </div>
                <div className="profile">
                    <ProfileHotel/>
                </div>
            </div>
        </div>
    );
}

export default AdminHotelProfilePage;

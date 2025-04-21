
// import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar'
// import AdminAddRoom from '../../../components/admin/adminH/adminHotelAddRoom/AdminAddRoom'


// const AdminHotelAddRoomsPage = () => {
//     return (
//       <div className='container'>
//           <div className='py-3 row'>
//               <div className='col-md-2 col-3'>
//                 <AdminHotelSideBar />
//               </div>
//               <div className='col-md-10 col-9'>
//               <AdminAddRoom />
//           </div>
//           </div>
//       </div>
//     )
// }

// export default AdminHotelAddRoomsPage


import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import AdminAddRoom from '../../../components/admin/adminH/adminHotelAddRoom/AdminAddRoom';
import './AdminHotelAddRoomsPage.css';

const AdminHotelAddRoomsPage = () => {
    return (
        <div className='container_aroom'>
            <div className='dashboard-content_aroom'>
                <div className='sidebarAH_aroom'>
                    <AdminHotelSideBar />
                </div>
                <div className='main-content_aroom'>
                    <AdminAddRoom />
                </div>
            </div>
        </div>
    );
}

export default AdminHotelAddRoomsPage;

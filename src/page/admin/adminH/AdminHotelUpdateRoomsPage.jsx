
import { useLocation } from 'react-router-dom';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar'
import AdminUpdateRoom from '../../../components/admin/adminH/adminHotelUpdateRoom/AdminUpdateRoom';
// import AdminAddRoom from '../../../components/admin/adminH/adminHotelAddRoom/AdminAddRoom'


const AdminHotelUpdateRoomsPage = () => {
  const location = useLocation();
  const { rm } = location.state;
    console.log(rm)
    return (
      <div className='container_aroom'>
          <div className='dashboard-content_aroom'>
              <div className='sidebarAH_aroom'>
                <AdminHotelSideBar />
              </div>
              <div className='main-content_aroom'>
              <AdminUpdateRoom rm={rm} />
          </div>
          </div>
      </div>
    )
}

export default AdminHotelUpdateRoomsPage ; 
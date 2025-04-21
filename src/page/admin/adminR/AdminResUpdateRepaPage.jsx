import { useLocation } from "react-router-dom";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import AdminResUpdateRepa from "../../../components/admin/adminR/adminResUpdateRepa/AdminResUpdateRepa";
import './AdminResUpdateRepaPage.css'

const AdminResUpdateRepaPage = () => {
  const location = useLocation();
  const { repa } = location.state;
    console.log(repa)
  return (
    <div className='profile-container-res-ur'>
    <div className='profile-content-res-ur'>
        <div className='sidebar-res-ur'> {/* Changed from 'col sm-3 xs-2 md-2' */}
            <AdminRestaurantSideBar />
        </div>
        <div className='profile-res-ur'> {/* Changed from 'col sm-9 xs-10 md-10' */}
        <AdminResUpdateRepa repas={repa}/>

        </div>
    </div>
</div>
  )
}

export default AdminResUpdateRepaPage ; 
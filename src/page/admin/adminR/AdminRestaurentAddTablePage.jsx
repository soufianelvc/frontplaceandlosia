import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import AdminRestaurantAddTable from "../../../components/admin/adminR/adminRestaurentAddTable/AdminRestaurentAddTable";
import "./AdminRestaurentAddTablePage.css"
const AdminRestaurentAddTablePage = () => {
  return (
    <div className='profile-container-res-at'>
    <div className='profile-content-res-at'>
        <div className='sidebar-res-at'>
            <AdminRestaurantSideBar />
        </div>
        <div className='profile-res-at'>      
        <AdminRestaurantAddTable />
        </div>
    </div>
</div>
  )
}

export default AdminRestaurentAddTablePage ; 
import { Link } from 'react-router-dom'
import "./AdminHotelSideBarr.css";
const AdminHotelSideBar = () => {
  return (
<div className="sidebar_ah" style={{marginTop:"78px"}}>
            <div className="d-flex flex-column">
                <Link to="/admin_room_dashbord" style={{ textDecoration: 'none',color:"rgb(195, 0, 255)" }} >
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                     profile
                    </div>
                </Link>

                <Link to="/management_rooms" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Rooms management
                    </div>
                </Link>

                <Link to="/management_info_clients" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    management info clients
                    </div>
                </Link>

                <Link to="/admin_add_room" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a Room
                    </div>
                </Link>
                <Link to="/add_new_client" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a client
                    </div>
                </Link>
                <Link to="/resrvations" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    list Resrvation 
                    </div>
                </Link>

                <Link to="/list_emails" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    list emails  
                    </div>
                </Link>

            </div>
        </div>
  )
}

export default AdminHotelSideBar

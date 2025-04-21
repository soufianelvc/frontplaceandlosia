import { Link } from 'react-router-dom'
import "./admin_RestaurantSideBarr.css";
const AdminRestaurantSideBar = () => {
  return (
<div className="sidebar-res" style={{marginTop:"78px"}}>
            <div className="d-flex flex-column">
                <Link to="/admin_Restaurant" style={{ textDecoration: 'none',color:"rgb(195, 0, 255)" }} >
                    <div className="  adminR-side-text mt-3 border-bottom p-2 mx-auto text-center">
                     Profile
                    </div>
                </Link>

                <Link to="/add_repa" style={{ textDecoration: 'none' }}>
                    <div className="adminR-side-text my-1 border-bottom p-2 mx-auto text-center">
                    add Repa  
                    </div>
                </Link>

                <Link to="/management_repas" style={{ textDecoration: 'none' }}>
                    <div className="adminR-side-text my-1 border-bottom p-2 mx-auto text-center">
                    managerment Repas
                    </div>
                </Link>

                <Link to="/adminR_addTable" style={{ textDecoration: 'none' }}>
                    <div className="adminR-side-text my-1 border-bottom p-2 mx-auto text-center">
                      add Table  
                    </div>
                </Link>
                <Link to="/management_tables" style={{ textDecoration: 'none' }}>
                    <div className="adminR-side-text my-1 border-bottom p-2 mx-auto text-center">
                  management Tables 
                    </div>
                </Link>
                <Link to="/resrvations_tables" style={{ textDecoration: 'none' }}>
                    <div className="adminR-side-text my-1 border-bottom p-2 mx-auto text-center">
                    list Resrvation Tables   
                    </div>
                </Link>

            </div>
        </div>
  )
}

export default AdminRestaurantSideBar

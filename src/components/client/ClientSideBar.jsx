import { Link } from 'react-router-dom'
import "./ClientSideBarr.css";
const ClientSideBar = () => {

  return (
<div className="sidebars" style={{marginTop:"72px"}}>
            <div className="d-flex flex-column">
                <Link to="/client_dashbord" style={{ textDecoration: 'none',color:"rgb(195, 0, 255)" }} >
                    <div className="client-side-text mt-3 border-bottom py-2 px-0 mx-0 text-center">
                     profile
                    </div>
                </Link>
                <Link to="/reservationsClient" style={{ textDecoration: 'none' }}>
                    <div className="client-side-text mt-3 border-bottom py-2 px-0 mx-0 text-center">
                     Resrvation( Rooms)
                    </div>
                </Link>

                <Link to="/reservationsTableClient" style={{ textDecoration: 'none' }}>
                    <div className="client-side-text mt-3 border-bottom py-2 px-0 mx-0 text-center">
                     Resrvation( table)
                    </div>
                </Link>

                <Link to="/repasClient" style={{ textDecoration: 'none' }}>
                    <div className="client-side-text mt-3 border-bottom py-2 px-0 mx-0 text-center">
                    Repas dommnder 
                    </div>
                </Link>

            </div>
        </div>
  )
}

export default ClientSideBar ; 

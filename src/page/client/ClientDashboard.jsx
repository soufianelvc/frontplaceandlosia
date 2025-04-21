// import ClientSideBar from "../../components/client/ClientSideBar";
// import ProfileClient from "../../components/client/ProfileClient/ProfileClient";
// import './ClientDashboard.css'
// export default function ClientDashboard(){
//   return (
//     <div style={{marginTop:"10px"}}>
//             <div className='container'>
//       <div className='py-3 row'>
//           <div className='col-md-2 col-3'> 
//               <ClientSideBar />
//           </div>
//           <div className='col-md-10 col-9'>
//               <ProfileClient/>
//           </div>
//       </div>
//   </div>
//     </div>
//   )
// }

import ClientSideBar from "../../components/client/ClientSideBar";
import ProfileClient from "../../components/client/ProfileClient/ProfileClient";
import './ClientDashboard.css'; 

export default function ClientDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="sidebarDC">
          <ClientSideBar />
        </div>
        <div className="profile">
          <ProfileClient />
        </div>
      </div>
    </div>
  );
}

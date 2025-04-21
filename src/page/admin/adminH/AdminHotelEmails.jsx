// import MessageList from "../../../components/admin/adminH/adminHotelEmails/MessageList";
// import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";

// const AdminHotelEmails = () => {
//     return (
//       <div className='container'>
//       <div className='py-3 row'>
//           <div className='col-md-2 col-3'>
//               <AdminHotelSideBar />
//           </div>
//           <div className='col-md-10 col-9'> 
//               <MessageList/>
//           </div>
//       </div>
//   </div>
//     )
// }

// export default AdminHotelEmails ; 



import MessageList from "../../../components/admin/adminH/adminHotelEmails/MessageList";
import AdminHotelSideBar from "../../../components/admin/adminH/AdminHotelSideBar";
import './AdminHotelEmailsPage.css';

const AdminHotelEmails = () => {
    return (
      <div className='container_emails'>
        <div className='dashboard-content d-block'>
          <div className='sidebarAH'>
            <AdminHotelSideBar />
          </div>
          <div className='main-content emailslist'>
            <MessageList />
          </div>
        </div>
      </div>
    )
}

export default AdminHotelEmails;

import ClientSideBar from "../../components/client/ClientSideBar";

export default function AdminRoomDashboard(){
  return (
    <div style={{marginTop:"10px"}}>
            <div className='container'>
      <div className='py-3 row'>
          <div className='col-md-2 col-3'> {/* Changed from 'col sm-3 xs-2 md-2' */}
              <ClientSideBar/>
          </div>
          <div className='col-md-10 col-9'> {/* Changed from 'col sm-9 xs-10 md-10' */}
              {/* <ProfileHotel/> */}
          </div>
      </div>
  </div>
    </div>
  )
}
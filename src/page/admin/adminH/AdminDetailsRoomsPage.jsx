
// import { useLocation } from 'react-router-dom';
// import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar'
// import { axiosClient } from '../../../redux/axios';
// import './adminDetails.css';
// import { useState } from 'react';


// const AdminDetailsRoomsPage = () => {
//   const location = useLocation();
//   const { rm } = location.state;
//   const [bookings, setbookings] = useState([]);

//     try {
//       const res =  axiosClient.get(`http://127.0.0.1:8000/api/room-reservations/${rm.id}`).then(res=>setbookings(res.data));

//     } catch (error) {
//       console.log(error);
//       throw error;
//     }

//   const currentDate = new Date();
//   const currentMonth = currentDate.getMonth();
//   const currentYear = currentDate.getFullYear();

//   // Get number of days in the current month
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   // Create an array of days in the month
//   const daysArray = [...Array(daysInMonth).keys()].map(i => i + 1);

//   // Get booked days in the current month
//   const bookedDays = bookings
//     .filter(booking => {
//       const startDate = new Date(booking.startDate);
//       const endDate = new Date(booking.endDate);
//       return (
//         (startDate.getMonth() === currentMonth && startDate.getFullYear() === currentYear) ||
//         (endDate.getMonth() === currentMonth && endDate.getFullYear() === currentYear)
//       );
//     })
//     .flatMap(booking => {
//       const start = new Date(booking.startDate).getDate();
//       const end = new Date(booking.endDate).getDate();
//       return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//     });
//     const styles = {
//       calendarContainer: {
//         margin: '0px 0',
//         textAlign: 'center',
//       },
//       heading: {
//         // marginBottom: '20px',
//       }
//     };
//     return (
//       <div className='container'>
//           <div className='py-3 row'>
//               <div className='col-md-2 col-3'>
//                 <AdminHotelSideBar />
//               </div>
//               <div className='col-md-10 col-9'>
//               {/* <AdminUpdateRoom rm={rm} />  */}
//               component details 
//               {/* <div style={styles.calendarContainer}>
//       <h2 style={styles.heading}>Bookings for {currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h2>
//       <div style={styles.calendarGrid}>
//         {daysArray.map(day => (
//           <div
//             key={day}
//             style={{
//               ...styles.day,
//               backgroundColor: bookedDays.includes(day) ? '#4caf50' : '#e0e0e0'
//             }}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//     </div> */}
//         <div className='yy container'>
//       <div className='yy py-3 row'>
//         <div className='yy col-md-10 col-9 mt-5  w-100 '>
      
//           <div style={styles.calendarContainer}>
//             <h2 style={styles.heading}> <b className='me-5'>{"<"}</b> Bookings for {currentDate.toLocaleString('default', { month: 'long' })} {currentYear} <b className='ms-5'>{">"}</b> </h2>
//             <ul className='yy '>
//               {daysArray.map(day => (
//                 <li
//                     key={day}
//                     className={bookedDays.includes(day) ? 'booked yy   ' : 'yy '}
//                   >
                  
//                     <time dateTime={`${currentYear}-${currentMonth + 1}-${day}`}>{day}</time>
//                   </li> 

                 
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//           </div>
//           </div>
//       </div>
//     )
// }

// export default AdminDetailsRoomsPage ; 

//
import { useLocation } from 'react-router-dom';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import { axiosClient } from '../../../redux/axios';
// import './adminDetails.css';
import './adminDetails.css';
import { useState, useEffect } from 'react';

const AdminDetailsRoomsPage = () => {
  const location = useLocation();
  const { rm } = location.state;
  const [bookings, setBookings] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const fetchBookings = (month, year) => {
    axiosClient.get(`http://127.0.0.1:8000/api/room-reservations/${rm.id}`, {
      params: {
        month: month + 1, 
        year: year,
      }
    })
    .then(res => setBookings(res.data))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchBookings(currentMonth, currentYear);
  }, [currentMonth, currentYear, rm.id]);

  // Get number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create an array of days in the month
  const daysArray = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Get booked days in the current month
  const bookedDays = bookings
    .filter(booking => {
      const startDate = new Date(booking.startDate);
      const endDate = new Date(booking.endDate);
      return (
        (startDate.getMonth() === currentMonth && startDate.getFullYear() === currentYear) ||
        (endDate.getMonth() === currentMonth && endDate.getFullYear() === currentYear)
      );
    })
    .flatMap(booking => {
      const start = new Date(booking.startDate).getDate();
      const end = new Date(booking.endDate).getDate();
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    });

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const styles = {
    calendarContainer: {
      margin: '0px 0',
      textAlign: 'center',
    },
    heading: {
      // marginBottom: '20px',
    },
  };

  return (
    <div className='container_r'>
      <div className='management-rooms-content'>
        <div className='sidebarAH'>
          <AdminHotelSideBar />
        </div>
        <div className='rooms'>
          {/* <div className='yy container detailrcss'>
            <div className='yy py-3 row'>
              <div className='yy col-md-10 col-9 mt-5  w-100 '>
                <div style={styles.calendarContainer}>
                  <h2 style={styles.heading} className='d-flex justify-content-between'>
                  <div>Bookings for {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                  </div>
                    <div>
                                          <b className='ms-5 me-2' onClick={handlePreviousMonth}><button className='btnR'>{"<"}</button></b>
                                          <b className='ms-2' onClick={handleNextMonth}><button className='btnR'>{">"}</button></b>
                    </div>

                  </h2>
                  <ul className='yy '>
                    {daysArray.map(day => (
                      <li
                        key={day}
                        className={bookedDays.includes(day) ? 'booked yy' : 'yy'}
                      >
                        <time dateTime={`${currentYear}-${currentMonth + 1}-${day}`}>{day}</time>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className='container detailrcss'>
  <div className='row'>
    <div className='calendar-container'>
      <h2 className='heading'>
        <div>Bookings for {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</div>
        <div className='navigation'>
          <button className='btn' onClick={handlePreviousMonth}>{"<"}</button>
          <button className='btn' onClick={handleNextMonth}>{">"}</button>
        </div>
      </h2>
      <ul className='calendar'>
        {daysArray.map(day => (
          <li
            key={day}
            className={bookedDays.includes(day) ? 'booked' : ''}
          >
            <time dateTime={`${currentYear}-${currentMonth + 1}-${day}`}>{day}</time>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default AdminDetailsRoomsPage;

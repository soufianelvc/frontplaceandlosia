// import { useLocation } from "react-router-dom";
// import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
// import { useEffect, useState } from "react";
// import { axiosClient } from "../../../redux/axios";

// const AdminDetailsTablePage = () => {
//   const location = useLocation();
//   const { tbl } = location.state;
//   alert(tbl.id)
//   const [NRservation, setNRservation] = useState();

//   useEffect(() => {
//     axiosClient.get('http://localhost:8000/api/reservationstables').then(res => setNRservation(res.data));
//   }, []);
//   console.log(NRservation)
//     return (
//       <div className='container'>
//       <div className='py-3 row'>
//           <div className='col-md-2 col-3'> 
//               <AdminRestaurantSideBar />
//           </div>
//           <div className='col-md-10 col-9'> 
//           {/* <AdminRestaurantAddRepa/> */}
//           <div className="pt-5 mt-5">AdminDetailsTablePage</div>
          
//           </div>
//       </div>
//   </div>
//     )
// }

// export default AdminDetailsTablePage ; 


// import { useLocation } from "react-router-dom";
// import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
// import { useEffect, useState } from "react";
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { axiosClient } from "../../../redux/axios";

// const AdminDetailsTablePage = () => {
//   const location = useLocation();
//   const { tbl } = location.state;
//   const [NRservation, setNRservation] = useState([]);
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     axiosClient.get('http://localhost:8000/api/reservationstables')
//       .then(res => setNRservation(res.data));
//   }, []);

//   const handlePreviousMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Filter reservations for the specific month and year
//   const reservationsForMonth = NRservation.filter(reservation => {
//     const date = new Date(reservation.reservation_time);
//     return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
//   });

//   // Group reservations by day and calculate percentage for the specific table
//   const reservationsByDay = reservationsForMonth.reduce((acc, reservation) => {
//     const date = new Date(reservation.reservation_time).getDate();
//     if (!acc[date]) {
//       acc[date] = { total: 0, table: 0 };
//     }
//     acc[date].total += 1;
//     if (reservation.table_id === tbl.id) {
//       acc[date].table += 1;
//     }
//     return acc;
//   }, {});

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const dates = [...Array(daysInMonth).keys()].map(i => i + 1);
//   const percentages = dates.map(day => {
//     const dayData = reservationsByDay[day] || { total: 0, table: 0 };
//     return dayData.table / dayData.total * 100; // Calculate percentage
//   });

//   const data = {
//     labels: dates,
//     datasets: [
//       {
//         label: `Percentage of Reservations for ${tbl.name} (${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })})`,
//         data: percentages,
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Day',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Percentage (%)',
//         },
//         beginAtZero: true,
//         ticks: {
//           callback: function(value) {
//             return value + '%'; // Add % symbol to the y-axis labels
//           }
//         }
//       },
//     },
//   };

//   return (
//     <div className='container'>
//       <div className='py-3 row'>
//         <div className='col-md-2 col-3'>
//           <AdminRestaurantSideBar />
//         </div>
//         <div className='col-md-10 col-9'>
//           <div className="mt-5 pt-5">
//             <div className='d-flex justify-content-between'>
//               <button className='btnR' onClick={handlePreviousMonth}>{"<"}</button>
//               <button className='btnR' onClick={handleNextMonth}>{">"}</button>
//             </div>
//             <h2>
//               Percentage of Reservations for {tbl.name} - {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
//             </h2>

//             <Line data={data} options={options} style={{width:"90%"}} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDetailsTablePage;

import { useLocation } from "react-router-dom";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { axiosClient } from "../../../redux/axios";
import './AdminDetailsTablePage.css'
const AdminDetailsTablePage = () => {
  const location = useLocation();
  const { tbl } = location.state;
  const [NRservation, setNRservation] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/reservationstables')
      .then(res => setNRservation(res.data));
  }, []);

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

  // Filter reservations for the specific month and year
  const reservationsForMonth = NRservation.filter(reservation => {
    const date = new Date(reservation.reservation_time);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  // Group reservations by day and calculate maximum reservations in a single day
  const reservationsByDay = reservationsForMonth.reduce((acc, reservation) => {
    const date = new Date(reservation.reservation_time).getDate();
    if (!acc[date]) {
      acc[date] = { total: 0, table: 0 };
    }
    acc[date].total += 1;
    if (reservation.table_id === tbl.id) {
      acc[date].table += 1;
    }
    return acc;
  }, {});

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const dates = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Calculate maximum reservations in a single day
  const maxReservationsInDay = Math.max(...dates.map(day => reservationsByDay[day]?.total || 0));

  const percentages = dates.map(day => {
    const dayData = reservationsByDay[day] || { total: 0, table: 0 };
    return (dayData.total / maxReservationsInDay) * 100; // Calculate percentage based on maximum reservations
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Percentage of Reservations for ${tbl.name} (${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })})`,
        data: percentages,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage (%)',
        },
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%'; // Add % symbol to the y-axis labels
          }
        }
      },
    },
  };

  return (
    <div className='profile-container-res-det'>
      <div className='profile-content-res-det'>
        <div className='sidebar-res-det'>
          <AdminRestaurantSideBar />
        </div>
        <div className='profile-res-det'>
          <div className="mt-5 pt-5">
            <div className='d-flex justify-content-between'>
              <button className='btnR' onClick={handlePreviousMonth}>{"<"}</button>
              <button className='btnR' onClick={handleNextMonth}>{">"}</button>
            </div>
            <h2>
              Percentage of Reservations for {tbl.name} - {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </h2>

            <Line data={data} options={options} style={{width:"90%"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsTablePage;









/*
INSERT INTO your_table_name (id, table_id, clientId, reservation_time, created_at, updated_at)
VALUES
-- يوم 1 أغسطس 2024، 5 حجوزات
(30, 1, 15, '2024-08-01 00:00:00', '2024-08-01 00:00:00', '2024-08-01 00:00:00'),
(31, 1, 15, '2024-08-01 01:00:00', '2024-08-01 00:00:00', '2024-08-01 00:00:00'),
(32, 1, 15, '2024-08-01 02:00:00', '2024-08-01 00:00:00', '2024-08-01 00:00:00'),
(33, 1, 15, '2024-08-01 03:00:00', '2024-08-01 00:00:00', '2024-08-01 00:00:00'),
(34, 1, 15, '2024-08-01 04:00:00', '2024-08-01 00:00:00', '2024-08-01 00:00:00'),

-- يوم 2 أغسطس 2024، 3 حجوزات
(35, 1, 15, '2024-08-02 06:00:00', '2024-08-02 06:00:00', '2024-08-02 06:00:00'),
(36, 1, 15, '2024-08-02 07:00:00', '2024-08-02 06:00:00', '2024-08-02 06:00:00'),
(37, 1, 15, '2024-08-02 08:00:00', '2024-08-02 06:00:00', '2024-08-02 06:00:00'),

-- يوم 3 أغسطس 2024، 7 حجوزات
(38, 1, 15, '2024-08-03 09:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(39, 1, 15, '2024-08-03 10:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(40, 1, 15, '2024-08-03 11:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(41, 1, 15, '2024-08-03 12:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(42, 1, 15, '2024-08-03 13:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(43, 1, 15, '2024-08-03 14:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),
(44, 1, 15, '2024-08-03 15:00:00', '2024-08-03 09:00:00', '2024-08-03 09:00:00'),

-- يوم 4 أغسطس 2024، 2 حجوزات
(45, 1, 15, '2024-08-04 16:00:00', '2024-08-04 16:00:00', '2024-08-04 16:00:00'),
(46, 1, 15, '2024-08-04 17:00:00', '2024-08-04 16:00:00', '2024-08-04 16:00:00'),

-- يوم 5 أغسطس 2024، 4 حجوزات
(47, 1, 15, '2024-08-05 18:00:00', '2024-08-05 18:00:00', '2024-08-05 18:00:00'),
(48, 1, 15, '2024-08-05 19:00:00', '2024-08-05 18:00:00', '2024-08-05 18:00:00'),
(49, 1, 15, '2024-08-05 20:00:00', '2024-08-05 18:00:00', '2024-08-05 18:00:00'),
(50, 1, 15, '2024-08-05 21:00:00', '2024-08-05 18:00:00', '2024-08-05 18:00:00'),

-- يوم 6 أغسطس 2024، 6 حجوزات
(51, 1, 15, '2024-08-06 22:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),
(52, 1, 15, '2024-08-06 23:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),
(53, 1, 15, '2024-08-06 00:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),
(54, 1, 15, '2024-08-06 01:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),
(55, 1, 15, '2024-08-06 02:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),
(56, 1, 15, '2024-08-06 03:00:00', '2024-08-06 22:00:00', '2024-08-06 22:00:00'),

-- يوم 7 أغسطس 2024، 8 حجوزات
(57, 1, 15, '2024-08-07 04:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(58, 1, 15, '2024-08-07 05:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(59, 1, 15, '2024-08-07 06:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(60, 1, 15, '2024-08-07 07:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(61, 1, 15, '2024-08-07 08:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(62, 1, 15, '2024-08-07 09:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(63, 1, 15, '2024-08-07 10:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),
(64, 1, 15, '2024-08-07 11:00:00', '2024-08-07 04:00:00', '2024-08-07 04:00:00'),

-- يوم 8 أغسطس 2024، 9 حجوزات
(65, 1, 15, '2024-08-08 12:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(66, 1, 15, '2024-08-08 13:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(67, 1, 15, '2024-08-08 14:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(68, 1, 15, '2024-08-08 15:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(69, 1, 15, '2024-08-08 16:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(70, 1, 15, '2024-08-08 17:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(71, 1, 15, '2024-08-08 18:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(72, 1, 15, '2024-08-08 19:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),
(73, 1, 15, '2024-08-08 20:00:00', '2024-08-08 12:00:00', '2024-08-08 12:00:00'),

-- يوم 9 أغسطس 2024، 1 حجوزات
(74, 1, 15, '2024-08-09 21:00:00', '2024-08-09 21:00:00', '2024-08-09 21:00:00'),

-- يوم 10 أغسطس 2024، 6 حجوزات
(75, 1, 15, '2024-08-10 22:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),
(76, 1, 15, '2024-08-10 23:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),
(77, 1, 15, '2024-08-10 00:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),
(78, 1, 15, '2024-08-10 01:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),
(79, 1, 15, '2024-08-10 02:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),
(80, 1, 15, '2024-08-10 03:00:00', '2024-08-10 22:00:00', '2024-08-10 22:00:00'),

-- يوم 11 أغسطس 2024، 4 حجوزات
(81, 1, 15, '2024-08-11 04:00:00', '2024-08-11 04:00:00', '2024-08-11 04:00:00'),
(82, 1, 15, '2024-08-11 05:00:00', '2024-08-11 04:00:00', '2024-08-11 04:00:00'),
(83, 1, 15, '2024-08-11 06:00:00', '2024-08-11 04:00:00', '2024-08-11 04:00:00'),
(84, 1, 15, '2024-08-11 07:00:00', '2024-08-11 04:00:00', '2024-08-11 04:00:00'),

-- يوم 12 أغسطس 2024، 7 حجوزات
(85, 1, 15, '2024-08-12 08:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(86, 1, 15, '2024-08-12 09:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(87, 1, 15, '2024-08-12 10:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(88, 1, 15, '2024-08-12 11:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(89, 1, 15, '2024-08-12 12:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(90, 1, 15, '2024-08-12 13:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),
(91, 1, 15, '2024-08-12 14:00:00', '2024-08-12 08:00:00', '2024-08-12 08:00:00'),

-- يوم 13 أغسطس 2024، 5 حجوزات
(92, 1, 15, '2024-08-13 15:00:00', '2024-08-13 15:00:00', '2024-08-13 15:00:00'),
(93, 1, 15, '2024-08-13 16:00:00', '2024-08-13 15:00:00', '2024-08-13 15:00:00'),
(94, 1, 15, '2024-08-13 17:00:00', '2024-08-13 15:00:00', '2024-08-13 15:00:00'),
(95, 1, 15, '2024-08-13 18:00:00', '2024-08-13 15:00:00', '2024-08-13 15:00:00'),
(96, 1, 15, '2024-08-13 19:00:00', '2024-08-13 15:00:00', '2024-08-13 15:00:00'),

-- يوم 14 أغسطس 2024، 3 حجوزات
(97, 1, 15, '2024-08-14 20:00:00', '2024-08-14 20:00:00', '2024-08-14 20:00:00'),
(98, 1, 15, '2024-08-14 21:00:00', '2024-08-14 20:00:00', '2024-08-14 20:00:00'),
(99, 1, 15, '2024-08-14 22:00:00', '2024-08-14 20:00:00', '2024-08-14 20:00:00'),

-- يوم 15 أغسطس 2024، 6 حجوزات
(100, 1, 15, '2024-08-15 23:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),
(101, 1, 15, '2024-08-15 00:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),
(102, 1, 15, '2024-08-15 01:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),
(103, 1, 15, '2024-08-15 02:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),
(104, 1, 15, '2024-08-15 03:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),
(105, 1, 15, '2024-08-15 04:00:00', '2024-08-15 23:00:00', '2024-08-15 23:00:00'),

-- يوم 16 أغسطس 2024، 2 حجوزات
(106, 1, 15, '2024-08-16 05:00:00', '2024-08-16 05:00:00', '2024-08-16 05:00:00'),
(107, 1, 15, '2024-08-16 06:00:00', '2024-08-16 05:00:00', '2024-08-16 05:00:00'),

-- يوم 17 أغسطس 2024، 7 حجوزات
(108, 1, 15, '2024-08-17 07:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(109, 1, 15, '2024-08-17 08:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(110, 1, 15, '2024-08-17 09:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(111, 1, 15, '2024-08-17 10:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(112, 1, 15, '2024-08-17 11:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(113, 1, 15, '2024-08-17 12:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),
(114, 1, 15, '2024-08-17 13:00:00', '2024-08-17 07:00:00', '2024-08-17 07:00:00'),

-- يوم 18 أغسطس 2024، 3 حجوزات
(115, 1, 15, '2024-08-18 14:00:00', '2024-08-18 14:00:00', '2024-08-18 14:00:00'),
(116, 1, 15, '2024-08-18 15:00:00', '2024-08-18 14:00:00', '2024-08-18 14:00:00'),
(117, 1, 15, '2024-08-18 16:00:00', '2024-08-18 14:00:00', '2024-08-18 14:00:00'),

-- يوم 19 أغسطس 2024، 8 حجوزات
(118, 1, 15, '2024-08-19 17:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(119, 1, 15, '2024-08-19 18:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(120, 1, 15, '2024-08-19 19:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(121, 1, 15, '2024-08-19 20:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(122, 1, 15, '2024-08-19 21:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(123, 1, 15, '2024-08-19 22:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(124, 1, 15, '2024-08-19 23:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),
(125, 1, 15, '2024-08-19 00:00:00', '2024-08-19 17:00:00', '2024-08-19 17:00:00'),

-- يوم 20 أغسطس 2024، 9 حجوزات
(126, 1, 15, '2024-08-20 01:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(127, 1, 15, '2024-08-20 02:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(128, 1, 15, '2024-08-20 03:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(129, 1, 15, '2024-08-20 04:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(130, 1, 15, '2024-08-20 05:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(131, 1, 15, '2024-08-20 06:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(132, 1, 15, '2024-08-20 07:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(133, 1, 15, '2024-08-20 08:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),
(134, 1, 15, '2024-08-20 09:00:00', '2024-08-20 01:00:00', '2024-08-20 01:00:00'),

-- يوم 21 أغسطس 2024، 2 حجوزات
(135, 1, 15, '2024-08-21 10:00:00', '2024-08-21 10:00:00', '2024-08-21 10:00:00'),
(136, 1, 15, '2024-08-21 11:00:00', '2024-08-21 10:00:00', '2024-08-21 10:00:00'),

-- يوم 22 أغسطس 2024، 4 حجوزات
(137, 1, 15, '2024-08-22 12:00:00', '2024-08-22 12:00:00', '2024-08-22 12:00:00'),
(138, 1, 15, '2024-08-22 13:00:00', '2024-08-22 12:00:00', '2024-08-22 12:00:00'),
(139, 1, 15, '2024-08-22 14:00:00', '2024-08-22 12:00:00', '2024-08-22 12:00:00'),
(140, 1, 15, '2024-08-22 15:00:00', '2024-08-22 12:00:00', '2024-08-22 12:00:00'),

-- يوم 23 أغسطس 2024، 5 حجوزات
(141, 1, 15, '2024-08-23 16:00:00', '2024-08-23 16:00:00', '2024-08-23 16:00:00'),
(142, 1, 15, '2024-08-23 17:00:00', '2024-08-23 16:00:00', '2024-08-23 16:00:00'),
(143, 1, 15, '2024-08-23 18:00:00', '2024-08-23 16:00:00', '2024-08-23 16:00:00'),
(144, 1, 15, '2024-08-23 19:00:00', '2024-08-23 16:00:00', '2024-08-23 16:00:00'),
(145, 1, 15, '2024-08-23 20:00:00', '2024-08-23 16:00:00', '2024-08-23 16:00:00'),

-- يوم 24 أغسطس 2024، 1 حجوزات
(146, 1, 15, '2024-08-24 22:00:00', '2024-08-24 22:00:00', '2024-08-24 22:00:00');
*/
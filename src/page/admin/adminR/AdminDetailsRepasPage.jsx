
import { useLocation } from "react-router-dom";
import AdminRestaurantSideBar from "../../../components/admin/adminR/AdminRestaurantSideBar";
import { axiosClient } from "../../../redux/axios";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './AdminDetailsRepasPage.css'
const AdminDetailsRepasPage = () => {
  const location = useLocation();
  const { repa } = location.state;
  const [NCommend, setNCommend] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    axiosClient.get('http://placeandalosia.free.nf/api/commandes').then(res => setNCommend(res.data));
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

  // Filter commands for the specific month and year
  const commandsForMonth = NCommend.filter(command => {
    const date = new Date(command.created_at);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  // Group commands by day and calculate percentage for the specific meal
  const commandsByDay = commandsForMonth.reduce((acc, command) => {
    const date = new Date(command.created_at).getDate();
    if (!acc[date]) {
      acc[date] = { total: 0, meal: 0 };
    }
    acc[date].total += 1;
    if (command.repas.id === repa.id) {
      acc[date].meal += 1;
    }
    return acc;
  }, {});

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const dates = [...Array(daysInMonth).keys()].map(i => i + 1);
  const percentages = dates.map(day => {
    const dayData = commandsByDay[day] || { total: 0, meal: 0 };
    return dayData.meal * 5; // Each command represents 5%
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: `Percentage of Commands for ${repa.name} (${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })})`,
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
    <div className='profile-container-res-der'>
      <div className='profile-content-res-der'>
        <div className='sidebar-res-der'>
          <AdminRestaurantSideBar />
        </div>
        <div className='profile-res-der'>
          <div className="mt-5 pt-5">
          <div className='d-flex justify-content-between'>
              <button className='btnR' onClick={handlePreviousMonth}>{"<"}</button>
              <button className='btnR' onClick={handleNextMonth}>{">"}</button>
            </div>
            <h2>
              Percentage of Commands for {repa.name} - {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </h2>

            {/* <div className="mx-auto"> */}
              <Line data={data} options={options} style={{width:"90%"}} />
            {/* </div > */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetailsRepasPage;

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('108', '1', '21', '15', '2024-08-01 09:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('109', '1', '21', '15', '2024-08-01 10:25:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('110', '1', '21', '15', '2024-08-02 11:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('111', '1', '21', '15', '2024-08-03 12:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('112', '1', '21', '15', '2024-08-03 13:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('113', '1', '21', '15', '2024-08-03 14:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('114', '1', '21', '15', '2024-08-03 15:15:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('115', '1', '21', '15', '2024-08-04 16:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('116', '1', '21', '15', '2024-08-04 17:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('117', '1', '21', '15', '2024-08-05 18:45:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('118', '1', '21', '15', '2024-08-06 19:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('119', '1', '21', '15', '2024-08-06 20:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('120', '1', '21', '15', '2024-08-07 21:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('121', '1', '21', '15', '2024-08-07 22:25:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('122', '1', '21', '15', '2024-08-08 23:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('123', '1', '21', '15', '2024-08-08 00:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('124', '1', '21', '15', '2024-08-08 01:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('125', '1', '21', '15', '2024-08-08 02:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('126', '1', '21', '15', '2024-08-09 03:15:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('127', '1', '21', '15', '2024-08-10 04:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('128', '1', '21', '15', '2024-08-10 05:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('129', '1', '21', '15', '2024-08-10 06:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('130', '1', '21', '15', '2024-08-10 07:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('131', '1', '21', '15', '2024-08-10 08:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('132', '1', '21', '15', '2024-08-11 09:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('133', '1', '21', '15', '2024-08-11 10:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('134', '1', '21', '15', '2024-08-11 11:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('135', '1', '21', '15', '2024-08-12 12:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('136', '1', '21', '15', '2024-08-12 13:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('137', '1', '21', '15', '2024-08-12 14:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('138', '1', '21', '15', '2024-08-13 15:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('139', '1', '21', '15', '2024-08-13 16:25:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('140', '1', '21', '15', '2024-08-14 17:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('141', '1', '21', '15', '2024-08-14 18:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('142', '1', '21', '15', '2024-08-14 19:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('143', '1', '21', '15', '2024-08-14 20:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('144', '1', '21', '15', '2024-08-15 21:15:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('145', '1', '21', '15', '2024-08-16 22:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('146', '1', '21', '15', '2024-08-16 23:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('147', '1', '21', '15', '2024-08-16 00:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('148', '1', '21', '15', '2024-08-16 01:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('149', '1', '21', '15', '2024-08-16 02:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('150', '1', '21', '15', '2024-08-16 03:15:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('151', '1', '21', '15', '2024-08-17 04:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('152', '1', '21', '15', '2024-08-17 05:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('153', '1', '21', '15', '2024-08-17 06:45:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('154', '1', '21', '15', '2024-08-18 07:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('155', '1', '21', '15', '2024-08-18 08:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('156', '1', '21', '15', '2024-08-19 09:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('157', '1', '21', '15', '2024-08-19 10:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('158', '1', '21', '15', '2024-08-19 11:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('159', '1', '21', '15', '2024-08-19 12:45:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('160', '1', '21', '15', '2024-08-20 13:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('161', '1', '21', '15', '2024-08-20 14:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('162', '1', '21', '15', '2024-08-20 15:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('163', '1', '21', '15', '2024-08-20 16:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('164', '1', '21', '15', '2024-08-20 17:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('165', '1', '21', '15', '2024-08-20 18:45:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('166', '1', '21', '15', '2024-08-21 19:55:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('167', '1', '21', '15', '2024-08-22 20:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('168', '1', '21', '15', '2024-08-22 21:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('169', '1', '21', '15', '2024-08-22 22:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('170', '1', '21', '15', '2024-08-22 23:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('171', '1', '21', '15', '2024-08-23 00:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('172', '1', '21', '15', '2024-08-23 01:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('173', '1', '21', '15', '2024-08-23 02:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('174', '1', '21', '15', '2024-08-23 03:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('175', '1', '21', '15', '2024-08-23 04:25:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('176', '1', '21', '15', '2024-08-24 05:35:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('177', '1', '21', '15', '2024-08-24 06:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('178', '1', '21', '15', '2024-08-24 07:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('179', '1', '21', '15', '2024-08-24 08:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('180', '1', '21', '15', '2024-08-25 09:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('181', '1', '21', '15', '2024-08-25 10:25:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('182', '1', '21', '15', '2024-08-26 11:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('183', '1', '21', '15', '2024-08-27 12:45:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('184', '1', '21', '15', '2024-08-27 13:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('185', '1', '21', '15', '2024-08-27 14:05:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('186', '1', '21', '15', '2024-08-28 15:15:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('187', '1', '21', '15', '2024-08-28 16:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('188', '1', '21', '15', '2024-08-28 17:35:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('189', '1', '21', '15', '2024-08-29 18:45:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('190', '1', '21', '15', '2024-08-30 19:55:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('191', '1', '21', '15', '2024-08-30 20:05:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('192', '1', '21', '15', '2024-08-30 21:15:07', NULL);

// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('193', '1', '21', '15', '2024-08-31 22:25:07', NULL);
// INSERT INTO `commandes` (`id`, `Qte`, `mealId`, `clientId`, `created_at`, `updated_at`) VALUES ('194', '1', '21', '15', '2024-08-31 23:35:07', NULL);

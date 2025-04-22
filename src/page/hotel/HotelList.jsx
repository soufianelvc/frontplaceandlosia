import "./hotelList.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItemhotle from "../../components/searchItemhotel/SearchItemHotel";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoom } from "../../redux/reducers/RoomsSlice";
import MailList from "../../components/Uitily/mailList/MailList";
import axios from 'axios';

const HotelList = () => {
  const location = useLocation();
  
  // Set default values if location.state is undefined
  const defaultDate = [{
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // One day from now
    key: "selection"
  }];
  
  const defaultOptions = {
    adult: 1,
    children: 0,
    room: 1
  };
  
  // Check if location.state exists, if not use defaults
  const [date, setDate] = useState(location.state?.date || defaultDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || defaultOptions);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoom());
  }, [dispatch]);
  const allRooms = useSelector(state => state.allRooms.Rooms);
  
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://placeandalosia.free.nf/api/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  const handleAdultChange = (event) => {
    const newAdultCount = parseInt(event.target.value, 10);
    setOptions(prevOptions => ({ ...prevOptions, adult: newAdultCount }));
  };

  const handleChildrenChange = (event) => {
    const newChildrenCount = parseInt(event.target.value, 10);
    setOptions(prevOptions => ({ ...prevOptions, children: newChildrenCount }));
  };

  const handleRoomChange = (event) => {
    const newRoomCount = parseInt(event.target.value, 10);
    setOptions(prevOptions => ({ ...prevOptions, room: newRoomCount }));
  };

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(1000);

  const isDateAvailable = (room, reservations, startDate, endDate) => {
    const roomReservations = reservations.filter(reservation => reservation.roomNumber === room.id);
    for (const reservation of roomReservations) {
      if (
        (new Date(startDate) >= new Date(reservation.startDate) && new Date(startDate) <= new Date(reservation.endDate)) ||
        (new Date(endDate) >= new Date(reservation.startDate) && new Date(endDate) <= new Date(reservation.endDate))
      ) {
        return false;
      }
    }
    return true;
  };

  return (
<div>
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="ls-title">Search</h1>
            <div className="ls-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} style={{color:'rgb(164, 0, 214)'}}>
              {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="ls-item">
              <label>Options</label>
              <div className="ls-options">
                <div className="ls-option-item">
                  <span className="ls-option-text">Min price <small>per night</small></span>
                  <input type="number" className="ls-option-input" 
                    value={number1} onChange={(event) => setNumber1(event.target.value)} />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Max price <small>per night</small></span>
                  <input type="number" className="ls-option-input" 
                    value={number2} onChange={(e) => setNumber2(e.target.value)} />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    placeholder={options.adult}
                    onChange={handleAdultChange}
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="ls-option-input"
                    placeholder={options.children}
                    onChange={handleChildrenChange}
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    placeholder={options.room}
                    onChange={handleRoomChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="list-result">
            {
              allRooms.length > 0 ? (
                allRooms.map((rm, i) => {
                  if (
                    (rm.dispo === 1 || isDateAvailable(rm, reservations, date[0].startDate, date[0].endDate)) &&
                    rm.numberChildren >= options.children && 
                    rm.numberAdult >= options.adult && 
                    rm.numberR >= options.room &&
                    Number(rm.price) >= Number(number1) && 
                    Number(rm.price) <= Number(number2)
                  ) {
                    return (
                      <SearchItemhotle key={i} room={rm} date={date} />       
                    );
                  }
                  return null;
                })
              ) : (
                <h3 className="no-data">No data available</h3>
              )
            }
          </div>
        </div>
      
      </div>  <MailList />
</div>
  );
};

export default HotelList;

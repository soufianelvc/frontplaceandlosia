import  { useEffect, useState } from 'react'
import "./imageMenu.css";
import menuHome from "../../../images/menuHome.webp"; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from "@fortawesome/free-solid-svg-icons";

import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import {faCalendarDays,faPerson,} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTable } from '../../../redux/reducers/TablesSlice';

const ImageMenuu = () => {

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    table: 1,
  });
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const handleChange = (e) => {
    setHour(e.target.value);
};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTable());
  }, [dispatch]);
  const allTabls = useSelector(state => state.allTabls.Tables);
  console.log(allTabls)

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/menu/tables", { state: { date, hour, options, selectedType } });
  };
  


  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    selectedDate.setHours(0, 0, 0, 0); 
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    if (selectedDate >= today) {
      setDate(event.target.value);
    } else {
      alert("Please select today's date or a future date.");  
    }
  };
  

  const [selectedType, setSelectedType] = useState('');
  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };


  const hours = Array.from({ length: 24 }, (_, i) => i).filter(hour => hour >= 6);
  return (
    <div className='imgMn' style={{backgroundImage:`url(${menuHome})`}}>
<div className="divImgMn">
        <div className='titleIm'>
    <h1 className='my-5'>
          Restaurant of <br /> the PlaceAndalusia Hotel
    </h1>
              <div className="  menuSearch ">
                <div className=" menuSearchItem">
                  <div className="menuSearchText d-flex">
                    <input type="date" value={date} onChange={handleDateChange} className='mx-2'/>
                    <select id="hours" onChange={handleChange}>
                {hours.map(hour => (
                    <option key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`}>
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                    </option>
                ))}
            </select>
                  </div>
                </div>
                <div className="menuSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="menuIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="menuSearchText"
                  >{`${options.adult} adult · ${options.children} children · ${options.table} table`}</span>
                  {openOptions && (
                    <div className="optionsMn">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">table</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.table <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("table", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.table}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("table", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="menuSearchItem">
                <FontAwesomeIcon icon={faTable} className="menuIcon" />
                  <span   className="menuSearchText">type table :  </span>
                  <select onChange={handleSelectChange} className="selectpicker bg-dark text-white border-0">
                  {/* Map through the tables and render options */}
                  {allTabls && allTabls.map((table, i) => {
                    console.log(table);
                    return (
                      <option key={i} value={table.tableId}>
                        {table.TitleT}
                      </option>
                    );
                  })}
                </select>



                </div>
                <div className="menuSearchItem">
                  <button className="menuBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
        </div>
</div >
    </div>
  )
}

export default ImageMenuu ; 
import {faCalendarDays,faPerson,} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
const Header = ({ type }) => {
  const {user}=useUserContext();
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
    
  
    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const handleSearch = () => {
      navigate("/hotels", { state: { destination, date, options } });
    };
  
    return (
      <div className="header bor">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
              Al-Andalus Hotel: Where heritage meets luxury, and every stay becomes 
      an unforgettable memory.
              </h1>
              <p className="headerDesc">
              Discover the ultimate getaway where luxury meets comfort, nestled on the pristine shores of Blue Haven Beach. At OceanView Resort, we believe your stay should be as unforgettable as the views. And now, making your dream vacation more rewarding with our exclusive OceanClub Rewards.
              </p>
              {!user.id? (
              <Link to="/login"><button className="headerBtn"> Sign in / Register</button></Link>
      ) : (
        <></>
      )}

              <div className="headerSearch">
                <div className="headerSearchItem ">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem ">

                      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                      >
                        <div className="spnH">
                          <div>{`${options.adult} adult `}</div><div>{` ${options.children} children `}</div><div>{`${options.room} room`}</div>
                        </div>
                        </span>


                  {openOptions && (
                    <div className="options">
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
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;
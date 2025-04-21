import "./tableMenuListe.css";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import MailList from "../../components/Uitily/mailList/MailList";
import { getAllTable } from "../../redux/reducers/TablesSlice";
import SearchItemtable from "../../components/Menu/searchItemTable/SearchItemtable";
const TableMenuListe = () => {

  const location = useLocation();
  const { date, hour, options, selectedType } = location.state || {};
  console.log(selectedType);  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');

  const [ad, setAd] = useState(options.adult);
  const [ch, setCh] = useState(options.children);


  
  useEffect(() => {
    if (date) {
      setSelectedDate(new Date(date).toISOString().split('T')[0]);
    }
    if (hour) {
      setSelectedHour(hour);
    }
  }, [date, hour]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTable());
  }, [dispatch]);
  const allTabls = useSelector(state => state.allTabls.Tables);
  console.log(allTabls)
  const [tables, setTables] = useState(allTabls);


  const hours = Array.from({ length: 24 }, (_, i) => i).filter(hour => hour >= 6);
  return (
    <div>
      <div className="tlistContainer">
        <div className="tlistWrapper">
          <div className="tlistSearch">
            <h1 className="tlsTitle">Search</h1>
            <div className="tlsItem">
              <label>Check-in Date</label>
              <input type="date" name="" id="" 
                 value={selectedDate} 
                 onChange={(e) => {
                  setSelectedDate(e.target.value);
                }} 
              />
            </div>
            <div className="tlsItem">
              <label htmlFor="">check-in Hour</label>
              <select id="hours" value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
                {hours.map(hour => (
                    <option key={hour} value={hour < 10 ? `0${hour}:00` : `${hour}:00`}>
                        {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                    </option>
                ))}
            </select>
            </div>
            <div className="tlsItem">
              <label>Options</label>
              <div className="tlsOptions">
                <div className="tlsOptionItem">
                  <span className="tlsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="tlsOptionInput"
                    value={ad}
                    onChange={(e) => setAd(e.target.value)} 

                  />
                </div>
                <div className="tlsOptionItem">
                  <span className="tlsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="tlsOptionInput"
                    placeholder={ch}
                    onChange={(e) => setCh(e.target.value)} 
                    
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tlistResult">
          {
                allTabls.length >0 ? 
                (
                
                  allTabls.map((rm,i)=>{
                      if(
                          rm.dispo=== 1&&
                          rm.numberChildren>=ch &&
                          rm.numberAdult >=ad 
                         ){
                        return(
                           <SearchItemtable tables={rm} key={i} date={date} hour={selectedHour} />       
                        )
                      }
                    })
                ):
                (
                    <h3 className="text-center"> data vide !!! </h3>
                
                )
                }
          </div>
        </div>
      </div>
      <MailList/>
    </div>
  );
};

export default TableMenuListe;

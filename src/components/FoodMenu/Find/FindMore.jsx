import React, { useRef } from 'react'
import "./findeMore.css"; 
import SearchIcon from "../../../images/SearchIcon.png";

const FindMore = (props) => {
      const ch = props.ch ; 
      const val = useRef() ; 

      const Recherche2 =(val)=>{
          ch(val.current.value);
          val.current.value = "" ; 

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
  return (
    <div className='fm'>
      <h3 className='titlefm'>
       SEARCH BY NAME 
      </h3>
      <div className="search-input-container">
      <img src={SearchIcon} alt="" className="search-icon"/>
      <input type="text" className="search-input" ref={val}/>
      </div>
      <button className='fmb' onClick={()=>Recherche2(val)}>
      Search
      </button>



    </div>
  
  )
}

export default FindMore
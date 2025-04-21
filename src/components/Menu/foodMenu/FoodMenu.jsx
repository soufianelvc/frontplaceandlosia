import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";

import "./foodMenu.css";
const FoodMenu = () => {
  return (
    <div >
        <div className='d-flex  justify-content-between'>
            <h3>
                Food Menu 
            </h3>
            <h4 >
           <Link className='text-success' to="foodMenu"> View All</Link>
            </h4>
        </div>
        <div className="foodMenuu mx-1">
      <Fade direction="left">
      <div className="foodItemMenu" >
      <img src={img1} alt="" className="foodImg "/>
        <div className="foodTitlesMenu ">
          <h2>Coffee</h2>
          <h4>12dh</h4>
        </div>
      </div>
      </Fade>
      
      <Fade direction="up">
        <div className="foodItemMenu">
          <img src={img2} alt="" className="foodImg "/>
            <div className=" foodTitlesMenu">
              <h2>juice</h2>
              <h4>25 dh</h4>
            </div>
        </div>
    
      </Fade>

      <Fade direction="top" >
      <div className="foodItemMenu">
      <img src={img3}alt="" className="foodImg"/>
        <div className="foodTitlesMenu">
          <h2>Milk</h2>
          <h4>10 dh</h4>
        </div>
      </div>
      </Fade>
      <Fade direction="right" >
      <div className="foodItemMenu">
      <img src={img4}alt="" className="foodImg"/>
        <div className="foodTitlesMenu">
          <h2>Lunch</h2>
          <h4>32 dh</h4>
        </div>
      </div>
      </Fade>
        </div>

    </div>
  )
}

export default FoodMenu
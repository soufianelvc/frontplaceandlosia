import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import "./categoryFoodMenu.css";
const CategoryFoodMenu = (pro) => {

  const table = pro.fArray ; 

  const allCategory = pro.allCategory ;
  console.log(allCategory)

  // to filter  by category 
  const onFilter = (word)=>{
    table(word)
  }
  return (
    <div className='row my-2 mb-5 '>
    <div className='col-12 d-flex justify-content-center'>
    
    {
      allCategory.length >0 ? (
        allCategory.map((cat)=>{
              return(
                <Zoom>
                <button className='btnn mx-2' onClick={()=>{onFilter( cat )}} >{cat}</button>
                </Zoom>

              )
          })
      ):(
          <h3 className="text-center"> data vide !!! </h3>
      )
  }
  </div>  
    </div>
  )
}

export default CategoryFoodMenu ; 
// <div className='col-12 d-flex justify-content-center'>
// <button className='btnn mx-2' onClick={()=>{onFilter( cat )}} > fes</button>

// </div>
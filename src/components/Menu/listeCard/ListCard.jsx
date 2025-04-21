// import  { useEffect, useState } from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Product from "./Product";

// const ListCard = ({title,products}) => {
//   const [newArr, setnewArr] = useState([]);

//       // filter by title : 
//       const filterByType = ()=>{
//         setnewArr(products.filter((item)=> item.category===title ))
//         }
//       useEffect(() => {
//         filterByType()
//       },[]);
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
//   return (
// <div>

//   <h1 className='text-success border-bottom border-success'>{title}</h1>
//   <Carousel  responsive={responsive} >

// {        newArr.length > 0 ? (
//                   newArr.map((item,i)=>{
//                         return(
//                           <Product data={item} key={i} />
//                         )
//                     })
//                 ):(<h3 className="text-center"> data vide !!! </h3>)
// }
//   </Carousel>
// </div>
//   )
// }

// export default ListCard

import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import './listCard.css'; // New CSS file for ListCard

const ListCard = ({ title, products }) => {
  const [newArr, setNewArr] = useState([]);

  // Filter by title
  const filterByType = () => {
    setNewArr(products.filter((item) => item.category === title));
  };

  useEffect(() => {
    filterByType();
  }, [title, products]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='list-card'>
      <h1 className='list-card-title'>{title}</h1>
      <Carousel responsive={responsive}>
        {newArr.length > 0 ? (
          newArr.map((item, i) => (
            <Product data={item} key={i} />
          ))
        ) : (
          <h3 className='list-card-empty'>No data available!</h3>
        )}
      </Carousel>
    </div>
  );
};

export default ListCard;

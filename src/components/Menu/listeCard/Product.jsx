// import { useNavigate } from "react-router-dom";
// import "./product.css";
// const Product = ({data}) => {
//   const navigate = useNavigate();
//   const handleDetails = (elm) => {
//     navigate("/menu/Repas", { state: { elm } });
//   };
//   return (
//     <div className="cardd">
//       <img src={`http://localhost:8000/images/${data.image}`} alt="" className="product--image " style={{height:"150px"}} />
//       <h2 className="w-75 mx-auto">{data.title} </h2>
//       <p className="price" >{data.price} dh </p>
//         <button style={{backgroundColor:"#13b82e"}} className="bn" onClick={()=>{handleDetails(data)}}>details</button>

//     </div>

//   )
// }

// export default Product

import { useNavigate } from 'react-router-dom';
import './product.css'; // Ensure this file is updated

const Product = ({ data }) => {
  const navigate = useNavigate();

  const handleDetails = (elm) => {
    navigate('/menu/Repas', { state: { elm } });
  };

  return (
    <div className='product-card'>
      <img src={`http://localhost:8000/images/${data.image}`} alt='' className='product-image' />
      <h2 className='product-title'>{data.title}</h2>
      <p className='product-price'>{data.price} dh</p>
      <button className='product-button' onClick={() => handleDetails(data)}>
        Details
      </button>
    </div>
  );
};

export default Product;

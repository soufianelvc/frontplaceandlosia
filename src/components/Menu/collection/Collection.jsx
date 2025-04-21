import React from 'react'
import Lahamtanjia from "../../../images/Laham-tanjia.jpg";
import "./collection.css"; 
const Collection = () => {
  return (
    <div className='collection d-flex'>
        <img src={Lahamtanjia} alt="" className='collectionImg'/>
        <div>
            <h4 className='th4'>COLLECTION</h4>
            <h3 className='th3'>Laham-tanjia</h3>
            <h5 className='text'>
            Marrakech tanjia, a quintessential Moroccan dish, is not only celebrated for its unique preparation but also for the intricate blend of spices that infuse it with an unforgettable taste. This traditional delight, often slow-cooked in a clay pot of the same name, allows the flavors to meld together beautifully, creating a tender and aromatic feast.
            </h5>
        </div>
    </div>
  )
}

export default Collection
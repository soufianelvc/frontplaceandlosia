import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import "./cardListFoodMenu.css" ; 
const CardListFoodMenu = (props) => {
    const table = props.data ;
    console.log(table)
    return (
        <div>
            {
                table.length >0 ? (
                    table.map((item,i)=>{
                        return(
            <Zoom>
            <div className="card mb-5" style={{maxWidth:" 840px;"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={require("../../../images/"+item.img)} className="img-fluid rounded-start" alt="..." width="300px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h1 className="item-title">{item.title}</h1>
                                <p className='item-price'>{item.price}</p>
                            </div>
                            <p className="item-description">{item.description}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>  
            </Zoom>      
                        )
                    })
                ):(
                    <h3 className="text-center"> data vide !!! </h3>
                )
            }
            
        </div>



    )
}

export default CardListFoodMenu ; 

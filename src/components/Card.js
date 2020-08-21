import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
const Card = ({data, addToCart}) => {
    return (
        <div className="card">
            <img src={data.img} className="card-image" alt="product" title={data.name} />
            <h3 className="card-title">{data.name}</h3>
            <p className="price"> <span>$ {data.cost}</span></p>
            <h3 style={{fontSize:'14px',verticalAlign:'middle',color:'#000000'}} className="text-left"><IconContext.Provider value={{ style:{verticalAlign: 'middle'},size:'12px',color:'#FFD700'}}><div><BsFillStarFill/>{data.rating}  |   {data.time} |</div></IconContext.Provider></h3>
        <div className="text-right">
           

           
            
                <button 
                onClick={() => addToCart(data)}
                className="btn btn-primary btn-sm">Add to cart</button>
            
            
        </div>
            
        </div>
    )
}

export default Card;

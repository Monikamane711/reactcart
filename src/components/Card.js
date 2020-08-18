import React from 'react'

const Card = ({data, addToCart}) => {
    return (
        <div className="card">
            <img src={data.img} className="card-image" alt="product" title={data.name} />
            <h3 className="card-title">{data.name}</h3>
            <p className="price">price: <span>$ {data.cost}</span></p>
            <button className="add-to-cart" onClick={() => addToCart(data)}>Add to cart</button>
        </div>
    )
}

export default Card;

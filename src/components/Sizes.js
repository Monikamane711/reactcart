import React from 'react'
import './size.css'
const Sizes = ({selectedSizes, setSize}) =>  {

    const sizes = ['Beverages', 'Fast Food', 'South Indian', 'Cafe', 'North Indian', 'Chinese'];

    return (
        <div className="sizes">
            <h3>Cuisine</h3>
            <div className="size-list">
                {
                    sizes.map((cuisine_type, index) => {
                        return (
                            <button 
                                className={ "cuisine_type" + (selectedSizes.includes(cuisine_type) ? " selected-cuisine_type" : "")}
                                key={index}
                                onClick={() => setSize(cuisine_type)}
                            >
                                {cuisine_type}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sizes;

import React from 'react'

const Sizes = ({selectedSizes, setSize}) =>  {

    const cuisine_type = ['Cafe', 'Beverages', 'South Indian', 'North Indian', 'Maharashtrian', 'Fast Food', 'Indian'];

    return (
        <div className="sizes">
            <h3>Cuisines</h3>
            <div className="size-list">
                {
                    cuisine_type.map((cuisine_type, index) => {
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

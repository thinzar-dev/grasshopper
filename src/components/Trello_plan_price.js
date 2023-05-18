import React, { useState } from 'react';

const Trello_plan_price = () => {

    const [price, setPrice] = useState('50');

    const changePrice = (event) => {
        setPrice(event.target.value);
    };

    return (
        <div style={{ width: '100%', height: '400px', backgroundColor: '#ccc', textAlign: 'center' }} >
            <div>Est. cost for <input type="number" value={price} min="50" max="5000" aria-label="Users" id='priceInput' />users</div>

            <h2>Price {price}</h2>

            <input
                type='range'
                onChange={changePrice}
                min={50}
                max={5000}
                value={price}
            ></input>

            
        </div>
    )
}

export default Trello_plan_price

import React from 'react';
import './CounterFood.css'

const CounterFood = props => {
    return(
        <div className="CounterFood">
            {props.children}
        </div>
    )
};

export default CounterFood;
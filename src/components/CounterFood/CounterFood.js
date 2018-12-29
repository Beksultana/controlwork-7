import React from 'react';
import './CounterFood.css'

const CounterFood = props => {
    return(
        <div className="CounterFood">
            <span style={{fontWeight: 'bold'}}>{props.name} </span>
            <span>{props.count} </span>
            <span>{props.price} coм</span>
            <button className={'btnRemove'} onClick={props.onClickRemove}>x</button>
            {props.children}
        </div>
    )
};

export default CounterFood;
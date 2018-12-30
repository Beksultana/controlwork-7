import React from 'react';
import Radium from 'radium';
import './CounterFood.css'

const CounterFood = props => {

    const style ={
        borderRadius: '3px',
        ':hover': {
            border: '1px solid black'
        }
    };
    return(
        <div className="CounterFood" style={style}>
            <span style={{fontWeight: 'bold'}}>{props.name} </span>
            <span>{props.count}x</span>
            <span>{props.price} coм</span>
            <button className={'btnRemove'} onClick={props.onClickRemove}>x</button>
            {props.children}
        </div>
    )
};

export default Radium(CounterFood);
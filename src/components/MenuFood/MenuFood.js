import React from 'react'
import "./MenuFood.css"

const MenuFood = props => (
    <div className={props.name}>
        <p>{props.name} </p>
        <p> Price: {props.price}</p>
        <button className='btn'>+</button>
    </div>
)

export default MenuFood;
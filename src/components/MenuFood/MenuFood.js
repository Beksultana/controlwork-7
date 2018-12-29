import React from 'react'
import "./MenuFood.css"

const MenuFood = props => (
    <div className={props.name}>
        <div className="b">
            <img className={'imgs'} src={props.image} alt={props.name}/>
            <span>{props.name} </span>
            <span> Price: {props.price} KGZ</span>
            <button className='btn'>+</button>
        </div>
    </div>
)

export default MenuFood;
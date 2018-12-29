import React from 'react'
import "./MenuFood.css"

const MenuFood = props => (
    <div className={props.name}>
        <div className="blockMenu">
            <img className={'imgs'} src={props.image} alt={props.name}/>
            <span style={{fontWeight: 'bold'}}>{props.name} </span>
            <span> Price: {props.price} KGS</span>
            <button onClick={props.onClickAddFoods}  className='btn'>+</button>
        </div>
    </div>
)

export default MenuFood;
import React from 'react'
import Radium from 'radium';
import "./MenuFood.css"

const MenuFood = props => {

    const style ={
        borderRadius: '3px',
        ':hover': {
            border: '1px solid #447'
        }
    };

    return (
        <div className={props.name} style={style}>
            <div className="blockMenu">
                <img className={'imgs'} src={props.image} alt={props.name}/>
                <span style={{fontWeight: 'bold'}}>{props.name} </span>
                <span> Price: {props.price} KGS</span>
                <button onClick={props.onClickAddFoods} className='btn'>+</button>
            </div>
        </div>
    )
}

export default Radium(MenuFood);
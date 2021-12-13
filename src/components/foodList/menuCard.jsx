import React from 'react'
import "./menuCard-styles.css"

const costOfFood = (price)=>{
    if (typeof(price) === "string") {
        return <p>{price}</p>;
    } else {
        return Object.keys(price).map((key) => {
            return <p>{key}: {price[key]}</p>;
        });
    }
}

const Card = (props) => (
    <div className="card-container"> 
        <h1>{props.food.name}</h1>
        <img alt="food" src={props.food.img}/>
        {/* <h3> {props.food.description} </h3>                               need to add description as modal pop out */      }
        <p>Price: {costOfFood(props.food.price)}</p>
    </div>
)

export default Card
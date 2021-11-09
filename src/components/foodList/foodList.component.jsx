import React from 'react'
import "./foodList-styles.css"
import Card from './menuCard'



 const FoodList = props => {
    
    return (
            <div className="menu-container">
                <div className="menu-options">
                    <button className="menu-button" value='Full Menu' onClick={props.handleButtons}>Full Menu</button>
                    <button className="menu-button" value='appetizer' onClick={props.handleButtons}>Appetizers</button>
                    <button className="menu-button" value='sandwich' onClick={props.handleButtons}>Sandwiches</button>
                    <button className="menu-button" value='salad' onClick={props.handleButtons}>Salads</button>
                    <button className="menu-button" value='dessert' onClick={props.handleButtons}>Desserts</button>
                    <button className="menu-button" value='pizza' onClick={props.handleButtons}>Pizza</button>
                </div>
                <div className="card-list">
                    {props.food.map(food =>(<Card key = {food.id} food = {food}></Card>))}
                </div>
            </div>
    )
}

export default FoodList

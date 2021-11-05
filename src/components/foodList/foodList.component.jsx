import React from 'react'
import "./foodList-styles.css"
import Card from './menuCard'

export const FoodList = props => {
    return (
        <div className="menu-container">
            <div className="menu-options">
                <button className="menu-button">Appetizers</button>
                <button className="menu-button">Sandwiches</button>
                <button className="menu-button">Salads</button>
                <button className="menu-button">Dessert</button>
                <button className="menu-button">Pizza</button>
            </div>
            <div className="card-list">
                {
                props.food.map(food =>(
                    <Card key = {food.id} food = {food}></Card>))
                }
            </div>
        </div>
    )
}

export default FoodList
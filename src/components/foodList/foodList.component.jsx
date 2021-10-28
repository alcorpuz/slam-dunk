import React from 'react'
import "./foodList-styles.css"
import Card from './menuCard'

export const FoodList = props => {
    return (
        <div className="card-list">
            {props.food.map(food =>(
                   <Card key = {food.id} food = {food}></Card>
            ))
            }
        </div>
    )
}

export default FoodList
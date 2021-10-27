import React from 'react'
import "./foodList-styles.css"

export const FoodList = props => {
    return (
        <div className="card-list">
            {props.children}
        </div>
    )
}

export default FoodList
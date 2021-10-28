import React, { Component } from 'react'
import FoodList from '../../foodList/foodList.component';

class Menu extends Component {
    constructor() {
        super();

        this.state = { 
            food:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/food')
    .then(response => response.json())
    .then(data => this.setState({food:data}));
  }


    render() {
        return (
           <div className='Menu container'>
               <FoodList food = {this.state.food}> 
               </FoodList>
               
           </div>
        )
    }
}

export default Menu

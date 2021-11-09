import React, { Component } from 'react'
import FoodList from '../../foodList/foodList.component';

class Menu extends Component {
    constructor() {
        super();

        this.state = { 
            food:[],
            foodCopy:[]
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/food')
    .then(response => response.json())
    .then(data => this.setState({food:data,foodCopy:data}));
 
  }


  // filter button 
  handleButtons=(e)=>{
    console.log(e.target.value)
    let filteredFood;
    if(e.target.value ==="Full Menu"){
      filteredFood = this.state.food
    }else{
      filteredFood = this.state.food.filter(item=>item.type === e.target.value)
    }
    this.setState({
      foodCopy:filteredFood
    })
  }



    render() {
        return (
           <div className='Menu container'>
               <FoodList food = {this.state.foodCopy} handleButtons={this.handleButtons}/> 
           </div>
        )
    }
}

export default Menu

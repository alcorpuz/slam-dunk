import React, { Component } from 'react'
import FoodList from '../../foodList/foodList.component';

class Menu extends Component {
    constructor() {
        super();

        this.state = { 
            food:[
                  {
                    name:"Tot'Chos",
                    price:"11.95",
                    id:"513a2c44-3766-11ec-8d3d-0242ac130003",
                    description:"Tater tots, nacho cheese, bacon, pico de gallo, olives, jalapenos and sour cream"
                  },
                  {
                    name:"Mozzarella Sticks(8)",
                    price:"9.95",
                    id:'7956f554-3766-11ec-8d3d-0242ac130003',
                    description:"8 Freshly handmade Mozzerlla sticks with your choice of dipping sauce"
                  },
                  {
                    name:"Jalapeno Poppers(6)",
                    price:"7.95",
                    id:"9225a512-3766-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Fried Pickles approx(20-25)",
                    price:"7.95",
                    id: "9d17861a-3771-11ec-8d3d-0242ac130003",
                    description:"9d3e406c-3766-11ec-8d3d-0242ac130003"
                  },
                  {
                    name:"Fried mac & Cheese bites(12)",
                    price:"9.95",
                    id: "ae446150-376d-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"French Fries",
                    price:"5.95",
                    id: "f798554c-3771-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Garlic Fries",
                    price:"6.95",
                    id: "fb19a4e6-3771-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Buffalo Blue Fries",
                    price:"6.95",
                    id: "03de5bbc-3772-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Onion Rings",
                    price:"6.95",
                    id: "08a91a6a-3772-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Potato Skins(8)",
                    price:"9.95",
                    id: "0b02d5f8-3772-11ec-8d3d-0242ac130003",
                    description:"8 pieces filled with pepperoni, cheese onion & bacon"
                  },
                  {
                    name:"Knots(8)",
                    price:"7.95",
                    id: "0e9b5b18-3772-11ec-8d3d-0242ac130003",
                    description:"8 Knots choose from our delicious dipping sauces Garlic, Pesto ranch, Sirracha ranch or Cinnamon"
                  },
                  {
                    name:"Cheesy Garlic Squares()",
                    id: "122ad628-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "small":"9.95"
                        },
                        {
                           "large":"11.95"
                        }
                     ],
                    description:""
                  },
                  {
                    name:"Ham & Cheese",
                    id: "14b40f22-3772-11ec-8d3d-0242ac130003",
                    price:"11.45",
                    description:"Over baked sandwich one fresh roll with mayo, mustard, lettuce, and tomato"
                  },
                  {
                    name:"Chicken Pesto Sandwich",
                    price:"11.95",
                    id: "186ad132-3772-11ec-8d3d-0242ac130003",
                    description:"Grilled chicken, pesto, cheese, lettuce, and tomato"
                  },
                  {
                    name:"Buffalo chicken sandwich",
                    price:"11.95",
                    id: "1bab2720-3772-11ec-8d3d-0242ac130003",
                    description:"Grilled chicken smothered in buffalo Sauce, bacon, onion, lettuce, tomato, and ranch"
                  },
                  {
                    name:"Crispy chicken sandwich",
                    price:"11.95",
                    id: "1e4a3e4e-3772-11ec-8d3d-0242ac130003",
                    description:"cheese, bacon, lettuce tomato and union"
                  },
                  {
                    name:"BBQ chicken sandwich",
                    price:"11.95",
                    id: "20926ea6-3772-11ec-8d3d-0242ac130003",
                    description:"Grilled chicken, onion, lettuce, tomato with BBQ sauce"
                  },
                  {
                    name:"Hamburger",
                    price:"11.95",
                    id: "22c991cc-3772-11ec-8d3d-0242ac130003",
                    description:"1/2 lb of fresh ground beef on a fresh bun. Mayo, mustard, lettuce, onion, and tomato"
                  },           
                  {
                    name:"All you can eat Salad",
                    price:"8.95",
                    id: "22c991cc-3772-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"All you can eat salad with pizza Purchase",
                    price:"6.95",
                    id: "27c4dcfe-3772-11ec-8d3d-0242ac130003",
                    description:"Only avaiable in store"
                  },
                  {
                    name:"Chicken Caesar Salad",
                    price:"10.95",
                    id: "29b7e362-3772-11ec-8d3d-0242ac130003",
                    description:""
                  },
                  {
                    name:"Small Green or Caesar Salad",
                    price:"5.00",
                    id: "2c078fb4-3772-11ec-8d3d-0242ac130003",
                    description:"Includes tomatoes, carrot, cucumber, broccoli, croutons and dressing"
                  },
                  {
                    name:"The Buny Slope",
                    price:"10.95",
                    id: "2e7af11e-3772-11ec-8d3d-0242ac130003",
                    description:"A dessert pizza with nutella, marshmallows, Graham crackers bits, chgocolate sauce, and whipped cream"
                  },
                  {
                    name:"Cinnamon knots(8)",
                    price:"7.95",
                    id: "30b5ab90-3772-11ec-8d3d-0242ac130003",
                    description:"Only avaiable in store"
                  },
                  {
                    name:"The Homerun",
                    id: "33155d2c-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Salami, pepperoni, ground sausage, linguica, mushrooms, olives, bell pepper, onion, pizza sauce, and cheese"
                  },
                  {
                    name:"The Touchdown",
                    id: "3b58c19a-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Salami, pepperoni ground sausage, bacon, linguica, pizza sauce, and cheese"
                  },
                  {
                    name:"The Tailgater",
                    id: "3fa9bd80-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Grilled chicken, BBQ sauce, bacon, carmalized onions, cilantro, and cheese"
                  },
                  {
                    name:"The Caprese Pizza",
                    id: "429dec1e-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Pesto Sauce light mozzerella, grape tomatoes, red onion, fresh basil, garlic, and finished with balsamic reduction"
                  },
                  {
                    name:"The Taco pizza",
                    id: "457fbd0e-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Ground beef or grilled chicken, cheese, beans, pico, lettuce, olives, sour cream, and pico on the side"
                  },
                  {
                    name:"The takedown",
                    id: "480fcff0-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Grilled chicken, sun dried tomato, artichoke hearts, feta cheese, and pesto ranch sauce"
                  },
                  {
                    name:"The Olympian",
                    id: "4a474c1c-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Grilled chicken, garlic, ranch sauce, bacon. tomato, artichoke hearts, basil, and cheese"
                  },
                  {
                    name:"The Slam Dunk",
                    id: "4d7bba1c-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Grilled chicken smothered in buffalo sauce, onions, bacon, tomoato, cheese, and yummy ranch sauce drizzle"
                  },
                  {
                    name:"The Fairway",
                    id: "4fc61da8-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Mushrooms, olives, bell peppers, onions, artichoke hearts, spinach, fresh tomatoe, pizza sauce, and cheese "
                  },
                  {
                    name:"The Bocce",
                    id: "532565b2-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Grilled chicken, pesto sauce, garlic, caramelized onions, ranch, and cheese"
                  },
                  {
                    name:"The Rodeo",
                    id: "574b69d4-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"9.75",
                           "small":"15.00",
                           "medium":"20.00",
                           "large":"26.75",
                           "x-large":"31.00"
                        }
                     ],
                    description:"Ground beef, bacon, onion string s, BBQ sauce, and cheese"
                  },
                  {
                    name:"The Goalle",
                    id: "5a2b8f08-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"7.75",
                           "small":"12.00",
                           "medium":"16.50",
                           "large":"20.75",
                           "x-large":"23.00"
                        }
                     ],
                    description:"Combonation of mozzarella, provolone and cheddar cheese, and pizza sauce"
                  },
                  {
                    name:"The Draft",
                    id: "5cebd48c-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"8.25",
                           "small":"12.75",
                           "medium":"17.50",
                           "large":"22.25",
                           "x-large":"25.00"
                        }
                     ],
                    description:"Pepperoni, pizza sauce, and cheese"
                  },
                  {
                    name:"The Ducati",
                    id: "5f41b972-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"8.25",
                           "small":"12.75",
                           "medium":"17.50",
                           "large":"22.25",
                           "x-large":"25.00"
                        }
                     ],
                    description:"(Margherita pizza) Olive oil base, light mozzarella, sliced tomatoes,basil, and a touch of kosher salt"
                  },
                  {
                    name:"The Champ",
                    id: "61a90576-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"8.75",
                           "small":"13.50",
                           "medium":"18.50",
                           "large":"23.75",
                           "x-large":"27.00"
                        }
                     ],
                    description:"Pepperoni, mushroom, pizza sauce, and cheese"
                  },
                  {
                    name:"The Pro Bowl",
                    id: "646fcaec-3772-11ec-8d3d-0242ac130003",
                    price:[
                        {
                           "mini":"8.25",
                           "small":"12.75",
                           "medium":"17.50",
                           "large":"22.25",
                           "x-large":"25.00"
                        }
                     ],
                    description:"Ham, pineapple, pizza sauce, and cheese"
                  }
               ]
    }
}
    render() {
        return (
           <div className='Menu container'>
               <FoodList> 
               {
                   this.state.food.map(food => <h1 key={food.id}>{food.name}</h1>)
                   
                }
               </FoodList>
               
           </div>
        )
    }
}

export default Menu

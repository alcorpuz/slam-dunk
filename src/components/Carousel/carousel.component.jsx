import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel-styles.scss"


class Pizzacarousel extends Component {
    render() {
        return (
            <div className="cards">
            <Carousel className="slider-container" 
            autoPlay 
            infiniteLoop={true} 
            dynamicHeight={true} 
            interval="2500"
            swipeable={true}
            thumbWidth
            >
                <div className="carousel-img-container">
                    <img alt="" src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                </div>
                <div className="carousel-img-container">
                <img alt="" src="https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
                </div >
                <div className="carousel-img-container">
                <img alt="" src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>    
                </div>
                <div className="carousel-img-container">
                <img alt="" src="https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                </div>
            </Carousel>
            </div>
        )
    }
}

export default Pizzacarousel
import React from "react"
import "./home-style.scss"
import PizzaCarousel from "../../Carousel/carousel.component";


function Home() {
        return (
            <div className="home">
                <h1>This is the home page. Pizza Pizza.</h1>
                <PizzaCarousel/>
            </div>
        );
}

export default Home;
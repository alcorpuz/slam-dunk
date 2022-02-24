import React from "react"
import "./home-style.scss"
import PizzaCarousel from "../../Carousel/carousel.component";
import Card from "../../cards/card";


function Home() {
        return (
                <div className="home">
                    <div className="locations-banner">
                        <Card
                        title='Redwood Valley'
                        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAB27Bz3c2vn1s5VauQGNHCxDvgI20ayekuFL4LHaOgTfit0kHL8NtS4CtALhWsFNONMU&usqp=CAU'
                        locAddress='6951 East Road'
                        locPhone='707-485-4686'
                        locLink='/redwood-valley'
                        />
                        <Card
                        title='Ukiah'
                        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAB27Bz3c2vn1s5VauQGNHCxDvgI20ayekuFL4LHaOgTfit0kHL8NtS4CtALhWsFNONMU&usqp=CAU'
                        locAddress='720 North State Street'
                        locPhone='707-463-1000'
                        locLink='/ukiah'
                        />
                        <Card
                        title='Willits'
                        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAB27Bz3c2vn1s5VauQGNHCxDvgI20ayekuFL4LHaOgTfit0kHL8NtS4CtALhWsFNONMU&usqp=CAU'
                        locAddress='1708 South Main Street'
                        locPhone='707-459-6811'
                        locLink='/willits'
                        />
                    </div>
                    <div>
                        <PizzaCarousel/>
                    </div>
                    
                    
                </div>
        );
}

export default Home;
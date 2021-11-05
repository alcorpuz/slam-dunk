import React from "react"
import "./home-style.scss"
import PizzaCarousel from "../../Carousel/carousel.component";


function Home() {
        return (
                <div className="home">
                    <div className="locations">
                        <h1>
                            Ukiah<br />
                            720 N. State St<br />
                            707-463-1000
                        </h1>
                        <h1>
                            Redwood Valley<br />
                            6951 East Rd<br />
                            707-485-4686
                        </h1>
                        <h1>
                            Willits<br />
                            1708 S. Main St<br />
                            707-459-6811
                        </h1>

                        <PizzaCarousel/>
                    </div>
                </div>
        );
}

export default Home;
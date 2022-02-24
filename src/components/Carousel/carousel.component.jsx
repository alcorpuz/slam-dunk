import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel-styles.scss"


class Pizzacarousel extends Component {
    render() {
        return (
            <div className="cards">
                <Carousel className="slider-container" 
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
            
                >
                    <div className="carousel-img-container">
                        <img alt="" src="https://static.wixstatic.com/media/b61483_5e752d4beb404f29907bf58d72c4ff74~mv2.jpg/v1/crop/x_98,y_0,w_1243,h_1080/fill/w_780,h_404,al_c,q_80,usm_0.66_1.00_0.01/b61483_5e752d4beb404f29907bf58d72c4ff74~mv2.webp"/>
                    </div>
                    <div className="carousel-img-container">
                        <img alt="" src="https://static.wixstatic.com/media/b61483_bfa3a76681f149c7af99fe020028be1e~mv2_d_1536_2048_s_2.jpg/v1/crop/x_0,y_210,w_1536,h_1335/fill/w_779,h_452,al_c,q_80,usm_0.66_1.00_0.01/b61483_bfa3a76681f149c7af99fe020028be1e~mv2_d_1536_2048_s_2.webp"/>
                    </div >
                    <div className="carousel-img-container">
                        <img alt="" src="https://static.wixstatic.com/media/b61483_ef74b712c83f4d33a448d24b5868a570~mv2_d_2048_1536_s_2.jpg/v1/crop/x_0,y_208,w_2048,h_1118/fill/w_798,h_436,al_c,q_80,usm_0.66_1.00_0.01/b61483_ef74b712c83f4d33a448d24b5868a570~mv2_d_2048_1536_s_2.webp"/>    
                    </div>
                    <div className="carousel-img-container">
                        <img alt="" src="https://static.wixstatic.com/media/b61483_3c47e3b0d0084446a47341de14416546~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_0,y_151,w_5184,h_3153/fill/w_750,h_405,al_c,q_80,usm_0.66_1.00_0.01/b61483_3c47e3b0d0084446a47341de14416546~mv2_d_5184_3456_s_4_2.webp"/>
                    </div>
                    <div className="carousel-img-container">
                        <img alt="" src="https://static.wixstatic.com/media/b61483_8fa5f1303f62482d82397f3ee0e855a8~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_821,y_7,w_4363,h_3224/fill/w_818,h_443,al_c,q_85,usm_0.66_1.00_0.01/b61483_8fa5f1303f62482d82397f3ee0e855a8~mv2_d_5184_3456_s_4_2.webp"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Pizzacarousel
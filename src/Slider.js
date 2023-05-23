import React from 'react';
import './App.css';
import Slider1 from'./Components/slider1.jpg'
import Slider2 from'./Components/slider2.jpg'
import Slider3 from'./Components/slider3.jpg'
import Slider4 from'./Components/slider4.jpg'
import Slider5 from'./Components/slider5.jpg'
import Slider6 from'./Components/slider6.jpg'
import {Carousel} from'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Slider() {
    return(
        <Carousel>
            <div>
                <img src={Slider1} alt="slider 1"/>
                <p className="legand">Slider 1</p>
            </div>
            <div>
                <img src={Slider2} alt="slider 2"/>
                <p className="legand">Slider 2</p>
            </div>
            <div>
                <img src={Slider3} alt="slider 3"/>
                <p className="legand">Slider 3</p>
            </div>
            <div>
                <img src={Slider4} alt="slider 4"/>
                <p className="legand">Slider 4</p>
            </div>
            <div>
                <img src={Slider5} alt="slider 5"/>
                <p className="legand">Slider 1</p>
            </div>
            <div>
                <img src={Slider6} alt="slider 6"/>
                <p className="legand">Slider 6</p>
            </div>
        </Carousel>
    )
}
export default Slider;
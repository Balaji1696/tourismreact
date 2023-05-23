import React from "react";
import './App.css';
import NavBar from './navbar';
import Image from './Components/Serviceimg.jpg'
import Footer from './footer';
import Slider from "./Slider";
import ImageWithContent from "./Content";


export default function Service () {
    return (
            <>
        <div className="Service">
            <NavBar/>
            <img src={Image} alt="banner"/>
            <h2>Service</h2>
            <p>Places We Explored...</p>
            <Slider/>
            <ImageWithContent/>
            <Footer/>
            </div>
          </>
    )
}

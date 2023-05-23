import React from "react";
import './App.css';
import NavBar from './navbar';
import Image from "./Components/image1.jpg"
import Footer from './footer';
import Content from './Content'
import Card from'./card'
 function Home(){
    return(
                    <>
        <div className="Home">
            <NavBar/>
           <img src={Image} alt="banner"/>
           <h2>Welcome</h2>
            </div>
            <Content/>
            <Card/>
            <Footer/>
            
            </>
    )
}
    export default Home;        
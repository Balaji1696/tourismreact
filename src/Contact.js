import React from "react";
import Form from "./form";
import NavBar from "./navbar";
import Footer from "./footer";
import Image4 from "./Components/Contact.jpg";
export default function Contact () {
    return (
        <>
        
        <div className="Contact">
            <NavBar/>
           <img src={Image4} alt="banner"/>
           <h2>Contact</h2>
            </div>
            <Form/>
            <Footer/>
        
        </>
    )
}
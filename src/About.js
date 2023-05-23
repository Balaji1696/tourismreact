import React from "react";
import './App.css';
import NavBar from './navbar';
import Footer from './footer';
import Card from './card'
import Image from'./Components/Aboutusimg.jpg'



export default function About () {
    return (
        <>
        <div className="About us">
            <NavBar/>
           <img src={Image} alt="banner"/>
           <h2>About </h2>
            </div>
            <h4>Our History</h4>
            <p> Tourism is travel for pleasure or business, and the commercial activity of providing and supporting such travel.[2] The World Tourism Organization defines tourism more generally, in terms which go "beyond the common perception of tourism as being limited to holiday activity only", as people "travelling to and staying in places outside their usual environment for not more than one consecutive year for leisure and not less than 24 hours, business and other purposes".</p>
            <h4>Our Achievement</h4>
            <p> Tourism Awards: Cultural Engagement – Estrela community tours, highly commended; Poverty Reduction – Tribal Voice Communications, highly commended.  Both for projects supported by the Travel Foundation. </p>
            <h4>Our Goals</h4>
            <p>To provide entertainment to tourists, organise tourism related activities such as cultural shows, fairs and festivals etc. To take over and develop and manage places of tourist interest, parks, lakes, avenues, beaches and recreational places, spots etc. </p>
            
            <Card/>
            <Footer/>
            </>
    )
}
import React from 'react';
import'./App.css';
import {Link} from "react-router-dom"
 export default function NavBar() {
    return(
    <div className="nav">
      <h1>GoTrip</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Service"> Service </Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        </div>
                
    
    )
}
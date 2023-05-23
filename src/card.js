import React from 'react';
import './App.css';
import Card1 from"./Components/cardimg1.jpg"
import Card2 from"./Components/cardimg2.jpg"
import Card3 from"./Components/cardimg3.jpg"
function CardwithImageandContent () {
return (
        <>
        <div className='container'>
<div className="card">

      <img src = {Card1} alt="cardimag1.jpge/"></img>
      <div className="card-content">
        <h3>GOA</h3>
        <p>The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.
Foreign tourists, mostly from Europe, arrive in Goa in winter, whilst the summer and monsoon seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the country in 2011.</p>
      </div>
    </div>

    <div className="card">
        <img src= {Card2} alt="cardimag2.jpg/"></img>
        <div className="card-content">
            <h3>Los vegas</h3>
            <p>The major attractions in Las Vegas are the casinos and the hotels, although in recent years other new attractions have begun to emerge.

Most casinos in the downtown area are located on Fremont Street, with The STRAT Hotel, Casino & Skypod as one of the few exceptions. Fremont East, adjacent to the Fremont Street Experience, was granted variances to allow bars to be closer together, similar to the Gaslamp Quarter of San Diego, the goal being to attract a different demographic than the Strip attracts.</p>
        </div>
        </div>   

  <div className="card">
  <img src= {Card3} alt="cardimg3.jpg"></img>
  <div className="card-content">
      <h3>Thailand</h3>
      <p>Thailand was the most visited country in Southeast Asia in 2013, according to the World Tourism Organisation. Estimates of tourism receipts directly contributing to the Thai GDP of 12 trillion baht range from 9 percent (1 trillion baht) (2013) to 16 percent.[149] When including the indirect effects of tourism, it is said to account for 20.2 percent (2.4 trillion baht) of Thailand's GDP.[150]:</p>
  </div>
  </div>
  </div>
  
  </>      
)
}

export default CardwithImageandContent;
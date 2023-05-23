import React from 'react';
import './App.css';
import Content1 from "./Components/contentimg1.jpg"
import Content2 from "./Components/contentimg2.jpg"
import Content3 from "./Components/contentimg3.jpg"
function ImageWithContent () {

    return(
        <>

        <div className="image-with-content">
         <div className="image-container">
         <img src={Content1} alt="contentimg1.jpg"/>
           </div>
          <div>
                <p><span>Maldives</span>  began in 1972. A United Nations mission on development which visited the Maldives Islands in the 1960s did not recommend tourism, claiming that the islands were not suitable. Ever since the launch of the first resort in Maldives in 1972, however, tourism in Maldives has flourished. The arrival of the first tourist's group is estimated to have occurred in February 1972. Tourism in Maldives started with just two resorts with a capacity of about 280 beds. Kurumba Island Resort is the first resort opened in Maldives, followed by Bandos Island Resort. </p>
            </div>
        </div>
        <div className="image-with-content">
            <div className="image-container">
                <img src={Content2} alt="contentimg2.jpg"/>
            </div>
            <div>
                <p><span>Goa...</span>Tourism increased significantly between 2015 and 2019, with the number of visitors increasing from 77,000 per year to 105,000.[78] One source estimated that in 2019 the revenue from this aspect of the economy was about 450 million kroner (US$67 million). Like many aspects of the economy, this slowed dramatically in 2020, and into 2021, due to restrictions required as a result of the COVID-19 pandemic;[79] one source describes it as being the "biggest economic victim of the coronavirus" (the overall economy did not suffer too severely as of mid-2020, thanks to the fisheries "and a hefty subsidy from Copenhagen").[80] Greenland's goal for returning tourism is to develop it "right" and to "build a more sustainable tourism for the long run".</p>
            </div>
        </div>
        <div className="image-with-content">
            <div className="image-container">
                <img src={Content3} alt="contentimg3.jpg"/>
            </div>
            <div>
                <p><span>Marina Beach</span>, or simply the Marina, is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km (3.7 mi),[1] making it the second longest urban beach in the world, after Cox's Bazar Beach.[2][3][4] It is a prominent landmark in Chennai.</p>
            </div>
        </div>

        </>
    )
}
export default ImageWithContent;
import React from 'react';
import './App.css';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

function App() {
  return (
       <div className="App"> 
       <BrowserRouter>
       <Routes>
      {<Route path="/" element={<Home/>}/>}
      { <Route path="/About" element={<About/>}/> }
      { <Route path="/Service" element={<Service/>}/> }
      { <Route path="/Contact" element={<Contact/>}/> }
        </Routes>
        </BrowserRouter>
        
        
        </div>

    

  );
}
export default App;

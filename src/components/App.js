import React from 'react'
import Navbar from './Home/Navbar';
import Home from './Home/Home';
import Offer from './Offer/Offer';
import "./Styles/App.css"
import Gallery from './Gallery';

function App() {
  return (
    <div>
    <div className="HomeSection">
    <Navbar/>
      <Home />
    </div>
      <div className="OfferSection">
      <Offer />
      </div>
      <div className="Gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
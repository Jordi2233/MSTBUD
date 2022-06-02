import React from 'react'
import Navbar from './Home/Navbar';
import Home from './Home/Home';
import Offer from './Offer/Offer';
import "./Styles/App.css"
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div>
    <div id='Home'>
    <Navbar/>
      <Home />
    </div>
      <div id='Offer'>
      <Offer />
      </div>
      <div id='Gallery'>
        <Gallery />
      </div>
      <div id='Contacts'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
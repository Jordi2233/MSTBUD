import React from "react";
import useWindowSize from "../ScreenResolution";
import "../Styles/HomeStyles//Navbar.css";
import 'aos/dist/aos.css';

const Navbar = () => {

const size = useWindowSize().windowSize;

return (

<div className="Navbar GridNav" data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
  data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
  <div className="Logo">

    <img className="LogoIMG" src={require("../Pictures/HomePhotos/Logo-p.png")} alt="MSTBUD" />

  </div>


  { size.width > 1200 && <div className="NavLinks">

    <a href="#Home">Start</a>
    <a href="#Offer">Usługi</a>
    <a href="#Gallery">Galeria</a>
    <a href="#Contacts">Kontakt</a>

  </div>}


  {size.width < 1200 && <div className="NavList">

    <label class="menu-button-wrapper" for="">
      <input type="checkbox" class="menu-button" />
      <div class="icon-wrapper">
        <label class="hamburger">
          <input class="hamburger-input" type="checkbox" />
          <span class="hamburger-line first"></span>
          <span class="hamburger-line second"></span>
          <span class="hamburger-line third"></span>
        </label>
      </div>
      <div class="item-list">
        <div> <a href="#Home">Start</a></div>
        <div> <a href="#Offer">Usługi</a></div>
        <div><a href="#Gallery">Galeria</a></div>
        <div><a href="#Contacts">Kontakt</a></div>
      </div>
    </label>

</div>}


</div>
);

}


export default Navbar;
import React from "react";
import useWindowSize from "../ScreenResolution";
import "../Styles/HomeStyles//Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

const size = useWindowSize().windowSize;

return (
<div className="Navbar GridNav">
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
        <button className="NavBtn">
            <FontAwesomeIcon icon={faBars} /></button>
</div>}
</div>
);

}


export default Navbar;
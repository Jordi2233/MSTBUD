import React from "react";
import Scroll from "../Scroll";
import Menu from "./Menu";
import "../Styles/OfferStyles/Offer.css"
import useWindowSize from "../ScreenResolution";


const Offer = () => {

const size = useWindowSize().windowSize;


return (

<div className="OfferContainer" id="Offer">

    <Menu />


    { size.width > 1200 &&
    <Scroll />}


</div>
)
}

export default Offer;
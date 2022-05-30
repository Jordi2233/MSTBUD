import React from "react";
import Scroll from "../Scroll";
import Switcher from "./Switcher";
import FullOffer from "./FullOffer";
import "../Styles/OfferStyles/Offer.css"

const Offer = () => {
return (
<div className="OfferContainer">
    <div className="Switcher">Switcher</div>
    <div className="FullOffer">FullOffer</div>
    {/*
    <Switcher /> */}
    {/*
    <FullOffer /> */}
    <Scroll />
</div>
)
}

export default Offer;
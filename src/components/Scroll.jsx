import React from "react";
import "./Styles/Scroll.css"

const Scroll = () => {

    return (
        <div className="ScrollContainer">
    <p>Scroll Down</p>
    <img src={require("./Pictures/HomePhotos/scroll-bar.png")} alt="ScrollIcon" className="ScrollIcon"/>
        </div>
    )

}

export default Scroll;
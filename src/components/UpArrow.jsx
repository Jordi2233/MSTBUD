import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "./Styles/UpArrow.css";


const UpArrow = () => {



return (



<div className="UpArrowTag">

    <a href="#" className="UpArrow">

        <p className="UpArrowText">
            <FontAwesomeIcon icon={faAngleUp} /> <br /> Start</p>
    </a>

</div>
)

}


export default UpArrow;
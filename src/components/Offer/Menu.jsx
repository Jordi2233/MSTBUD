import React from "react";
import { useState } from "react";
import "../Styles/OfferStyles/Menu.css"
import contents from "./content";
import Button from "./Button";
import 'aos/dist/aos.css';

const Menu = () => {
const [element, setElement] = useState(0);

const contentChange = (event) => {
const btnName = event.target.name;

setElement(btnName);

}


return (
<div className="MenuGrid">


    <div className="SwitcherTitle" data-aos="fade-down" data-aos-offset="10" data-aos-delay="50" data-aos-duration="800"
        data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
        data-aos-anchor-placement="top-bottom">

        <h2>Usługi!</h2>

    </div>


    <div className="Switcher">

        <div className="SwitcherButtons" data-aos="fade-right" data-aos-offset="10" data-aos-delay="800"
            data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">

            <Button name="0" title="Układanie Paneli" function={contentChange} />
            <Button name="1" title="Sufity Napinane" function={contentChange} />
            <Button name="2" title="Glazurnictwo" function={contentChange} />
            <Button name="3" title="Elektryka" function={contentChange} />
            <Button name="4" title="Malowanie i Szpachlowanie" function={contentChange} />
            <Button name="5" title="Wiele Więcej!" function={contentChange} />

        </div>


        <div className="SwitcherDescribe" data-aos="fade-right" data-aos-offset="10" data-aos-delay="800"
            data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">

            <h3>{contents[element].title}</h3>
            <ul>
                {
                    contents[element].li.map( (item) => {
                return (<li key={Math.random()}>{item}</li>)
                } )}
            </ul>

        </div>


        <div className="MenuPhotos" data-aos="fade-left" data-aos-offset="10" data-aos-delay="800"
            data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">

            <img src={contents[element].img} alt="img" />

        </div>


    </div>
</div>
)
}

export default Menu;



// To do: 
// When btn hover trigger elements animations 
// Add animations to elements
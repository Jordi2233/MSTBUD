import React from "react";
import { useState } from "react";
import "../Styles/OfferStyles/Menu.css"
import contents from "./content";
import Button from "./Button";

const Menu = () => {
const [element, setElement] = useState(0)

const contentChange = (event) => {
const btnName = event.target.name;
setElement(btnName);
}


return (
<div className="MenuGrid">

    <div className="SwitcherTitle">
        <h2>Usługi!</h2>
    </div>


    <div className="Switcher">

        <div className="SwitcherButtons">
            <Button name="0" title="Układanie Paneli" function={contentChange} />
            <Button name="1" title="Sufity Napinane" function={contentChange} />
            <Button name="2" title="Glazurnictwo" function={contentChange} />
            <Button name="3" title="Elektryka" function={contentChange} />
            <Button name="4" title="Malowanie i Szpachlowanie" function={contentChange} />
            <Button name="5" title="Wiele Więcej!" function={contentChange} />
        </div>

        <div className="SwitcherDescribe">
            <h3>{contents[element].title}</h3>
            <ul>
                {contents[element].li.map( (item) => {
                return (<li key={Math.random()}>{item}</li>)
                } )}
            </ul>

        </div>
        <div className="MenuPhotos">
            <img src={contents[element].img} alt="img" />

        </div>


    </div>
</div>
)
}

export default Menu;
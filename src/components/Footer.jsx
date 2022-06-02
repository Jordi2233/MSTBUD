import React from "react";
import "./Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

const currentYear = new Date().getFullYear();

return(
<footer class="footer-distributed" id="Contacts">

    <div class="footer-left">

        <img src={require("./Pictures/HomePhotos/Logo-p.png")} alt="MSTBUD" />

        <div class="footer-links">
            <a href="#Home">Start</a>
            <a href="#Offer">Usługi</a>
            <a href="#Gallery">Galeria</a>
            <a href="#Contacts">Kontakt</a>
            <a href=""> <FontAwesomeIcon icon={faFacebookSquare}/></a>
        </div>

        <p class="footer-company-name">Błażej Strzelecki © {currentYear}</p>

     

    </div>

    <div class="footer-right">
    <div className="footer-contacts">
        <p>Skontaktuj się z nami:</p> <br />
        <p>telefon: +48 537 137 000</p> <br />
        <p>e-mail: MSTBUD@MSTBUD.COM</p>

    </div>

        <form action="#" method="post">

            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>

        </form>

    </div>

</footer>
);
}

export default Footer;
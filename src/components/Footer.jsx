import React from "react";
import "./Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import useWindowSize from "./ScreenResolution";
import 'aos/dist/aos.css';

const Footer = () => {

const currentYear = new Date().getFullYear();

const size = useWindowSize().windowSize;

const FacebookMsg = () => {
return (
alert("Jeszcze nie istnieje.")
)
}

return(
<footer class="footer-distributed" id="Contacts">

    <div class="footer-left" data-aos="fade-right" data-aos-offset="10" data-aos-delay="100" data-aos-duration="800"
        data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom">

        <img src={require("./Pictures/HomePhotos/Logo-p.png")} alt="MSTBUD" />

        <div class="footer-links">
            <a href="#Home">Start</a>
            <a href="#Offer">Usługi</a>
            <a href="#Gallery">Galeria</a>
            <a href="#Contacts">Kontakt</a>
            <a onClick={FacebookMsg}>
                <FontAwesomeIcon icon={faFacebookSquare} /></a>
        </div>

        { size.width > 1200 && <p class="footer-company-name">Błażej Strzelecki © {currentYear}</p>
        }


    </div>

    <div class="footer-right" data-aos="fade-left" data-aos-offset="10" data-aos-delay="100" data-aos-duration="800"
        data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom">
        <div className="footer-contacts">
            <p>Skontaktuj się z nami:</p> <br />
            <p>telefon: +48 537 137 000</p> <br />
            <p>e-mail: mstbud@mstbud.com</p>

        </div>

        <form action="mailto:mstbud@mstbud.com" method="post" enctype="text/plain">

            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>

        </form>

    </div>

    { size.width < 1200 && <p class="footer-company-name">Błażej Strzelecki © {currentYear}</p>
        }

</footer>
);
}

export default Footer;
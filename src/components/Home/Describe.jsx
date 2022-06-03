import React from "react";
import "../Styles/HomeStyles//Describe.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Describe = () => {

AOS.init();
return (
<div className="HomeDescription" data-aos="fade-right" data-aos-offset="10" data-aos-delay="800" data-aos-duration="800"
    data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-bottom">

    <div className="HomeDescriptionGrid">
        <h1>Modne & <br />Eleganckie Wnętrza!</h1>

        <p>Jesteśmy firmą remontowo-budowlaną MSTBUD. </p>
        <ul>
            <li>Zajmujemy się kompleksowym
                wykończeniem wnętrz</li>
            <li>W naszym zespole
                znajdują się wykwalifikowani pracownicy.</li>
            <li>Materiały zarówno jak i sprzęt, z którego korzystamy są na najwyższym poziomie.</li>
            <li>Łączymy ogromne
                doświadczenie
                wraz z
                wiedzą i praktyką.</li>
            <li>Nasza oferta usług jest zróżnicowana i nieprzeciętna.</li>
            <li>Nie boimy się wyzwań!</li>
        </ul>



    </div>
</div>
);
}

export default Describe;
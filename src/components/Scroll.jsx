import React from "react";
import "./Styles/Scroll.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Scroll = () => {

return (
    <div className="ScrollGrid"
    data-aos="fade-up"
    data-aos-offset="10"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
    >
<div className='scrolldown'>
    <div className="chevrons">
        <div className='chevrondown'></div>
        <div className='chevrondown'></div>
    </div>
</div>
    </div>

)

}

export default Scroll;
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import "../Styles/Border.css"
import "../Styles/HomeStyles/Slider.css"
import 'aos/dist/aos.css';




const Slider = (props) => {

return (
  
<Splide className="Splide" aria-label="My Favorite Images" options={ { perPage: props.perPage, type: 'loop' , autoplay: true, interval:
  2000, perMove: 1, drag: 'free' , focus: 'center' , pauseOnHover: 'true' , } } data-aos="fade-left" data-aos-offset="1"
  data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-mirror="true"
  data-aos-once="false" data-aos-anchor-placement="top-bottom">

  <SplideSlide>
    <img className="Border" src={require("../Pictures/HomePhotos/SliderPhotos/living-room-400_550.png")} alt="img" />
  </SplideSlide>
  <SplideSlide>
    <img className="Border" src={require("../Pictures/HomePhotos/SliderPhotos/furniture-450_500.png")} alt="img" />
  </SplideSlide>
  <SplideSlide>
    <img className="Border" src={require("../Pictures/HomePhotos/SliderPhotos/home-400_550.png")} alt="img" />
  </SplideSlide>
  <SplideSlide>
    <img className="Border" src={require("../Pictures/HomePhotos/SliderPhotos/bedroom-400_550.png")} alt="img" />
  </SplideSlide>

</Splide>

);
}




export {Slider};
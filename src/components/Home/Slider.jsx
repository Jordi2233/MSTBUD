import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import "../Styles/HomeStyles//Border.css"



const Slider = (props) => {


return (
<Splide aria-label="My Favorite Images" options={ { perPage: props.perPage, type: 'loop' , autoplay: true, interval:
  2000, perMove: 1, drag: 'free' , focus: 'center' , pauseOnHover: 'true' , } }>
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
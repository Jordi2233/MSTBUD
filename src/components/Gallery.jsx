import React from "react";
import "./Styles/Gallery.css"
import Scroll from "./Scroll";
import useWindowSize from "./ScreenResolution";
import 'aos/dist/aos.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import "./Styles/Border.css"


const Gallery = (props) => {

const size = useWindowSize().windowSize;


return (
<div className="Gallery">

  <h2 className="GalleryTitle" data-aos="fade-down" data-aos-offset="10" data-aos-delay="50" data-aos-duration="800"
    data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-bottom">
    Galeria Prac!</h2>

  <Splide aria-label="My Favorite Images" options={ { perPage: size.width < 1200 ? 1.7 : 3, type: 'loop' , autoplay: true, interval: 20000,
    perMove: 1, drag: 'free' , pauseOnHover: 'true' , gap: '1em' } } data-aos="zoom-in-down"
    data-aos-offset="1" data-aos-delay="800" data-aos-duration="800" data-aos-easing="ease-in-out"
    data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-bottom">



    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/4.jpg")} alt="img" />
    </SplideSlide>
    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/5.jpg")} alt="img" />
    </SplideSlide>
    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/6.jpg")} alt="img" />
    </SplideSlide>
    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/3.jpg")} alt="img" />
    </SplideSlide>
    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/2.jpg")} alt="img" />
    </SplideSlide>
    <SplideSlide>
      <img className="Border" src={require("./Pictures/Gallery/1.jpg")} alt="img" />
    </SplideSlide>

  </Splide>

  <Scroll className="ScrollGallery" />

</div>

)
}

export default Gallery;


// To do:
// Rewrite all code to make it smaller (Add img to <a /> elements instead of separate divs)
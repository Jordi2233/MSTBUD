import React from "react";
import "./Styles/Gallery.css"
import Scroll from "./Scroll";
import useWindowSize from "./ScreenResolution";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

const size = useWindowSize().windowSize;


return (
<div id="Gallery">
    <div id="gallery">
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/1.jpg")} />
            <a href="#lightbox-1"></a></div>
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/2.jpg")} />
            <a href="#lightbox-2"></a></div>
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/3.jpg")} />
            <a href="#lightbox-3"></a></div>
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/4.jpg")} />
            <a href="#lightbox-4"></a></div>
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/5.jpg")} />
            <a href="#lightbox-5"></a></div>
        <div data-aos="fade-down" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/6.jpg")} />
            <a href="#lightbox-6"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/7.jpg")} />
            <a href="#lightbox-7"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/8.jpg")} />
            <a href="#lightbox-8"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/9.jpg")} />
            <a href="#lightbox-9"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/10.jpg")} />
            <a href="#lightbox-10"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/11.jpg")} />
            <a href="#lightbox-11"></a></div>
        <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <img src={require("./Pictures/Gallery/12.jpg")} />
            <a href="#lightbox-12"></a></div>

    </div>
    <div class="lightbox" id="lightbox-1">
        <div class="content"><img src={require("./Pictures/Gallery/1.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-2">
        <div class="content"><img src={require("./Pictures/Gallery/2.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-3">
        <div class="content"><img src={require("./Pictures/Gallery/3.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-4">
        <div class="content"><img src={require("./Pictures/Gallery/4.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-5">
        <div class="content"><img src={require("./Pictures/Gallery/5.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-6">
        <div class="content"><img src={require("./Pictures/Gallery/6.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-7">
        <div class="content"><img src={require("./Pictures/Gallery/7.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-8">
        <div class="content"><img src={require("./Pictures/Gallery/8.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-9">
        <div class="content"><img src={require("./Pictures/Gallery/9.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-10">
        <div class="content"><img src={require("./Pictures/Gallery/10.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-11">
        <div class="content"><img src={require("./Pictures/Gallery/11.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>
    <div class="lightbox" id="lightbox-12">
        <div class="content"><img src={require("./Pictures/Gallery/12.jpg")} />
            <a class="close" href="#gallery"></a>
        </div>
    </div>

    {
    size.width > 1200 &&
    <Scroll className="ScrollGallery" />
    }
</div>

)
}

export default Gallery;
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import { Slider } from "./Slider";
import Describe from "./Describe";
import "../Styles/HomeStyles/Home.css"
import useWindowSize from "../ScreenResolution";
import Scroll from "../Scroll";




const Home = () => {

const size = useWindowSize();



return(
<div className="Home GridHome">
    <Describe />
    {
        size.windowSize.width > 1200 &&

    <Slider perPage={size.SliderSize} />
    }
    {size.windowSize.width > 1200 &&
    <Scroll />}
</div>
);
}


export default Home;
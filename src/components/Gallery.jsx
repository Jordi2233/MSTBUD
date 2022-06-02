import React from "react";
import "./Styles/Gallery.css"
import Scroll from "./Scroll";
import useWindowSize from "./ScreenResolution";


const Gallery = () => {

    const size = useWindowSize().windowSize;

    return (
<div id="Gallery">
<div id="gallery">
    <div><img src="https://picsum.photos/600/600/?image=512" /><a href="#lightbox-1"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=513" /><a href="#lightbox-2"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=514" /><a href="#lightbox-3"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=515" /><a href="#lightbox-4"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=516" /><a href="#lightbox-5"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=517" /><a href="#lightbox-6"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=518" /><a href="#lightbox-7"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=519" /><a href="#lightbox-8"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=520" /><a href="#lightbox-9"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=521" /><a href="#lightbox-10"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=522" /><a href="#lightbox-11"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=523" /><a href="#lightbox-12"></a></div>
    {/* <div><img src="https://picsum.photos/600/600/?image=524" /><a href="#lightbox-13"></a></div> */}
    {/* <div><img src="https://picsum.photos/600/600/?image=525" /><a href="#lightbox-14"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=526" /><a href="#lightbox-15"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=527" /><a href="#lightbox-16"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=528" /><a href="#lightbox-17"></a></div>
    <div><img src="https://picsum.photos/600/600/?image=529" /><a href="#lightbox-18"></a></div> */}
</div>
<div class="lightbox" id="lightbox-1">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=512" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-2">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=513" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-3">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=514" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-4">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=515" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-5">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=516" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-6">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=517" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-7">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=518" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-8">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=519" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-9">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=520" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-10">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=521" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-11">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=522" />
        <a class="close" href="#gallery"></a>
    </div>
</div>
<div class="lightbox" id="lightbox-12">
    <div class="content"><img src="https://picsum.photos/1920/1080/?image=523" />
        <a class="close" href="#gallery"></a>
    </div>
</div>

{
    size.width > 1200 &&
<Scroll className="ScrollGallery"/>
}
</div>
  
    )
}

export default Gallery;
import { useState, useEffect } from "react";

// Hook
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });
    const [SliderSize, setSliderSize] = useState("2.5");


    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== "undefined") {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                if(window.innerWidth > 1900) {
                    setSliderSize("2.5");
                } else if (window.innerWidth < 1900 && window.innerWidth > 1500) {
                    setSliderSize("2");
                } else if (window.innerWidth < 1500 && window.innerWidth > 1200){
                    setSliderSize("1.5")
                } else {
                    setSliderSize("2");
                }
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return {windowSize, SliderSize};
};

export default useWindowSize;
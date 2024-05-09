import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Caroussel() {


    return (
        <>
        <div className=""> 
        <Splide aria-label="My Favorite Images" options={{
                autoplay: true,
                type:"loop"
            }}>
                <SplideSlide>
                    <img className="h-96 w-full" src="https://res.cloudinary.com/dcgjop9dg/image/upload/v1714759822/maison-contemporaine_afkdiu.webp" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className="h-96 w-full" src="https://res.cloudinary.com/dcgjop9dg/image/upload/v1714760119/Exterior-2_l9epkf.jpg" alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img className="h-96 w-full" src="https://res.cloudinary.com/dcgjop9dg/image/upload/v1714760001/belle-maison-archi-LCL_ogp9ep.jpg" alt="Image 2" />
                </SplideSlide>
            </Splide>
            </div>
        </>
    )
    
}

export default Caroussel
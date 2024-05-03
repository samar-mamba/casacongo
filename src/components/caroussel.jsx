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
                    <img className="h-96 w-full" src="https://i.pinimg.com/originals/e2/64/54/e26454d954620f0802906b8beaa38519.jpg" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className="h-96 w-full" src="https://i.pinimg.com/564x/74/a1/ce/74a1ce39517604d4812123b25e256f0c.jpg" alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img className="h-96 w-full" src="https://i.pinimg.com/originals/60/e0/22/60e02263bdf3e15daa5a89905b84eda6.jpg" alt="Image 2" />
                </SplideSlide>
            </Splide>
            </div>
        </>
    )
    
}

export default Caroussel
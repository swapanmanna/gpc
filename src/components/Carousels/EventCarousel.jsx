import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventCarousel({images}){
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    return(
        <>
        <Slider {...settings}>
            {images.map((image, index) => {
                return (
                    <img 
                    src={image} 
                    key={index}
                    className="h-96 object-cover rounded-md"
                    ></img>
                )
            })}
        </Slider>
        </>
    )
}
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import banner2 from "./image/banner2.jpg"
import banner3 from "./image/banner3.jpg"
import banner1 from "./image/glasses.jpg"


export default class Banner extends Component{

    render (){
        const settings = {

            dots: true, 
            infinite: true,
            spedd: 500,
            slidesToShow: 1,
            slidesToScrow: 1
        };

    return(
        <>
        <Slider {...settings}>
        <div> <img className="w-1/2 block mx-auto mt-5" src={banner1} alt="Banner" /></div>
        <div><img src={banner2} className="w-1/2 block mx-auto mt-5" alt="Sunglass Banner" /></div>
        <div><img src={banner3} className="w-1/2 block mx-auto mt-5" alt="Sunglass Banner" /></div>

        </Slider>
        </>

    );
}
}

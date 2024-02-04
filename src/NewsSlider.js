import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewsCard3 from "./NewsCard3";

const data = require('./budd.json');
export default function NewsSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
        {/*    Create entries for everything in data, article and summary inside an a tag with the link*/}
            {data.Articles.map((item, index) => (
                <div>
                    <a href={item.link}>
                        <NewsCard3 headline={item.title} name="Budd" summary={item.summary}></NewsCard3>
                    </a>
                </div>
            ))}
        </Slider>
    );
}
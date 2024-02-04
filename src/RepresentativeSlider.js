import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewsCard2 from "./NewsCard2";


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
            <div>
                <a href="/representatives/budd">
                <NewsCard2 body="Senate" name="Ted Budd" imageSrc="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Ted-Budd.PNG"></NewsCard2>
                </a>
            </div>
            <div>
                <NewsCard2 body="Senate" name="Thom Tillis" imageSrc="https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Senator_Thom_Tillis_Official_Portrait.jpg"></NewsCard2>
            </div>
            <div>
                <NewsCard2 body="House" name="Alma Adams" imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Alma_Adams_official_portrait.jpg/440px-Alma_Adams_official_portrait.jpg"></NewsCard2>
            </div>
            <div>
                <NewsCard2 body="State House" name="John Bradford" imageSrc="https://www.ncleg.gov/Members/MemberImage/H/690/Low"></NewsCard2>
            </div>
            <div>
                <NewsCard2 body="State Senate" name="Natasha Marcus" imageSrc="https://www.ncleg.gov/Members/MemberImage/S/411/Low"></NewsCard2>
            </div>
            <div>
                <NewsCard2 body="Davidson Mayor" name="Rusty Knox" imageSrc="https://npr.brightspotcdn.com/dims4/default/9319562/2147483647/strip/true/crop/2080x2600+0+0/resize/880x1100!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5e%2Ffa%2Fb984dacd4b23a339dce1041cf5ae%2Frusty-knox.jpg"></NewsCard2>
            </div>
        </Slider>
    );
}
import React, { Component } from 'react';
import Slider from 'react-slick';

class ZingSlide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows:false,
            autoplay:true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const items=[
            {alt:'z-slide',src:'z-slide01.jpg'},
            {alt:'z-slide',src:'z-slide02.jpg'},
            {alt:'z-slide',src:'z-slide03.jpg'},
            {alt:'z-slide',src:'z-slide04.jpg'}
        ];
        return (
            <div className="zing-slide mg-top">
                <div className="container">
                    <Slider {...settings}>
                        {items.map((item,key)=> <img key={key} alt={item.alt} src={'img/'+item.src}/>)}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ZingSlide;
import React, { Component } from 'react';
import Slider from 'react-slick';

class ItemCategory extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows:true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        const items=[
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item01.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item02.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item03.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item04.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item05.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item02.jpg'},
            {title:'Nhạc trẻ hay nhất',author:'Sơn Tùng MTP',src:'item01.jpg'}
        ]
        return (
            <div className="items-category">
                <div className="row-items">
                <Slider {...settings}>
                    {
                        items.map((item,key)=>
                            <div key={key} className="item-category">
                                <div className="content card-190">
                                    <div className="img-content" style={{position:'relative'}}>
                                        <img alt="" src={'img/'+item.src}/>
                                        <div className="img-overlay">
                                            <span className="fa fa-play"></span>
                                        </div>
                                    </div>
                                    <p className="mb0">{item.title}</p>
                                    <p className="author-name">{item.author}</p>
                                </div>
                            </div>
                        )
                    }
                </Slider>
                </div>
            </div>
        );
    }
}

export default ItemCategory;
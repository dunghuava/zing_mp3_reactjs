import React, { Component } from 'react';
import ItemView from './ItemView';

class ListView extends Component {
    render() {
        const items=[
            {title:'Hơn cả yêu',author:'Đức phúc',img:'item01.jpg',time:'04:09',liked:false},
            {title:'Khóc cùng em',author:'Đức phúc',img:'item02.jpg',time:'04:12',liked:true},
            {title:'Sao em chưa về nhà',author:'Đức phúc',img:'item03.jpg',time:'04:00',liked:false},
            {title:'Tặng anh cho cô ấy',author:'Đức phúc',img:'item04.jpg',time:'03:50',liked:true},
            {title:'A đợi mình được mãi',author:'Đức phúc',img:'item05.jpg',time:'05:05',liked:false},
            {title:'Anh đợi mình được mãi',author:'Đức phúc',img:'item02.jpg',time:'05:10',liked:true},
            {title:'Yêu một người tổn thưng',author:'Đức phúc',img:'item01.jpg',time:'04:14',liked:false},
            {title:'Nắm',author:'Đức phúc',img:'item03.jpg',time:'04:00',liked:false},
            {title:'Phụ tình',author:'Đức phúc',img:'item03.jpg',time:'04:35',liked:false},
            {title:'Tình đẹp đến mẫy cũng tàn',author:'Đức phúc',img:'item01.jpg',time:'04:00',liked:false},
            {title:'Bánh mì không',author:'Đức phúc',img:'item04.jpg',time:'03:40',liked:true},
            {title:'Hai phút hơn',author:'Đức phúc',img:'item03.jpg',time:'03:40',liked:true},
            {title:'Lá xa lìa cành',author:'Đức phúc',img:'item02.jpg',time:'04:10',liked:false},
            {title:'Duyên trời lấy 2',author:'Đức phúc',img:'item01.jpg',time:'04:00',liked:true},
            {title:'Duyên mình lỡ',author:'Đức phúc',img:'item05.jpg',time:'04:00',liked:false},
            {title:'Cô đơn không muốn về nhà',author:'Đức phúc',img:'item04.jpg',time:'04:00',liked:true},
        ]
        return (
            <div className="list-view col-md-12">
                {
                    items.map((item,index)=> <ItemView key={index} rowIndex={index} data={item} />)
                }
            </div>
        );
    }
}

export default ListView;
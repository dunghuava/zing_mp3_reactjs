import React, { Component } from 'react';
import Categories from './Categories';

class ListCategories extends Component {
    render() {
        const items =[
            {name:'Gợi ý cho hôm nay'},
            {name:'Playlist nghe gần đây'},
            {name:'Mix riêng cho bạn'},
            {name:'Cho đêm ngon giấc'}
        ];
        return (
            <div>
                {
                    items.map((item,key)=> <Categories key={key} nameCategory={item.name}/>)
                }
            </div>
        );
    }
}

export default ListCategories;
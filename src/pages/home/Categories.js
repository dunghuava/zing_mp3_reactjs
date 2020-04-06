import React, { Component } from 'react';
import ItemCategory from './ItemCategory';

class Categories extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <br/>
                <h3 className="name-category">{this.props.nameCategory}</h3>
                <ItemCategory/>
            </div>
        );
    }
}

export default Categories;
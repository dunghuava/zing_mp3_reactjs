import React, { Component } from 'react';
import './style.css';
import ZingSlide from '../../components/ZingSlide';
import ListCategories from './ListCategories';
class HomePage extends Component {
    render() {
        return (
            <div>
                <ZingSlide/>
                <ListCategories/>
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import BannerHeading from '../BannerHeading/BannerHeading';
import './style.css';
import spotlight from '../../helpers/spotlight';

class Banner extends Component {

    componentDidMount() {
        spotlight();
    }
    
    render() {
        return (
            <div className="banner">
                <div id="banner-filter"></div>
                <BannerHeading />
            </div>
        );
    }
};

export default Banner;
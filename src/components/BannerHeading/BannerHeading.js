import React, { Component } from 'react';
import "./styles.css";

import rotateTitle from '../../helpers/rotateTitle';

class BannerHeading extends Component {

    componentDidMount() {
        rotateTitle();
    }

    render() {
        return (
            <div className="home-banner">
                <div className="inner"> 
                    <h2 className="banner-title visible">Web Developer</h2>
                    <h2 className="banner-title">Front End</h2>
                    <h2 className="banner-title">Back End</h2>
                    <h2 className="banner-title">Full Stack</h2>
                    <h2 className="banner-title">Web Developer.</h2>
                </div>
            </div>
        );
    }
}

export default BannerHeading;
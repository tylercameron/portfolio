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
                    <h2 className="banner-title visible">Web&nbsp;Developer</h2>
                    <h2 className="banner-title">Front&nbsp;End</h2>
                    <h2 className="banner-title">Back&nbsp;End</h2>
                    <h2 className="banner-title">Full&nbsp;Stack</h2>
                    <h2 className="banner-title">Web&nbsp;Developer.</h2>
                </div>
            </div>
        );
    }
}

export default BannerHeading;
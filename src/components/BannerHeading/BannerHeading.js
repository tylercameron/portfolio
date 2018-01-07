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
                {/*<p>
                    My name is Tyler Smith, I’m a full stack web developer as well as a former project manager and building automation technician with over 8 years experience seeing projects through to an end. I have a strong passion in new technology and solving problems. Combining these two passions has led me to a career in web development. I enjoy working as part of a team to solve problems that directly affect the real world across both the back and front end. I graduated from Bitmaker/General Assembly’s full-time Web Development 9 week immersive course in 2016. While studying I learned the basics of Ruby, Rails, HTML5, CSS3, Sass, Javascript, jQuery, PostgreSQL, SQLite, Git and Github. Working both individually and as part of a team I engineered fully functional apps. Take a look at what I’ve built as well as what I’m currently working on at my Github page. Prior to Bitmaker/General Assembly, I graduated a Bachelor of Arts, Majoring in Psychology at Brock University in 2009. As a naturally inquisitive person, I am always looking to learn something new. email me tcameronsmith@gmail.com
                </p>*/}
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
import React, { Component } from 'react';
import "./styles.css";

import add from '../../Assets/icons/add.svg';
import cog from "../../Assets/icons/cog.svg";
import heart from "../../Assets/icons/heart.svg";
import logo from "../../Assets/icons/logo.svg";
import logout from "../../Assets/icons/logout.svg";
import map from "../../Assets/icons/map.svg";
import pencil from "../../Assets/icons/pencil.svg";
import review from "../../Assets/icons/review.svg";
import store from "../../Assets/icons/store.svg";
import store2 from "../../Assets/icons/store2.svg";
import tag from "../../Assets/icons/tag.svg";
import top from "../../Assets/icons/top.svg";

function rotateTitle() {
    const titles = document.querySelectorAll('.banner-title');
    const titlesArray = [];
    titles.forEach(item => titlesArray.push(item));

    setInterval(function() {
        let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));
        
        if (activeIndex === titlesArray.length - 1) {
            titlesArray[activeIndex].classList.remove('visible');
            titlesArray[activeIndex].classList.add('hidden');

            titlesArray[0].classList.remove('hidden');
            titlesArray[0].classList.add('visible');
        } else {
            titlesArray[activeIndex].classList.remove('visible');
            titlesArray[activeIndex].classList.add('hidden');

            titlesArray[activeIndex + 1].classList.remove('hidden');
            titlesArray[activeIndex + 1].classList.add('visible');
        }
    }, 1200);
}

class BannerHeading extends Component {

    componentDidMount() {
        rotateTitle();
    }

    render() {
        return <div>
            <div className="home-banner">
                {/*<p>
                    My name is Tyler Smith, I’m a full stack web developer as well as a former project manager and building automation technician with over 8 years experience seeing projects through to an end. I have a strong passion in new technology and solving problems. Combining these two passions has led me to a career in web development. I enjoy working as part of a team to solve problems that directly affect the real world across both the back and front end. I graduated from Bitmaker/General Assembly’s full-time Web Development 9 week immersive course in 2016. While studying I learned the basics of Ruby, Rails, HTML5, CSS3, Sass, Javascript, jQuery, PostgreSQL, SQLite, Git and Github. Working both individually and as part of a team I engineered fully functional apps. Take a look at what I’ve built as well as what I’m currently working on at my Github page. Prior to Bitmaker/General Assembly, I graduated a Bachelor of Arts, Majoring in Psychology at Brock University in 2009. As a naturally inquisitive person, I am always looking to learn something new. email me tcameronsmith@gmail.com
                </p>*/}
                <div className="inner">
                        
                    <h2 className="banner-title visible" >Front End</h2>
                    <h2 className="banner-title hidden" >Back End</h2>
                    <h2 className="banner-title hidden" >Full Stack</h2>
                    <h2 className="banner-title hidden" >Web Developer</h2>
                    
                    <h2 className="title-test">Full Stack Web Developer</h2>
                    <p className="par">Fav's:::: Javascript <span>👌</span> <br />React <br />Node.js💪</p>
                    <img src={add} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={cog} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={heart} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={logout} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={map} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={pencil} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={review} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={store} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={store2} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={tag} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={top} alt="" style={{ width: "50px", height: "50px" }} />
                </div>
            </div>
        </div>;
    }
}

export default BannerHeading;
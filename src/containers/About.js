import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import aboutData from '../data/aboutData';
// import ScrollAnimation from 'react-animate-on-scroll';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './style.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            descriptionSlider: 5,
            description: aboutData[5].blurb
        }

        this.descriptionInput = this.descriptionInput.bind(this);
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleSetActive(to) {
        console.log('to', to);
        const activeView = document.getElementById(to);

        if (activeView.classList.contains('opac')) {
            activeView.classList.remove('opac');
        }

        const children = activeView.children;

        for (let i = 0; i < children.length; i++) {
            // const element = array[i];
            // console.log(children[i].children[1].children);
            const ratingsDiv = children[i].children[1].children[0];
            // console.log(ratingsDiv.classList);
            if (ratingsDiv.classList.contains('hidden')) {
                ratingsDiv.classList.remove('hidden');
            }
        }

    }

    descriptionInput(e) {
        this.setState({ 
            descriptionSlider: e.target.value, 
            description: aboutData[e.target.value].blurb 
        });
    }

    render() {
        const { descriptionSlider, description } = this.state;

        return (
            <div id="about">
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                    My Tech Stack
                </Link>
                <h2 className="about-header">About Me</h2>
                <h4 className="slider-title">How much do you want to know?</h4>
                <label htmlFor="description-length">Not much &nbsp;
                    <input type="range" id="description-length" min="0" value={descriptionSlider} max="10" onChange={this.descriptionInput} />
                    &nbsp; I want all the details!
                </label>
                <br/>
                <div className="descrip__container">
                    <p className="descrp">
                        {description}
                    </p>
                </div>
                <Element id="test1" className="tech-stack opac">
                    <div className="tech-stack__item">
                        <h3 className="stack-title">Javascript</h3>
                        <div className="stack-box"><div className="rating rating--js hidden"></div></div>
                        <h4 className="percent">80%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">React</h3>
                        <div className="stack-box"><div className="rating rating--react hidden"></div></div>
                        <h4 className="percent">70%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">Vue.js</h3>
                        <div className="stack-box"><div className="rating rating--vue hidden"></div></div>
                        <h4 className="percent">60%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">HTML</h3>
                        <div className="stack-box"><div className="rating rating--html hidden"></div></div>
                        <h4 className="percent">80%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">CSS</h3>
                        <div className="stack-box"><div className="rating rating--css hidden"></div></div>
                        <h4 className="percent">80%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">Ruby/Rails</h3>
                        <div className="stack-box"><div className="rating rating--ruby hidden"></div></div>
                        <h4 className="percent">60%</h4>
                    </div>
                    <div className="tech-stack__item">
                        <h3 className="stack-title">Node.js</h3>
                        <div className="stack-box"><div className="rating rating--node hidden"></div></div>
                        <h4 className="percent">70%</h4>
                    </div>
                </Element>
            </div>
        );
    }
}

export default About;
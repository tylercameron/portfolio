import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import { Element } from 'react-scroll'

import AboutDescription from '../AboutDescription';
import TechStack from '../TechStack';

import aboutData from '../../data/aboutData';
import './style.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            descriptionSlider: 5,
            description: aboutData[5].blurb
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
    };

    handleSliderChange(sliderPos, descrip) {
        this.setState({
            descriptionSlider: sliderPos,
            description: descrip
        });
    };

    render() {
        const { description, descriptionSlider } = this.state;
        
        return (
            <Element id="about" className="about">
                <BrowserRouter>
                    <div>
                        <h2 className="about-header">About Me</h2>
                        <nav className="subnav">
                            <li className="subnav__item"><Link to={`/`}>Description</Link></li>
                            <li className="subnav__item"><Link to={`/tech`}>Tech Stack</Link></li>
                        </nav>
                        <Route exact path="/" component={
                            () => (
                                <AboutDescription 
                                    description={description} 
                                    descriptionSlider={descriptionSlider} 
                                    onSliderChange={this.handleSliderChange}
                                />
                            )} />
                        <Route path="/tech" component={TechStack} />

                        
                    </div>
                </BrowserRouter>
            </Element>
        );
    }
};

export default About;
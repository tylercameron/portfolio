import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
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
                        <div className="about-header">
                            <h2 className="about-h2">About<br/>Tyler</h2>                            
                            <nav className="subnav">
                                <ul className="subnav__list">
                                    <li className="subnav__item"><NavLink to={`/`} exact activeClassName="active">Bio</NavLink></li>
                                    <li className="subnav__item"><NavLink to={`/tech`} exact activeClassName="active">Tech-Stack</NavLink></li>
                                    <li className="subnav__item"><NavLink to={`/tech`} exact activeClassName="active">Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="about__container">
                            <div className="about-content">
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
                        </div>
                    </div>
                </BrowserRouter>
            </Element>
        );
    }
};

export default About;
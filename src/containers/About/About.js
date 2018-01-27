import React, { Component } from 'react';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import { Element } from 'react-scroll'

import AboutDescription from '../AboutDescription/AboutDescription';
import TechStack from '../../components/TechStack/TechStack';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

import aboutData from '../../data/aboutData';
import './style.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            descriptionSlider: 5,
            description: aboutData[5].blurb,
            descriptionHasMounted: false
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleBioClick = this.handleBioClick.bind(this);
        this.handleComponentMount = this.handleComponentMount.bind(this);
    };

    handleSliderChange(sliderPos, descrip) {
        this.setState({
            descriptionSlider: sliderPos,
            description: descrip
        });
    };

    handleBioClick() {
        console.log('bio click');
    }

    handleComponentMount(bool) {
        console.log(bool);
        if (!this.state.descriptionHasMounted) {
            
            this.setState({ descriptionHasMounted: bool });
        }
    }

    render() {
        const { description, descriptionSlider, descriptionHasMounted } = this.state;
        
        return (
            <Element id="about" className="about">
                <BrowserRouter>
                    <div>
                        <h2 className="about-h2">About <span className="about-h2-span"><br /></span>Tyler</h2>                            
                        <div className="about-header">
                            <nav className="subnav">
                                <ul className="subnav__list">
                                    <li className="subnav__item"><NavLink to={`/`} exact activeClassName="active" onClick={this.handleBioClick} >Bio</NavLink></li>
                                    <li className="subnav__item"><NavLink to={`/tech`} exact activeClassName="active">Tech-Stack</NavLink></li>
                                    <li className="subnav__item"><NavLink to={`/contact`} exact activeClassName="active">Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>                        
                        <div className="about-content">
                            <Route exact path="/" component={
                                () => (
                                    <AboutDescription 
                                        description={description} 
                                        descriptionSlider={descriptionSlider} 
                                        onSliderChange={this.handleSliderChange}
                                        hasMounted={descriptionHasMounted}
                                        onComponentMount={this.handleComponentMount}
                                    />
                                )} />
                            <Route path="/tech" component={TechStack} />
                            <Route path="/contact" component={ContactInfo} />
                        </div>                        
                    </div>
                </BrowserRouter>
            </Element>
        );
    }
};

export default About;
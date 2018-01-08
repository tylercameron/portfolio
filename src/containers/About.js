import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import aboutData from '../data/aboutData';

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
                <h2>## TITLE</h2>
                <label htmlFor="description-length">I don't want to know much &nbsp;
                    <input type="range" id="description-length" min="0" value={descriptionSlider} max="10" onChange={this.descriptionInput} />
                    &nbsp; I want all the details!
                </label>
                <br/>
                <div className="descrip__container">
                    <p className="descrp">
                        {description}
                    </p>
                </div>
                <div className="tech-stack">
                    <h3 className="stack-title">Javascript</h3>
                    <div className="stack-box"><div className="js-rating"></div></div>
                </div>
            </div>
        );
    }
}

export default About;
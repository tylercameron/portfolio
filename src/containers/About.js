import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './style.css';

const aboutData = [
    { 
        blurb: "My name is Tyler.",
        key: 1,
        image: "" 
    },
    {
        blurb: "My name is Tyler. I am a Canadian web developer living in sunny Australia.",
        key: 2,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian born web developer. Currently I live on the East coast of beautiful, sunny Australia. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails.",
        key: 3,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian born web developer currently living on the East coast of beautiful, sunny Australia. I studied psychology to earn my Bachelor’s degree in 2009 but I’ve not used that degree since :). I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript.",
        key: 4,
        image: ""
    },
    {
        blurb: "My name is Tyler. I was born in Toronto, Canada. Currently, I live on the East coast of Australia where I spend my time building beautiful web apps. I studied psychology to earn my Bachelor’s degree in 2009 but I’ve not used that degree since :) .I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. At the moment, my tool of choice to build web apps is React.",
        key: 5,
        image: ""
    },
    {
        blurb: "My name is Tyler. I was born in Toronto, Canada. Currently, I live on the East coast of Australia where I make a living building beautiful web apps. I hold a Bachelor’s degree in psychology, but have not made use of that degree since graduating in 2009. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. At the moment, my tool of choice to build web apps is React. I quite like Vue.js too, but mostly React. To round out the stack I prefer to craft the backend with Node.js and Express.",
        key: 6,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian born web developer. I grew up living just outside of Toronto and have since lived in Vancouver, Canada. Currently, I live in beautiful, sunny Alstonville, NSW, Australia. I hold a Bachelor’s degree in psychology, but have not made use of that degree since graduating in 2009. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. At the moment, my tool of choice to build web apps is React. I quite like Vue.js too, but mostly React. To round out the stack I prefer to craft the backend with Node.js and Express.Keeping things in one language makes life a lot easier.",
        key: 7,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian born Web Developer. I grew up living just outside of Toronto and have since lived in Vancouver, Canada. Currently I live in beautiful, sunny Alstonville, NSW, Australia. I hold a Bachelor’s degree in psychology, but have not made use of that degree since graduating in 2009. I previously worked in the building automation industry for 7 + years trying to make buildings as energy efficient as possible. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. At the moment, my tool of choice to build web apps is React. I quite like Vue.js too, but mostly React. To round out the stack I prefer to craft the backend with Node.js and Express.Keeping things in one language makes life a lot easier.",
        key: 8,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian web developer born in Toronto, Canada. I grew up living just outside of Toronto and have since lived in Vancouver, Canada. Currently, I live in beautiful, sunny Alstonville, NSW, Australia. I hold a Bachelor’s degree in psychology, but have not made use of that degree since graduating in 2009. I previously worked in the building automation industry for 7 + years trying to make buildings as energy efficient as possible. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. As a front end dev I have made more than a few apps / websites built on CMS platforms like Wordpress, Statamic, and Craft  to name a few. At the moment, my tool of choice to build web apps is React. I quite like Vue.js too, but mostly React. To round out the stack I prefer to craft the backend with Node.js and Express.Keeping things in one language makes life a lot easier.",
        key: 9,
        image: ""
    },
    {
        blurb: "My name is Tyler. I’m a Canadian born Web Developer. I grew up living just outside of Toronto and have since lived in Vancouver, Canada. Currently, I live in beautiful, sunny Alstonville, NSW, Australia. Growing up I spent my free time playing hockey (real shocking for a Canadian…I know), snowboarding, skateboarding, biking, and basically anything else outdoors. I hold a Bachelor’s degree in psychology, but have not made use of that degree since graduating in 2009. I previously worked in the building automation industry for 7 + years trying to make buildings as energy efficient as possible. I’m lucky enough to have a beautiful wife and son. I’ve been Web Developing since 2015 after I was initially hooked coding in Ruby and mostly using Rails before immersing myself in the world of Javascript. As a front end dev I have made more than a few apps / websites built on CMS platforms like Wordpress, Statamic, and Craft to name a few. At the moment, my tool of choice to build web apps is React. I quite like Vue.js too, but mostly React. To round out the stack I prefer to craft the backend with Node.js and Express. Keeping things in one language makes life a lot easier.",
        key: 10,
        image: ""
    },
    { 
        blurb: "My name is Tyler Smith. I’m a Canadian web developer born in Toronto, Canada. I grew up living just outside Toronto and have since lived in Vancouver and Alstonville, NSW, Australia where I currently reside. Growing up I spent my free time playing hockey (real shocking for a Canadian, I know), snowboarding, skateboarding, biking, and basically anything else outdoors. I studied psychology for my Bachelor's degree but have not used it since :). I previously working in the building automation industry for 7 + years trying to make buildings as energy efficient as possible. I’m lucky enough to have a beautiful wife and son. I have been web developing since 2015. I was hooked in coding with Ruby using mostly Rails before immersing myself into the world of Javascript. Currently, I love building things using React. And Vue.js too, but mostly React. To round out the stack I prefer to craft the backend using Node.js and Express. Keeping things in one language makes life a lot easier! When not coding, I enjoy grabbing coffee and heading to the beach wife my wife and son. I love relaxing with just about any kind of puzzle. I also frequent tennis courts and golf courses to pass some time, and even occasionally a surf but only when I’m convinced there are no sharks around.. Finally, I love food! And Coffee!",
        key: 11,
        image: ""
    }
];

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
        this.setState({ descriptionSlider: e.target.value, description: aboutData[e.target.value].blurb });
    }

    render() {
        const { descriptionSlider } = this.state;

        return (
            <div>
                <h2>## TITLE</h2>
                <label htmlFor="description-length">Just a little &nbsp;
                    <input type="range" id="description-length" min="0" value={descriptionSlider} max="10" onChange={this.descriptionInput} />
                    &nbsp; Show me everything
                </label>
                <br/>
                <div className="descrip__container">
                    <p className="descrp">
                        {this.state.description}
                    </p>
                </div>
                
            </div>
        );
    }
}

export default About;
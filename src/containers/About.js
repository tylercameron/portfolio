import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Project from './Project';

const aboutData = [
    { 
        blurb: "",
        key: 1,
        image: "" 
    },
    {
        blurb: "",
        key: 2,
        image: ""
    },
    {
        blurb: "",
        key: 3,
        image: ""
    },
    {
        blurb: "",
        key: 4,
        image: ""
    },
    {
        blurb: "",
        key: 5,
        image: ""
    },
    {
        blurb: "",
        key: 6,
        image: ""
    },
    {
        blurb: "",
        key: 7,
        image: ""
    },
    {
        blurb: "",
        key: 8,
        image: ""
    },
    {
        blurb: "",
        key: 9,
        image: ""
    },
    {
        blurb: "",
        key: 10,
        image: ""
    },
    { 
        blurb: "Born in Toronto, Canada. Grew up playing hockey (obviously..), snowboarding, skateboarding, biking, basically anything outdoors. Love racing video games. Studied Psychology. Worked for 7 years in building automation industry. Moved to the beautiful, sunny Australia with my wife and son. Have been web developing since 2015. Started coding in Ruby and Rails, before emersing myself in the world of Javascript. As a front end dev I have made more than a few CMS sites in Wordpress, Statamic, Craft (to name a few). I love the React world! And Vue too. Too make the stack complete I prefer to craft the backend in Node.js / Express. Keeping it all in one language is the bees knees. When not coding, enjoy spending time with my wife and son, doing just about any kind of puzzle, hanging out at the beach, tennis, golf, and even occacsionally a surf (when I'm certain no sharkies are around). Oh and coffee is a daily staple.",
        key: 11,
        image: ""
    }
];

class About extends Component {
    constructor() {
        super();

        this.state = {
            descriptionSlider: 5
        }

        this.descriptionInput = this.descriptionInput.bind(this);
    }

    descriptionInput(e) {
        this.setState({ descriptionSlider: e.target.value });
    }

    render() {
        const { descriptionSlider } = this.state;

        return (
            <div>
                <h2>About PAge</h2>
                <label htmlFor="description-length">:::: </label>
                <input type="range" id="description-length" min="0" value={descriptionSlider} max="10" onChange={this.descriptionInput} />
                <ul>
                    <li><Link to="/about/project">Project</Link></li>
                </ul>

                <Route path='/about/project' component={Project} />
            </div>
        );
    }
}

export default About;
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

class BannerHeading extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            h2: ""
        }
    }

    componentDidMount() {

        const headings = [ "Front End", "Back End", "Full Stack", "Web Developer" ];

        let timer = 1500;
        
        if (this.state.loading) {
            // setTimeout(function () { this.setState({ h2: headings[0] }); }.bind(this), 1500);
            // this.setState({ h2: headings[0] });
            // headings.forEach(el => {
                
            //     setTimeout(() => {
            //         this.setState({ h2: headings[0] })
            //     }, timer);
            //     timer += 1500;
            // });
        }
    }

    render() {
        // const projects = this.state
        // let allProjects = null;

        // if (projects.length > 1) {
        //     allProjects = <Projects projects={projects} />
        // };

        // const headings = [ "Front End", "Back End", "Full Stack", "Web Developer" ];
        const headings = [ 
            { 
                title: "Front End",
                active: "true"
            }, 
            {
                title: "Back End",
                active: "false"
            },
            {
                title: "Full Stack",
                active: "false"
            },
            {
                title: "Web Developer",
                active: "false"
            }
        ];

        setInterval(function() {
            let activeIndex = headings.findIndex(x => x.active === "true")
            if (activeIndex === headings.length - 1) {
                headings[activeIndex].active = "false";
                headings[0].active = "true";
            } else {
                headings[activeIndex].active = "false";
                headings[activeIndex + 1].active = "true";
            }
        }, 1000);

        let currentHeading = headings.find(x => x.active === "true");
        console.log('current', currentHeading.title);
        // const titles = [
        //     <h3 className="title visible" key={ 1 }>Front End</h3>,
        //     <h3 className="title hidden" key={ 2 }>Back End</h3>,
        //     <h3 className="title hidden" key={ 3 }>Full Stack</h3>,
        //     <h3 className="title hidden" key={ 4 }>Web Developer</h3>,
        // ];

        let interval = 1000;
        let currentTitle = headings[0];
        for (let i = 0; i < headings.length; i++) {
            // const element = array[i];
            // currentTitle = headings[i]
            let tempTitle = ""
           
            // setTimeout(() => {
            //     // headings[i].props.style = {display: 'block'}
            //     console.log(headings[i]);
            //     tempTitle = headings[i];
            // }, interval);
            // console.log(tempTitle);
            console.log(currentTitle);
            interval += 1000;
        }

        // const h2 = headings.map((heading, i) => {
        //     return <p className="test">{heading}</p>;
        // });
        // let h2 = headings.forEach(element => {
        //     return <p className="test">{element}</p>;
        //     // setTimeout(() => {
        //     //     return element;
        //     // }, 1000);
        // });

        // const testing = setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);

        // let turtle = null;
        // turtle = setTimeout(function () {console.log('inside turl'); return "test valuess"; }, 2000);
        // console.log(turtle);
        // setTimeout(() => {console.log('inside turt'); return turtle = "somehtingsss"; }, 2000);

        return <div>
            <div className="home-banner">
                {/*<p>
                    My name is Tyler Smith, I’m a full stack web developer as well as a former project manager and building automation technician with over 8 years experience seeing projects through to an end. I have a strong passion in new technology and solving problems. Combining these two passions has led me to a career in web development. I enjoy working as part of a team to solve problems that directly affect the real world across both the back and front end. I graduated from Bitmaker/General Assembly’s full-time Web Development 9 week immersive course in 2016. While studying I learned the basics of Ruby, Rails, HTML5, CSS3, Sass, Javascript, jQuery, PostgreSQL, SQLite, Git and Github. Working both individually and as part of a team I engineered fully functional apps. Take a look at what I’ve built as well as what I’m currently working on at my Github page. Prior to Bitmaker/General Assembly, I graduated a Bachelor of Arts, Majoring in Psychology at Brock University in 2009. As a naturally inquisitive person, I am always looking to learn something new. email me tcameronsmith@gmail.com
                </p>*/}
                <div className="inner">
                    <h2 className="title visible">{currentHeading.title}</h2>
                    
                    <h2 className="title">Full Stack Web Developer</h2>
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
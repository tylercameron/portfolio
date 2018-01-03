import React, { PureComponent } from 'react';
import Projects from './Projects/Projects';
import projects from '../data/projects';
import Banner from '../components/Banner/Banner';

class Home extends PureComponent {
    constructor() {
        super();

        this.state = {
            projects
        }
    }

    // componentDidMount() {

    //     const projectsUrl = "http://local.site.com/wp-json/wp/v2/projects/?per_page=100"

    //     fetch(projectsUrl)
    //         .then(res => res.json())
    //         .then((json) => {
    //             this.setState({ projects: json })
    //         })
    // }

    render() {
        // const projects = this.state
        let allProjects = null;

        if (projects.length > 1) {
            allProjects = <Projects projects={projects} />
        };

        return <div>
            <Banner />
            {/* <h2>Home PAge</h2> */}
            {allProjects}
        </div>;
    }
}

export default Home;
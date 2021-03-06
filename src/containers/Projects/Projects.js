import React, { Component } from 'react';
import { Element } from 'react-scroll'
import './styles.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import Project from '../Project/Project';
import FilterTags from '../../components/FilterTags/FilterTags';

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedProj: "",
            filterTag: "all"
        }

        this.onLinkClick = this.onLinkClick.bind(this)
        this.onFilterTags = this.onFilterTags.bind(this)
    }

    onLinkClick(id) {
        let project = this.props.projects.find(element => {
            return id === element.id
        })
        this.setState({
            selectedProj: project
        })

        this.onCloseSelected = this.onCloseSelected.bind(this);
    }

    onCloseSelected() {
        this.setState({selectedProj: ""})
    }

    onFilterTags(tag) {
        this.setState({filterTag: tag})
    }

    render() {
        const projects = this.props
        const {selectedProj, filterTag} = this.state
        
        const projectThumbs = projects.projects.map((proj, index) => (
            <Thumbnail img={proj.feature_image.url} 
                title={proj.title}
                subhd={proj.subheading}
                key={proj.id}
                id={proj.id}
                index={index}
                selectedTag={proj.stack_tag.includes(filterTag) || filterTag === "all" ? true : false}
                onLinkClick={this.onLinkClick} />
        ));

        let project = null
        if (selectedProj !== "") {
            project = <Project project={this.state.selectedProj} onClose={this.onCloseSelected}/>
        }

        return (
            <Element className="projects" id="projects">
                <h1 className="proj-thmbs__title">PROJECTS</h1>
                <FilterTags selectedTag={filterTag} onTagClick={this.onFilterTags} />
                <div className="proj-thmbs">{projectThumbs}</div>
                {project}
            </Element>
        );
    }
}

export default Projects;

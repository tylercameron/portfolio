import React, { Component } from 'react';
import './style.css';
import Slider from '../Slider/Slider';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
            featImages: this.props.project.gallery
        }

        this.close = this.close.bind(this);
        this.closeHover = this.closeHover.bind(this);
        this.stopPropagation = this.stopPropagation.bind(this);
    }

    close() {
        console.log('project unmounted');
        this.setState({mounted: false})
        setTimeout(function() {this.props.onClose("")}.bind(this), 1000)
    }

    closeHover() {
        console.log(document.getElementById('close-circle').attributes.fill); 
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }

    render() {
        const { project } = this.props
        const { mounted, featImages } = this.state

        return (
            <div className={mounted ? "proj__bg mounted" : "proj__bg"} onClick={this.close}>
                <div className={mounted ? "proj__container mounted" : "proj__container"} onClick={this.stopPropagation} onTransitionEnd={this.transitionEnd}>    
                    <span className="proj__close" onClick={this.close} onMouseOver={this.closeHover} >
                        <svg width="40px" height="40px" viewBox="0 0 89 89" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <g id="close-fill" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="close">
                                    <path d="M72.629,15.984 C65.078,8.433 55.038,4.275 44.359,4.275 C33.68,4.275 23.641,8.433 16.089,15.984 C0.502,31.573 0.502,56.935 16.089,72.523 C23.64,80.074 33.68,84.233 44.359,84.233 C55.038,84.233 65.077,80.074 72.629,72.523 C88.216,56.936 88.216,31.573 72.629,15.984 Z M63.002,60.068 L60.174,62.896 L44.359,47.082 L28.545,62.896 L25.717,60.068 L41.531,44.254 L25.717,28.44 L28.545,25.612 L44.359,41.426 L60.174,25.611 L63.002,28.439 L47.187,44.254 L63.002,60.068 Z" id="shape"></path>
                                    <path d="M75.457,13.156 C67.15,4.85 56.106,0.275 44.359,0.275 C32.611,0.275 21.567,4.849 13.261,13.156 C-3.886,30.303 -3.886,58.205 13.261,75.351 C21.567,83.658 32.611,88.233 44.359,88.233 C56.106,88.233 67.15,83.658 75.457,75.351 C92.604,58.205 92.604,30.304 75.457,13.156 Z M72.629,72.523 C65.078,80.074 55.038,84.233 44.359,84.233 C33.68,84.233 23.641,80.074 16.089,72.523 C0.502,56.935 0.502,31.573 16.089,15.984 C23.64,8.433 33.68,4.275 44.359,4.275 C55.038,4.275 65.077,8.433 72.629,15.984 C88.216,31.573 88.216,56.936 72.629,72.523 Z" id="close-circle" fillRule="nonzero"></path>
                                    <polygon id="close-x" fillRule="nonzero" points="60.174 25.611 44.359 41.426 28.545 25.612 25.717 28.44 41.531 44.254 25.717 60.068 28.545 62.896 44.359 47.082 60.174 62.896 63.002 60.068 47.187 44.254 63.002 28.439"></polygon>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <Slider images={featImages} />
                    <h2 className="proj__title">{project.page_title}</h2>
                    <h3 className="proj__subhd">{project.page_subheading}</h3>
                    <p className="proj__desc">{project.page_description}</p>
                    <a href={project.site_url} className="proj__link">
                        <button className="proj__btn">View Website</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Project;
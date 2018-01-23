import React, { Component } from 'react';
import aboutData from '../../data/aboutData';

import './styles.css';

class AboutDescription extends Component {
    constructor(props) {
        super();

        this.state = {
            descriptionSlider: props.descriptionSlider,
            description: props.description
        }

        this.descriptionInput = this.descriptionInput.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleTouch = this.handleTouch.bind(this);
    }

    componentDidMount() {
        // this.setActive();
        this.props.onComponentMount(true);
    }

    // componentWillUnmount() {
    //     this.removeActive();
    // }

    setActive() {
        const activeView = document.getElementById('about-descrip');
        console.log(activeView);

        setTimeout(() => {
            if (activeView.classList.contains('trans')) {
                activeView.classList.remove('trans');
                console.log(activeView.classList);
            }
            // const children = activeView.children;

            // for (let i = 0; i < children.length; i++) {
            //     const ratingsDiv = children[i].children[1].children[0];
            //     if (ratingsDiv.classList.contains('hidden')) {
            //         ratingsDiv.classList.remove('hidden');
            //     }
            // }
        }, 10);

    }

    // removeActive() {
    //     const activeView = document.getElementById('about-descrip');

    //     if (!activeView.classList.contains('trans')) {
    //         activeView.classList.add('trans');
    //     }

    //     // const children = activeView.children;

    //     // for (let i = 0; i < children.length; i++) {
    //     //     const ratingsDiv = children[i].children[1].children[0];

    //     //     if (!ratingsDiv.classList.contains('hidden')) {
    //     //         ratingsDiv.classList.add('hidden');
    //     //     }
    //     // }
    // }

    descriptionInput(e) {
        this.setState({
            descriptionSlider: e.target.value,
            description: aboutData[e.target.value].blurb
        });
    }

    handleDrag(e) {
        this.props.onSliderChange(this.state.descriptionSlider, this.state.description);
    }

    handleTouch(e) {
        this.props.onSliderChange(this.state.descriptionSlider, this.state.description);
    }

    render() {
        const { descriptionSlider, description } = this.state;
        const { hasMounted } = this.props;

        const bg = {
            background: `linear-gradient(to right, rgb(117, 174, 240) 0%, rgb(115, 166, 254) ${descriptionSlider * 10}%, rgb(189, 189, 189) ${descriptionSlider * 10}%)`
        };

        return (
            <div id="about-descrip" className={hasMounted ? "description-container" : "description-container trans"}>
                <h4 className="slider-title">How much do you want to know?</h4>
                <label htmlFor="description-length" className="label"><span className="label--before">Not much</span> &nbsp;
                        <input style={bg} type="range" id="description-length" min="0" value={descriptionSlider} max="10" onMouseUp={this.handleDrag} onTouchEnd={this.handleTouch} onChange={this.descriptionInput} />
                    &nbsp; <span className="label--after">All the details!</span>
                </label>
                <br />
                <div className="descrip__container">
                    <p className="descrp">
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutDescription;
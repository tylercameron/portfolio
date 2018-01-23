import React, { Component } from 'react';
import './style.css';

class TechStack extends Component {
    componentDidMount() {
        this.setActive();
    }

    componentWillUnmount() {
        this.removeActive();
    }

    setActive() {
        const activeView = document.getElementById('tech-stack');

        setTimeout(() => {
            if (activeView.classList.contains('opac')) {
                activeView.classList.remove('opac');
            }
            const children = activeView.children;
    
            for (let i = 0; i < children.length; i++) {
                const ratingsDiv = children[i].children[1].children[0];
                if (ratingsDiv.classList.contains('hidden')) {
                    ratingsDiv.classList.remove('hidden');
                }
            }
        }, 10);

    }

    removeActive() {
        const activeView = document.getElementById('tech-stack');

        if (!activeView.classList.contains('opac')) {
            activeView.classList.add('opac');
        }

        const children = activeView.children;

        for (let i = 0; i < children.length; i++) {
            const ratingsDiv = children[i].children[1].children[0];
            
            if (!ratingsDiv.classList.contains('hidden')) {
                ratingsDiv.classList.add('hidden');
            }
        }
    }

    render() {
        return (
            <div id="tech-stack" className="tech-stack opac">
                <div className="tech-stack__item">
                    <h3 className="stack-title">Javascript</h3>
                    <div className="stack-box"><div className="rating rating--js hidden"></div></div>
                    <h4 className="percent">80%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">React</h3>
                    <div className="stack-box"><div className="rating rating--react hidden"></div></div>
                    <h4 className="percent">70%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">Vue.js</h3>
                    <div className="stack-box"><div className="rating rating--vue hidden"></div></div>
                    <h4 className="percent">60%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">HTML</h3>
                    <div className="stack-box"><div className="rating rating--html hidden"></div></div>
                    <h4 className="percent">80%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">CSS</h3>
                    <div className="stack-box"><div className="rating rating--css hidden"></div></div>
                    <h4 className="percent">80%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">Ruby/Rails</h3>
                    <div className="stack-box"><div className="rating rating--ruby hidden"></div></div>
                    <h4 className="percent">60%</h4>
                </div>
                <div className="tech-stack__item">
                    <h3 className="stack-title">Node.js</h3>
                    <div className="stack-box"><div className="rating rating--node hidden"></div></div>
                    <h4 className="percent">70%</h4>
                </div>
            </div>
        );
    }
}

export default TechStack;
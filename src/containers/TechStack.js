import React, { Component } from 'react';

class TechStack extends Component {
    // componentDidMount() {

    //     Events.scrollEvent.register('begin', function (to, element) {
    //         console.log("begin", arguments);
    //     });

    //     Events.scrollEvent.register('end', function (to, element) {
    //         console.log("end", arguments);
    //     });

    //     scrollSpy.update();

    // }
    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    // }

    // handleSetActive(to) {
    //     console.log('to', to);
    //     const activeView = document.getElementById(to);

    //     if (activeView.classList.contains('opac')) {
    //         activeView.classList.remove('opac');
    //     }

    //     const children = activeView.children;

    //     for (let i = 0; i < children.length; i++) {
    //         // const element = array[i];
    //         // console.log(children[i].children[1].children);
    //         const ratingsDiv = children[i].children[1].children[0];
    //         // console.log(ratingsDiv.classList);
    //         if (ratingsDiv.classList.contains('hidden')) {
    //             ratingsDiv.classList.remove('hidden');
    //         }
    //     }

    // }

    render() {
        return (
            <div id="test1" className="tech-stack">
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
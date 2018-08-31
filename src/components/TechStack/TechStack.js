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
    
            // for (let i = 0; i < children.length; i++) {
            //     const ratingsDiv = children[i].children[1].children[0];
            //     if (ratingsDiv.classList.contains('hidden')) {
            //         ratingsDiv.classList.remove('hidden');
            //     }
            // }
        }, 10);

    }

    removeActive() {
        const activeView = document.getElementById('tech-stack');

        if (!activeView.classList.contains('opac')) {
            activeView.classList.add('opac');
        }

        const children = activeView.children;

        // for (let i = 0; i < children.length; i++) {
        //     const ratingsDiv = children[i].children[1].children[0];
            
        //     if (!ratingsDiv.classList.contains('hidden')) {
        //         ratingsDiv.classList.add('hidden');
        //     }
        // }
    }

    render() {
        return (
            <div id="tech-stack" className="tech-stack opac">
                <h3 className="skill skill--1">Javascript</h3>
                <h3 className="skill skill--2">HTML</h3>
                <h3 className="skill skill--3">CSS</h3>
                <h3 className="skill skill--4">Git</h3>

                <h4 className="skill skill--5">React.js</h4>
                <h4 className="skill skill--6">Node.js</h4>
                <h4 className="skill skill--7">Express.js</h4>
                <h4 className="skill skill--8">JQuery</h4>
                <h4 className="skill skill--9">Github</h4>
                <h4 className="skill skill--10">Bitbucket</h4>
                <h4 className="skill skill--11">Craft CMS</h4>
                <h4 className="skill skill--12">Vue.js</h4>
                <h4 className="skill skill--13">MySQL</h4>
                <h4 className="skill skill--14">Ruby on Rails</h4>
                <h4 className="skill skill--15">Sass</h4>
                <h4 className="skill skill--16">Statamic CMS</h4>
                <h4 className="skill skill--17">Mongo DB</h4>
                
                <h5 className="skill skill--18">Gulp</h5>
                <h5 className="skill skill--19">PostgreSQL</h5>
                <h5 className="skill skill--20">Webpack</h5>
                <h5 className="skill skill--21">Gatsby.js</h5>
                <h5 className="skill skill--22">Sketch</h5>
                <h5 className="skill skill--23">Next.js</h5>
                <h5 className="skill skill--24">Grunt</h5>
                <h5 className="skill skill--25">Redux</h5>
                <h5 className="skill skill--26">Wordpress</h5>
                <h5 className="skill skill--27">Photoshop</h5>                
            </div>
        );
    }
}

export default TechStack;
import React, { Component } from 'react';
import './style.css';

class TechStack extends Component {
    componentDidMount() {
        this.setActive();
    }

    componentWillUnmount() {
        // this.removeActive();
    }

    setActive() {
        const preAnimate = Array.from(document.querySelectorAll('.skill'));

        preAnimate.map(item => {
            
            if (item.classList.contains('opac')) {                
                setTimeout(() => {                    
                    return item.classList.remove('opac');
                }, 100);
            }
            return null;
        });
    }

    render() {
        return (
            <div id="tech-stack" className="tech-stack">
                <h3 className="skill--1 skill opac">Javascript</h3>
                <h3 className="skill--2 skill opac">HTML</h3>
                <h3 className="skill--3 skill opac">CSS</h3>
                <h3 className="skill--4 skill opac">Git</h3>

                <h4 className="skill--5 skill opac">React.js</h4>
                <h4 className="skill--6 skill opac">Node.js</h4>
                <h4 className="skill--7 skill opac">Express.js</h4>
                <h4 className="skill--8 skill opac">JQuery</h4>
                <h4 className="skill--9 skill opac">Github</h4>
                <h4 className="skill--10 skill opac">Bitbucket</h4>
                <h4 className="skill--11 skill opac">Craft CMS</h4>
                <h4 className="skill--12 skill opac">Vue.js</h4>
                <h4 className="skill--13 skill opac">MySQL</h4>
                <h4 className="skill--14 skill opac">Ruby on Rails</h4>
                <h4 className="skill--15 skill opac">Sass</h4>
                <h4 className="skill--16 skill opac">Statamic CMS</h4>
                <h4 className="skill--17 skill opac">Mongo DB</h4>
                
                <h5 className="skill--18 skill opac">Gulp</h5>
                <h5 className="skill--19 skill opac">PostgreSQL</h5>
                <h5 className="skill--20 skill opac">Webpack</h5>
                <h5 className="skill--21 skill opac">Gatsby.js</h5>
                <h5 className="skill--22 skill opac">Sketch</h5>
                <h5 className="skill--23 skill opac">Next.js</h5>
                <h5 className="skill--24 skill opac">Grunt</h5>
                <h5 className="skill--25 skill opac">Redux</h5>
                <h5 className="skill--26 skill opac">Wordpress</h5>
                <h5 className="skill--27 skill opac">Photoshop</h5>                
            </div>
        );
    }
}

export default TechStack;
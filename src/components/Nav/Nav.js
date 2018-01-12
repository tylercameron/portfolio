import React from 'react';
import { Link } from 'react-scroll'
import './style.css';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
import React from 'react';
import { Link } from 'react-scroll'
import './style.css';

// $('#menu-toggle').click(function(){
// $(this).toggleClass('open');

// }) 
function menuToggle(e) {
    document.querySelector('#menu-toggle').classList.toggle('open');
    document.querySelector('.nav-list').classList.toggle('show');
};

const Nav = () => {
    // const menuToggle = (e) => {
    //     // console.log(e);
    //     document.querySelector('#menu-toggle').classList.toggle('open');
    //     // this.toggleClass('open');
    //     console.log(document.querySelector('#menu-toggle').classList);
    // }
    return (
        <nav>
            <div id="menu-toggle" onClick={menuToggle}>
                <div id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="cross">
                    <span></span>
                    <span></span>
                </div>
            </div>
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
import React from 'react';
// import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import './style.css';

const Logo = (props) => {
    const { title } = props
    return (
        <h1 className="nav-title">
            &#123;&nbsp;
            
                <Typist className="nav-span" cursor={{ show: true, hideWhenDone: true, blink: true, element: '|', hideWhenDoneDelay: 2000 }} avgTypingDelay={250} startDelay={1200} >
                    {title}
                </Typist>
            
            &nbsp;&#125;
        </h1>
    )
}

export default Logo;
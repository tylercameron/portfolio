import React from 'react';
import './style.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className="header">
            <Logo title="Tyler Smith" />
            <Nav />
        </header>
    )
}

export default Header;
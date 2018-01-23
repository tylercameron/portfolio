import React from 'react';
import './styles.css';

const ContactInfo = () => (
    <div className="contact-container">
        <h2 className="contact-title">How to contact me.</h2>
        <p className="contact-blurb">Check out projects I'm working on now on my <a href="https://github.com/tylercameron" className="contact-link">Github page <i className="fab fa-github"></i></a></p>
        <p className="contact-blurb">So many ways to get in touch these days.</p>
        <ul className="contact-list">
            <li className="contact-item"><i className="fas fa-envelope"></i> &nbsp; tcameronsmith@gmail.com</li>
            <li className="contact-item"><a href="" className="contact-link--social"><i className="fab fa-linkedin"></i> &nbsp; LinkedIn</a></li>
            <li className="contact-item"><a href="" className="contact-link--social"><i className="fab fa-twitter-square"></i> &nbsp; Twitter</a></li>
        </ul>
    </div>
);

export default ContactInfo;
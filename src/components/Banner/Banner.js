import React, { Component } from 'react';
import BannerHeading from '../BannerHeading/BannerHeading';
import './style.css';
import spotlight from '../../helpers/spotlight';

// import add from '../../Assets/icons/add.svg';
// import cog from "../../Assets/icons/cog.svg";
// import heart from "../../Assets/icons/heart.svg";
// import logo from "../../Assets/icons/logo.svg";
// import logout from "../../Assets/icons/logout.svg";
// import map from "../../Assets/icons/map.svg";
// import pencil from "../../Assets/icons/pencil.svg";
// import review from "../../Assets/icons/review.svg";
// import store from "../../Assets/icons/store.svg";
// import store2 from "../../Assets/icons/store2.svg";
// import tag from "../../Assets/icons/tag.svg";
// import top from "../../Assets/icons/top.svg";

class Banner extends Component {

    componentDidMount() {
        spotlight();
    }
    
    render() {
        return (
            <div className="banner">
                <div id="banner-filter"></div>
                <BannerHeading />

                {/*<div>
                    <h2 className="title-test">Full Stack Web Developer</h2>
                    <p className="par">Fav's:::: Javascript <span>👌</span> <br />React <br />Node.js💪</p>
                    <img src={add} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={cog} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={heart} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={logout} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={map} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={pencil} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={review} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={store} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={store2} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={tag} alt="" style={{ width: "50px", height: "50px" }} />
                    <img src={top} alt="" style={{ width: "50px", height: "50px" }} />
                </div>*/}
            </div>
        );
    }
};

export default Banner;
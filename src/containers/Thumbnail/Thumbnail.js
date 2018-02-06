import React, { PureComponent } from 'react';
import './style.css';
// import squaresMenu from '../../Assets/icons/squares-menu.svg';

class Thumbnail extends PureComponent {
    constructor() {
        super();
        this.state = {
            hovered: false
        }

        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onHoverOver() {
        this.setState({ hovered: true })
    }

    onHoverOut() {
        this.setState({ hovered: false })
    }

    onLinkClick(e) {
        e.preventDefault()
        this.props.onLinkClick(this.props.id)
    }

    render() {
        const { img, title, subhd, selectedTag } = this.props
        const { hovered } = this.state

        const bgImage = require(`../../Assets/img/projects/${img}`);
        const bg = {
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }        

        const containerClassList = [`thumb__container`]
        const titlesClassList = ['thumb__titles']
        const linkClassList = ['thumb__link__container']

        if (!selectedTag) {
            containerClassList.push("hidden")
            titlesClassList.push("hidden")
            linkClassList.push("hidden")
        } 

        if (hovered && selectedTag) {
            containerClassList.push("hovered")
            titlesClassList.push("hovered")
            linkClassList.push("hovered")
        }

        return <div className={containerClassList.join(" ")} style={bg} onMouseEnter={this.onHoverOver} onMouseOver={this.onHoverOver} onMouseLeave={this.onHoverOut} onClick={this.onHoverOver}>
            {/*<div className="thumb__menu-icon"><img src={squaresMenu} alt="" className="thumb__icon"/></div>*/}
            <div className={titlesClassList.join(" ")}>
              <h2 className="thumb__h2">{title}</h2>
              <h3 className="thumb__h3">{subhd}</h3>
            </div>
            <div className={linkClassList.join(" ")}>
              <a href="" className="thumb__link" onClick={this.onLinkClick}>
                Learn&nbsp;More
              </a>
            </div>
          </div>;
    }
}

export default Thumbnail;
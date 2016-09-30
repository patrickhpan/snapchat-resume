import React from 'react';

import Ghost from '../img/ghost.svg';
import Snapcode from '../img/snapcode.png';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    onMouseOver() {
        this.setState({
            hover: true
        })
    }
    onMouseOut() {
        this.setState({
            hover: false
        })
    }
    render() {
        let onClick = () => {
            this.props.setLanding(false)
        };
        let onMouseOver = this.onMouseOver.bind(this)
        let onMouseOut = this.onMouseOut.bind(this)

        let centerImage = this.state.hover ?
            Snapcode :
            Ghost;
        let centerImageClass = this.state.hover ?
            "larger" :
            "";

        return <div id="Landing"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <div id="landing-logo-container">
                <img src={centerImage} className={centerImageClass} alt=""/>
            </div>
            <div id="landing-name" onClick={onClick}>Patrick Pan</div>
            <div id="landing-enter" onClick={onClick}>View my Resume</div>
        </div>        
    }
}

export default Landing;
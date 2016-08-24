import React from 'react';

import Ghost from '../img/ghost.svg';

class Landing extends React.Component {
    render() {
        let onClick = () => {
            this.props.setLanding(false)
        };

        return <div id="Landing">
            <div id="landing-logo-container">
                <img src={Ghost} alt=""/>
            </div>
            <div id="landing-name" onClick={onClick}>Patrick Pan</div>
            <div id="landing-enter" onClick={onClick}>View my Resume</div>
        </div>        
    }
}

export default Landing;
import React from 'react';

import Ghost from '../img/ghost.svg';

class Landing extends React.Component {
    render() {
        return <div id="Landing">
            <div id="landing-group">
                <img src={Ghost} alt=""/>
                <h1>Patrick Pan</h1>
            </div>
            <div id="landing-enter">
                <button
                    onClick={this.props.enter}
                >View my Resume</button></div>
        </div>        
    }
}

export default Landing;
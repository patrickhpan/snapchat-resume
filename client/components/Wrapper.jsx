import React from 'react';

import Landing from './Landing';
import StoryList from './StoryList';

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            showLanding: true 
        }
    }
    setLanding(value = false) {
        this.setState({
            showLanding: value
        })
    }
    render() {
        let setLanding = this.setLanding.bind(this);

        let landing = this.state.showLanding ?
            <Landing setLanding={setLanding} /> :
            null;
        let className = this.props.expanded ? 
            "expanded" : 
            "";

        return <div 
            id="Wrapper" 
            className={className}
        >
            {landing}
            
            <div id="story-list-gradient-container">
                <div id="story-list-gradient" />
            </div>
            <StoryList 
                setLanding={setLanding}
            />
        </div>
    }
}

export default Wrapper;
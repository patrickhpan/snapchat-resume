import React from 'react';

import Landing from './Landing';
import StoryList from './StoryList';

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            showLanding: false // CHANGE
        }
    }
    setLanding(value = false) {
        this.setState({
            showLanding: value
        })
    }
    render() {
        let setLanding = this.setLanding.bind(this);

        let children = this.state.showLanding ?
            <Landing setLanding={setLanding} /> :
            <StoryList 
                setLanding={setLanding}
            />;

        let className = this.props.expanded ? 
            "expanded" : 
            "";

        return <div 
            id="Wrapper" 
            className={className}
        >
            {children}
        </div>
    }
}

export default Wrapper;
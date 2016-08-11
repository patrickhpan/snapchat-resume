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
    enter() {
        this.setState({
            showLanding: false
        })
    }
    render() {
        let enter = this.enter.bind(this);

        let children = this.state.showLanding ?
            <Landing enter = {enter} /> :
            <StoryList />;

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
import React from 'react';

import resolveStory from '../js/resolveStory';

class Story extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        let thumb = resolveStory(this.props.title);
        return <div className="Story">
            <img src={thumb} alt=""/>
            <div className="story-info">
                <h3>{this.props.title}</h3>
                <h4>{this.props.date}</h4>
            </div> 
        </div>
    }
}

export default Story;
import React from 'react';

import resolveStory from '../js/resolveStory';

class FeaturedStory extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        let thumb = resolveStory(this.props.title);
        return <div className="FeaturedStory">
            <img src={thumb} alt=""/>
        </div>
    }
}

export default FeaturedStory;
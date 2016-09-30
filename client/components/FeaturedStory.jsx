import React from 'react';

import WebPlayer from './WebPlayer';

import resolveStory from '../js/resolveStory';

class FeaturedStory extends React.Component {
    constructor() {
        super();
    }
    render() {
        let thumb = resolveStory(this.props.title);
        let url = this.props.media.url;
        let generateOnClick = url => (() => { 
            window.open(url);
        })
        return <div 
            className="FeaturedStory"
            onClick={generateOnClick(url)}
        >
            <img src={thumb} alt=""/>
        </div>
    }
}

export default FeaturedStory;
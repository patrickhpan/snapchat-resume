import React from 'react';

import FeaturedStory from './FeaturedStory';

import resolveStory from '../js/resolveStory';
import keyify from '../js/keyify';

class FeaturedStorySection extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    renderFeaturedStories(data) {
        return data.map(story => {
            return <FeaturedStory 
                title={story.title}
                media={story.media}
            />
        });
    }
    render() {
        let featuredStories = this.props.content; 
        let renderFeaturedStories = this.renderFeaturedStories.bind(this);
        let children = keyify(renderFeaturedStories(featuredStories))
        return <div className="FeaturedStorySection">
            <div className="featured-story-section-container">
                {children}
            </div>
        </div>
    }
}

export default FeaturedStorySection;
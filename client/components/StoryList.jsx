import React from 'react';
import Swipeable from 'react-swipeable';

import StoryHeader from './StoryHeader';
import StorySection from './StorySection';
import FeaturedStorySection from './FeaturedStorySection';

import MyStory from '../json/mystory.json'
import FeaturedStories from '../json/featured.json'
import Stories from '../json/stories.json'

import keyify from '../js/keyify';

class StoryList extends React.Component {
    renderStoryLists(stories) {
        return stories.map(story => <StorySection 
            content={story}
        />);
    }
    render() {
        let stories = keyify(this.renderStoryLists(Stories));
        let showLanding=() => {
            this.props.setLanding(true)
        };
        return <div 
            id="StoryList"
        >   
            <div id="story-header-container">
                <StoryHeader 
                    showLanding={showLanding}
                />
            </div>
            <div id="story-section-container">
                <StorySection 
                    content={MyStory}
                />
                <FeaturedStorySection
                    content={FeaturedStories}
                />
                {stories}
                <div id="story-section-footer" />
            </div>
            
        </div>
    }
}

export default StoryList;
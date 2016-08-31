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
        return <Swipeable
            onSwipedRight={showLanding} 
            id="StoryList"
        >
            <StoryHeader 
                showLanding={showLanding}
            />
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
            <div id="story-list-gradient-container">
                <div id="story-list-gradient" />
            </div>
        </Swipeable>
    }
}

export default StoryList;
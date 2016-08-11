import React from 'react';

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
        return <div id="StoryList">
            <StoryHeader />
            <div id="story-section-container">
                <StorySection 
                    content={MyStory}
                />
                <FeaturedStorySection
                    content={FeaturedStories}
                />
                {stories}
            </div>
        </div>
    }
}

export default StoryList;
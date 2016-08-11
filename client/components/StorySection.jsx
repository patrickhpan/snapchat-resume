import React from 'react';

import StorySectionHeader from './StorySectionHeader';
import Story from './Story';

import keyify from '../js/keyify';

class StorySection extends React.Component {
    renderStories(data) {
        let title = this.props.content.title;

        return data.map(story => {
            return <Story
                title={story.title}
                date={story.date}
            />
        });
    }

    render() {
        let headerText = this.props.content.title;
        let stories = this.props.content.stories;
        let renderStories = this.renderStories.bind(this);
        let children = keyify(renderStories(stories));

        return <div className="StorySection">
            <StorySectionHeader 
                text={headerText}
            />
            {children}
        </div>
    }
}

export default StorySection;
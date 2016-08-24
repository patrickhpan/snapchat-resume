import React from 'react';

import Player from './Player';

import resolveStory from '../js/resolveStory';

class Story extends React.Component {
    constructor() {
        super();
        this.state = {
            playing: false
        }
    }
    openPlayer() {
        this.setState({
            playing: true
        })
    }
    closePlayer() {
        this.setState({
            playing: false
        });
    }
    render() {
        let title = this.props.title;
        let thumb = resolveStory(title);
        let thumbStyle = {
            backgroundImage: `url(${thumb})`
        };
        let date = this.props.date;
        let content = this.props.content.map(filename => resolveStory(title, filename));

        let openPlayer = this.openPlayer.bind(this);
        let closePlayer = this.closePlayer.bind(this);

        return <div className="Story">
            <div className="story-info-container"
                onClick={openPlayer}
            >
                <div 
                    className="thumbnail"
                    style={thumbStyle}
                />
                <div className="story-info">
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                </div> 
            </div>
            
            {
                this.state.playing ?
                <Player
                    content={content}
                    closePlayer={closePlayer}
                /> :
                null
            }
        </div>
    }
}

export default Story;
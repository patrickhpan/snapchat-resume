import React from 'react';

import Player from './Player';
import PieChart from './PieChart';

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
        let percent = this.props.percent;
        let content = this.props.content.map(filename => resolveStory(title, filename));
        let timings = this.props.timings;

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
                    <div className="story-title">{title}</div>
                    <div className="story-date">
                        <PieChart percent={percent}/>
                        <span>{date}</span>
                    </div>
                </div> 
            </div>
            
            {
                this.state.playing ?
                <Player
                    title={title}
                    content={content}
                    closePlayer={closePlayer}
                    timings={timings}
                /> :
                null
            }
        </div>
    }
}

export default Story;
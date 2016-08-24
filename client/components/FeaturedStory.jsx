import React from 'react';

import WebPlayer from './WebPlayer';

import resolveStory from '../js/resolveStory';

class FeaturedStory extends React.Component {
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
    renderPlayer(media) {
        console.log(media)
        if(media.type === 'web') {
            return <WebPlayer 
                url={media.url}
            />
        }
    }
    render() {
        let thumb = resolveStory(this.props.title);
        let media = this.props.media;
        let player = this.renderPlayer(media)
        let openPlayer = this.openPlayer.bind(this)
        return <div 
            className="FeaturedStory"
            onClick={openPlayer}
        >
            <img src={thumb} alt=""/>
            {
                this.state.playing ?
                    player :
                    null
            }
        </div>
    }
}

export default FeaturedStory;
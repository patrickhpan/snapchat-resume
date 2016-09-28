import React from 'react';
import Swipeable from 'react-swipeable';

import PlayerInfo from './PlayerInfo'

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    advance() {
        let length = this.props.content.length;
        if(length === this.state.index) {
            this.props.closePlayer();
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    renderMedia(filename) {
        if(/(png$|jpe?g$)/ig.test(filename)) {
            return <img src={filename} />
        } 
        return null;
    }
    render() {
        let content = this.props.content;
        let currentContent = content[this.state.index];
        let renderedContent = this.renderMedia(currentContent);

        let title = this.props.title;
        let advance = this.advance.bind(this);
        let closePlayer = this.props.closePlayer.bind(this);

        return <Swipeable id="Player"
            onClick={advance}
            onSwipedDown={closePlayer}
        >
            
            { renderedContent }
            <PlayerInfo
                title={title}
                advance={advance}
                step={this.state.index}
                content={content}
                closePlayer={closePlayer}
            />
        </Swipeable>
    }
}

export default Player; 
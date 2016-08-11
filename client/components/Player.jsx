import React from 'react';
import Swipeable from 'react-swipeable';

class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    advance() {
        this.setState({
            index: this.state.index + 1
        }, () => {
            let length = this.props.content.length;
            if(length === this.state.index) {
                this.props.closePlayer();
            }
        })
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

        let advance = this.advance.bind(this);
        let closePlayer = this.props.closePlayer;

        return <Swipeable id="Player"
            onClick={advance}
            onSwipedDown={closePlayer}
        >
            { renderedContent }
        </Swipeable>
    }
}

export default Player; 
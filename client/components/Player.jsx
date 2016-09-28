import React from 'react';
import Swipeable from 'react-swipeable';
import DoublePieChart from './DoublePieChart';

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

        let advance = this.advance.bind(this);
        let closePlayer = this.props.closePlayer;

        return <Swipeable id="Player"
            onClick={advance}
            onSwipedDown={closePlayer}
        >
            <DoublePieChart 
                advance={advance}
                step={this.state.index}
                timings={content.map(x => 5)}
            />
            { renderedContent }
        </Swipeable>
    }
}

export default Player; 
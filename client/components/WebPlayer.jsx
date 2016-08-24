import React from 'react';
import Swipeable from 'react-swipeable';

import getWithUserAgent from '../js/getWithUserAgent';

class WebPlayer extends React.Component {
    constructor() {
        super();
    }
    renderIFrame(url) {
        getWithUserAgent(url, (err, response, body) => {
            console.log(body)
        })
        return <iframe
            ref="webplayer"
        />
    }
    getIFrameDOMNode() {
        return this.refs.webplayer;
    }
    componentDidMount() {
        let iFrameDOMNode = this.getIFrameDOMNode();
        console.log(iFrameDOMNode)
        // spoofIFrameUserAgent(iFrameDOMNode); 
    }
    render() {
        let closePlayer = this.props.closePlayer;
        let renderedContent = this.renderIFrame(this.props.url)

        return <Swipeable id="Player"
        >
            { renderedContent }
        </Swipeable>
    }
}

export default WebPlayer; 
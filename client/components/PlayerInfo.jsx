import React from 'react';

import DoublePieChart from './DoublePieChart';
import CloseButton from './CloseButton';

class PlayerInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    
    render() {
        let title = this.props.title;
        let content = this.props.content;
        let advance = this.props.advance;
        let step = this.props.step;

        let closePlayer = this.props.closePlayer;

        return <div id="PlayerInfo">
            <div id="player-info-text">
                <h3>{title}</h3>
                <h4>Patrick Pan</h4>
            </div>
            <DoublePieChart 
                advance={advance}
                step={step}
                timings={content.map(x => 10)}
            />
            <CloseButton 
                onClick={closePlayer}
            />
        </div>
    }
}

export default PlayerInfo;
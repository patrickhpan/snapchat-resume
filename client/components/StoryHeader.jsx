import React from 'react';

import pdfIcon from '../img/pdf.svg';
import emailIcon from '../img/email.svg';
import links from '../json/links'; 

class StoryHeader extends React.Component {
    render() {
        return <div id="StoryHeader">
            <img src={pdfIcon} alt=""/>
            <h2
                onClick={this.props.showLanding}
            >Patrick Pan</h2>
            <img src={emailIcon} alt=""/>
        </div>
    }
}

export default StoryHeader;
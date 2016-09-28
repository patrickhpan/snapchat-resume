import React from 'react';

class CloseButton extends React.Component {
    render() {
        let onClick = this.props.onClick;
        return <div id="CloseButton">
            <svg onClick={onClick} viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        </div> 
    }
}

export default CloseButton;
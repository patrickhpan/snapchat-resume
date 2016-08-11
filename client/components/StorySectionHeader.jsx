import React from 'react';

import keyify from '../js/keyify';

class StorySectionHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        let children = [
            <div className="border" />
        ]; 

        let text = this.props.text;
        if(text) {
            let headerText = <h3>{text}</h3>;
            children.push(headerText);
            children.push(children[0]);
        }
        children = keyify(children);
        return <div className="StorySectionHeader">
            {children}
        </div>
    }
}

export default StorySectionHeader;
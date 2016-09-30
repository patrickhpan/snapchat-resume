import React from 'react';

import Wrapper from './Wrapper';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }
    toggleExpanded(expanded = !this.state.expanded) {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        let toggleExpanded = this.toggleExpanded.bind(this)
        return <div>
            <div 
                style={{"display": "none"}}
                onClick={toggleExpanded}
            >Toggle Mobile View</div>
            <Wrapper 
                expanded={this.state.expanded}
            />
        </div>
    }
}

export default App;
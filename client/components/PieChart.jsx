import React from 'react';

class PieChart extends React.Component {
    render() {
        let percent = (this.props.percent || 25) / 100;

        let circumference = 2 * Math.PI * 25;

        let style = {
            strokeDasharray: `0 ${circumference * (1 - percent)} ${circumference * percent}`,
        }
        return <svg viewBox="0 0 100 100" 
            className="PieChart"
        >
            <circle r="25" cx="50" cy="50" style={style} transform="rotate(270 50 50)"/>
        </svg>
    }
}

export default PieChart;
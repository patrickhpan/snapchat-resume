import React from 'react';

class PieChart extends React.Component {
    render() {
        let percent = (this.props.percent || 25) / 100;

        let circumference = 2 * Math.PI * 25;

        let style = {
            strokeDasharray: `${circumference * percent}% ${circumference}%`,
            strokeWidth: '50%',
            fill: 'none'
        }
        return <svg width="100%" height="100%">
                <circle r="25%" cx="50%" cy="50%" style={style}/>
            </svg>
    }
}

export default PieChart;
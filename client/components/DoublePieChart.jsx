import React from 'react'; 
import { TweenMax } from 'gsap'; 

const settings = {
    innerRadius: 15,
    outerRadius: 40
}

class DoublePieChart extends React.Component {
    constructor() {
        super();
    }

    tween() {
        let { startStyle, endStyle, outerStartStyle, outerEndStyle, animLength } = this.animOptions;  
        endStyle.ease = Linear.easeNone;
        outerEndStyle.ease = Linear.easeNone;
        outerEndStyle.onComplete = this.props.advance;

        TweenMax.fromTo(this.ring, animLength, outerStartStyle, outerEndStyle);
        TweenMax.fromTo(this.circle, animLength, startStyle, endStyle);
    }

    componentDidMount() {
        console.log("mount")
        this.tween();
    }

    componentDidUpdate() {
        console.log("update")
        this.tween();
    }

    render() {
        console.log("render")
        let timings = this.props.timings || [3, 3, 3];
        let totalTime = timings.reduce((a, b) => a + b);
        let step = this.props.step;
        let progressedTime = step === 0 ? 0 : timings.slice(0, step).reduce((a,b) => a+b);
        
        let startPercent = 1 - (progressedTime / totalTime);
        let endPercent = startPercent - (timings[step] / totalTime);

        let innerCircumference = (2 * Math.PI * settings.innerRadius).toFixed(2);
        let outerCircumference = (2 * Math.PI * settings.outerRadius).toFixed(2);
        
        let startStyle = {
            "stroke-dasharray": `0 ${(innerCircumference * (1 - startPercent)).toFixed(2)} ${innerCircumference}`
        }
        let endStyle = {
            "stroke-dasharray": `0 ${(innerCircumference * (1 - endPercent)).toFixed(2)} ${innerCircumference}`
        }

        if(step === timings.length - 1) {
            startStyle = endStyle;
        }

        let outerStartStyle = {
            "stroke-dasharray": `0 0 ${outerCircumference}`
        }
        let outerEndStyle = {
            "stroke-dasharray": `0 ${outerCircumference} ${outerCircumference}`            
        }

        let innerStyle = Object.assign({
            strokeWidth: `${settings.innerRadius * 2}`
        }, this.startStyle);

        let outerStyle = {
            strokeWidth: `${(settings.outerRadius - 2 * settings.innerRadius) * 2 - 8.5}`
        }

        let bgStyle = {
            strokeWidth: `${(settings.outerRadius - 2 * settings.innerRadius) * 2}`
        }

        this.animOptions = {
            startStyle,
            endStyle,
            outerStartStyle,
            outerEndStyle,
            animLength: timings[step]
        }

        return <svg viewBox="0 0 100 100"
            id="DoublePieChart"
        >
                <circle     
                    className="bg"
                    r={settings.outerRadius} cx="50" cy="50" style={bgStyle}
                    transform="rotate(270, 50, 50)"
                />
                <circle 
                    className="ring"
                    ref={(c) => this.ring = c}
                    r={settings.outerRadius} cx="50" cy="50" style={outerStyle}
                    transform="rotate(270, 50, 50)"
                />
                <circle 
                    className="circle"
                    ref={(c) => this.circle = c}
                    r={settings.innerRadius} cx="50" cy="50" style={innerStyle}
                    transform="rotate(270, 50, 50)"
                />
        </svg>
    }
}

const WrappedDoublePieChart = props => <TransitionGroup><DoublePieChart {...props} /></TransitionGroup>;

export default DoublePieChart;
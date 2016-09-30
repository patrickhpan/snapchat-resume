import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/master.scss';

window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(<App />, document.getElementById("app-root"))

import isMobile from './js/isMobile'

if(isMobile()) {
    alert("Hi! Unfortunately, phones don't play videos very seamlessly. This site will work, but videos will work better on desktop!")
}
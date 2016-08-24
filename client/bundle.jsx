import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/master.scss';

window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(<App />, document.getElementById("app-root"))
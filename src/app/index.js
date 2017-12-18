import React from 'react';
import ReactDOM from 'react-dom';
import ScreenStart from './ScreenStart';
import Logo from './Logo';
import Button from './Button';

ReactDOM.render(<Logo company="Ergatis"/>,document.getElementById('logo-container'));
ReactDOM.render(<ScreenStart company="Ergatis"/>,document.getElementById('context-container'));
ReactDOM.render(<Button retrieveData={this.retrieveData.bind(this)} company={this.state.company} />, document.getElementById('button-container'));

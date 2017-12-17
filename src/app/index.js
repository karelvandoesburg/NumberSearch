import React from 'react';
import ReactDOM from 'react-dom';
import ScreenStart from './ScreenStart';
import Logo from './Logo';

ReactDOM.render(<Logo company="ergatis"/>,document.getElementById('logo-container'));
ReactDOM.render(<ScreenStart company="ergatis"/>,document.getElementById('context-container'));

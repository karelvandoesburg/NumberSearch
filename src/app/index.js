import React from 'react';
import ReactDOM from 'react-dom';
import ScreenStart from './ScreenStart';
import Logo from './Logo';
import Button from './Button';

ReactDOM.render(<Logo company="Ergatis"/>,document.getElementById('logo-container'));
ReactDOM.render(<ScreenStart company="Ergatis"/>,document.getElementById('context-container'));

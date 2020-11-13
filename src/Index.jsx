import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/bootstrap.min.css';
import './assets/styles.css';



ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app'),
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactRouter from './router/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();

import React                 from 'react';
import ReactDOM              from 'react-dom';
import {browserHistory, Router} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from 'App/Router.jsx'

const container = document.getElementById('app');
container.classList.add('layout');

ReactDOM.render(
    <Router history={browserHistory} routes={AppRouter} />,
    container
);

registerServiceWorker();


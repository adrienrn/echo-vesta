import React from 'react';
import {IndexRoute, Route} from 'react-router';

import AppLayout from 'App/AppLayout.jsx';
import Login     from 'App/Views/Login.jsx';
import Main      from 'App/Views/Main.jsx';

export default (
  <Route path='/' component={AppLayout}>
    <IndexRoute component={Main} />
    <Route path='login' component={Login} />
    <Route path='*' component={Main} />
  </Route>
);

import React from 'react';
import {Link} from 'react-router';

import {AppContextConsumer} from 'App/AppContextProvider';

class SystemDock extends React.Component {
  noop() {
    return;
  }

  render() {
    return (
      <AppContextConsumer>
        {(context) => (
          <ul className="nav nav--system-dock">
            <li className="nav-item">
              <a className="nav-link" onClick={(event) => (context.showModal('SYSTEM_LOGIN'))}>Log.</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={(event) => (context.showModal('SYSTEM_LOCKDOWN'))}>Hey</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home...</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login!</Link>
            </li>
          </ul>
        )}
      </AppContextConsumer>
    );
  }
}

export default SystemDock;

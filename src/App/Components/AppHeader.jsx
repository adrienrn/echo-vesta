import React from 'react';

import SystemClock from 'App/Components/SystemClock';
import {AppContextConsumer} from 'App/AppContextProvider';

class AppHeader extends React.Component {
  render() {
    return (
      <AppContextConsumer>
        {(context) => (
          <div className="layout-header">
            <div className="navbar">
              <div className="navbar-content">
                <ul className="nav nav--system-status">
                  <li className="nav-item">
                    <SystemClock />
                  </li>
                </ul>
              </div>
              <div className="navbar-header">
                {context.state.title}
              </div>
            </div>
          </div>
        )}
        </AppContextConsumer>
    );
  }
}

export default AppHeader;

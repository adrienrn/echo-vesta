import React from 'react';

import ModalManager from 'App/ModalManager.jsx';

import AppContextProvider from 'App/AppContextProvider';
import AppFooter from 'App/Components/AppFooter';
import AppHeader from 'App/Components/AppHeader';

import 'normalize.css';
import 'stylesheets/app.scss';

class AppLayout extends React.Component {
  // componentDidMount() {

  //   this.timerHandle = setTimeout(
  //     () => this.close(),
  //     3000,
  //   );
  // }

  // close() {

  // }

  render() {
    return (
      <AppContextProvider>
        <div className="layout-wrapper">
          <div>
            <AppHeader />

            <div className="layout-main">
              {this.props.children}
            </div>

            <AppFooter />
          </div>
          <ModalManager />
        </div>
      </AppContextProvider>
    );
  }
}

export default AppLayout;

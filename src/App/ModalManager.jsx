import React from 'react';

import {AppContextConsumer} from 'App/AppContextProvider';
import SystemLockdownModal from 'App/Components/SystemLockdownModal.jsx';
import SystemLoginModal from 'App/Components/SystemLoginModal.jsx';
import SystemLoader from 'App/Components/SystemLoader';

const ModalManager = props => {
  const renderModal = function(activeModal) {
    switch (activeModal) {
      case 'SYSTEM_LOADER':
        return (
          <div>
            <SystemLoader />
          </div>
        );
      case 'SYSTEM_LOGIN':
        return (<SystemLoginModal />);
      case 'SYSTEM_LOCKDOWN':
        return (<SystemLockdownModal />);
      default:
        return null;
    }
  };

  return (
    <AppContextConsumer>
      {(context) => (
        renderModal(context.state.activeModal)
      )}
    </AppContextConsumer>
  );
};

export default ModalManager;
// div.navbar.component--loadable
//   div.navbar-header.component-content
//     div.navbar-brand
//       = "// H.AD System v8.9.89 //"
//   div.navbar-content.component-content
//     ul.nav
//       p.nav-item.nav-item--text
//         = "0fc1-89ad"


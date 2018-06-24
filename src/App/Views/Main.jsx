import React from 'react';

import {withContext} from 'App/AppContextProvider';
import SectionPanel from 'App/Components/SectionPanel';

class Main extends React.Component {
  componentDidMount() {
    this.props.context.showModal('SYSTEM_LOADER')

    this.timerHandle = setTimeout(
      () => this.props.context.hideModal('SYSTEM_LOADER'),
      400
    );
  }

  render() {
    return (
      <div>
        <div className='layout-panel layout-panel--aside-left'>
          <SectionPanel title="Aside" />
        </div>

        <div className='layout-panel layout-panel--content-main'>
          <SectionPanel title="Oyo" />
        </div>
      </div>
    );
  }
}

export default withContext(Main);

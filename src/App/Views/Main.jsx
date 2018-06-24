import React, {Component} from 'react';

import {withContext} from 'App/AppContextProvider';

class Main extends Component {
  componentDidMount() {
    this.props.context.showModal('SYSTEM_LOADER')

    this.timerHandle = setTimeout(
      () => this.props.context.hideModal('SYSTEM_LOADER'),
      5000
    );
  }

  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

export default withContext(Main);

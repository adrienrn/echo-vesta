import React from 'react';

class AppBackdrop extends React.Component {
  render() {
    return (<div className="offie-backdrop" />)
  }
}

class SystemLoader extends React.Component {
  render() {
    return (
      <div>
        <AppBackdrop />
        <div className="offie-layer">
          LOADER
        </div>
      </div>
    );
  }
}

export default SystemLoader;

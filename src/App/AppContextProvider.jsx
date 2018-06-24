import React from 'react';

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Echo Vesta',
      activeModal: '',
    };
  }

  render() {
    return (
      <AppContext.Provider value={{
        // The whole state.
        state: this.state,

        showModal: (name) => (
          this.setState({
            activeModal: name,
          })
        ),

        hideModal: () => (
          this.setState({
            activeModal: '',
          })
        ),
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export class AppContextConsumer extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {this.props.children}
      </AppContext.Consumer>
    );
  }
}

export function withContext(Component) {
  // ...and returns another component...
  return function WrappedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return (
      <AppContext.Consumer>
        {(context) => (
          <Component {...props} context={context} />
        )}
      </AppContext.Consumer>
    );
  };
}

export default AppContextProvider;

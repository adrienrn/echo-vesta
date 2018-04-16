import React, { Component } from "react";
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router";

export default class Home extends Component {
  // componentDidMount() {
  //   browserHistory.push('/');
  // }
  render() {
    return (
      <div id="home">
        <div className="layout-layer layout-layer--revealer">
          <div className="layout-layer-inner">
            <h3>Intrusion detected!</h3>
            <p>Message system: [2018-04-14T16:49:33+0200Z] FAILURE: VV Shield has been breached...</p>
          </div>
        </div>
        <div className="layout-backdrop"></div>
      </div>
    );
  }
}

// div.navbar.component--loadable
//   div.navbar-header.component-content
//     div.navbar-brand
//       = "// H.AD System v8.9.89 //"
//   div.navbar-content.component-content
//     ul.nav
//       p.nav-item.nav-item--text
//         = "0fc1-89ad"

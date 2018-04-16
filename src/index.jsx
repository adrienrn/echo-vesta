
import ReactDom from 'react-dom';
import React, { Component } from 'react';
// import { Router, browserHistory } from 'react-router';

// import routes from './routes';

require('./stylesheets/base.scss');
//require('./stylesheets/home.scss');
//require('./stylesheets/contact.scss');

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

ReactDom.render(
  <Home />,
  document.querySelector('#app')
);

/*
doctype html
html(lang="en")
  head
    link(rel="stylesheet" href="styles/index.processed.css")
  body
    a.btn.btn--restart
      = "-- RESTART --"
    div.layout.layout--app
      div.layout-header
        include templates/parts/_navbar.pug
      div.layout-content
        div.layout-content-item.layout-content-item--left
          div.panel
            div.card.component--loadable
              div.card-block
                div.card-title
                  span.card-title-text
                    = "00:43"
            //div.panel__layer
        div.layout-content-item
          - var values = ['System Message Board', 'System Console', 'Monitoring Dash.', 'Security Diag.', 'Bots', 'Lockdown Mode',];
          div.gallery.gallery--apps
            each val in values
              div.gallery-item
                div.card.card--pad
                  div.card-block
                    span.card-title
                      span.card-title-text
                        = val
                    div.card-element.card-element--state
                      = '1'
                    div.card-img
                      //svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                        path(d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z")
    //div.layout-layer.layout-layer--revealer
      div.layout-layer-inner
        h3
          = "Intrusion detected!"
        p
          = "Message system: [2018-04-14T16:49:33+0200Z] FAILURE: VV Shield has been breached..."
    //div.layout-backdrop
    script(src="https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js")
    script(src="scripts/index.processed.js")

// Emergency alert: "INTRUSION DETECTED"
// Security diagnosis report:
// - Network locks ............ Breached
// - VV Shield ................ Breached
// - Server cluster status:
// ---- back-6d001 ............ OK
// ---- back-6d002 ............ OK
// ---- back-6d003 ............ Breached
// ---- data-3ba01 ............ Breached
// ---- data-3ba02 ............ OK
// ---- frnt-e9e01 ............ Breached

// - Enabling "auto system lockdown" has failed... Human are necessary.
// ERROR: ... Retrying now...
// ERROR: Retrying now...
// ERROR: Retrying now...

// - Security system status:
// ---- Data Encryption  ....... OK
// ---- Counter measures ....... Failed
// ---- System lockdown  ....... Failed

// DETECTED

// Force reboot of the system will begin in 3min41s...
// WARNING: rebooting now can compromise defensive action or give full access to attackers.

// MANUAL SYSTEM LOCKDOWN REQUIRED... (DEFPROC=4)
*/

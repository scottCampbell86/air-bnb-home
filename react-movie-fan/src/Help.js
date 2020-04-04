import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import HelpCustomer from './HelpCustomer';
import HelpHost from './HelpHost';

export default class Help extends Component {
  render() {
    return (
      <div>
        <h3>Help</h3>
          <div>
            <Link to="/help/customer">Customer Help</Link>
            <Link to="/help/host">Host Help</Link>
          </div>
        <p>we help like this</p>
        <Route path="/help/customer" component={HelpCustomer} />
        <Route path="/help/host" component={HelpHost} />
        <h3>Help Footer</h3>
      </div>
    )
  }
}

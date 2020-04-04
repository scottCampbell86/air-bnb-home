import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" class="brand-logo">Rent</NavLink>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/host">Host</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
            <li><NavLink to="signup">Sign up</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

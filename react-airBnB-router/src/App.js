import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home';
import NavBar from './NavBar'; 
import Help from './Help';
import Host from './Host';
import Login from './Login';
import SignUp from './SignUp'

export default class App extends Component {
  render() {
    return (
        <Router>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/help' component={Help} />
          <Route exact path='/host' component={Host} />
        </Router>
    )
  }
}
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import About from './About';
import Home from './Home'; 

export default class App extends Component {
  render() {
    return (
        <Router>
        <h3>hi, i'm app :)</h3>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </div>
          <Route exact path='/about' render={props => <About /> } />
          <Route exact path='/' component={Home} />
        <h6>and i'm still here</h6>
        </Router>

    )
  }
}
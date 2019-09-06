import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css'
import List from '_p/list.js'
import Record from '_p/record.js'

class Routers extends Component {
  render() { 
    return (
      <Router>
        <AnimatedRouter
          timeout={200}
        >
          <Route path="/" exact component={List} />
          <Route path="/record" component={Record} />
        </AnimatedRouter>
      </Router>
    );
  }
}
 
export default Routers;
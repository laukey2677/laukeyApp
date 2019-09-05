import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import List from '_p/list.js'
import Record from '_p/record.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


function App () {
  return (
    <div className="App">
      <Router>
        <TransitionGroup>
          <Route path="/" exact component={List} />
          <Route path="/record" component={Record} />
        </TransitionGroup>
      </Router>
    </div>
    
  );
}

export default App;
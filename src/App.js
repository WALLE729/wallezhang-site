import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer/HomeContainer'
import AboutContainer from './containers/AboutContainer/AboutContainer'

import './assets/global.css'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path='/' component={ HomeContainer }></Route>
              <Route exact path='/about' component={ AboutContainer }></Route>
          </Switch>
        </Router>
        
      </div>
      
    );
  }
}

export default App;

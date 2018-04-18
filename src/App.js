import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer/HomeContainer'
import AboutContainer from './containers/AboutContainer/AboutContainer'

import './assets/global.css'
const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), reduxDevTools)
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/about" component={AboutContainer} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App

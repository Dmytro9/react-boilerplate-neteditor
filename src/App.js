import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import Home from './routes/Home'
import About from './routes/About'
import Navbar from './common/containers/Navbar'


import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
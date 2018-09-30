import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import Home from './routes/Home'
import About from './routes/About'
import Chart from './routes/Chart'
import Rechart from './routes/Rechart'
import BarChar from './routes/Bar'
import Navbar from './common/containers/Navbar'


import './App.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/chart' component={Chart} />
            <Route exact path='/rechart' component={Rechart} />
            <Route exact path='/bar' component={BarChar} />
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App

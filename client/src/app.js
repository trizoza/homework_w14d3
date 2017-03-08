import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import About from './components/About'
import Home from './components/Home'
import Planets from './components/Planets'
import Vehicles from './components/Vehicles'

window.onload = () => {
  render(
  
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        {/*<IndexRoute component={Home} />*/}
        <Route path='home' component={Home} />
        <Route path='about' component={About} />
        <Route path='planets' component={Planets} />
        <Route path='vehicles' component={Vehicles} />
      </Route>
    </Router>,

    document.getElementById('app')
  )
}
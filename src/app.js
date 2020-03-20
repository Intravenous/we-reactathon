import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

// Internals
import Home from './components/Home'
import Cocktails from './components/Cocktails'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SingleCocktail from './components/SingleCocktail'

const App = () => (
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cocktails" component={Cocktails} />
      <Route exact path="/search" component={SearchBar} />
      <Route exact path="/cocktails/:id" component={SingleCocktail} />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
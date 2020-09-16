import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Category from './components/Category'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Admin from './components/Admin'
import Login from './components/Login'
import './App.css'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthentificated === true ?
      <Component {...props} /> :
      <Redirect to={{pathname:'/login',state:{from:props.location}}} />
  )} />
)
export const fakeAuth = {
  isAuthentificated: false,
  authentificate(cb) {
    this.isAuthentificated = true
    setTimeout(cb, 100)
  }
}
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/admin' component={Admin} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
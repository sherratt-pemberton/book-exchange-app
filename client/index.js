import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './components/App'
import Books from './components/Books'
import Requests from './components/Requests'
import Trades from './components/Trades'
import Users from './components/Users'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import {PrivateRoute} from './auth/PrivateRoute'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))) 

const appElement = document.getElementById('app')


document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>              
        <Routes>
          <Route path = "*" element = {<App />} >
            <Route path = "books" element = {<Books />} />
            <Route path = "requests" element = {PrivateRoute( <Requests /> )} />
            <Route path = "trades" element = {PrivateRoute( <Trades /> )} />
            <Route path = "users" element = { PrivateRoute( <Users /> )} />
            <Route path = "login" element = {<Login />} />
            <Route path = "account" element = {PrivateRoute( <Account /> )} />
            <Route path = "register" element = {<Register />} />
          </Route>
        </Routes>
      </Provider>  
    </BrowserRouter>,
    appElement
  )
})

import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import AuthPage from './pages/Auth'
import PageNotFoundPage from './pages/PageNotFound'
import ProductsPage from './pages/Products'
import Home from './pages/Home'

import DefaultLayout from './Layout/DefaultLayout'

library.add(faCheckSquare, faShoppingBasket)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <DefaultLayout>
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/products" component={ProductsPage} />
              <Route path="/home" component={Home} />
              <Route path="/auth" component={AuthPage} />
              <Route component={PageNotFoundPage} />
            </Switch>
          </DefaultLayout>
        </React.Fragment>

      {/* <div>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      </BrowserRouter>
    );
  }
}

export default App;

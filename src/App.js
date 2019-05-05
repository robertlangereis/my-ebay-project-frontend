import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import AdDetailsContainer from './components/AdDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/advertisements/:id" component={AdDetailsContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App;
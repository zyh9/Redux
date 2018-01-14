import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Commodity from './comm/commodity/commodity';
import Shop from './comm/ShoppingCart/shop';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
              return <Commodity />
          }} />
          <Route path="/shop" render={()=>{
              return <Shop />
          }} />
        </Switch>
      </Router>
    );
  }
}

export { App };

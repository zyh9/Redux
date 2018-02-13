import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import ShopList from './comm/shop_list';
import ShopCart from './comm/shop_cart';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=>{
              return <ShopList />
          }} />
          <Route path="/shop" render={()=>{
              return <ShopCart />
          }} />
        </Switch>
      </Router>
    );
  }
}

export { App };

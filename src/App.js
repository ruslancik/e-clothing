import React from 'react';
import './App.css';
import HomePage from './pages/home/home-page.component'
import {Route, Switch } from 'react-router-dom'
import {Hats} from './pages/hats/hats.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignOut from '../src/pages/SignInAndSignOut/signIn-and-signOut.component'


 

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOut} />
        <Route exact path='/hats' component={Hats} />
        <Route path='/hats/:hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

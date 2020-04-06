import React from 'react';
import './App.css';
import HomePage from './pages/home-page.component'
import {Route, Switch, withRouter } from 'react-router-dom'
import {Hats} from './pages/Hats.component'


 

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats} />
        <Route path='/hats/:hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

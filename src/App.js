import React from 'react';
import './App.css';
import HomePage from './pages/home/home-page.component'
import {Route, Switch } from 'react-router-dom'
import {Hats} from './pages/hats/hats.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignOut from '../src/pages/SignInAndSignOut/signIn-and-signOut.component'
import { auth } from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'


 

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

  // its save us from javascript memory leaks. Its unsubscribe Auth
  unSubscribeFromAuth = null;

  componentDidMount(){

   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
            }
          }, () => console.log(this.state)
        );
      })

    } else {
      this.setState({currentUser: userAuth})
    }
        
     
      }
   )
}


  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
  

  }

export default App;

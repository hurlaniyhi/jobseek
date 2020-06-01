import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './landingPage.js'
import SignIn from './signin.js'
import SignUp from './signUp.js'
import UserDashboard from './userdashboard.js'
import Requiter from './requiter.js'





var App = createReactClass({
  render: function(){
    return(
      <BrowserRouter>
        
          <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route path="/signin/userdashboard" component={UserDashboard}></Route>
          <Route path="/signin/requiter" component={Requiter}></Route>

          </Switch>
      
      </BrowserRouter>
    )
  }
})

// ReactDOM.render(<App />, document.getElementById("root"))
export default App

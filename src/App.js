import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './userPages/SignupPage'
import Login from './userPages/LoginPage'
import Home from './corePages/HomePage'
import NavBar from './corePages/NavBar'




const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/login'  component={Login} />
        <Route exact path='/signup'  component={Signup} />
      </Switch>

    </BrowserRouter>

  );
};

export default App;

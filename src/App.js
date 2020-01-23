import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup/SignupPage'
import Login from './user/Login/LoginPage'
import Home from './corePages/HomePage'





const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/login'  component={Login} />
        <Route exact path='/signup'  component={Signup} />
      </Switch>

    </BrowserRouter>

  );
};

export default App;

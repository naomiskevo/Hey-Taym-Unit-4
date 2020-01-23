import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup/SignupPage'
import Login from './user/Login/LoginPage'
import Home from './corePages/HomePage'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/Dashboard/Dashboard'




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/login'  component={Login} />
        <Route exact path='/signup'  component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>

    </BrowserRouter>

  );
};

export default App;

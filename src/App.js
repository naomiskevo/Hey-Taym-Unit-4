import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Login from './user/Login'




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login'  component={Login} />
        <Route exact path='/signup'  component={Signup} />
      </Switch>

    </BrowserRouter>

  );
};

export default App;

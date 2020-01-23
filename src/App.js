import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup/SignupPage';
import Login from './user/Login/LoginPage';
import Home from './corePages/HomePage';
import PrivateRoute from './auth/PrivateRoute.jsx';
import Dashboard from './user/Dashboard/Dashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard/AdminDashboard';




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute
          exact path="/user/dashboard"
          component={Dashboard}
        />
        <AdminRoute
          exact path="/admin/dashboard"
          component={AdminDashboard}
        />
      </Switch>

    </BrowserRouter>

  );
};

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup/SignupPage';
import Login from './user/Login/LoginPage';
import Home from './corePages/HomePage';
import Shop from './corePages/Shop';
import Product from './corePages/Product';
import PrivateRoute from './auth/PrivateRoute.jsx';
import Dashboard from './user/Dashboard/Dashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import ManageProducts from './admin/ManageProducts';




const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/product/:productId' component={Product} />
        <PrivateRoute
          exact path="/user/dashboard"
          component={Dashboard}
        />
        <AdminRoute
          exact path="/admin/dashboard"
          component={AdminDashboard}
        />
        <AdminRoute
          exact path="/create/category"
          component={AddCategory}
        />
        <AdminRoute
          exact path="/create/product"
          component={AddProduct}
        />
        <AdminRoute
          exact path="/admin/product/update/:productId"
          component={UpdateProduct}
        />
        <AdminRoute
          exact path="/admin/products"
          component={ManageProducts}
        />
      </Switch>

    </BrowserRouter>

  );
};

export default App;

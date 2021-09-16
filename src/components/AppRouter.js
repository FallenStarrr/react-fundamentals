import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { routes } from '../router/routes';
import About from '../pages/About';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';

function AppRouter() {
  return (
    
      <Switch>
        {routes.map(route => 
          <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          />
        )}
        <Redirect to="/posts" />
      </Switch>

  )
}

export default AppRouter

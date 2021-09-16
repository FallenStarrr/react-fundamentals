import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import About from '../pages/About';
import Error from '../pages/Error';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';

function AppRouter() {
  return (
    
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/posts">
          <Posts />
        </Route>

        <Route exact path="/posts/:id">
          <PostPage />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/posts" />
      </Switch>

  )
}

export default AppRouter

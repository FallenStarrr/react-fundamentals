import React from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import "./styles/App.css";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

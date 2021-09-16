import React, { useState , useEffect  } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import "./styles/App.css";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

import Error from "./pages/Error";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);



  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    } 
    setLoading(false)
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth, isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

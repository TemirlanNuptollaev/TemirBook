import React, {useState, useContext, useEffect} from "react";
import { BrowserRouter, Link, Redirect, Route, Routes, Switch} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";


import './styles/app.css';

function App() {
  const [isAuth, setIsAuth] =  useState(false);
  const [isLoading, setLoading] =  useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")){
      setIsAuth(true)
    }
    setLoading(false)
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

    
    );
  }

export default App;
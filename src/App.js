/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { boardUsers } from './cfgdefault'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading"
import Reloading from "./Components/Reloading"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import GlobalStyle from "./globalStyles";
import './FiraCode.css'
import PageHome from './Pages/home'
import PageDashboard from './Pages/dashboard'

  function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(boardUsers);
  const [acces, setAcces] = useState();
  const [daily, setDaily] = useState({});
  const [userName, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [states, setStates] = useState({setLoading, setUsers, setAcces, setDaily, setUsername, setAvatar});
  
  useEffect(()=>{ Reloading(setUsers, setAcces, setUsername, setAvatar, setLoading, setDaily)},[])

    return (
    <Router>
      {loading === true ? (
        <Loading/>
      ) : ( <>
      <Navbar acces={acces} setAcces={setAcces} avatar={avatar} userName={userName} />
      <GlobalStyle/>

    <Switch>
      <Route exact path='/' component={ PageHome }/>
      <Route exact path='/dashboard'><PageDashboard acces={acces} setAcces={setAcces} avatar={avatar} userName={userName} users={users} setUsers={setUsers} daily={daily} setDaily={setDaily} states={states} /></Route> 
    </Switch>
    </>
    )}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <Footer/>

    </Router>
      
    )
  }

export default App

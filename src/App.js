import React, { useState } from 'react';
import axios from "axios";
import {BackEnd_URL} from './api';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalStyle from "./globalStyles";
import './FiraCode.css'
import PageHome from './Pages/home'
import PageDashboard from './Pages/dashboard'

  function App() {
  const [acces, setAcces] = useState();
  const [loading, setLoading] = useState(true);
  const [userName, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  axios
    .get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
    .then((res) => {
      setAcces(res.data.msg);
      if (res.data.msg === "authorized") {
        setUsername(res.data.user.discordTag);
        res.data.user.avatar === 'null' ? (setAvatar('http://pedrorbc.ddns.net:8090/files-upload/2196c32c20d8033321f9f352074d755c-✭✮.jpg')) : (
          setAvatar(
            `https://cdn.discordapp.com/avatars/${res.data.user.discordId}/${res.data.user.avatar}.png?size=128`
          )
        )
      }
        setLoading(false);
    });


    return (
    <Router>
      {loading === true ? (
        <Loading/>
      ) : ( <>
      <Navbar acces={acces} setAcces={setAcces} avatar={avatar} userName={userName} />
      <GlobalStyle/>

    <Switch>
      <Route exact path='/' component={ PageHome }/>
      <Route exact path='/dashboard'><PageDashboard acces={acces} setAcces={setAcces} avatar={avatar} userName={userName} /></Route> 
    </Switch>
    </>
    )}
      <Footer/>

    </Router>
      
    )
  }

export default App;

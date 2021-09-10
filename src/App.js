import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalStyle from "./globalStyles";
import './FiraCode.css'
import PageHome from './Pages/home'
import PageDash from './Pages/dashboard'
class App extends Component {
  user = {
    loged: true,
    info: {
      username: 'Pedro ツ',
      tag: '#0002',
      avatar: "https://cdn.discordapp.com/avatars/853639146363027496/a_a6fd31f8cdf16d2ccbdb4ed47a15330d.gif",
    }
  };
  render() {
    return (
    <Router>
      <Navbar user={this.user}/>
      <GlobalStyle/>
    <Switch>
      <Route exact path='/' component={ PageHome }/>
      <Route exact path='/dashboard' component={ PageDash } />
    </Switch>
      <Footer/>
    </Router>
  );
  }
}

export default App;

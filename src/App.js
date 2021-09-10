import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GlobalStyle from "./globalStyles";
import './FiraCode.css'
import PageHome from './Pages/home'
import PageDashN from './Pages/dashboard-n-logado'
import PageDashL from './Pages/dashboard-logado'

var arrayDef;
let StorageArry = JSON.parse(localStorage.getItem('array'))
if (StorageArry == null) {
arrayDef = {
  login: false,
  token: "",
  info: {
    username: 'Pedro ツ',
    tag: '#0002',
    avatar: "https://cdn.discordapp.com/avatars/853639146363027496/a_a6fd31f8cdf16d2ccbdb4ed47a15330d.gif",
  }
}
localStorage.setItem('array', JSON.stringify(arrayDef))
}
else {
  arrayDef = StorageArry;

}


class App extends Component {

  constructor(props){
    super(props)
    this.setState = this.setState.bind(this)
    this.state = arrayDef
  }

  render() {
    return (
    <Router>
      <Navbar state={this.state} SetState = {this.setState}/>
      <GlobalStyle/>
    <Switch>
      <Route exact path='/' component={ PageHome }/>
      {!this.state.login && ( <Route exact path='/dashboard'><PageDashN state={this.state } SetState = {this.setState}/></Route> )}
      {!!this.state.login && ( <Route exact path='/dashboard'><PageDashL state={this.state} SetState = {this.setState}/></Route> )}
    </Switch>
      <Footer/>
    </Router>
  );
  }  
}

export default App;

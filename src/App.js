import React, { Component } from 'react';
import logo from './logo.svg';
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import axios from "axios";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="saved" components={Saved}/>
        </div>
      </Router>
    );
  }
}

export default App;

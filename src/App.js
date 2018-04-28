import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route} from "react-route-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
        </div>
      </Router>
    );
  }
}

export default App;

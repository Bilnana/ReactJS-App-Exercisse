import React, { Component } from 'react';
import Header from './Components/Header';
//import Header from './Components/Content';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Containers/Home";
import Stuff from "./Containers/Stuff";
import Contact from "./Containers/Contact";


class App extends Component {

  render() {

    return (
      <Router>
      <div className="main-content">
           <Header/>
           <div className="body-content">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
           </div>
      </div>
      </Router>
    );
  }
}

export default App;

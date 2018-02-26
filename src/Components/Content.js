
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Stuff from "./Containers/Stuff";
import Contact from "./Containers/Contact";
 
class Content extends Component {
  render() {
    return (
      <div className="body-content">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
           </div>
    );
  }
}
 
export default Content;
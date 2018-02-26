import React, { Component } from "react";
import {BrowserRouter as  Route, Link } from "react-router-dom";

 
class Header extends Component {
  render() {
    return (
          <header className="header">
              <ul className="nav-header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stuff">Questions</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
          </header>

    );
  }
}
 
export default Header;
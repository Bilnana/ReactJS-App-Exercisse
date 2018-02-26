import React, { Component } from "react";
import Coursesales from '../Components/Coursesales.js';
 
class Home extends Component {
  render() {
      var courses=[
              {name:"Complete React drive.", price: 200},
              {name:"Javascript for beginers.", price: 120},
              {name:"CSS3 intermidiate.", price: 150},
              {name:"Theaming in CMS for beginers.", price: 200}
      ]

    return (
      <div className="container">
        <h2>Here you can chouse courses:</h2>
        <Coursesales items={courses} />
      </div>
    );
  }
}
 
export default Home;
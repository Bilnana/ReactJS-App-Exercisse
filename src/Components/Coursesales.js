import React, { Component } from 'react';


class Coursesales extends Component {

  sumPrice(price){
    this.setState({total:this.state.total + price});
  }

  constructor(props){
    super(props);

     this.state={
       total:0
     };

   this.sumPrice = this.sumPrice.bind(this);

  }

  render() {

    console.log(this.props.items);

    var courses = this.props.items.map((item,i)=>{ return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.sumPrice} active={item.active}/>
    });

    return (
      <div className="courses-list">
      {courses}
      <p className="total-price"> Total : <b>{this.state.total}</b></p>
      </div>
    );
  }
}



class Course extends Component {
  clicker(){
    var active = !this.state.active;
    this.setState({active : active});
    console.log(this.state);

    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }



  constructor(props){
    super(props);

    this.state={
      active: false
    }

    this.clicker= this.clicker.bind(this);

  }

 render() {
  return (
      <div className="course-item">
       <p onClick={this.clicker}> {this.props.name} - {this.props.price} </p>
      </div>
    );
  }

}


export default Coursesales;
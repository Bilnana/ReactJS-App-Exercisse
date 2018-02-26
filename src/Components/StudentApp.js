import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAMTNRwll7zYjaSi2HnspRe_Yf6aINcyBc",
    authDomain: "react-app-exercise.firebaseapp.com",
    databaseURL: "https://react-app-exercise.firebaseio.com",
    projectId: "react-app-exercise",
    storageBucket: "react-app-exercise.appspot.com",
    messagingSenderId: "1021669945442"
 };

 firebase.initializeApp(config);


class StudentApp extends Component {

  constructor(props){
    super(props);

	   this.state={
	   	 uid: uuid.v1(),
	   	 studentName: '',
	   	 answers: {
	   	 	answer1:'',
	   	 	answer2:'',
	   	 	answer3:''

	   	 },
	   	 isSubmited:false
	   };

	   this.submitName = this.submitName.bind(this);
	   this.selectedAnswer = this.selectedAnswer.bind(this);
	   this.submitQuestions = this.submitQuestions.bind(this);
	   
  }


   //Submit name func
   submitName(event){
  	var studentName = this.refs.name.value;
  	this.setState({studentName: studentName},function(){
  		console.log(this.state);
  	});
  }	

  //Select answers func
  selectedAnswer(event){
  	var answers = this.state.answers;
  	if(event.target.name === 'answer1'){
  		answers.answer1 = event.target.value;
  	}else if(event.target.name === 'answer2'){
  		answers.answer2 = event.target.value;
  	}else if(event.target.name === 'answer3'){
  		answers.answer3 = event.target.value;
  	}

  	this.setState({answers: answers},function(){
  		console.log(this.state);
  	})
  }; 

  //Submit answers func
  submitQuestions(){
  	firebase.database().ref('react-app-exercise/'+ this.state.uid).set({
  		studentName: this.state.studentName,
  		answers: this.state.answers
  	})

  	this.setState({isSubmited:true})
  }


 render() {
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmited === false){
    	
    	studentName = <div>
				    	<h1>Hey student let us know your name</h1>
				    	<form onSubmit={this.submitName}>
				    		<input type="text" className="student-name" placeholder="Enter your name" ref="name"/>
				    	</form>
    				</div>

    	questions='';		
    } else if(this.state.studentName !=='' && this.state.isSubmited === false){
    	studentName = <div><h2><span className="name">{this.state.studentName}</span> welcome to our App.</h2></div>
    	questions = <div><h3>Here are some questions for you:</h3>
    					<form onSubmit={this.submitQuestions}>
			    			<div className="card">
			                	<label>What kind of courses you like the most?</label>
			                	<div className="card-content"> 
			                		<input type="radio" name="answer1" value="design" onChange={this.selectedAnswer}/>Design
			                		<input type="radio" name="answer1" value="development" onChange={this.selectedAnswer}/>Development
			                		<input type="radio" name="answer1" value="marketing" onChange={this.selectedAnswer}/>Marketing
			                	</div>
			    			</div>
			    			<div className="card">
			                	<label>You are a : </label>
			                	<div className="card-content"> 
			                		<input type="radio" name="answer2" value="student" onChange={this.selectedAnswer}/>I am student
			                		<input type="radio" name="answer2" value="injob" onChange={this.selectedAnswer}/>I am in job
			                		<input type="radio" name="answer2" value="looking-job" onChange={this.selectedAnswer}/>Looking for a job
			                	</div>
			    			</div>
			    			<div className="card">
			                	<label>Is online learning helpful for you? </label>
			                	<div className="card-content"> 
			                		<input type="radio" name="answer3" value="yes" onChange={this.selectedAnswer}/>Yes
			                		<input type="radio" name="answer3" value="no" onChange={this.selectedAnswer}/>No
			                		<input type="radio" name="answer3" value="maybe" onChange={this.selectedAnswer}/>Maybe
			                	</div>
			    			</div>
			    			<input type="submit" className="submit-button" value="Submit answers"/>
		    			</form>
    				</div> 
    } else if(this.state.isSubmited === true){
      		studentName = <div>
      			<h3> Thank's for your time {this.state.studentName}</h3>
      		</div>

      		questions ='';
    }

  return (
      <div className="container">
      	 {studentName}
      	 {questions}
      </div>
    );
  }

}


export default StudentApp;

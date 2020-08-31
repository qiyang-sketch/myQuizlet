import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route } from  'react-router-dom'
import  QuizList  from  './QuizList'
import  QuizUpdate  from  './QuizUpdate'
//import Question from './Question.js';
import  './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Quizlet Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Return Home</a>
            <a className="nav-item nav-link" href="/quizcreation">Create Quiz</a>
          </div>
          </div>
        </nav>
          <div className="content"> 
            <Route path="/" exact component={QuizList} />
            <Route path="/quizcreation" exact component={QuizUpdate} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

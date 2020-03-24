import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  QuizList  from  './QuizList'
//import Question from './Question.js';
import  './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Quizlet Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Quiz</a>
            < a className="nav-item nav-link" href="/quizcreation">Create Quiz</a>
          </div>
          </div>
        </nav>
        <div className="content"> <Route path="/" exact component={QuizList} /></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

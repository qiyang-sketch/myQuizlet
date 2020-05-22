import  React, { Component } from  'react';
import  manageAPI  from  './manageAPI';
import Popup from "reactjs-popup";
import QuizResult from './QuizResult';

const  quizData  =  new  manageAPI();

class  QuizList  extends  Component {
    constructor(props) {
        super(props);
        this.state  = {
            Quiz: [],
            nextPageURL:  '',
            failedScore: 0
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }
    componentDidMount() {
        var  self  =  this;
        manageAPI.getQuizzes().then(function (result) {
            console.log(result);
            self.setState({ Quiz:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        manageAPI.deleteQuizzes({pk :  pk}).then(()=>{
            var  newArr  =  self.state.Quiz.filter(function(obj) {
                return  obj.pk  !==  pk;
            });

            self.setState({Quiz:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        console.log(this.state.nextPageURL);
        manageAPI.getQuizzesByURL(this.state.nextPageURL).then((result) => {
            self.setState({ Quiz:  result, nextPageURL:  result.nextlink})
        });
    }

    onChoiceChanged = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value
        });
        console.log("You have selected:", [changeEvent.target.name], changeEvent.target.value);
    };

    handleFormSubmit = formSubmitEvent => {
        const formData = new FormData(formSubmitEvent.target);
        const quizData = this.state.Quiz;
        formSubmitEvent.preventDefault();
        var tempScore = 0;
        for(var [key,value] of formData.entries()){
            if(quizData[key-1].correctAnswer!==value){
                tempScore++;

                console.log("failed: "+tempScore)
            }
            console.log(key, value)
        }
        this.setState({
            failedScore: tempScore
        });
        console.log(this.state.failedScore)
    };

    render() {
        return (

            <form onSubmit={this.handleFormSubmit}>
                <table  className="table">
                    <thead  key="thead">
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>order</th>
                        <th>custom label</th>
                        <th>choice 1</th>
                        <th>choice 2</th>
                        <th>choice 3</th>
                        <th>choice 4</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.Quiz.map( c  =>
                        <tr key={c.pk}>
                            <td>{c.pk}  </td>
                            <td>{c.question}</td>
                            <td>{c.order}  </td>
                            <td>{c.label}</td>
                            <td>
                                <input type="radio" name={c.pk}
                                   value={c.choice1} onChange={this.onChoiceChanged}/> {c.choice1}
                            </td>
                            <td>
                                <input type="radio" name={c.pk}
                                   value={c.choice2} onChange={this.onChoiceChanged} /> {c.choice2}
                            </td>
                            <td>
                                <input type="radio" name={c.pk}
                                   value={c.choice3} onChange={this.onChoiceChanged}/> {c.choice3}
                            </td>
                            <td>
                                <input type="radio" name={c.pk}
                                   value={c.choice4} onChange={this.onChoiceChanged}/> {c.choice4}
                            </td>
                        </tr>)}
                    </tbody>
                </table>

                <Popup modal trigger=
                    {<div className="form-group">
                        <button className="btn btn-primary mt-2" type="submit">Check Answer</button>
                    </div>}>    
                    {close => <QuizResult close={this.state.failedScore} />}
                </Popup>

            </form>
        );
    }
}
export  default  QuizList;
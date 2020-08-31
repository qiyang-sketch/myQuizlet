import React, { Component } from 'react';

import  manageAPI  from  './manageAPI';

//const quizData = new manageAPI();

class QuizUpdate extends Component {
    state={
        selected: 'choice1'
    }
    constructor(props) {
        super(props)
        
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
            manageAPI.getQuizzesByKey(params.pk).then((c)=>{
            this.refs.question.value = c.question;
            this.refs.choice1.value = c.choice1;
            this.refs.choice2.value = c.choice2;
            this.refs.choice3.value = c.choice3;
            this.refs.choice4.value = c.choice4;
            // BUG:
            this.refs.correctAnswer.value = c.choice1;
            })
        }
    }

    handleCreate(){
        manageAPI.createQuizzes(
        {
            "question": this.refs.question.value,
            "label": "test",
            "choice1": this.refs.choice1.value,
            "choice2": this.refs.choice2.value,
            "choice3": this.refs.choice3.value,
            "choice4": this.refs.choice4.value,
            "correctAnswer": this.refs.choice1.value
        }          
        ).then((result)=>{
            alert("Quiz created!");
        }).catch(()=>{
            alert('There was an create error! Please re-check your form.');
        });
    }

    handleUpdate(pk){
        let correctAnswer = ''
        if(this.state.selected = "choice1"){
            correctAnswer = this.refs.choice1.value
        }else if(this.state.selected="choice2"){
            correctAnswer = this.refs.choice2.value
        }else if(this.state.selected="choice3"){
            correctAnswer = this.refs.choice3.value
        }else{
            correctAnswer = this.refs.choice4.value
        }

        manageAPI.updateQuizzes(
        {
            "pk": pk,
            "question": this.refs.question.value,
            "label": "test",
            "choice1": this.refs.choice1.value,
            "choice2": this.refs.choice2.value,
            "choice3": this.refs.choice3.value,
            "choice4": this.refs.choice4.value,
            "correctAnswer": correctAnswer
        }          
        ).then((result)=>{
            console.log(result);
            alert("Quiz updated!");
        }).catch(()=>{
            alert('There was an update error! Please re-check your form.');
        });
    }

    handleSubmit(event) {
        //?
        const { match: { params } } = this.props;
        console.log("You have selected:", this.state.selected);
        if(params && params.pk){
            this.handleUpdate(params.pk);
        }
        else{
            this.handleCreate();
        }

        event.preventDefault();
    }
    
    onValueChange = changeEvent => {
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value,
            selected: changeEvent.target.value
        });
        console.log("You have selected:", [changeEvent.target.name], changeEvent.target.value);
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>Question:</label>
                <input className="form-control" type="text" ref='question' required/>
            
            <label>Answer 1:</label>
                <input className="form-control" type="text" ref='choice1' required/>
            
            <label>Answer 2:</label>
                <input className="form-control" type="text" ref='choice2' required/>
            
            <label>Answer 3:</label>
                <input className="form-control" type="text" ref='choice3' required/>
            
            <label>Answer 4:</label>
                   
                <input className="form-control" type="text" ref='choice4' required/>
            
            <label>The correct answer is:</label>
            <div><input type="radio" value="choice1" name="answerKey" onChange={this.onValueChange} checked/>Answer 1 </div>
            <div><input type="radio" value="choice2" name="answerKey" onChange={this.onValueChange} />Answer 2 </div>
            <div><input type="radio" value="choice3" name="answerKey" onChange={this.onValueChange} />Answer 3 </div>
            <div><input type="radio" value="choice4" name="answerKey" onChange={this.onValueChange} />Answer 4 </div>

            <button className="btn btn-primary mt-2" type="submit">Create</button>
            </div>
            </form>
        );
    }  
}

export default QuizUpdate;
import  React, { Component } from  'react';
import  manageAPI  from  './manageAPI';

const  quizData  =  new  manageAPI();

class  QuizList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            Quiz: [],
            nextPageURL:  ''
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
            self.setState({ Quiz:  result.data, nextPageURL:  result.nextlink})
        });
    }
    render() {
        return (
            <div >
                <table  className="table">
                    <thead  key="thead">
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>order</th>
                        <th>label</th>
                        <th>choice1</th>
                        <th>choice2</th>
                        <th>choice3</th>
                        <th>choice4</th>
                        <th>Actions</th>
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
                                <input type="radio" name="site_name" 
                                   value={c.incorrectAnswer1} /> {c.incorrectAnswer1}</td>
                            <td>
                                <input type="radio" name="site_name" 
                                   value={c.incorrectAnswer1} /> {c.incorrectAnswer2}</td>
                            <td>
                                <input type="radio" name="site_name" 
                                   value={c.incorrectAnswer1} /> {c.incorrectAnswer3}</td>
                            <td>
                                <input type="radio" name="site_name" 
                                   value={c.correctAnswer} /> {c.correctAnswer}</td>
                            <td>
                                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                                <a  href={"/customer/" + c.pk}> Update</a>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Submit</button>
            </div>
        );
    }
}
export  default  QuizList;

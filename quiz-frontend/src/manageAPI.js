import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class manageAPI{

    constructor(){}
    //Gets first page of quiz.
    static getQuizzes() {
        const url = `${API_URL}/api/QuizApp/`;
        return axios.get(url).then(response => response.data);
    }
    static getQuizzesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    /*
    static deleteQuizzes(customer){
        const url = `${API_URL}/api/QuizApp/${quiz.pk}`;
        return axios.delete(url);
    }
    createQuizzes(customer){
        const url = `${API_URL}/api/QuizApp/`;
        return axios.post(url,quiz);
    }
    updateQuizzes(customer){
        const url = `${API_URL}/api/QuizApp/${quiz.pk}`;
        return axios.put(url,customer);
    }*/
}

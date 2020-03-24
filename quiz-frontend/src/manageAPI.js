import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class manageAPI{

    constructor(){}
    //Gets first page or data of quiz.
    static getQuizzes() {
        const url = `${API_URL}/api/QuizApp/`;
        return axios.get(url).then(response => response.data);
    }
    static getQuizzesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
}

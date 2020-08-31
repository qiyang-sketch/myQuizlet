import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class manageAPI{

    static getQuizzes() {
        const url = `${API_URL}/api/QuizApp/`;
        return axios.get(url).then(response => response.data);
    }

    static getQuizzesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    static getQuizzesByKey(pk) {
		const url = `${API_URL}/api/QuizApp/${pk}`;
		return axios.get(url).then(response => response.data);
	}

    //Quiz: A Quiz object
	static deleteQuizzes(Quiz){
		const url = `${API_URL}/api/QuizApp/${Quiz.pk}`;
		return axios.delete(url);
	}

	static createQuizzes(Quiz){
		const url = `${API_URL}/api/QuizApp/`;
		return axios.post(url,Quiz);
	}

	static updateQuizzes(Quiz){
		const url = `${API_URL}/api/QuizApp/${Quiz.pk}`;
		return axios.put(url,Quiz);
	}
}
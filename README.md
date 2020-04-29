# myQuizlet
Quizlet web app created with React, Django, and Rest Framework  
learning webpack and deploying to AWS...
# Demo
![Test Image 1](https://github.com/qiyang-sketch/myQuizlet/blob/master/demo/demo3.png)
![Test Image 2](https://github.com/qiyang-sketch/myQuizlet/blob/master/demo/demo2.png)
![Test Image 3](https://github.com/qiyang-sketch/myQuizlet/blob/master/demo/demo1.png)
# Challenge: Learning *Full Stack* development as a beginner
* Learning how to communicate front and back-end   
  * How could data pass from Django to React?  
  * How could webpage retrive data from back-end?  
* Learning the basics of React Framework
  * How to display data on the webpage?  
  * How to count/record user's actions?  
# Technical choices
* Front-end: React because it is fun and beginner friendly (many resources)  
* Back-end: Django because I want to practise python
* MVC architecture because it is modualr, easy to manage
* A single form instead of individual page of quizes because I am a beginner
# Solution
* Front and back-end communication  
  * Setting up `myQuizlet` Django project and `QuizApp` Django app  
  * In `models.py`, create *Quiz* model(s) for Django to model the data into a Quiz object. Django migration will create `002_QuizApp.py` with all data and load it to local DB  
Setting up REST API for sending and retriving data  
  * Use `serializer.py` for converting data to JSON  
  * In `views.py`, implement `views.quiz_list` for handling GET request. Use django pagination for sending data of first page and use serializer to conver data to JSON. Use pagination because I want to divide all quiz questions into different page in future. Saving data into one page is easier, but impractical.  
  * `views.quiz_detail` for future functionalities of adding, editing quizes  
  * Use Axios for consuming APIs, which sends data to front-end. Implmented in `quiz-frontend/manageAPI.js`
* Front-end display/interactivity  
  * Use `App` component for styling and calling `QuizList` component  
  * `QuizList` component will use `manageAPI.js` for retriving all data and storing them into `this.state.Quiz`, `this.state` also have `failedScore` for recording users' attempt of answering quizes.  
  * `QuizList` will display a form of a table to display all data. `onChoiceChanged` will handle change of radio button in form. `handleFormSubmit` will handle form submit event and counting all incorrect attempts. It will compare the submitted choice with the correct choice defined in field `correctAnswer` of `this.state.Quiz`, whichi is model after `models.py`.  
  * Afterwards a pop-up, `QuizResult.js`, will show result of users' attempt
# Planned Functionalies
* Delete/Add/Edit quizzes
* Create User 
* More styling
* Seperate the displaying form functionality from `QuizList`
* Host in AWS

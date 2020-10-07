import React from 'react';
import ReactDOM from 'react-dom';
//import QuizApp from './components/QuizApp';
//import { quizzes } from './data/quizzes';
//import './styles.css';

const App = () => {
    return (
        <div className="app">
            <!-- <QuizApp quizzes={quizzes} /> -->
            <p>Hello World!</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

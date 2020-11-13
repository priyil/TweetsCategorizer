import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn';
import { data } from './data/tweet.json';
//import './styles.css';

const App = () => {
    return (
        <div className="app">
            <SignIn tweet={data} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn';
import { data } from './data/tweet.json';
//import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchUserInfo = () => {
    setUser(data);
  }

  return (
    <>
      <div className="app">
        <SignIn onClick={fetchUserInfo} />
      </div>
      { user &&
        <div>
          Hello, {user.username}
        </div>
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

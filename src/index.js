import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn';
import Favorites from './components/Favorites';
import { data } from './data/tweet.json';
import favorites from './data/favorites.json';
//import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [userFavorites, setUserFavorites] = useState(null);

  const fetchUserInfo = () => {
    setUser(data);
    setUserFavorites(favorites);
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
      { userFavorites &&
        <Favorites data={userFavorites}/>
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

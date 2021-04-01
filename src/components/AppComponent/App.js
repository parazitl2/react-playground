import { Counter } from '../CounterComponent/Counter';
import { Login } from '../LoginComponent/Login';
import { ArticleOverviewComponent } from '../ArticleOverviewComponent/ArticleOverviewComponent';
import { NavBarComponent } from '../NavBarComponent/NavBarComponent';
import { useEffect, useState } from 'react';
import './App.css';
import { FeedContainer } from '../../containers/FeedContainer';
import { NotificationComponent } from '../NotificationComponent/NotificationComponent';

function App({ fetchUser }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   setUser(() => fetchUser());
  // }, [fetchUser]);

  const fetchArticles = () => Promise.resolve([
    {
      id: 1,
      title: 'Title1',
      text: 'Kinda meaningful text to make visible the first article block'
    },
    {
      id: 2,
      title: 'Title2',
      text: 'Kinda second meaningful block that is not useful at all :)'
    },
  ]);

  const login = (username, password) => {
    setUser({
      ...user,
      username: username || 'Shy_pussy'
    });
    setIsLoggedIn(true);
  };

  return (
    <div>
      <NavBarComponent user={user} isLoggedIn={isLoggedIn} />
      {/* <ArticleOverviewComponent
        title={"Test title"}
        content={"String"}
        user={user}
        createdAt={"19.19.19"}
        imageUrl={"none"}
      /> */}
      {
        isLoggedIn
          ? <FeedContainer fetchArticles={fetchArticles}/>
          : <Login login={login}/>
      }
      {/* <Counter /> */}
      <NotificationComponent buttons={[
        <button onClick={() => alert("Wow")}>Wow</button>,
        <button onClick={() => alert("fuu")}>Fu</button>
      ]}>
        <h1>Ji!</h1>
        <p>whazzapp?</p>
      </NotificationComponent>
    </div>
  );
}

export default App;

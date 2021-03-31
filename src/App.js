import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { ArticleOverviewComponent } from './components/ArticleOverviewComponent';
import { NavBarComponent } from './components/NavBarComponent';
import { useEffect, useState } from 'react';
import './App.css';
import { FeedContainer } from './components/FeedContainer';
import { NotificationComponent } from './components/NotificationComponent';

function App({ fetchUser, onLogin, onLogout }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(() => fetchUser());
  }, [fetchUser]);

  const fetchArticles = () => [
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
  ];

  return (
    <div>
      <NavBarComponent 
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      {/* <ArticleOverviewComponent
        title={"Test title"}
        content={"String"}
        user={user}
        createdAt={"19.19.19"}
        imageUrl={"none"}
      /> */}
      <FeedContainer fetchArticles={fetchArticles}/>
      <Counter />
      <Login />
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

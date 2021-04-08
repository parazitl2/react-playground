import { Counter } from '../CounterComponent/Counter';
import { Login } from '../LoginComponent/Login';
import { ArticleOverviewComponent } from '../ArticleOverviewComponent/ArticleOverviewComponent';
import { NavBarComponent } from '../NavBarComponent/NavBarComponent';
import { useState, useEffect } from 'react';
import './App.css';
import { FeedContainer } from '../../containers/FeedContainer';
import { NotificationComponent } from '../NotificationComponent/NotificationComponent';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../ducks/user/selectors';
import { actions as userActions} from '../../ducks/user/actions';
import store from '../../redux/store';


function App(props) {
  const [isUrgent, setIsUrgent] = useState(false);
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   setUser(() => fetchUser());
  // }, [fetchUser]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => setIsUrgent(isUrgent => !isUrgent), 3000);

  //   return () => clearInterval(intervalId);
  // }, [setIsUrgent]);

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

  // const login = (username, password) => {
  //   setUser({
  //     ...user,
  //     username: username || 'Shy_pussy'
  //   });
  //   setIsLoggedIn(true);
  // };

  return (
    <div>
      <NavBarComponent user={user} isLoggedIn={store.getState().isAuthenticated} />
      {/* <ArticleOverviewComponent
        title={"Test title"}
        content={"String"}
        user={user}
        createdAt={"19.19.19"}
        imageUrl={"none"}
      /> */}
      <FeedContainer fetchArticles={fetchArticles}/>
      {/* <Counter /> */}
      <NotificationComponent 
        buttons={[
          <button key={1} onClick={() => alert("Wow")}>Wow</button>,
          <button key={2} onClick={() => alert("fuu")}>Fu</button>
        ]}
        render={(isUrgent) => (
          <p style={{ color: isUrgent ? 'red' : 'black'}}>
            Some notification
          </p>
        )}
        isUrgent={isUrgent}
      >
        {/* <h1>Ji!</h1>
        <p>whazzapp?</p> */}
      </NotificationComponent>
    </div>
  );
}

export default App;

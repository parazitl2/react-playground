import { Login } from '../../components/LoginComponent/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { AuthLayoutComponent } from '../../components/AuthLayoutComponent/AuthLayoutComponent';
import App from '../../components/AppComponent/App';
import {Provider} from 'react-redux';
import store, { history } from '../../ducks/root/store';
import { ArticleOverviewComponent } from '../ArticleOverviewComponent/ArticleOverviewComponent';
import { useDispatch } from 'react-redux';
import { actionFetch } from '../../ducks/article/actions';
// import store from '../../redux/store';


export const AppRouterComponent = ({ isAuthenticated = false }) => {
  // console.log('AppRouter is auth:', isAuthenticated)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actionFetch())
  // });

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/login' render={() => <Login />} />
          {/* <AuthLayoutComponent
            path='/login'
            component={Login}
            isAuthenticated={isAuthenticated}
          /> */}
          <Route path='/feed' render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} exact />
          <Route path='/feed/:id' component={ArticleOverviewComponent} />
          <Route path='/wow' component={() => (<p>Wow</p>)} />
          <Route path='/check' component={() => (<p>Laykaboss</p>)} />
          <Redirect exact from='/' to='/feed' />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
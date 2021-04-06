import { Login } from '../../components/LoginComponent/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayoutComponent } from '../../components/AuthLayoutComponent/AuthLayoutComponent';
import App from '../../components/AppComponent/App';
import store from '../../redux/store';


export const AppRouterComponent = ({ isAuthenticated = false }) => {
  console.log('AppRouter is auth:', isAuthenticated)
  return (
    <Router>
      <Switch>
        <Route path='/login' render={() => <Login />} />
        <AuthLayoutComponent
          path='/login'
          component={Login}
          isAuthenticated={isAuthenticated}
        />
        <Route path='/feed' render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} />
        <Route path='/wow' component={() => (<p>Wow</p>)} />
        <Route path='/check' component={() => (<p>Laykaboss</p>)} />
        <Redirect exact from='/' to='/feed' />
      </Switch>
    </Router>
  );
}
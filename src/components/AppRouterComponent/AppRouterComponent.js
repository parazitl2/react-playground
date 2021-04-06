import { Login } from '../../components/LoginComponent/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayoutComponent } from '../../components/AuthLayoutComponent/AuthLayoutComponent';
import App from '../../components/AppComponent/App';
import store from '../../redux/store';
import { actionLogin } from '../../redux/actions';


export const AppRouterComponent = ({ isAuthenticated }) => {
  console.log(isAuthenticated)
  return (
    <Router>
      <Switch>
        {/* <AuthLayoutComponent 
          isAuthenticated={isAuthenticated} 
          path='/' 
          render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} 
          exact 
        /> */}
        {
          isAuthenticated 
          ? <Route path='/' render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} exact />
          : <Route path='/login' render={() => <Login login={(username, passwd) => store.dispatch(actionLogin({ username }))}/>} />
        }
        <Route path='/wow' component={() => (<p>Wow</p>)} />
        <Route path='/check' component={() => (<p>Laykaboss</p>)} />
        <Route path='/login' render={() => <Login login={(username, passwd) => store.dispatch(actionLogin({ username }))}/>} />
      </Switch>
      {/* <App fetchUser={() => ({ username: 'Bill' })} /> */}
    </Router>
  );
}
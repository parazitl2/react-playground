import { Login } from '../../components/LoginComponent/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayoutComponent } from '../../components/AuthLayoutComponent/AuthLayoutComponent';
import App from '../../components/AppComponent/App';

export const AppRouterComponent = ({ isAuthenticated = false }) => {
  return (
    <Router>
      <Switch>
        <AuthLayoutComponent 
          isAuthenticated={isAuthenticated} 
          path='/' 
          render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} 
          exact 
        />
        {/* <Route path='/' render={() => (<App fetchUser={() => ({ username: 'Bill' })}/>)} exact /> */}
        <Route path='/wow' component={() => (<p>Wow</p>)} />
        <Route path='/check' component={() => (<p>Laykaboss</p>)} />
        <Route path='/login' component={Login} />
      </Switch>
      {/* <App fetchUser={() => ({ username: 'Bill' })} /> */}
    </Router>
  );
}
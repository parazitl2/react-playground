import { Route, Redirect } from 'react-router-dom';

export const AuthLayoutComponent = ({ isAuthenticated, ...restProps }) => {
  console.log({isAuthenticated});
  if (!isAuthenticated) {
    return <Redirect from='*' to='/login'/>;
  }

  return (
    <Route {...restProps} />
  );
};
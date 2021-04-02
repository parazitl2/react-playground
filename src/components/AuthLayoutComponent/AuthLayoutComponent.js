import { Route, Redirect } from 'react-router-dom';

export const AuthLayoutComponent = ({ isAuthenticated, ...restProps }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login'/>;
  }

  return (
    <Route {...restProps} />
  );
};
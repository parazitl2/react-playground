import { Route, Redirect } from 'react-router-dom';

export const AuthLayoutComponent = ({ 
  component: Component,
  isAuthenticated,
  ...restProps 
}) => {
  console.log('AuthLayout1', isAuthenticated);
  
  if (isAuthenticated) {
    return <Redirect to='/feed'/>;
  }
  console.log('AuthLayout2', isAuthenticated);

  return (
    <Route {...restProps} render={props => {
      return (
        <Component {...props} />
      );
    }} />
  );
};

// import { Redirect, Route } from "react-router-dom";
// import { Routes } from "../../constants";

// export const AuthLayoutComponent = ({
//   component: Component,
//   isAuthenticated,
//   path,
//   ...restProps
// }) => {
//   if (
//     isAuthenticated &&
//     (restProps.location.pathname === Routes.REGISTER ||
//       restProps.location.pathname === Routes.LOGIN)
//   ) {
//     // если пользователь авторизован, то переходит на роут '/feed'
//     return <Redirect to={Routes.ROOT} />;
//   }

//   return (
//     // в ...restProps приходит path, по которому отрендерется компонент
//     <Route
//       {...restProps}
//       render={(props) => {
//         return <Component {...props} />;
//       }}
//     />
//   );
// };
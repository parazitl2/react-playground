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

// export const AuthLayoutComponent = ({ 
//   component: Component,
//   isAuthenticated,
//   ...restProps 
// }) => {
//   return (
//     <Route 
//       {...restProps} 
//       render={
//         props => (
//           isAuthenticated
//             ? <Redirect to='/feed'/>
//             : <Component {...props} />
//           )
//       } 
//     />
//   );
// };

// export const AuthLayoutComponent = ({ 
//     component: Component,
//     isAuthenticated,
//     ...restProps 
//  }) => (
//   <Route {...restProps} render={(props) => (
//     isAuthenticated
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )
import { Redirect, Route } from "react-router-dom";
import { Routes } from "../../constants";

export const AuthLayoutComponent = ({
  component: Component,
  isAuthenticated,
  path,
  ...restProps
}) => {
  if (
    isAuthenticated &&
    (restProps.location.pathname === Routes.REGISTER ||
      restProps.location.pathname === Routes.LOGIN)
  ) {
    // если пользователь авторизован, то переходит на роут '/feed'
    return <Redirect to={Routes.ROOT} />;
  }

  return (
    // в ...restProps приходит path, по которому отрендерется компонент
    <Route
      {...restProps}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};
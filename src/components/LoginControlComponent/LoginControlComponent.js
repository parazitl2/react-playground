import React from 'react';

const LoginControl = () => {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  
  const handleLoginClick = React.useCallback(() => {
    setisLoggedIn(true);
  }, [setisLoggedIn]);

  const handleLogoutnClick = React.useCallback(() => {
    setisLoggedIn(false);
  }, [setisLoggedIn]);

  let button = isLoggedIn
    ? <LogoutButton onClick={handleLogoutClick} />
    : <LoginButton onClick={handleLoginButton} />;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
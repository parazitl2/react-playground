import { USER_LOGIN, USER_LOGOUT } from './action-types';

export const actionLogin = (user) => ({
  type: USER_LOGIN,
  user
});

export const actionLogout = () => ({
  type: USER_LOGOUT
});
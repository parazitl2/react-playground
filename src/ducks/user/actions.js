import { LOGIN, LOGOUT } from './action-types';

export const actionLogin = (user) => ({
  type: LOGIN,
  user
});

export const actionLogout = () => ({
  type: LOGOUT
});
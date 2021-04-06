import { USER_LOGIN, USER_LOGOUT } from './action-types';

export const login = () => ({
  type: USER_LOGIN
});

export const logout = () => ({
  type: USER_LOGOUT
});
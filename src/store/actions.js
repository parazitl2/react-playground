import { ACTION_LOGIN, ACTION_LOGOUT, ACTION_RENAME } from './types';

export const login = (user) => ({
  type: ACTION_LOGIN,
  user
});

export const logout = () => ({
  type: ACTION_LOGOUT
});

export const rename = (name) => ({
  type: ACTION_RENAME,
  name
});
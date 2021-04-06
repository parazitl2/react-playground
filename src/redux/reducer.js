import { USER_LOGIN, USER_LOGOUT } from './action-types';

const userReducer = (store = {}, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...store,
        user: action.user,
        isAuthenticated: true
      };

    case USER_LOGOUT: 
      return {
        ...store,
        user: null,
        isAuthenticated: false
      };

    default: 
      return store;
  }
};

export default userReducer;

// export const userReducer = (store = {}, action) {
//   const possible = {
//     [USER_LOGIN]: () => ({
//       ...store,
//       isLoggedIn: true
//     })
//   }
//   return 
// };
import { USER_LOGIN, USER_LOGOUT } from './action-types';


export const userReducer = (store = {}, action) {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...store,
        isLoggedIn: true
      };

    case USER_LOGOUT: 
      return {
        ...store,
        isLoggedIn: false
      };

    default: 
      return store;
  }
};

// export const userReducer = (store = {}, action) {
//   const possible = {
//     [USER_LOGIN]: () => ({
//       ...store,
//       isLoggedIn: true
//     })
//   }
//   return 
// };
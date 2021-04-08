import { LOGIN, LOGOUT } from './action-types';

const initialStore = {
  user: {}
}

const userReducer = (store = initialStore, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...store,
        user: action.user,
        isAuthenticated: true
      };

    case LOGOUT: 
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